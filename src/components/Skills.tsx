import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  
  Database, 
  Cloud, 
  Cpu, 
  
  
  Smartphone,
} from 'lucide-react'

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('frontend')

  const skillCategories = {
    frontend: {
      title: 'Frontend & Mobile',
      icon: Smartphone,
      color: 'text-blue-400',
      skills: [
        { name: 'React', level: 95, description: 'Advanced React development with hooks, context, and performance optimization' },
        { name: 'TypeScript', level: 90, description: 'Strong typing, advanced types, and large-scale application development' },
        { name: 'React Native', level: 85, description: 'Cross-platform mobile apps with 90%+ code reusability' },
        { name: 'SvelteKit', level: 80, description: 'Modern web applications with excellent performance' },
        { name: 'Vue.js', level: 75, description: 'Component-based architecture and reactive data binding' },
        { name: 'Tailwind CSS', level: 95, description: 'Utility-first CSS framework for rapid UI development' },
      ]
    },
    backend: {
      title: 'Backend & APIs',
      icon: Database,
      color: 'text-green-400',
      skills: [
        { name: 'Java SpringBoot', level: 90, description: 'Enterprise-grade microservices and REST APIs' },
        { name: 'Node.js', level: 88, description: 'High-performance server-side applications' },
        { name: 'Python', level: 85, description: 'Django, FastAPI, and automation scripts' },
        { name: 'GraphQL', level: 80, description: 'Efficient data fetching with Apollo Server' },
        { name: 'PostgreSQL', level: 85, description: 'Complex queries, optimization, and PostGIS' },
        { name: 'Redis', level: 80, description: 'Caching strategies and session management' },
      ]
    },
    devops: {
      title: 'DevOps & Cloud',
      icon: Cloud,
      color: 'text-purple-400',
      skills: [
        { name: 'Docker', level: 90, description: 'Containerization and multi-stage builds' },
        { name: 'Kubernetes', level: 85, description: 'Orchestration, scaling, and cluster management' },
        { name: 'GitHub Actions', level: 85, description: 'CI/CD pipelines and automated deployments' },
        { name: 'Prometheus', level: 80, description: 'Metrics collection and alerting systems' },
        { name: 'Grafana', level: 85, description: 'Advanced dashboards and monitoring visualization' },
        { name: 'Kafka', level: 75, description: 'Event streaming and message processing' },
      ]
    },
    robotics: {
      title: 'Robotics & IoT',
      icon: Cpu,
      color: 'text-orange-400',
      skills: [
        { name: 'ROS2', level: 85, description: 'Robot Operating System and DDS communication' },
        { name: 'Real-time Systems', level: 90, description: 'Low-latency processing and telemetry systems' },
        { name: 'WebSocket', level: 88, description: 'Real-time bidirectional communication' },
        { name: 'Microservices', level: 90, description: '25+ services architecture and event-driven design' },
        { name: 'Telemetry', level: 85, description: 'Data collection, processing, and visualization' },
        { name: 'Mission Planning', level: 80, description: 'Autonomous system coordination and control' },
      ]
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  }

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading">Technical Expertise</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive skill set spanning full-stack development, robotics, and distributed systems architecture
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          {Object.entries(skillCategories).map(([key, category]) => {
            const IconComponent = category.icon
            return (
              <motion.button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 ${
                  activeCategory === key
                    ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-lg'
                    : 'glass-morphism text-gray-300 hover:text-white hover:bg-white/10'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <IconComponent className="w-5 h-5" />
                <span className="font-medium">{category.title}</span>
              </motion.button>
            )
          })}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          key={activeCategory}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {skillCategories[activeCategory as keyof typeof skillCategories].skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              className="tech-card group"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-semibold text-white group-hover:text-primary-400 transition-colors">
                  {skill.name}
                </h3>
                <span className={`text-sm font-medium ${skillCategories[activeCategory as keyof typeof skillCategories].color}`}>
                  {skill.level}%
                </span>
              </div>
              
              {/* Progress Bar */}
              <div className="w-full bg-gray-700 rounded-full h-2 mb-3 overflow-hidden">
                <motion.div
                  className={`h-full bg-gradient-to-r from-primary-500 to-primary-400 rounded-full`}
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                />
              </div>
              
              <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                {skill.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Skills Tags */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <h3 className="text-2xl font-bold text-white mb-8">Additional Technologies</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Keycloak', 'OAuth2', 'JWT', 'OpenTelemetry', 'Loki', 'MongoDB', 
              'Firestore', 'WebSocket', 'Socket.IO', 'Apollo GraphQL', 'Jest', 
              'Pytest', 'OpenAPI', 'Swagger', 'GeoServer', 'PostGIS', 'MapBox',
              'OpenLayers', 'Vagrant', 'VirtualBox', 'Jira', 'GitLab'
            ].map((tech, index) => (
              <motion.span
                key={tech}
                className="px-4 py-2 bg-gradient-to-r from-gray-800 to-gray-700 text-gray-300 rounded-full text-sm hover:from-primary-900 hover:to-primary-800 hover:text-primary-200 transition-all duration-300 cursor-default"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 + (index * 0.05) }}
                whileHover={{ scale: 1.1 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills