'use client'

import { animated, useSpring, useInView } from '@react-spring/web'
import { useState, useRef } from 'react'

const ContactSection = () => {
  const ref = useRef<HTMLDivElement>(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  
  const [inView] = useInView(
    () => ({
      from: { opacity: 0, transform: 'translateY(100px)' },
      to: { opacity: 1, transform: 'translateY(0px)' },
    }),
    {
      rootMargin: '-40% 0%',
    }
  )

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setFormData({ name: '', email: '', subject: '', message: '' })
    alert('Message sent successfully!')
  }

  const contactInfo = [
    {
      title: 'Email',
      value: 'hello@developer.com',
      link: 'mailto:hello@developer.com',
      icon: '📧',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'LinkedIn',
      value: '/in/developer',
      link: 'https://linkedin.com/in/developer',
      icon: '💼',
      gradient: 'from-blue-600 to-indigo-600'
    },
    {
      title: 'GitHub',
      value: '@developer',
      link: 'https://github.com/developer',
      icon: '🐙',
      gradient: 'from-gray-700 to-gray-900'
    },
    {
      title: 'Phone',
      value: '+1 (555) 123-4567',
      link: 'tel:+15551234567',
      icon: '📱',
      gradient: 'from-green-500 to-emerald-500'
    }
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
    <section className="section-padding-lg bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-20 w-40 h-40 bg-blue-500 rounded-full opacity-10 animate-float"></div>
        <div className="absolute bottom-32 right-16 w-32 h-32 bg-purple-500 rounded-full opacity-10 animate-float" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-2/3 right-1/3 w-24 h-24 bg-pink-500 rounded-full opacity-10 animate-float" style={{ animationDelay: '3s' }}></div>
        
        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent transform -skew-y-12 animate-pulse"></div>
        </div>
      </div>

      <div className="container-custom relative z-10" ref={ref}>
        <animated.div style={titleSpring} className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Let&apos;s Work <span className="gradient-text-blue">Together</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
            Ready to bring your ideas to life? Whether you need a custom product, 
            AI solution, or creative content, I&apos;m here to help make it happen.
          </p>
          <div className="flex justify-center">
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
          </div>
        </animated.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Information */}
          <animated.div style={leftContentSpring} className="space-y-8">
            <div className="glass-effect rounded-3xl p-8 card-hover">
              <h3 className="text-3xl font-bold mb-8 text-white flex items-center">
                <span className="w-2 h-8 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full mr-4"></span>
                Get In Touch
              </h3>
              
              <div className="space-y-6 mb-8">
                {contactInfo.map((info) => (
                  <div key={info.title} className="flex items-center space-x-4 group">
                    <div className={`w-14 h-14 bg-gradient-to-r ${info.gradient} rounded-2xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      {info.icon}
                    </div>
                    <div>
                      <div className="text-sm text-gray-400 font-medium uppercase tracking-wider">{info.title}</div>
                      <a 
                        href={info.link}
                        className="text-white hover:text-blue-400 transition-colors duration-300 font-semibold"
                      >
                        {info.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-4 mb-8">
                <h4 className="text-xl font-semibold text-white flex items-center">
                  <span className="w-2 h-6 bg-gradient-to-b from-green-500 to-blue-500 rounded-full mr-3"></span>
                  What I Can Help With:
                </h4>
                <div className="space-y-3">
                  {[
                    { icon: '🚀', text: 'Custom Web Application Development', color: 'blue-400' },
                    { icon: '🤖', text: 'AI Agent Development & Integration', color: 'green-400' },
                    { icon: '⚡', text: 'Full-Stack Product Development', color: 'purple-400' },
                    { icon: '📸', text: 'Creative Content & Photography', color: 'pink-400' },
                    { icon: '🧠', text: 'Technical Consulting & Architecture', color: 'yellow-400' }
                  ].map((service) => (
                    <div key={service.text} className="flex items-center space-x-3 group cursor-pointer">
                      <div className="text-2xl group-hover:scale-125 transition-transform duration-300">
                        {service.icon}
                      </div>
                      <span className={`text-${service.color} group-hover:text-white transition-colors duration-300 font-medium`}>
                        {service.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="glass-effect rounded-2xl p-6 border border-white/10">
                <h4 className="text-lg font-semibold mb-3 text-white flex items-center">
                  <span className="text-xl mr-2">⏱️</span>
                  Response Time
                </h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  I typically respond to all inquiries within 24 hours. For urgent projects, 
                  feel free to reach out via phone or LinkedIn for faster communication.
                </p>
              </div>
            </div>
          </animated.div>

          {/* Contact Form */}
          <animated.div style={rightContentSpring}>
            <div className="glass-effect rounded-3xl p-8 card-hover">
              <h3 className="text-3xl font-bold mb-8 text-white flex items-center">
                <span className="w-2 h-8 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full mr-4"></span>
                Send a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="relative">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      <span className="flex items-center">
                        <span className="mr-2">👤</span>
                        Name *
                      </span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 glass-effect border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="Your full name"
                    />
                  </div>
                  <div className="relative">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      <span className="flex items-center">
                        <span className="mr-2">📧</span>
                        Email *
                      </span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 glass-effect border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                <div className="relative">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    <span className="flex items-center">
                      <span className="mr-2">💡</span>
                      Subject *
                    </span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 glass-effect border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="What can I help you with?"
                  />
                </div>
                
                <div className="relative">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    <span className="flex items-center">
                      <span className="mr-2">💬</span>
                      Message *
                    </span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 glass-effect border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Tell me about your project or idea..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold py-4 px-6 rounded-2xl transition-all duration-300 transform hover:scale-105 disabled:hover:scale-100 btn-modern animate-pulse-glow"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                      Sending Message...
                    </div>
                  ) : (
                    <div className="flex items-center justify-center">
                      <span>Send Message</span>
                      <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    </div>
                  )}
                </button>
              </form>
            </div>
          </animated.div>
        </div>

        {/* Footer */}
        <div className="mt-20 text-center">
          <div className="glass-effect rounded-2xl p-6 inline-block">
            <p className="text-gray-300 text-sm">
              © 2024 Creative Developer Portfolio. Built with Next.js, p5.js & React Spring.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection