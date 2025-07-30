import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { 
  ArrowDown, 
  Users, 
  Zap, 
  Server, 
  GitBranch,
  MapPin,
  Mail,
  Linkedin,
  Github,
} from 'lucide-react'

const Hero = () => {
  const [typedText, setTypedText] = useState('')
  const roles = [
    'Full-Stack Developer',
    'Robotics Engineer', 
    'System Architect',
    'Performance Optimizer'
  ]
  const [currentRole, setCurrentRole] = useState(0)

  useEffect(() => {
    let timeout: NodeJS.Timeout
    const currentRoleText = roles[currentRole]
    
    if (typedText.length < currentRoleText.length) {
      timeout = setTimeout(() => {
        setTypedText(currentRoleText.slice(0, typedText.length + 1))
      }, 100)
    } else {
      timeout = setTimeout(() => {
        setTypedText('')
        setCurrentRole((prev) => (prev + 1) % roles.length)
      }, 2000)
    }

    return () => clearTimeout(timeout)
  }, [typedText, currentRole, roles])

  const metrics = [
    { icon: Users, value: '25,000+', label: 'Users Served', color: 'text-green-400' },
    { icon: Zap, value: '10x', label: 'Performance Boost', color: 'text-yellow-400' },
    { icon: Server, value: '99.9%', label: 'Uptime Achieved', color: 'text-blue-400' },
    { icon: GitBranch, value: '25+', label: 'Microservices Built', color: 'text-purple-400' },
  ]

  const scrollToNext = () => {
    const skillsSection = document.querySelector('#skills')
    if (skillsSection) {
      skillsSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl floating" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl floating" style={{ animationDelay: '-3s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-128 h-128 bg-gradient-to-r from-primary-500/5 to-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        {/* Main Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="block text-white mb-2">Karl</span>
            <span className="block gradient-text">Mabou</span>
          </motion.h1>

          <motion.div
            className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-8 h-12 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <span className="typing-animation">{typedText}</span>
          </motion.div>

          <motion.p
            className="text-lg md:text-xl text-gray-400 max-w-4xl mx-auto mb-12 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            Performance-driven Full-Stack Developer specializing in <span className="text-primary-400 font-semibold">high-scale, real-time systems</span> with expertise spanning <span className="text-green-400 font-semibold">robotics</span>, <span className="text-yellow-400 font-semibold">fintech</span>, and <span className="text-purple-400 font-semibold">distributed architectures</span>. 
            Passionate about delivering <span className="text-primary-400 font-semibold">10x performance improvements</span> and building applications that serve thousands of users with exceptional reliability.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            <motion.button
              onClick={scrollToNext}
              className="px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full text-white font-semibold hover:from-primary-600 hover:to-primary-700 transition-all duration-300 shadow-lg hover:shadow-primary-500/25 flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Explore My Work</span>
              <ArrowDown className="w-5 h-5" />
            </motion.button>

            <motion.div className="flex space-x-4">
              <motion.a
                href="mailto:karl.mabou.kouam@example.com"
                className="p-3 rounded-full glass-morphism hover:bg-white/10 text-gray-300 hover:text-primary-400 transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Mail className="w-6 h-6" />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/karlmabs"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full glass-morphism hover:bg-white/10 text-gray-300 hover:text-blue-400 transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin className="w-6 h-6" />
              </motion.a>
              <motion.a
                href="https://github.com/karlmabs"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full glass-morphism hover:bg-white/10 text-gray-300 hover:text-gray-100 transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Github className="w-6 h-6" />
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Key Metrics */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8 }}
        >
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              className="glass-morphism p-6 rounded-xl text-center hover:scale-105 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 + (index * 0.1) }}
              whileHover={{ y: -5 }}
            >
              <div className="flex justify-center mb-3">
                <metric.icon className={`w-8 h-8 ${metric.color}`} />
              </div>
              <div className={`text-2xl md:text-3xl font-bold ${metric.color} mb-1`}>
                {metric.value}
              </div>
              <div className="text-sm text-gray-400 font-medium">
                {metric.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Location & Status */}
        <motion.div
          className="mt-12 flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-8 text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <div className="flex items-center space-x-2">
            <MapPin className="w-4 h-4 text-primary-400" />
            <span>Brussels, Belgium</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
            <span>Available for opportunities</span>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <motion.button
          onClick={scrollToNext}
          className="text-gray-400 hover:text-primary-400 transition-colors duration-300"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown className="w-6 h-6" />
        </motion.button>
      </motion.div>
    </section>
  )
}

export default Hero