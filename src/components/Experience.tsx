import { motion } from 'framer-motion'
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  TrendingUp, 
  Users, 
  
  Server,
  Shield,
  Activity,
} from 'lucide-react'

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: 'Robotics Software Engineer Intern',
      company: 'Space Applications Services',
      location: 'Brussels Area',
      period: '02/2025 - 08/2025',
      type: 'Internship',
      description: 'Developed MOSAIC C4I platform - a comprehensive robotics mission management system with 25+ microservices across 4 architectural layers',
      achievements: [
        '10x increase in telemetry processing capacity, handling 1000+ messages/second with <100ms latency',
        '99.9% uptime across 24 completed tickets across 5 sprint cycles',
        'Kafka integration reducing storage requirements by 60% and processing time by 50%',
        '10+ specialized UI plugins including 2D/3D mapping and mission planning',
        '57.7% test coverage on WebSocket server and 90% reduction in mission testing time',
        'ROS2 interface bridge supporting unlimited simultaneous robot instances'
      ],
      technologies: ['ROS2', 'Kafka', 'WebSocket', 'Microservices', 'Prometheus', 'Grafana', 'Docker'],
      color: 'from-purple-500 to-pink-500',
      icon: Server
    },
    {
      id: 2,
      title: 'FullStack Developer',
      company: 'Wakafrica.NET',
      location: 'Remote',
      period: '02/2024 - 05/2024',
      type: 'Internship',
      description: 'Enhanced Wakafrica.NET platform serving 5,000+ active users with significant performance improvements',
      achievements: [
        '40% improvement in page load times through SvelteKit optimization',
        '85% reduction in data inconsistencies with real-time synchronization',
        'Firebase authentication system supporting 1,000+ concurrent users',
        '15+ Cloud Functions processing 10,000+ daily transactions with 99.5% success rate',
        '95% automated test coverage and CI/CD pipeline reducing deployment time from 2 hours to 15 minutes',
        'Zero security incidents across 50+ database collections'
      ],
      technologies: ['SvelteKit', 'Firebase', 'Cloud Functions', 'Firestore', 'CI/CD'],
      color: 'from-blue-500 to-cyan-500',
      icon: TrendingUp
    },
    {
      id: 3,
      title: 'FullStack Developer',
      company: 'Arrah Solutions',
      location: 'Remote',
      period: '09/2021 - 01/2023',
      type: 'Full-time',
      description: 'Developed Ekoh music streaming platform serving 25,000+ registered users across web and mobile platforms',
      achievements: [
        '98% uptime serving 25,000+ registered users',
        '60% faster GraphQL API query response times handling 50,000+ daily requests',
        'Microservices architecture supporting 100+ concurrent streaming sessions',
        '70% reduction in load times with Redis caching implementation',
        '90%+ code reusability between React Native and React applications',
        '80% reduction in deployment failures with Docker-based CI/CD pipeline'
      ],
      technologies: ['React', 'React Native', 'GraphQL', 'Redis', 'Docker', 'GitHub Actions'],
      color: 'from-green-500 to-teal-500',
      icon: Users
    },
    {
      id: 4,
      title: 'FullStack Developer',
      company: 'PKFOKAM Research Center',
      location: 'Yaounde, Cameroon',
      period: '01/2021 - 01/2023',
      type: 'Full-time',
      description: 'Built enterprise banking application serving 10,000+ customers with high-security standards',
      achievements: [
        '99.9% uptime processing $2M+ in daily transactions',
        '500,000+ database operations daily with <50ms query times',
        'Keycloak authentication supporting 5,000+ concurrent users with zero security breaches',
        '4.8/5 app store rating and 80% user retention rate for mobile banking app',
        '35% improvement in operational efficiency for 200+ bank staff',
        '85% code coverage with 45% reduction in query response time'
      ],
      technologies: ['SpringBoot', 'PostgreSQL', 'React', 'React Native', 'Keycloak', 'Microservices'],
      color: 'from-orange-500 to-red-500',
      icon: Shield
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6 }
    }
  }

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading">Professional Experience</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Track record of delivering high-impact solutions across robotics, fintech, and enterprise applications
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-purple-500 to-transparent" />

          {experiences.map((exp, index) => {
            const IconComponent = exp.icon
            return (
              <motion.div
                key={exp.id}
                variants={itemVariants}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } mb-12`}
              >
                {/* Timeline dot */}
                <div className={`absolute left-4 md:left-1/2 transform ${
                  index % 2 === 0 ? 'md:-translate-x-1/2' : 'md:-translate-x-1/2'
                } w-8 h-8 rounded-full bg-gradient-to-r ${exp.color} border-4 border-gray-900 flex items-center justify-center z-10`}>
                  <IconComponent className="w-4 h-4 text-white" />
                </div>

                {/* Content */}
                <div className={`ml-16 md:ml-0 ${
                  index % 2 === 0 ? 'md:mr-8 md:text-right' : 'md:ml-8'
                } md:w-1/2`}>
                  <motion.div
                    className="experience-card"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    {/* Header */}
                    <div className="mb-4">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                        <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                          exp.type === 'Internship' 
                            ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30' 
                            : 'bg-green-500/20 text-green-300 border border-green-500/30'
                        }`}>
                          {exp.type}
                        </span>
                      </div>
                      
                      <div className="space-y-1 text-sm text-gray-400">
                        <div className="flex items-center space-x-2">
                          <Briefcase className="w-4 h-4 text-primary-400" />
                          <span className="font-medium text-primary-400">{exp.company}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.period}</span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Key Achievements */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-primary-400 mb-2 flex items-center">
                        <Activity className="w-4 h-4 mr-1" />
                        Key Achievements
                      </h4>
                      <ul className="space-y-1 text-sm text-gray-300">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <span className="text-primary-400 mt-1">•</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-sm font-semibold text-gray-400 mb-2">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-gray-800/50 text-gray-300 rounded-full text-xs border border-gray-700/50"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-20"
        >
          <h3 className="text-3xl font-bold text-center text-white mb-12">Education</h3>
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="experience-card"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h4 className="text-xl font-bold text-white">Master II (Information Systems Architect)</h4>
                  <div className="text-primary-400 font-medium">Ecole IT</div>
                </div>
                <div className="text-sm text-gray-400 mt-2 md:mt-0">
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4" />
                    <span>Brussels, Belgium</span>
                  </div>
                  <div className="flex items-center space-x-2 mt-1">
                    <Calendar className="w-4 h-4" />
                    <span>10/2024 - 06/2025</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-2 text-sm text-gray-300">
                <strong className="text-primary-400">Relevant Courses:</strong>
                <div className="flex flex-wrap gap-2 mt-2">
                  {[
                    'API et Microservices avec JAVA',
                    'Développement NodeJS', 
                    'Développement Front - React JS',
                    'SQL & NoSQL',
                    'Business Intelligence',
                    'Big Data',
                    'Test de Pénétration',
                    'Virtualisation avec XCPNG',
                    'Marketing et Stratégie d\'Entreprise'
                  ].map((course) => (
                    <span
                      key={course}
                      className="px-3 py-1 bg-gradient-to-r from-primary-900/30 to-primary-800/30 text-primary-200 rounded-full text-xs border border-primary-700/30"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience