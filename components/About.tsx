'use client'

import { GraduationCap, Code2, Brain, BookOpen } from 'lucide-react'

const About = () => {
  const education = [
    { icon: GraduationCap, title: '4th Year Undergraduate', desc: 'Computer Science Major' },
    { icon: Code2, title: 'Bootcamp Graduate', desc: 'Full-Stack Development' },
    { icon: BookOpen, title: 'Self-Taught Skills', desc: 'Modern Technologies' },
    { icon: Brain, title: 'Continuous Learner', desc: 'Always Growing' },
  ]

  return (
    <section id="about" className="py-20 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Get to know me better
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-4">
              I'm a passionate <span className="text-gradient">Web Developer</span>
            </h3>
            
            <div className="space-y-4 text-gray-300">
              <p>
                Currently in my 4th year of college as an undergraduate, I've been diving deep into 
                the world of web development. My journey combines formal education with hands-on 
                bootcamp experience, giving me a well-rounded foundation in modern development practices.
              </p>
              
              <p>
                I specialize in both frontend and backend development, with a particular passion for 
                creating seamless user experiences and robust server-side applications. I love turning 
                complex problems into simple, beautiful, and intuitive solutions.
              </p>
              
              <p>
                My experience spans across multiple programming languages and frameworks, with expertise 
                in HTML, CSS, JavaScript, Java, and Python. I'm particularly skilled with FastAPI for 
                backend development and have hands-on experience with modern databases and design tools.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-gradient mb-2">15+</div>
                <div className="text-sm text-gray-400">Technologies</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gradient mb-2">50+</div>
                <div className="text-sm text-gray-400">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gradient mb-2">2+</div>
                <div className="text-sm text-gray-400">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Right Content - Education Cards */}
          <div className="space-y-4">
            <h4 className="text-xl font-semibold mb-6 text-center lg:text-left">
              Education & Learning
            </h4>
            
            <div className="grid gap-4">
              {education.map((item, index) => (
                <div
                  key={index}
                  className="glass-effect rounded-lg p-6 card-hover"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                        <item.icon size={24} className="text-white" />
                      </div>
                    </div>
                    <div>
                      <h5 className="font-semibold text-white mb-1">{item.title}</h5>
                      <p className="text-gray-400 text-sm">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
