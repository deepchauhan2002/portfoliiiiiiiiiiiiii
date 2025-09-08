'use client'

import { animated, useSpring, useInView } from '@react-spring/web'
import { useState, useRef } from 'react'

const ProjectsSection = () => {
  const ref = useRef<HTMLDivElement>(null)
  const [activeProject, setActiveProject] = useState(0)
  
  const [inView, api] = useInView(
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
      image: "/api/placeholder/600/400",
      github: "https://github.com",
      demo: "https://demo.com",
      category: ".NET"
    },
    {
      id: 2,
      title: "AI Content Generator",
      description: "Intelligent content generation platform using agentic AI to create personalized marketing copy, blog posts, and social media content.",
      technologies: ["Next.js", "OpenAI API", "TypeScript", "Tailwind CSS"],
      features: ["AI-Powered Writing", "Template Management", "Export Options", "Collaboration Tools"],
      image: "/api/placeholder/600/400",
      github: "https://github.com",
      demo: "https://demo.com",
      category: "AI"
    },
    {
      id: 3,
      title: "Real-Time Dashboard",
      description: "Dynamic analytics dashboard with real-time data visualization, built for monitoring business metrics and KPIs.",
      technologies: ["React", "D3.js", "WebSockets", "Node.js"],
      features: ["Real-time Updates", "Interactive Charts", "Custom Filters", "Export Reports"],
      image: "/api/placeholder/600/400",
      github: "https://github.com",
      demo: "https://demo.com",
      category: "React"
    },
    {
      id: 4,
      title: "Task Automation Agent",
      description: "Intelligent automation agent that learns user patterns and automates repetitive tasks across multiple platforms.",
      technologies: ["Python", "Machine Learning", "REST APIs", "Docker"],
      features: ["Pattern Recognition", "Multi-platform Integration", "Smart Scheduling", "Learning Algorithms"],
      image: "/api/placeholder/600/400",
      github: "https://github.com",
      demo: "https://demo.com",
      category: "AI"
    }
  ]

  const categories = ["All", ".NET", "React", "AI"]

  const [filter, setFilter] = useState("All")
  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(project => project.category === filter)

  return (
    <section className="py-20 bg-white" id="projects">
      <div className="container mx-auto px-4">
        <animated.div ref={ref} style={inView} className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              A showcase of custom products and innovative solutions I've built over the past 2 years.
            </p>
            
            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setFilter(category)}
                  className={`px-6 py-2 rounded-full transition-all duration-300 ${
                    filter === category
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <animated.div
                key={project.id}
                style={{
                  ...useSpring({
                    opacity: inView.opacity,
                    transform: inView.transform,
                    delay: index * 200,
                  })
                }}
                className="group bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                {/* Project Image Placeholder */}
                <div className="relative h-64 bg-gradient-to-br from-blue-500 to-purple-600 overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white text-6xl opacity-20">
                      {project.category === ".NET" && "⚡"}
                      {project.category === "React" && "⚛️"}
                      {project.category === "AI" && "🤖"}
                    </div>
                  </div>
                  
                  {/* Overlay with links */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex gap-4">
                      <a 
                        href={project.github}
                        className="px-4 py-2 bg-white/90 rounded-lg text-gray-900 font-medium hover:bg-white transition-colors"
                      >
                        GitHub
                      </a>
                      <a 
                        href={project.demo}
                        className="px-4 py-2 bg-blue-600/90 rounded-lg text-white font-medium hover:bg-blue-600 transition-colors"
                      >
                        Live Demo
                      </a>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                      {project.category}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>
                  
                  {/* Technologies */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span 
                          key={tech}
                          className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Features */}
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Features:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {project.features.slice(0, 3).map((feature) => (
                        <li key={feature} className="flex items-center">
                          <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </animated.div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <p className="text-lg text-gray-600 mb-6">
              Interested in collaborating on a custom product?
            </p>
            <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
              Let's Build Something Amazing
            </button>
          </div>
        </animated.div>
      </div>
    </section>
  )
}

export default ProjectsSection