'use client'

import { useState, useEffect } from 'react'
import { ChevronDown, Code, Database, Palette } from 'lucide-react'

const Hero = () => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const skills = [
    { icon: Code, label: 'Frontend', delay: '0s' },
    { icon: Database, label: 'Backend', delay: '0.5s' },
    { icon: Palette, label: 'Design', delay: '1s' },
  ]

  if (!mounted) return null

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Background Animation */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-600/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Hi, I'm{' '}
                <span className="text-gradient block mt-2">
                  Mike Anthony
                </span>
                <span className="text-2xl sm:text-3xl lg:text-4xl font-normal text-gray-300 block mt-4">
                  Web Developer
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-400 max-w-2xl">
                Passionate full-stack developer specializing in modern web technologies. 
                I create elegant, functional, and user-friendly digital experiences.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#projects"
                className="inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-lg text-black bg-white hover:bg-gray-200 transition-all duration-200 transform hover:scale-105"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-lg text-white border border-gray-600 hover:border-gray-400 hover:bg-gray-800 transition-all duration-200"
              >
                Get In Touch
              </a>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center lg:text-left">
                <div className="text-2xl lg:text-3xl font-bold text-gradient">15+</div>
                <div className="text-sm text-gray-400">Technologies</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl lg:text-3xl font-bold text-gradient">50+</div>
                <div className="text-sm text-gray-400">Projects</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl lg:text-3xl font-bold text-gradient">2+</div>
                <div className="text-sm text-gray-400">Years</div>
              </div>
            </div>
          </div>

          {/* Right Content - Profile Card */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="glass-effect rounded-2xl p-8 max-w-md w-full card-hover">
                {/* Profile Image Placeholder */}
                <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  <div className="w-28 h-28 rounded-full bg-gray-800 flex items-center justify-center">
                    <Code size={40} className="text-gray-400" />
                  </div>
                </div>

                {/* Info */}
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold mb-2">Mike Anthony M. Oliva</h3>
                  <p className="text-gray-400">4th Year Undergraduate</p>
                  <p className="text-gray-400">Web Developer</p>
                </div>

                {/* Floating Skills */}
                <div className="relative h-20">
                  {skills.map((skill, index) => (
                    <div
                      key={skill.label}
                      className="absolute animate-float bg-gray-800 rounded-lg p-3 flex items-center gap-2"
                      style={{
                        animationDelay: skill.delay,
                        left: `${index * 30}%`,
                        top: `${index * 20}px`
                      }}
                    >
                      <skill.icon size={16} className="text-blue-400" />
                      <span className="text-xs text-gray-300">{skill.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown size={24} className="text-gray-400" />
      </div>
    </section>
  )
}

export default Hero
