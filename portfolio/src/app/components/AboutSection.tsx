'use client'

const AboutSection = () => {
  const skills = [
    { name: '.NET Core/Framework', level: 85, color: 'bg-purple-500' },
    { name: 'React & Next.js', level: 90, color: 'bg-blue-500' },
    { name: 'JavaScript/TypeScript', level: 88, color: 'bg-yellow-500' },
    { name: 'C#', level: 82, color: 'bg-green-500' },
    { name: 'SQL Server', level: 75, color: 'bg-red-500' },
    { name: 'Agentic AI Development', level: 70, color: 'bg-pink-500' },
  ]

  return (
    <section className="py-20 bg-gray-50" id="about">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About Me
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Passionate software engineer with a creative mindset, building innovative solutions 
              and exploring the cutting edge of AI technology.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">My Journey</h3>
              <div className="space-y-4 text-gray-700">
                <p>
                  With 2 years of professional experience, I&apos;ve specialized in building 
                  custom products that solve real-world problems. My expertise spans across 
                  full-stack development with a strong foundation in .NET and React ecosystems.
                </p>
                <p>
                  Currently diving deep into the fascinating world of agentic AI development, 
                  exploring how autonomous agents can enhance user experiences and automate 
                  complex workflows.
                </p>
                <p>
                  When I&apos;m not coding, you&apos;ll find me capturing moments through photography 
                  and videography, always looking for that perfect shot that tells a story.
                </p>
              </div>
              
              <div className="mt-8">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">What I Do</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    Full-stack web application development
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    Custom product design and implementation
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                    AI agent development and integration
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-pink-500 rounded-full mr-3"></span>
                    Photography and video content creation
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Technical Skills</h3>
              <div className="space-y-4">
                {skills.map((skill) => (
                  <div key={skill.name} className="relative">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div
                        className={`h-2.5 rounded-full ${skill.color}`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-6 bg-white rounded-xl shadow-lg">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Experience Highlights</h4>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <div className="w-3 h-3 bg-blue-500 rounded-full mt-1 mr-3 flex-shrink-0"></div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">Custom Product Development</p>
                      <p className="text-xs text-gray-600">2+ years of building tailored solutions</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-3 h-3 bg-green-500 rounded-full mt-1 mr-3 flex-shrink-0"></div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">Full-Stack Expertise</p>
                      <p className="text-xs text-gray-600">Frontend to backend development</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-3 h-3 bg-purple-500 rounded-full mt-1 mr-3 flex-shrink-0"></div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">AI Innovation</p>
                      <p className="text-xs text-gray-600">Exploring agentic AI applications</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection