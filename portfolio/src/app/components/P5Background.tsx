'use client'

import { useEffect, useRef } from 'react'
import p5 from 'p5'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  color: string
  life: number
  maxLife: number
  type: 'normal' | 'glow' | 'spiral'
  angle?: number
  radius?: number
  centerX?: number
  centerY?: number
}

interface Wave {
  amplitude: number
  frequency: number
  phase: number
  speed: number
  color: string
}

const P5Background = () => {
  const canvasRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!canvasRef.current || typeof window === 'undefined') return

    const sketch = (p: p5) => {
      const particles: Particle[] = []
      const waves: Wave[] = []
      let mouseTrail: { x: number; y: number; life: number }[] = []
      let time = 0

      p.setup = () => {
        const canvas = p.createCanvas(p.windowWidth, p.windowHeight)
        canvas.parent(canvasRef.current!)
        
        // Initialize particles with different types
        for (let i = 0; i < 120; i++) {
          const type = p.random(['normal', 'glow', 'spiral'])
          const particle: Particle = {
            x: p.random(p.width),
            y: p.random(p.height),
            vx: p.random(-1.5, 1.5),
            vy: p.random(-1.5, 1.5),
            size: p.random(2, 6),
            color: p.random(['#60A5FA', '#34D399', '#F472B6', '#FBBF24', '#8B5CF6', '#EF4444']),
            life: p.random(100, 300),
            maxLife: p.random(100, 300),
            type
          }

          if (type === 'spiral') {
            particle.angle = p.random(p.TWO_PI)
            particle.radius = p.random(50, 150)
            particle.centerX = p.random(p.width)
            particle.centerY = p.random(p.height)
          }

          particles.push(particle)
        }

        // Initialize waves
        for (let i = 0; i < 4; i++) {
          waves.push({
            amplitude: p.random(20, 60),
            frequency: p.random(0.01, 0.03),
            phase: p.random(p.TWO_PI),
            speed: p.random(0.02, 0.05),
            color: p.random(['#60A5FA', '#34D399', '#F472B6', '#FBBF24', '#8B5CF6'])
          })
        }
      }

      p.draw = () => {
        p.clear()
        time += 0.01

        // Draw dynamic background waves
        drawWaves()
        
        // Update and draw particles
        particles.forEach((particle, i) => {
          updateParticle(particle)
          drawParticle(particle)
          
          // Connect nearby particles with animated lines
          particles.slice(i + 1).forEach(otherParticle => {
            const distance = p.dist(particle.x, particle.y, otherParticle.x, otherParticle.y)
            if (distance < 100) {
              const alpha = p.map(distance, 0, 100, 80, 0)
              p.stroke(255, alpha)
              p.strokeWeight(1)
              p.line(particle.x, particle.y, otherParticle.x, otherParticle.y)
            }
          })
        })

        // Draw mouse trail
        drawMouseTrail()
        
        // Create floating geometric shapes
        drawFloatingShapes()
      }

      const updateParticle = (particle: Particle) => {
        if (particle.type === 'spiral' && particle.centerX !== undefined && particle.centerY !== undefined) {
          particle.angle! += 0.02
          particle.x = particle.centerX + Math.cos(particle.angle!) * particle.radius!
          particle.y = particle.centerY + Math.sin(particle.angle!) * particle.radius!
          
          // Slowly move the center
          particle.centerX += p.random(-0.5, 0.5)
          particle.centerY += p.random(-0.5, 0.5)
        } else {
          // Regular movement
          particle.x += particle.vx
          particle.y += particle.vy
          
          // Add some random floating movement
          particle.vx += p.random(-0.02, 0.02)
          particle.vy += p.random(-0.02, 0.02)
          
          // Limit velocity
          particle.vx = p.constrain(particle.vx, -2, 2)
          particle.vy = p.constrain(particle.vy, -2, 2)
        }
        
        // Bounce off edges with some energy loss
        if (particle.x < 0 || particle.x > p.width) {
          particle.vx *= -0.8
          particle.x = p.constrain(particle.x, 0, p.width)
        }
        if (particle.y < 0 || particle.y > p.height) {
          particle.vy *= -0.8
          particle.y = p.constrain(particle.y, 0, p.height)
        }
        
        // Enhanced mouse interaction
        const mouseDistance = p.dist(p.mouseX, p.mouseY, particle.x, particle.y)
        if (mouseDistance < 120) {
          const force = p.map(mouseDistance, 0, 120, 0.05, 0.01)
          const angle = p.atan2(particle.y - p.mouseY, particle.x - p.mouseX)
          particle.vx += p.cos(angle) * force
          particle.vy += p.sin(angle) * force
        }
        
        // Life cycle
        particle.life -= 0.5
        if (particle.life <= 0) {
          particle.life = particle.maxLife
          particle.x = p.random(p.width)
          particle.y = p.random(p.height)
        }
      }

      const drawParticle = (particle: Particle) => {
        const alpha = p.map(particle.life, 0, particle.maxLife, 50, 255)
        const size = particle.size * p.map(particle.life, 0, particle.maxLife, 0.5, 1)
        
        p.push()
        p.translate(particle.x, particle.y)
        
        if (particle.type === 'glow') {
          // Glow effect
          for (let r = size * 3; r > 0; r--) {
            const glowAlpha = p.map(r, 0, size * 3, alpha, 0)
            p.fill(p.red(particle.color), p.green(particle.color), p.blue(particle.color), glowAlpha * 0.3)
            p.noStroke()
            p.ellipse(0, 0, r)
          }
        }
        
        // Main particle
        p.fill(p.red(particle.color), p.green(particle.color), p.blue(particle.color), alpha)
        p.noStroke()
        
        if (particle.type === 'spiral') {
          p.rotate(particle.angle! * 2)
          p.rect(-size/2, -size/2, size, size)
        } else {
          p.ellipse(0, 0, size)
        }
        
        p.pop()
      }

      const drawWaves = () => {
        waves.forEach((wave, index) => {
          p.noFill()
          p.stroke(p.red(wave.color), p.green(wave.color), p.blue(wave.color), 30)
          p.strokeWeight(2)
          
          p.beginShape()
          for (let x = 0; x <= p.width; x += 5) {
            const y = p.height / 2 + Math.sin(x * wave.frequency + wave.phase + time * wave.speed) * wave.amplitude
            p.vertex(x, y + index * 20)
          }
          p.endShape()
          
          wave.phase += wave.speed
        })
      }

      const drawMouseTrail = () => {
        // Add mouse position to trail
        if (p.mouseX !== p.pmouseX || p.mouseY !== p.pmouseY) {
          mouseTrail.push({ x: p.mouseX, y: p.mouseY, life: 50 })
        }
        
        // Draw and update trail
        mouseTrail = mouseTrail.filter(point => {
          const alpha = p.map(point.life, 0, 50, 0, 100)
          p.fill(255, 255, 255, alpha)
          p.noStroke()
          p.ellipse(point.x, point.y, p.map(point.life, 0, 50, 2, 8))
          
          point.life--
          return point.life > 0
        })
      }

      const drawFloatingShapes = () => {
        // Draw floating geometric shapes
        for (let i = 0; i < 5; i++) {
          const x = p.width * 0.2 + (i * p.width * 0.15) + Math.sin(time + i) * 30
          const y = p.height * 0.3 + Math.cos(time * 0.7 + i) * 50
          const size = 20 + Math.sin(time * 2 + i) * 10
          const rotation = time + i * 0.5
          
          p.push()
          p.translate(x, y)
          p.rotate(rotation)
          p.noFill()
          p.stroke(255, 50)
          p.strokeWeight(1)
          
          if (i % 3 === 0) {
            p.rect(-size/2, -size/2, size, size)
          } else if (i % 3 === 1) {
            p.ellipse(0, 0, size)
          } else {
            p.triangle(-size/2, size/2, size/2, size/2, 0, -size/2)
          }
          
          p.pop()
        }
      }

      p.windowResized = () => {
        p.resizeCanvas(p.windowWidth, p.windowHeight)
      }

      p.mousePressed = () => {
        // Create explosion effect on click
        for (let i = 0; i < 10; i++) {
          const angle = p.random(p.TWO_PI)
          const speed = p.random(2, 8)
          particles.push({
            x: p.mouseX,
            y: p.mouseY,
            vx: p.cos(angle) * speed,
            vy: p.sin(angle) * speed,
            size: p.random(3, 8),
            color: p.random(['#60A5FA', '#34D399', '#F472B6', '#FBBF24', '#8B5CF6']),
            life: 100,
            maxLife: 100,
            type: 'glow'
          })
        }
      }
    }

    const p5Instance = new p5(sketch)

    return () => {
      p5Instance.remove()
    }
  }, [])

  return <div ref={canvasRef} className="absolute inset-0 opacity-80" />
}

export default P5Background