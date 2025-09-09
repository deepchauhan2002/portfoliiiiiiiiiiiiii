'use client'

import { animated, useSpring, useInView } from '@react-spring/web'
import { useState, useRef } from 'react'

const GallerySection = () => {
  const ref = useRef<HTMLDivElement>(null)
  const [activeTab, setActiveTab] = useState('photos')
  const [selectedMedia, setSelectedMedia] = useState<string | null>(null)
  
  const [inView] = useInView(
    () => ({
      from: { opacity: 0, transform: 'translateY(100px)' },
      to: { opacity: 1, transform: 'translateY(0px)' },
    }),
    {
      rootMargin: '-40% 0%',
    }
  )

  // Sample photo data - in real implementation, these would be actual photos
  const photos = [
    {
      id: 1,
      src: '/api/placeholder/400/300',
      title: 'Urban Architecture',
      description: 'Modern building lines creating geometric patterns',
      category: 'Architecture',
      gradient: 'from-slate-500 to-gray-600'
    },
    {
      id: 2,
      src: '/api/placeholder/400/300',
      title: 'Nature Landscape',
      description: 'Capturing the beauty of natural landscapes',
      category: 'Nature',
      gradient: 'from-emerald-500 to-teal-600'
    },
    {
      id: 3,
      src: '/api/placeholder/400/300',
      title: 'Street Photography',
      description: 'Life in motion on city streets',
      category: 'Street',
      gradient: 'from-orange-500 to-red-600'
    },
    {
      id: 4,
      src: '/api/placeholder/400/300',
      title: 'Portrait Session',
      description: 'Professional portrait photography',
      category: 'Portrait',
      gradient: 'from-purple-500 to-pink-600'
    },
    {
      id: 5,
      src: '/api/placeholder/400/300',
      title: 'Tech Workspace',
      description: 'Modern workspace and technology setup',
      category: 'Tech',
      gradient: 'from-blue-500 to-indigo-600'
    },
    {
      id: 6,
      src: '/api/placeholder/400/300',
      title: 'Creative Process',
      description: 'Behind the scenes of creative work',
      category: 'Process',
      gradient: 'from-violet-500 to-purple-600'
    }
  ]

  // Sample video data
  const videos = [
    {
      id: 1,
      title: 'Product Demo Reel',
      description: 'Showcasing custom software solutions in action',
      thumbnail: '/api/placeholder/400/225',
      duration: '2:30',
      gradient: 'from-cyan-500 to-blue-600'
    },
    {
      id: 2,
      title: 'Development Timelapse',
      description: 'Coding session and problem-solving process',
      thumbnail: '/api/placeholder/400/225',
      duration: '1:45',
      gradient: 'from-green-500 to-emerald-600'
    },
    {
      id: 3,
      title: 'AI Agent Demonstration',
      description: 'Autonomous agent performing complex tasks',
      thumbnail: '/api/placeholder/400/225',
      duration: '3:15',
      gradient: 'from-purple-500 to-violet-600'
    },
    {
      id: 4,
      title: 'Creative Photography',
      description: 'Photography session and editing workflow',
      thumbnail: '/api/placeholder/400/225',
      duration: '4:20',
      gradient: 'from-pink-500 to-rose-600'
    }
  ]

  const tabAnimation = useSpring({
    transform: activeTab === 'photos' ? 'translateX(0%)' : 'translateX(100%)',
    config: { tension: 300, friction: 30 }
  })

  const photosAnimation = useSpring({
    opacity: activeTab === 'photos' ? 1 : 0,
    transform: activeTab === 'photos' ? 'translateX(0px)' : 'translateX(20px)',
  })

  const videosAnimation = useSpring({
    opacity: activeTab === 'videos' ? 1 : 0,
    transform: activeTab === 'videos' ? 'translateX(0px)' : 'translateX(-20px)',
  })

  const titleSpring = useSpring({
    from: { opacity: 0, transform: 'scale(0.8)' },
    to: inView ? { opacity: 1, transform: 'scale(1)' } : { opacity: 0, transform: 'scale(0.8)' },
    config: { tension: 280, friction: 60 },
    delay: 200
  })

  return (
    <section className="section-padding-lg bg-gradient-to-br from-gray-50 via-purple-50 to-pink-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-32 left-16 w-24 h-24 bg-purple-200 rounded-full opacity-20 animate-float"></div>
        <div className="absolute bottom-40 right-20 w-32 h-32 bg-pink-200 rounded-full opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-2/3 left-1/4 w-16 h-16 bg-blue-200 rounded-full opacity-20 animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container-custom relative z-10" ref={ref}>
        <animated.div style={titleSpring} className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Visual <span className="gradient-text-blue">Gallery</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-8">
            A collection of moments captured through my lens and creative projects that 
            showcase my passion for visual storytelling.
          </p>
          <div className="flex justify-center">
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
          </div>
        </animated.div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-16">
          <div className="relative glass-effect-light rounded-full p-2 shadow-xl">
            <animated.div
              style={{
                ...tabAnimation,
                width: '50%'
              }}
              className="absolute top-2 bottom-2 left-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"
            />
            <div className="relative flex">
              <button
                onClick={() => setActiveTab('photos')}
                className={`px-8 py-4 rounded-full font-semibold transition-all duration-300 btn-modern ${
                  activeTab === 'photos' ? 'text-white' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                📸 Photography
              </button>
              <button
                onClick={() => setActiveTab('videos')}
                className={`px-8 py-4 rounded-full font-semibold transition-all duration-300 btn-modern ${
                  activeTab === 'videos' ? 'text-white' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                🎥 Videography
              </button>
            </div>
          </div>
        </div>

        {/* Photos Tab */}
        {activeTab === 'photos' && (
          <animated.div style={photosAnimation}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {photos.map((photo) => (
                <div
                  key={photo.id}
                  className="group glass-effect-light rounded-3xl overflow-hidden card-hover cursor-pointer animate-scale-in"
                  onClick={() => setSelectedMedia(photo.src)}
                >
                  {/* Photo Placeholder with Gradient */}
                  <div className={`relative h-64 bg-gradient-to-br ${photo.gradient} overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-white text-4xl opacity-30">📸</div>
                    </div>
                    
                    {/* Overlay with hover effect */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 glass-effect text-white text-sm rounded-full font-medium backdrop-blur-sm">
                        {photo.category}
                      </span>
                    </div>
                    
                    {/* View Button */}
                    <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      <div className="w-12 h-12 glass-effect rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-300">
                        <span className="text-xl">👁️</span>
                      </div>
                    </div>

                    {/* Animated corner decoration */}
                    <div className="absolute top-0 right-0 w-16 h-16 bg-white/10 transform rotate-45 translate-x-8 -translate-y-8 group-hover:scale-150 transition-transform duration-500"></div>
                  </div>
                  
                  {/* Photo Info */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors duration-300">
                      {photo.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{photo.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </animated.div>
        )}

        {/* Videos Tab */}
        {activeTab === 'videos' && (
          <animated.div style={videosAnimation}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {videos.map((video) => (
                <div
                  key={video.id}
                  className="group glass-effect-light rounded-3xl overflow-hidden card-hover cursor-pointer animate-scale-in"
                >
                  {/* Video Thumbnail */}
                  <div className={`relative h-56 bg-gradient-to-br ${video.gradient} overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-white text-6xl opacity-30">🎥</div>
                    </div>
                    
                    {/* Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-20 h-20 glass-effect rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-300 animate-pulse-glow">
                        <div className="w-0 h-0 border-l-[24px] border-l-white border-y-[16px] border-y-transparent ml-2"></div>
                      </div>
                    </div>
                    
                    {/* Duration Badge */}
                    <div className="absolute bottom-4 right-4">
                      <span className="px-3 py-1 bg-black/70 text-white text-sm rounded-full backdrop-blur-sm font-medium">
                        {video.duration}
                      </span>
                    </div>

                    {/* Decorative elements */}
                    <div className="absolute top-4 left-4 w-3 h-3 bg-white/40 rounded-full animate-ping"></div>
                    <div className="absolute top-6 left-8 w-2 h-2 bg-white/30 rounded-full animate-pulse"></div>
                  </div>
                  
                  {/* Video Info */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors duration-300">
                      {video.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{video.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </animated.div>
        )}

        {/* Gallery Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: '50+', label: 'Photos Captured', color: 'blue', icon: '📸' },
            { number: '12', label: 'Video Projects', color: 'purple', icon: '🎥' },
            { number: '8', label: 'Categories', color: 'green', icon: '📂' },
            { number: '2+', label: 'Years Experience', color: 'pink', icon: '⏱️' }
          ].map((stat, index) => (
            <div 
              key={stat.label}
              className="text-center glass-effect-light rounded-2xl p-6 card-hover animate-fade-in-up"
              style={{ animationDelay: `${1 + index * 0.2}s` }}
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className={`text-3xl md:text-4xl font-bold text-${stat.color}-600 mb-2`}>
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for viewing selected media */}
      {selectedMedia && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fade-in-up"
          onClick={() => setSelectedMedia(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={() => setSelectedMedia(null)}
              className="absolute -top-12 right-0 text-white text-2xl hover:text-gray-300 w-10 h-10 glass-effect rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
            >
              ✕
            </button>
            <div className="bg-gradient-to-br from-purple-500 to-pink-600 w-full h-96 rounded-2xl flex items-center justify-center shadow-2xl">
              <span className="text-white text-6xl opacity-50">📸</span>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default GallerySection