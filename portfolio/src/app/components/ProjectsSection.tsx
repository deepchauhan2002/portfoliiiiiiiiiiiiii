'use client'

import { animated, useInView, useSpring } from '@react-spring/web'
import { useState, useRef } from 'react'

const ProjectsSection = () => {
  const ref = useRef<HTMLDivElement>(null)
  const [filter, setFilter] = useState('All')
  
  const [inView] = useInView(
    () => ({
      from: { opacity: 0, transform: 'translateY(100px)' },
      to: { opacity: 1, transform: 'translateY(0px)' },
    }),
    {
      rootMargin: '-40% 0%',
    }
  )

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution built with .NET Core Web API and React. Features include user authentication, product catalog, shopping cart, and payment integration.",
      technologies: [".NET Core", "React", "SQL Server", "Stripe API"],
      features: ["User Authentication", "Product Management", "Payment Processing", "Order Tracking"],
      category: "Web App",
      gradient: "from-blue-500 to-purple-600",
      icon: "🛒"
    },
    {
      id: 2,
      title: "AI Content Generator",
      description: "Agentic AI system that creates personalized content using advanced natural language processing and machine learning algorithms.",
      technologies: ["Python", "OpenAI API", "React", "FastAPI"],
      features: ["Natural Language Processing", "Content Personalization", "Multi-format Output", "Real-time Generation"],
      category: "AI/ML",
      gradient: "from-green-500 to-teal-600",
      icon: "🤖"
    },
    {
      id: 3,
      title: "Photography Portfolio",
      description: "Interactive portfolio website showcasing photography work with dynamic galleries, image optimization, and responsive design.",
      technologies: ["Next.js", "TypeScript", "Framer Motion", "Cloudinary"],
      features: ["Dynamic Galleries", "Image Optimization", "Touch Gestures", "SEO Optimized"],
      category: "Creative",
      gradient: "from-pink-500 to-rose-600",
      icon: "📸"
    },
    {
      id: 4,
      title: "Task Management System",
      description: "Collaborative project management tool with real-time updates, file sharing, and advanced analytics dashboard.",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
      features: ["Real-time Collaboration", "File Sharing", "Analytics Dashboard", "Team Management"],
      category: "Web App",
      gradient: "from-indigo-500 to-blue-600",
      icon: "📋"
    },
    {
      id: 5,
      title: "Video Processing API",
      description: "Scalable video processing service with automated encoding, thumbnail generation, and cloud storage integration.",
      technologies: ["FFmpeg", ".NET Core", "Azure", "Redis"],
      features: ["Automated Encoding", "Thumbnail Generation", "Cloud Storage", "Queue Processing"],
      category: "API/Backend",
      gradient: "from-purple-500 to-violet-600",
      icon: "🎥"
    },
    {
      id: 6,
      title: "Smart Home Dashboard",
      description: "IoT dashboard for monitoring and controlling smart home devices with predictive analytics and automation rules.",
      technologies: ["React", "IoT", "Python", "InfluxDB"],
      features: ["Device Control", "Predictive Analytics", "Automation Rules", "Energy Monitoring"],
      category: "IoT",
      gradient: "from-orange-500 to-red-600",
      icon: "🏠"
    }
  ]

  const categories = ['All', 'Web App', 'AI/ML', 'Creative', 'API/Backend', 'IoT']
  
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter)

  const titleSpring = useSpring({
    from: { opacity: 0, transform: 'scale(0.8)' },
    to: inView ? { opacity: 1, transform: 'scale(1)' } : { opacity: 0, transform: 'scale(0.8)' },
    config: { tension: 280, friction: 60 },
    delay: 200
  })

  return (
    <section className="section-padding-lg bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 right-20 w-40 h-40 bg-blue-500 rounded-full opacity-10 animate-float"></div>
        <div className="absolute bottom-32 left-20 w-32 h-32 bg-purple-500 rounded-full opacity-10 animate-float" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-1/3 left-1/3 w-24 h-24 bg-pink-500 rounded-full opacity-10 animate-float" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="container-custom relative z-10" ref={ref}>
        <animated.div style={titleSpring} className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Featured <span className="gradient-text-blue">Projects</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
            A showcase of custom products and innovative solutions I&apos;ve built over the past 2 years.
          </p>
          <div className="flex justify-center">
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
          </div>
        </animated.div>
        
        {/* Filter Buttons */}
        <div 
          className="flex flex-wrap justify-center gap-4 mb-16 animate-fade-in-up"
          style={{ animationDelay: '0.4s' }}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-3 rounded-full transition-all duration-300 font-semibold btn-modern ${
                filter === category
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg animate-pulse-glow'
                  : 'glass-effect text-gray-300 hover:text-white hover:bg-white/10'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group glass-effect rounded-3xl overflow-hidden card-hover cursor-pointer animate-scale-in"
              style={{ animationDelay: `${0.6 + index * 0.15}s` }}
            >
              {/* Project Header */}
              <div className={`relative h-64 bg-gradient-to-br ${project.gradient} overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                
                {/* Project Icon */}
                <div className="absolute top-6 left-6">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center text-2xl">
                    {project.icon}
                  </div>
                </div>
                
                {/* Category Badge */}
                <div className="absolute top-6 right-6">
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-sm rounded-full font-medium">
                    {project.category}
                  </span>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/10 rounded-tl-full transform translate-x-16 translate-y-16 group-hover:scale-110 transition-transform duration-500"></div>
                <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-white/40 rounded-full animate-ping"></div>
              </div>
              
              {/* Project Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wider">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech} 
                        className="px-3 py-1 bg-white/10 text-gray-300 text-sm rounded-full border border-white/20 hover:bg-white/20 transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Key Features */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wider">Key Features</h4>
                  <ul className="text-sm text-gray-300 space-y-2">
                    {project.features.slice(0, 3).map((feature) => (
                      <li key={feature} className="flex items-center group/feature">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3 group-hover/feature:bg-purple-500 transition-colors duration-300"></span>
                        <span className="group-hover/feature:text-white transition-colors duration-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Project Link */}
                <div className="mt-6 pt-4 border-t border-white/10">
                  <button className="flex items-center text-blue-400 hover:text-blue-300 font-semibold transition-colors duration-300 group/link">
                    <span>View Project</span>
                    <svg className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div 
          className="text-center mt-20 animate-fade-in-up"
          style={{ animationDelay: '1.2s' }}
        >
          <p className="text-xl text-gray-300 mb-8">
            Interested in collaborating on a custom product?
          </p>
          <button className="px-12 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 btn-modern animate-pulse-glow">
            Let&apos;s Build Something Amazing
            <svg className="w-5 h-5 ml-3 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5-5 5M6 12h12" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection