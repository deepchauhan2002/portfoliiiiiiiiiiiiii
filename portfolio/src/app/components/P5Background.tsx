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
}

const P5Background = () => {
  const canvasRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!canvasRef.current || typeof window === 'undefined') return

    const sketch = (p: p5) => {
      const particles: Particle[] = []

      p.setup = () => {
        const canvas = p.createCanvas(p.windowWidth, p.windowHeight)
        canvas.parent(canvasRef.current!)
        
        // Initialize particles
        for (let i = 0; i < 80; i++) {
          particles.push({
            x: p.random(p.width),
            y: p.random(p.height),
            vx: p.random(-1, 1),
            vy: p.random(-1, 1),
            size: p.random(2, 4),
            color: p.random(['#60A5FA', '#34D399', '#F472B6', '#FBBF24'])
          })
        }
      }

      p.draw = () => {
        p.clear()
        
        // Update and draw particles
        particles.forEach((particle, i) => {
          // Update position
          particle.x += particle.vx
          particle.y += particle.vy
          
          // Bounce off edges
          if (particle.x < 0 || particle.x > p.width) particle.vx *= -1
          if (particle.y < 0 || particle.y > p.height) particle.vy *= -1
          
          // Mouse interaction
          const mouseDistance = p.dist(p.mouseX, p.mouseY, particle.x, particle.y)
          if (mouseDistance < 100) {
            const force = 0.02
            particle.vx += (particle.x - p.mouseX) * force / mouseDistance
            particle.vy += (particle.y - p.mouseY) * force / mouseDistance
          }
          
          // Draw particle
          p.fill(particle.color)
          p.noStroke()
          p.ellipse(particle.x, particle.y, particle.size)
          
          // Connect nearby particles
          particles.slice(i + 1).forEach(otherParticle => {
            const distance = p.dist(particle.x, particle.y, otherParticle.x, otherParticle.y)
            if (distance < 120) {
              p.stroke(255, 50)
              p.strokeWeight(1)
              p.line(particle.x, particle.y, otherParticle.x, otherParticle.y)
            }
          })
        })
      }

      p.windowResized = () => {
        p.resizeCanvas(p.windowWidth, p.windowHeight)
      }
    }

    const p5Instance = new p5(sketch)

    return () => {
      p5Instance.remove()
    }
  }, [])

  return <div ref={canvasRef} className="absolute inset-0 opacity-70" />
}

export default P5Background