import { motion } from 'framer-motion'
import { 
  Heart, 
  Coffee, 
  Code, 
  Github, 
  Linkedin, 
  Mail, 
  MapPin,
  ArrowUp,
} from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/karlmabou',
      label: 'GitHub',
      color: 'hover:text-gray-300'
    },
    {
      icon: Linkedin,
      href: 'https://linkedin.com/in/karlmabou',
      label: 'LinkedIn',
      color: 'hover:text-blue-400'
    },
    {
      icon: Mail,
      href: 'mailto:karl.mabou.kouam@example.com',
      label: 'Email',
      color: 'hover:text-red-400'
    }
  ]

  const quickLinks = [
    { href: '#home', label: 'Home' },
    { href: '#skills', label: 'Skills' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' }
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="relative bg-gray-900/50 backdrop-blur-sm border-t border-gray-800">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-purple-500/20" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="flex items-center space-x-2 mb-4">
              <Code className="w-8 h-8 text-primary-400" />
              <span className="text-2xl font-bold gradient-text">Karl Mabou</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
              Full-Stack Developer specializing in high-scale, real-time systems with expertise 
              spanning robotics, fintech, and distributed architectures. Passionate about 
              delivering exceptional performance and measurable business value.
            </p>
            <div className="flex items-center space-x-2 text-gray-400 mb-4">
              <MapPin className="w-4 h-4 text-primary-400" />
              <span>Brussels, Belgium</span>
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse ml-2" />
              <span className="text-green-400 text-sm">Available for opportunities</span>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className={`p-3 rounded-full glass-morphism hover:bg-white/10 text-gray-400 ${social.color} transition-all duration-300`}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <IconComponent className="w-5 h-5" />
                  </motion.a>
                )
              })}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <motion.button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-primary-400 transition-colors duration-200 block"
                    whileHover={{ x: 5 }}
                  >
                    {link.label}
                  </motion.button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Technologies */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-white font-semibold mb-4">Core Technologies</h3>
            <div className="space-y-2 text-sm">
              {[
                'React & TypeScript',
                'Node.js & Java',
                'PostgreSQL & Redis',
                'Docker & Kubernetes',
                'ROS2 & Robotics',
                'Kafka & WebSocket'
              ].map((tech) => (
                <div key={tech} className="text-gray-400 hover:text-gray-300 transition-colors cursor-default">
                  {tech}
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800" />

        {/* Bottom Footer */}
        <div className="py-6 flex flex-col md:flex-row items-center justify-between">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center space-x-2 text-gray-400 text-sm mb-4 md:mb-0"
          >
            <span>© {currentYear} Karl Mabou. Made with</span>
            <Heart className="w-4 h-4 text-red-400 fill-current" />
            <span>and</span>
            <Coffee className="w-4 h-4 text-yellow-600" />
            <span>in Brussels</span>
          </motion.div>

          <div className="flex items-center space-x-6">
            <motion.div className="text-gray-400 text-sm">
              Built with React, TypeScript & Tailwind CSS
            </motion.div>
            
            {/* Back to Top Button */}
            <motion.button
              onClick={scrollToTop}
              className="p-2 rounded-full glass-morphism hover:bg-white/10 text-gray-400 hover:text-primary-400 transition-all duration-300"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </motion.button>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-primary-500/5 rounded-full blur-2xl floating" />
      <div className="absolute bottom-10 left-10 w-24 h-24 bg-purple-500/5 rounded-full blur-2xl floating" style={{ animationDelay: '-2s' }} />
    </footer>
  )
}

export default Footer