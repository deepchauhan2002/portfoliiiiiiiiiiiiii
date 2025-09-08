'use client'

import dynamic from 'next/dynamic'

// Dynamically import P5Background with no SSR
const P5Background = dynamic(() => import('./P5Background'), {
  ssr: false,
  loading: () => <div className="absolute inset-0 opacity-70 bg-gradient-to-br from-blue-500/20 to-purple-500/20" />
})

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      {/* P5.js Background */}
      <P5Background />
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-fade-in-up">
          Creative Developer
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-2xl mx-auto animate-fade-in-up-delay">
          Software Engineer with 2 years of experience crafting custom products with 
          <span className="text-blue-400 font-semibold"> .NET</span>, 
          <span className="text-green-400 font-semibold"> React</span>, and exploring 
          <span className="text-purple-400 font-semibold"> Agentic AI</span>
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up-delay-2">
          <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors duration-300 transform hover:scale-105">
            View My Work
          </button>
          <button className="px-8 py-3 border border-white/30 hover:bg-white/10 rounded-lg font-semibold transition-all duration-300">
            Get In Touch
          </button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection