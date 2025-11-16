'use client'

import { ExternalLink, Github, Code, Smartphone, BarChart3 } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Final CBRC',
      description: 'Deployed CBRC web application.',
      image: Code,
      technologies: ['Next.js', 'Tailwind'],
      liveUrl: 'https://final-cbrc.vercel.app/',
      githubUrl: '#',
      status: 'live'
    },
    {
      id: 2,
      title: 'Mobile-First Application',
      description: 'Responsive web application built with Next.js and FastAPI. Focuses on mobile-first design principles and optimal user experience across all devices.',
      image: Smartphone,
      technologies: ['Next.js', 'FastAPI', 'Python', 'Tailwind'],
      liveUrl: '#',
      githubUrl: '#',
      status: 'coming-soon'
    },
    {
      id: 3,
      title: 'Data Visualization Dashboard',
      description: 'Interactive dashboard for data visualization and analytics. Built with modern frontend frameworks and connected to robust backend APIs.',
      image: BarChart3,
      technologies: ['JavaScript', 'D3.js', 'MySQL', 'Express'],
      liveUrl: '#',
      githubUrl: '#',
      status: 'coming-soon'
    }
  ]

  return (
    <section id="projects" className="py-20 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Some of my recent work and creative solutions
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="glass-effect rounded-xl overflow-hidden card-hover group"
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-blue-600/20 to-purple-600/20 flex items-center justify-center">
                <project.image size={60} className="text-gray-400 group-hover:text-white transition-colors duration-300" />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex gap-4">
                    <a
                      href={project.liveUrl}
                      className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-200"
                      title="View Live"
                    >
                      <ExternalLink size={20} className="text-white" />
                    </a>
                    <a
                      href={project.githubUrl}
                      className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-200"
                      title="View Code"
                    >
                      <Github size={20} className="text-white" />
                    </a>
                  </div>
                </div>

                {/* Status Badge */}
                {project.status === 'coming-soon' && (
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 text-xs font-medium rounded-full border border-yellow-500/30">
                      Coming Soon
                    </span>
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-500/20 text-blue-400 text-xs font-medium rounded-full border border-blue-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex gap-4">
                  <a
                    href={project.liveUrl}
                    className="flex-1 bg-white text-black text-center py-2 px-4 rounded-lg font-medium hover:bg-gray-200 transition-colors duration-200 text-sm"
                  >
                    View Project
                  </a>
                  <a
                    href={project.githubUrl}
                    className="flex-1 border border-gray-600 text-white text-center py-2 px-4 rounded-lg font-medium hover:border-gray-400 hover:bg-gray-800 transition-all duration-200 text-sm"
                  >
                    View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-gray-400 mb-6">
            More exciting projects are in development. Stay tuned!
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-lg text-black bg-white hover:bg-gray-200 transition-all duration-200 transform hover:scale-105"
          >
            Let's Work Together
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects
