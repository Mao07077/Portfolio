'use client'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Left Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gradient">Mike Anthony M. Oliva</h3>
            <p className="text-gray-400 max-w-md">
              Web Developer passionate about creating amazing digital experiences 
              with modern technologies and clean, efficient code.
            </p>
          </div>

          {/* Middle Section - Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <div className="space-y-2">
              <a href="#home" className="block text-gray-400 hover:text-white transition-colors duration-200">
                Home
              </a>
              <a href="#about" className="block text-gray-400 hover:text-white transition-colors duration-200">
                About
              </a>
              <a href="#skills" className="block text-gray-400 hover:text-white transition-colors duration-200">
                Skills
              </a>
              <a href="#projects" className="block text-gray-400 hover:text-white transition-colors duration-200">
                Projects
              </a>
              <a href="#contact" className="block text-gray-400 hover:text-white transition-colors duration-200">
                Contact
              </a>
            </div>
          </div>

          {/* Right Section - Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Get In Touch</h4>
            <div className="space-y-2 text-gray-400">
              <p>📧 mike.oliva@example.com</p>
              <p>📍 Philippines</p>
              <p>🎓 4th Year Undergraduate</p>
            </div>
            
            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-colors duration-200"
                title="LinkedIn"
              >
                <span className="text-blue-400">💼</span>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-colors duration-200"
                title="GitHub"
              >
                <span className="text-gray-400">💻</span>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-colors duration-200"
                title="Email"
              >
                <span className="text-green-400">📧</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} Mike Anthony M. Oliva. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm">
              Built with ❤️ using Next.js & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
