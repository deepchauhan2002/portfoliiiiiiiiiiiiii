'use client'

import { animated, useSpring, useInView } from '@react-spring/web'
import { useState, useRef } from 'react'

const AboutSection = () => {
  const ref = useRef<HTMLDivElement>(null)
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)
  
  const [inView] = useInView(
    () => ({
      from: { opacity: 0, transform: 'translateY(100px)' },
      to: { opacity: 1, transform: 'translateY(0px)' },
    }),
    {
      rootMargin: '-20% 0%',
    }
  )

  const skills = [
    { name: '.NET Core/Framework', level: 85, color: 'bg-purple-500', description: 'Backend APIs, Microservices' },
    { name: 'React & Next.js', level: 90, color: 'bg-blue-500', description: 'Modern Frontend Development' },
    { name: 'JavaScript/TypeScript', level: 88, color: 'bg-yellow-500', description: 'Full-stack Development' },
    { name: 'C#', level: 82, color: 'bg-green-500', description: 'Enterprise Applications' },
    { name: 'SQL Server', level: 75, color: 'bg-red-500', description: 'Database Design & Optimization' },
    { name: 'Agentic AI Development', level: 70, color: 'bg-pink-500', description: 'AI Agents & Automation' },
  ]

  const titleSpring = useSpring({
    from: { opacity: 0, transform: 'scale(0.8)' },
    to: inView ? { opacity: 1, transform: 'scale(1)' } : { opacity: 0, transform: 'scale(0.8)' },
    config: { tension: 280, friction: 60 },
    delay: 200
  })

  const leftContentSpring = useSpring({
    from: { opacity: 0, transform: 'translateX(-50px)' },
    to: inView ? { opacity: 1, transform: 'translateX(0px)' } : { opacity: 0, transform: 'translateX(-50px)' },
    config: { tension: 280, friction: 60 },
    delay: 400
  })

  const rightContentSpring = useSpring({
    from: { opacity: 0, transform: 'translateX(50px)' },
    to: inView ? { opacity: 1, transform: 'translateX(0px)' } : { opacity: 0, transform: 'translateX(50px)' },
    config: { tension: 280, friction: 60 },
    delay: 600
  })

  return (
    <section className="section-padding-lg bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200 rounded-full opacity-20 animate-float"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-purple-200 rounded-full opacity-20 animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-pink-200 rounded-full opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
      
      <div className="container-custom" ref={ref}>
        <div className="max-w-7xl mx-auto">
          <animated.div style={titleSpring} className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 gradient-text-blue">
              About Me
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Passionate software engineer with a creative mindset, building innovative solutions 
              and exploring the cutting edge of AI technology.
            </p>
            <div className="mt-8 flex justify-center">
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
            </div>
          </animated.div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Content */}
            <animated.div style={leftContentSpring} className="space-y-8">
              <div className="glass-effect-light rounded-3xl p-8 card-hover">
                <h3 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="w-2 h-8 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full mr-4"></span>
                  My Journey
                </h3>
                <div className="space-y-6 text-gray-700 leading-relaxed">
                  <p className="text-lg">
                    With 2 years of professional experience, I&apos;ve specialized in building 
                    custom products that solve real-world problems. My expertise spans across 
                    full-stack development with a strong foundation in .NET and React ecosystems.
                  </p>
                  <p className="text-lg">
                    Currently diving deep into the fascinating world of agentic AI development, 
                    exploring how autonomous agents can enhance user experiences and automate 
                    complex workflows.
                  </p>
                  <p className="text-lg">
                    When I&apos;m not coding, you&apos;ll find me capturing moments through photography 
                    and videography, always looking for that perfect shot that tells a story.
                  </p>
                </div>
              </div>
              
              <div className="glass-effect-light rounded-3xl p-8 card-hover">
                <h4 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                  <span className="w-2 h-6 bg-gradient-to-b from-green-500 to-blue-500 rounded-full mr-4"></span>
                  What I Do
                </h4>
                <ul className="space-y-4 text-gray-700">
                  {[
                    { icon: '🚀', text: 'Full-stack web application development', color: 'blue' },
                    { icon: '🎨', text: 'Custom product design and implementation', color: 'green' },
                    { icon: '🤖', text: 'AI agent development and integration', color: 'purple' },
                    { icon: '📸', text: 'Photography and video content creation', color: 'pink' }
                  ].map((item, index) => (
                    <li key={index} className="flex items-center group cursor-pointer">
                      <span className="text-2xl mr-4 group-hover:scale-110 transition-transform duration-300">
                        {item.icon}
                      </span>
                      <span className="text-lg group-hover:text-gray-900 transition-colors duration-300">
                        {item.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </animated.div>

            {/* Right Content */}
            <animated.div style={rightContentSpring} className="space-y-8">
              <div className="glass-effect-light rounded-3xl p-8 card-hover">
                <h3 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
                  <span className="w-2 h-8 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full mr-4"></span>
                  Technical Skills
                </h3>
                <div className="space-y-6">
                  {skills.map((skill) => (
                    <div 
                      key={skill.name} 
                      className="relative group"
                      onMouseEnter={() => setHoveredSkill(skill.name)}
                      onMouseLeave={() => setHoveredSkill(null)}
                    >
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-base font-semibold text-gray-800">{skill.name}</span>
                        <span className="text-sm text-gray-600 font-medium">{skill.level}%</span>
                      </div>
                      
                      {/* Skill bar */}
                      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                        <animated.div
                          className={`h-3 rounded-full ${skill.color} transition-all duration-1000 ease-out`}
                          style={{
                            width: inView ? `${skill.level}%` : '0%',
                            boxShadow: hoveredSkill === skill.name ? '0 0 15px rgba(59, 130, 246, 0.5)' : 'none'
                          }}
                        />
                      </div>
                      
                      {/* Hover description */}
                      {hoveredSkill === skill.name && (
                        <div className="absolute top-full left-0 mt-2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm z-10 animate-fade-in-up">
                          {skill.description}
                          <div className="absolute -top-1 left-4 w-2 h-2 bg-gray-900 rotate-45"></div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="glass-effect-light rounded-3xl p-8 card-hover">
                <h4 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                  <span className="w-2 h-6 bg-gradient-to-b from-pink-500 to-red-500 rounded-full mr-4"></span>
                  Experience Highlights
                </h4>
                <div className="space-y-4">
                  {[
                    { 
                      title: 'Custom Product Development', 
                      subtitle: '2+ years of building tailored solutions',
                      color: 'blue',
                      icon: '💼'
                    },
                    { 
                      title: 'Full-Stack Expertise', 
                      subtitle: 'Frontend to backend development',
                      color: 'green',
                      icon: '⚡'
                    },
                    { 
                      title: 'AI Innovation', 
                      subtitle: 'Exploring agentic AI applications',
                      color: 'purple',
                      icon: '🧠'
                    }
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="flex items-start group cursor-pointer hover:bg-white/50 p-4 rounded-xl transition-all duration-300 animate-slide-in-right"
                    >
                      <div className="text-2xl mr-4 group-hover:scale-110 transition-transform duration-300">
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-base font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                          {item.title}
                        </p>
                        <p className="text-sm text-gray-600">{item.subtitle}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </animated.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection