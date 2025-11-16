'use client'

import { 
  Code, 
  Database, 
  Palette, 
  Server,
  Globe,
  Zap,
  Leaf,
  Layout
} from 'lucide-react'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: Globe,
      skills: [
        { name: 'HTML5', icon: '🌐', level: 90 },
        { name: 'CSS3', icon: '🎨', level: 85 },
        { name: 'JavaScript', icon: '⚡', level: 88 },
        { name: 'Next.js', icon: '⚛️', level: 80 },
      ]
    },
    {
      title: 'Backend',
      icon: Server,
      skills: [
        { name: 'Python', icon: '🐍', level: 92 },
        { name: 'FastAPI', icon: '⚡', level: 88 },
        { name: 'Java', icon: '☕', level: 82 },
        { name: 'Node.js', icon: '💚', level: 75 },
      ]
    },
    {
      title: 'Database',
      icon: Database,
      skills: [
        { name: 'MongoDB', icon: '🍃', level: 85 },
        { name: 'MySQL', icon: '🗄️', level: 80 },
        { name: 'Supabase', icon: '⚡', level: 78 },
        { name: 'PostgreSQL', icon: '🐘', level: 75 },
      ]
    },
    {
      title: 'Design Tools',
      icon: Palette,
      skills: [
        { name: 'Figma', icon: '🎨', level: 85 },
        { name: 'Photoshop', icon: '📸', level: 80 },
        { name: 'Illustrator', icon: '🖼️', level: 75 },
        { name: 'UI/UX', icon: '💡', level: 82 },
      ]
    }
  ]

  return (
    <section id="skills" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Skills & <span className="text-gradient">Technologies</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Technologies I work with to bring ideas to life
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="glass-effect rounded-xl p-6 card-hover"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <category.icon size={20} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white">{category.title}</h3>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-lg">{skill.icon}</span>
                        <span className="text-sm font-medium text-gray-300">{skill.name}</span>
                      </div>
                      <span className="text-xs text-gray-400">{skill.level}%</span>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ 
                          width: `${skill.level}%`,
                          animationDelay: `${(categoryIndex * 4 + skillIndex) * 0.1}s`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Technologies */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold mb-8 text-white">
            Other Technologies I Work With
          </h3>
          
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'Git', 'GitHub', 'VS Code', 'Docker', 'Linux', 'AWS', 
              'Firebase', 'Tailwind CSS', 'Bootstrap', 'REST API',
              'GraphQL', 'Webpack', 'Vite', 'Express.js'
            ].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-gray-800 text-gray-300 rounded-full text-sm font-medium hover:bg-gray-700 transition-colors duration-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
