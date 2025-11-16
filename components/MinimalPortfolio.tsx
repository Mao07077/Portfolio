'use client'

import { useState } from 'react'
import { Mail, Github, Linkedin, ExternalLink, Menu, X } from 'lucide-react'
import { 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaPython, 
  FaJava, 
  FaReact, 
  FaNodeJs 
} from 'react-icons/fa'
import { 
  SiNextdotjs, 
  SiFastapi, 
  SiMongodb, 
  SiMysql, 
  SiSupabase, 
  SiFigma,
  SiTailwindcss,
  SiTypescript
} from 'react-icons/si'

const MinimalPortfolio = () => {
  const [activeSection, setActiveSection] = useState('about')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const skills = [
    { name: 'HTML', icon: FaHtml5, color: '#E34F26' },
    { name: 'CSS', icon: FaCss3Alt, color: '#1572B6' },
    { name: 'JavaScript', icon: FaJs, color: '#F7DF1E' },
    { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
    { name: 'Python', icon: FaPython, color: '#3776AB' },
    { name: 'Java', icon: FaJava, color: '#007396' },
    { name: 'React', icon: FaReact, color: '#61DAFB' },
    { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
    { name: 'Node.js', icon: FaNodeJs, color: '#339933' },
    { name: 'FastAPI', icon: SiFastapi, color: '#009688' },
    { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
    { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
    { name: 'Supabase', icon: SiSupabase, color: '#3ECF8E' },
    { name: 'Tailwind', icon: SiTailwindcss, color: '#06B6D4' },
    { name: 'Figma', icon: SiFigma, color: '#F24E1E' }
  ]

  const projects = [
    {
      title: 'Tic Tac Toe Game',
      description: 'Interactive Tic Tac Toe game built with modern web technologies. Features a clean UI, game logic, and responsive design.',
      tech: ['React', 'JavaScript', 'CSS'],
      github: '#',
      live: 'https://tic-tac-toe-ten-sand-36.vercel.app/'
    },
    {
      title: 'Wall Green',
      description: 'Modern web application with green-themed design. Showcases responsive layout and contemporary UI patterns.',
      tech: ['React', 'Next.js', 'Tailwind'],
      github: '#',
      live: 'https://wall-green.vercel.app/'
    },
    {
      title: 'Marketplace Platform',
      description: 'Full-featured marketplace application with product listings, user interactions, and modern e-commerce functionality.',
      tech: ['React', 'Next.js', 'TypeScript'],
      github: '#',
      live: 'https://marketplace-ruddy-one-10.vercel.app/'
    },
    {
      title: 'Final CBRC',
      description: 'Deployed CBRC web application.',
      tech: ['Next.js', 'Tailwind'],
      github: '#',
      live: 'https://final-cbrc.vercel.app/'
    }
  ]

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: 'Portfolio Contact Form',
          message: formData.message
        }),
      })
      
      if (response.ok) {
        // Reset form on success
        setFormData({ name: '', email: '', message: '' })
        alert('Thank you for your message! I\'ll get back to you soon.')
      } else {
        throw new Error('Failed to send message')
      }
    } catch (error) {
      console.error('Error sending message:', error)
      alert('Sorry, there was an error sending your message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-neon-muted py-6 relative">
        <div className="max-w-4xl mx-auto px-6 flex justify-between items-center">
          <h1 className="text-xl font-bold gradient-text">Mike Anthony M. Oliva</h1>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {['about', 'work', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => setActiveSection(section)}
                className={`text-sm creative-hover capitalize ${
                  activeSection === section ? 'accent-neon' : 'text-gray-400'
                }`}
              >
                {section}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-400 hover:text-neon-green transition-all duration-200 mobile-menu-button rounded-lg hover:bg-gray-800 hover:bg-opacity-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          
          {/* Decorative elements */}
          <div className="absolute top-0 left-1/4 w-1 h-full bg-gradient-to-b from-transparent via-neon-green-muted to-transparent opacity-20"></div>
          <div className="absolute top-0 right-1/4 w-1 h-full bg-gradient-to-b from-transparent via-neon-green-muted to-transparent opacity-20"></div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-black border-b border-neon-muted z-50 mobile-menu-enter backdrop-blur-sm">
            <nav className="max-w-4xl mx-auto px-6 py-4 space-y-4">
              {['about', 'work', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => {
                    setActiveSection(section)
                    setIsMobileMenuOpen(false)
                  }}
                  className={`block w-full text-left text-lg capitalize py-3 px-4 rounded-lg transition-all duration-200 ${
                    activeSection === section 
                      ? 'bg-neon-green bg-opacity-10 text-neon-green border border-neon-green border-opacity-30' 
                      : 'text-gray-400 hover:text-neon-green hover:bg-gray-800 hover:bg-opacity-50'
                  }`}
                >
                  {section}
                </button>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-16">
        {/* About Section */}
        {activeSection === 'about' && (
          <div className="space-y-16">
            {/* Hero */}
            <section className="space-y-6 relative">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Profile Picture */}
                <div className="relative flex justify-center md:justify-end order-1 md:order-2">
                  <div className="relative">
                    {/* Profile Image Container */}
                    <div className="profile-image w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-neon-muted relative">
                      <img 
                        src="/profile-picture.png" 
                        alt="Mike Anthony M. Oliva" 
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          // Fallback if image doesn't exist
                          e.currentTarget.style.display = 'none';
                          e.currentTarget.nextElementSibling?.classList.remove('hidden');
                        }}
                      />
                      {/* Fallback placeholder */}
                      <div className="hidden absolute inset-0 bg-charcoal flex items-center justify-center">
                        <div className="text-center">
                          <div className="text-6xl mb-4">👨‍💻</div>
                          <div className="text-sm text-gray-400">Add your photo to<br />/public/profile-picture.jpg</div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Decorative elements around image */}
                    <div className="absolute -top-4 -right-4 w-12 h-12 border border-neon-muted rounded-full opacity-30 floating-accent"></div>
                    <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-neon-gradient rounded-full opacity-50 floating-accent" style={{animationDelay: '2s'}}></div>
                    <div className="absolute top-1/2 -left-8 w-3 h-3 border border-neon-muted rounded-full opacity-40 floating-accent" style={{animationDelay: '1s'}}></div>
                  </div>
                </div>

                {/* Text Content */}
                <div className="space-y-4 order-2 md:order-1">
                  <h2 className="text-4xl md:text-6xl font-light relative">
                    Web Developer
                  </h2>
                  <p className="text-lg text-gray-400 max-w-2xl leading-relaxed">
                    Passionate about creating clean, functional web experiences. 
                    Specialized in modern technologies with a focus on both frontend and backend development.
                  </p>
                  
                  {/* Enhanced Social Links */}
                  <div className="flex space-x-6 pt-4">
                    <a href="mailto:mikeanthonyoliva25@gmail.com" className="creative-hover p-2 card-creative rounded-full">
                      <Mail size={20} />
                    </a>
                    <a href="https://github.com/Mao07077" className="creative-hover p-2 card-creative rounded-full" target="_blank" rel="noopener noreferrer">
                      <Github size={20} />
                    </a>
                    <a href="https://www.linkedin.com/in/mike-anthony-oliva-a16568349" className="creative-hover p-2 card-creative rounded-full" target="_blank" rel="noopener noreferrer">
                      <Linkedin size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </section>

            {/* Skills */}
            <section className="space-y-6">
              <h3 className="text-xl font-semibold accent-neon relative">
                Technologies
                <div className="absolute -top-1 -right-8 w-2 h-2 bg-neon-gradient rounded-full pulse-neon"></div>
              </h3>
              <div className="grid grid-cols-5 gap-4 max-w-2xl mx-auto">
                {skills.map((skill, index) => {
                  const IconComponent = skill.icon;
                  return (
                    <div 
                      key={skill.name} 
                      className="tech-tag-icon group flex flex-col items-center justify-center p-4 rounded-xl aspect-square relative"
                      style={{animationDelay: `${index * 0.1}s`}}
                      title={skill.name}
                    >
                      <div className="text-2xl mb-1 group-hover:scale-110 transition-transform duration-300">
                        <IconComponent 
                          size={24} 
                          style={{ color: skill.color }}
                          className={`group-hover:drop-shadow-lg transition-all duration-300 ${
                            skill.name === 'Next.js' ? 'nextjs-logo' : ''
                          }`}
                        />
                      </div>
                      <div className="text-xs text-gray-400 group-hover:text-neon-muted transition-colors duration-300 text-center leading-tight">
                        {skill.name}
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Experience */}
            <section className="space-y-6">
              <h3 className="text-xl font-semibold accent-neon relative">
                Background
                <div className="absolute -top-1 -right-8 w-2 h-2 bg-neon-gradient rounded-full pulse-neon" style={{animationDelay: '1s'}}></div>
              </h3>
              <div className="space-y-6 text-gray-400">
                {[
                  { title: "Computer Science Student", desc: "Studying Computer Science" },
                  { title: "Bootcamp Graduate", desc: "Full-Stack Development" },
                  { title: "Self-Taught", desc: "Modern Web Technologies" }
                ].map((item, index) => (
                  <div key={index} className="card-creative p-4 border-l-2 border-neon-muted">
                    <div className="text-sm text-white font-medium">{item.title}</div>
                    <div className="text-sm">{item.desc}</div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {/* Work Section */}
        {activeSection === 'work' && (
          <div className="space-y-16">
            <section>
              <h2 className="text-2xl font-semibold mb-8 accent-neon relative">
                Selected Work
                <div className="absolute -top-2 -right-10 w-3 h-3 border border-neon-muted rounded-full floating-accent"></div>
              </h2>
              <div className="space-y-8">
                {projects.map((project, index) => (
                  <div key={index} className="card-creative p-6 group">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start space-y-4 md:space-y-0">
                      <div className="space-y-3 flex-1">
                        <h3 className="text-lg font-semibold creative-hover inline-block">{project.title}</h3>
                        <p className="text-gray-400 max-w-md leading-relaxed">{project.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech, techIndex) => (
                            <span 
                              key={tech} 
                              className="tech-tag text-xs px-3 py-1 rounded-full"
                              style={{animationDelay: `${techIndex * 0.1}s`}}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="flex space-x-4">
                        <a href={project.github} className="creative-hover p-2 card-creative rounded-full">
                          <Github size={16} />
                        </a>
                        <a href={project.live} className="creative-hover p-2 card-creative rounded-full">
                          <ExternalLink size={16} />
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {/* Contact Section */}
        {activeSection === 'contact' && (
          <div className="space-y-16">
            <section>
              <h2 className="text-2xl font-semibold mb-8 accent-neon relative">
                Get In Touch
                <div className="absolute -top-2 -right-12 w-4 h-4 border-2 border-neon-muted rounded-full floating-accent opacity-60"></div>
              </h2>
              <div className="grid md:grid-cols-2 gap-12">
                {/* Enhanced Contact Info */}
                <div className="space-y-8">
                  <p className="text-gray-400 leading-relaxed">
                    Interested in working together? I'm always open to discussing new opportunities 
                    and creative projects.
                  </p>
                  
                  <div className="space-y-6">
                    {[
                      { label: "Email", value: "mikeanthonyoliva25@gmail.com", icon: "📧" },
                      { label: "Location", value: "Philippines", icon: "📍" },
                      { label: "Response Time", value: "Usually within 24 hours", icon: "⏰" }
                    ].map((item, index) => (
                      <div key={index} className="card-creative p-4 flex items-center space-x-4">
                        <div className="text-2xl">{item.icon}</div>
                        <div>
                          <div className="text-sm accent-neon font-medium">{item.label}</div>
                          <div className="text-sm text-gray-400">{item.value}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Enhanced Contact Form */}
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-6">
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Name"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        required
                        className="w-full bg-transparent border-b-2 border-gray-700 py-3 neon-focus transition-all placeholder-gray-500"
                      />
                    </div>
                    <div className="relative">
                      <input
                        type="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        required
                        className="w-full bg-transparent border-b-2 border-gray-700 py-3 neon-focus transition-all placeholder-gray-500"
                      />
                    </div>
                    <div className="relative">
                      <textarea
                        placeholder="Message"
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        required
                        className="w-full bg-transparent border-b-2 border-gray-700 py-3 neon-focus transition-all resize-none placeholder-gray-500"
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="card-creative px-8 py-3 creative-hover font-medium relative overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span className="relative z-10">
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </span>
                  </button>
                </form>
              </div>
            </section>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-neon-muted py-8 relative">
        <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-gray-400">
            © 2025 Mike Anthony M. Oliva
          </div>
          <div className="flex space-x-6">
            <a href="mailto:mikeanthonyoliva25@gmail.com" className="text-sm text-gray-400 creative-hover">
              Email
            </a>
            <a href="https://github.com/Mao07077" className="text-sm text-gray-400 creative-hover" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/mike-anthony-oliva-a16568349" className="text-sm text-gray-400 creative-hover" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </div>
        </div>
        
        {/* Decorative footer elements */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-px bg-gradient-to-r from-transparent via-neon-green-muted to-transparent"></div>
      </footer>
    </div>
  )
}

export default MinimalPortfolio
