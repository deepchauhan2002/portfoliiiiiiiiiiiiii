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
      category: 'Architecture'
    },
    {
      id: 2,
      src: '/api/placeholder/400/300',
      title: 'Nature Landscape',
      description: 'Capturing the beauty of natural landscapes',
      category: 'Nature'
    },
    {
      id: 3,
      src: '/api/placeholder/400/300',
      title: 'Street Photography',
      description: 'Life in motion on city streets',
      category: 'Street'
    },
    {
      id: 4,
      src: '/api/placeholder/400/300',
      title: 'Portrait Session',
      description: 'Professional portrait photography',
      category: 'Portrait'
    },
    {
      id: 5,
      src: '/api/placeholder/400/300',
      title: 'Tech Workspace',
      description: 'Modern workspace and technology setup',
      category: 'Tech'
    },
    {
      id: 6,
      src: '/api/placeholder/400/300',
      title: 'Creative Process',
      description: 'Behind the scenes of creative work',
      category: 'Process'
    }
  ]

  // Sample video data
  const videos = [
    {
      id: 1,
      title: 'Product Demo Reel',
      description: 'Showcasing custom software solutions in action',
      thumbnail: '/api/placeholder/400/225',
      duration: '2:30'
    },
    {
      id: 2,
      title: 'Development Timelapse',
      description: 'Coding session and problem-solving process',
      thumbnail: '/api/placeholder/400/225',
      duration: '1:45'
    },
    {
      id: 3,
      title: 'AI Agent Demonstration',
      description: 'Autonomous agent performing complex tasks',
      thumbnail: '/api/placeholder/400/225',
      duration: '3:15'
    },
    {
      id: 4,
      title: 'Creative Photography',
      description: 'Photography session and editing workflow',
      thumbnail: '/api/placeholder/400/225',
      duration: '4:20'
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

  return (
    <section className="py-20 bg-gray-50" id="gallery">
      <div className="container mx-auto px-4">
        <animated.div ref={ref} style={inView} className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Visual Gallery
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A collection of moments captured through my lens and creative projects that 
              showcase my passion for visual storytelling.
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-12">
            <div className="relative bg-white rounded-full p-1 shadow-lg">
              <animated.div
                style={tabAnimation}
                className="absolute top-1 bottom-1 left-1 bg-blue-600 rounded-full transition-all duration-300"
              />
              <div className="relative flex">
                <button
                  onClick={() => setActiveTab('photos')}
                  className={`px-8 py-3 rounded-full font-semibold transition-colors duration-300 ${
                    activeTab === 'photos' ? 'text-white' : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Photography
                </button>
                <button
                  onClick={() => setActiveTab('videos')}
                  className={`px-8 py-3 rounded-full font-semibold transition-colors duration-300 ${
                    activeTab === 'videos' ? 'text-white' : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Videography
                </button>
              </div>
            </div>
          </div>

          {/* Photos Tab */}
          {activeTab === 'photos' && (
            <animated.div style={photosAnimation}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {photos.map((photo) => (
                  <animated.div
                    key={photo.id}
                    style={{
                      opacity: inView.opacity,
                      transform: inView.transform,
                    }}
                    className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer"
                    onClick={() => setSelectedMedia(photo.src)}
                  >
                    {/* Photo Placeholder with Gradient */}
                    <div className="relative h-64 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 overflow-hidden">
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-white text-4xl opacity-30">📸</div>
                      </div>
                      
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      
                      {/* Category Badge */}
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-white/90 text-gray-900 text-sm rounded-full">
                          {photo.category}
                        </span>
                      </div>
                      
                      {/* View Button */}
                      <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center">
                          <span className="text-gray-900 text-lg">👁️</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Photo Info */}
                    <div className="p-4">
                      <h3 className="font-semibold text-gray-900 mb-1">{photo.title}</h3>
                      <p className="text-sm text-gray-600">{photo.description}</p>
                    </div>
                  </animated.div>
                ))}
              </div>
            </animated.div>
          )}

          {/* Videos Tab */}
          {activeTab === 'videos' && (
            <animated.div style={videosAnimation}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {videos.map((video) => (
                  <animated.div
                    key={video.id}
                    style={{
                      opacity: inView.opacity,
                      transform: inView.transform,
                    }}
                    className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer"
                  >
                    {/* Video Thumbnail */}
                    <div className="relative h-48 bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-500 overflow-hidden">
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-white text-6xl opacity-30">🎥</div>
                      </div>
                      
                      {/* Play Button */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300">
                          <div className="w-0 h-0 border-l-[20px] border-l-white border-y-[12px] border-y-transparent ml-1"></div>
                        </div>
                      </div>
                      
                      {/* Duration Badge */}
                      <div className="absolute bottom-4 right-4">
                        <span className="px-2 py-1 bg-black/70 text-white text-sm rounded">
                          {video.duration}
                        </span>
                      </div>
                    </div>
                    
                    {/* Video Info */}
                    <div className="p-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{video.title}</h3>
                      <p className="text-gray-600">{video.description}</p>
                    </div>
                  </animated.div>
                ))}
              </div>
            </animated.div>
          )}

          {/* Gallery Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-600">Photos Captured</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">12</div>
              <div className="text-gray-600">Video Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">8</div>
              <div className="text-gray-600">Categories</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-600 mb-2">2+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
          </div>
        </animated.div>
      </div>

      {/* Modal for viewing selected media */}
      {selectedMedia && (
        <div 
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedMedia(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={() => setSelectedMedia(null)}
              className="absolute -top-12 right-0 text-white text-2xl hover:text-gray-300"
            >
              ✕
            </button>
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 w-full h-96 rounded-lg flex items-center justify-center">
              <span className="text-white text-6xl opacity-50">📸</span>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default GallerySection