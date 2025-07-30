import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Github,
  Code,
  Database,
  Cloud,
  Smartphone,
  Globe,
  Monitor,
  Server,
  Zap,
} from "lucide-react";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "MOSAIC C4I Platform",
      category: "Robotics & Real-time Systems",
      description:
        "Comprehensive robotics mission management system with 25+ microservices across 4 architectural layers",
      longDescription:
        "A cutting-edge Command, Control, Communications, Computers, and Intelligence (C4I) platform designed for autonomous robotics missions. Features real-time telemetry processing, 3D visualization, mission planning, and multi-robot coordination.",
      image: "/api/placeholder/600/400",
      technologies: [
        "ROS2",
        "WebSocket",
        "Kafka",
        "React",
        "Node.js",
        "PostgreSQL",
        "Docker",
        "Kubernetes",
      ],
      features: [
        "1000+ messages/second processing with <100ms latency",
        "99.9% uptime across distributed microservices",
        "Real-time 2D/3D mapping and visualization",
        "Mission planning and autonomous coordination",
        "Comprehensive monitoring with Prometheus & Grafana",
      ],
      metrics: {
        performance: "10x faster",
        uptime: "99.9%",
        throughput: "1000+ msg/sec",
        latency: "<100ms",
      },
      status: "In Development",
      company: "Space Applications Services",
      icon: Server,
      color: "from-purple-500 to-pink-500",
    },
    {
      id: 2,
      title: "KubeSentinel",
      category: "DevOps & Infrastructure",
      description:
        "Automated Kubernetes cluster deployment with integrated monitoring capabilities",
      longDescription:
        "A complete infrastructure automation solution that deploys production-ready Kubernetes clusters with monitoring stack. Supports multiple platforms and includes comprehensive dashboards for cluster health monitoring.",
      image: "/api/placeholder/600/400",
      technologies: [
        "Kubernetes",
        "Vagrant",
        "VirtualBox",
        "Grafana",
        "Prometheus",
        "Docker",
        "Bash",
      ],
      features: [
        "Automated 3-node cluster deployment (1 control plane + 2 workers)",
        "Integrated Grafana monitoring dashboard",
        "Kubernetes Dashboard for cluster management",
        "Cross-platform support (Windows, Ubuntu, Mac Intel)",
        "Production-ready configuration with security best practices",
      ],
      metrics: {
        deployment: "15 min",
        platforms: "3 supported",
        automation: "100%",
        monitoring: "Real-time",
      },
      status: "Completed",
      githubUrl: "https://github.com/karlmabs/kubesentinel",
      icon: Cloud,
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: 3,
      title: "Ekoh Music Platform",
      category: "Full-Stack Web & Mobile",
      description:
        "Music streaming platform serving 25,000+ users with cross-platform support",
      longDescription:
        "A comprehensive music streaming service with web and mobile applications. Features include user authentication, music streaming, playlists, social features, and real-time interactions. Built with modern technologies for optimal performance.",
      image: "/api/placeholder/600/400",
      technologies: [
        "React",
        "React Native",
        "GraphQL",
        "Node.js",
        "PostgreSQL",
        "Redis",
        "Docker",
      ],
      features: [
        "Cross-platform mobile and web applications",
        "90%+ code reusability between platforms",
        "Real-time music streaming with 100+ concurrent sessions",
        "Advanced caching with 70% load time reduction",
        "GraphQL API with 60% faster query responses",
      ],
      metrics: {
        users: "25,000+",
        uptime: "98%",
        performance: "60% faster",
        sessions: "100+ concurrent",
      },
      status: "Production",
      company: "Arrah Solutions",
      icon: Smartphone,
      color: "from-green-500 to-teal-500",
    },
    {
      id: 4,
      title: "SAYIT Social Platform",
      category: "Social Media & Real-time",
      description:
        "Twitter-like social platform with real-time interactions and modern UI",
      longDescription:
        "A modern social media platform inspired by Twitter, featuring real-time messaging, user interactions, and a clean, responsive interface. Includes advanced features like Google authentication, media sharing, and social interactions.",
      image: "/api/placeholder/600/400",
      technologies: [
        "React",
        "Firebase",
        "Firestore",
        "Node.js",
        "Google Auth",
        "Tailwind CSS",
      ],
      features: [
        "Real-time posting and interactions",
        "Google authentication integration",
        "Advanced social features (retweet, like, bookmark)",
        "Responsive design with modern UI/UX",
        "Profile management and customization",
      ],
      metrics: {
        realtime: "< 1sec",
        auth: "OAuth2",
        responsive: "100%",
        features: "10+ social",
      },
      status: "Completed",
      githubUrl: "https://github.com/karlmabs/sayit",
      liveUrl: "https://sayit-demo.netlify.app",
      icon: Globe,
      color: "from-yellow-500 to-orange-500",
    },
    {
      id: 5,
      title: "Enterprise Banking System",
      category: "Fintech & Security",
      description:
        "Secure banking application processing $2M+ daily transactions",
      longDescription:
        "A comprehensive enterprise banking solution with mobile and web interfaces. Features multi-factor authentication, real-time transaction processing, and advanced security measures. Serves thousands of customers with 99.9% uptime.",
      image: "/api/placeholder/600/400",
      technologies: [
        "SpringBoot",
        "PostgreSQL",
        "React Native",
        "Keycloak",
        "Microservices",
        "Docker",
      ],
      features: [
        "Multi-factor authentication with Keycloak",
        "Real-time transaction processing",
        "Mobile banking app with 4.8/5 rating",
        "Advanced security with zero breaches",
        "Employee management platform",
      ],
      metrics: {
        transactions: "$2M+ daily",
        uptime: "99.9%",
        customers: "10,000+",
        rating: "4.8/5",
      },
      status: "Production",
      company: "PKFOKAM Research Center",
      icon: Database,
      color: "from-red-500 to-pink-500",
    },
    {
      id: 6,
      title: "MabsPlace Platform",
      category: "Portfolio & Services",
      description:
        "Personal portfolio and services platform with multiple components",
      longDescription:
        "A comprehensive personal branding platform including portfolio website, admin dashboard, progressive web app, and service offerings. Showcases full-stack development skills and modern web technologies.",
      image: "/api/placeholder/600/400",
      technologies: [
        "React",
        "TypeScript",
        "Node.js",
        "PostgreSQL",
        "PWA",
        "Tailwind CSS",
      ],
      features: [
        "Modern responsive portfolio design",
        "Admin dashboard for content management",
        "Progressive Web App (PWA) capabilities",
        "Service booking and management system",
        "SEO optimized with excellent performance",
      ],
      metrics: {
        components: "4 major",
        performance: "A+ rating",
        responsive: "100%",
        pwa: "Enabled",
      },
      status: "Active",
      liveUrl: "https://mabsplace.com",
      icon: Monitor,
      color: "from-indigo-500 to-purple-500",
    },
  ];

  const categories = [
    "All",
    "Robotics & Real-time Systems",
    "DevOps & Infrastructure",
    "Full-Stack Web & Mobile",
    "Social Media & Real-time",
    "Fintech & Security",
    "Portfolio & Services",
  ];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading">Featured Projects</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Showcase of impactful solutions across robotics, fintech, and web
            applications
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-lg"
                  : "glass-morphism text-gray-300 hover:text-white hover:bg-white/10"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => {
              const IconComponent = project.icon;
              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="project-card group cursor-pointer"
                  onClick={() => setSelectedProject(project.id)}
                  whileHover={{ y: -5 }}
                >
                  {/* Project Image Placeholder */}
                  <div
                    className={`h-48 bg-gradient-to-br ${project.color} rounded-t-xl flex items-center justify-center relative overflow-hidden`}
                  >
                    <IconComponent className="w-16 h-16 text-white/80" />
                    <div className="absolute inset-0 bg-black/20" />

                    {/* Status Badge */}
                    <div className="absolute top-4 right-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          project.status === "Production" ||
                          project.status === "Active"
                            ? "bg-green-500/20 text-green-300 border border-green-500/30"
                            : project.status === "Completed"
                            ? "bg-blue-500/20 text-blue-300 border border-blue-500/30"
                            : "bg-yellow-500/20 text-yellow-300 border border-yellow-500/30"
                        }`}
                      >
                        {project.status}
                      </span>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <div className="mb-3">
                      <h3 className="text-xl font-bold text-white group-hover:text-primary-400 transition-colors mb-1">
                        {project.title}
                      </h3>
                      <p className="text-sm text-primary-400 font-medium">
                        {project.category}
                      </p>
                      {project.company && (
                        <p className="text-sm text-gray-500">
                          {project.company}
                        </p>
                      )}
                    </div>

                    <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                      {project.description}
                    </p>

                    {/* Key Metrics */}
                    <div className="grid grid-cols-2 gap-2 mb-4">
                      {Object.entries(project.metrics)
                        .slice(0, 4)
                        .map(([key, value]) => (
                          <div
                            key={key}
                            className="text-center p-2 bg-white/5 rounded-lg"
                          >
                            <div className="text-primary-400 font-semibold text-sm">
                              {value}
                            </div>
                            <div className="text-gray-500 text-xs capitalize">
                              {key}
                            </div>
                          </div>
                        ))}
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-gray-800/50 text-gray-300 rounded text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="px-2 py-1 bg-gray-700/50 text-gray-400 rounded text-xs">
                          +{project.technologies.length - 4}
                        </span>
                      )}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-2">
                      {project.liveUrl && (
                        <motion.a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center space-x-2 px-3 py-2 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-lg text-sm font-medium hover:from-primary-600 hover:to-primary-700 transition-all duration-300"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={(e) => e.stopPropagation()}
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span>Live Demo</span>
                        </motion.a>
                      )}
                      {project.githubUrl && (
                        <motion.a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center px-3 py-2 glass-morphism hover:bg-white/10 text-gray-300 hover:text-white rounded-lg transition-all duration-300"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Github className="w-4 h-4" />
                        </motion.a>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Project Detail Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-gray-900/95 backdrop-blur-sm border border-gray-700 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                {(() => {
                  const project = projects.find(
                    (p) => p.id === selectedProject
                  );
                  if (!project) return null;
                  const IconComponent = project.icon;

                  return (
                    <div className="p-6">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-6">
                        <div className="flex items-center space-x-4">
                          <div
                            className={`w-16 h-16 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center`}
                          >
                            <IconComponent className="w-8 h-8 text-white" />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-white">
                              {project.title}
                            </h3>
                            <p className="text-primary-400 font-medium">
                              {project.category}
                            </p>
                            {project.company && (
                              <p className="text-gray-400">{project.company}</p>
                            )}
                          </div>
                        </div>
                        <button
                          onClick={() => setSelectedProject(null)}
                          className="w-8 h-8 rounded-full glass-morphism hover:bg-white/10 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300"
                        >
                          ✕
                        </button>
                      </div>

                      {/* Description */}
                      <p className="text-gray-300 mb-6 leading-relaxed">
                        {project.longDescription}
                      </p>

                      {/* Features */}
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                          <Zap className="w-5 h-5 text-primary-400 mr-2" />
                          Key Features
                        </h4>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {project.features.map((feature, idx) => (
                            <li
                              key={idx}
                              className="flex items-start space-x-2 text-gray-300"
                            >
                              <span className="text-primary-400 mt-1">•</span>
                              <span className="text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                          <Code className="w-5 h-5 text-primary-400 mr-2" />
                          Technologies Used
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 bg-gradient-to-r from-gray-800 to-gray-700 text-gray-300 rounded-full text-sm border border-gray-600"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex space-x-4">
                        {project.liveUrl && (
                          <motion.a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-lg font-medium hover:from-primary-600 hover:to-primary-700 transition-all duration-300"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <ExternalLink className="w-5 h-5" />
                            <span>View Live Demo</span>
                          </motion.a>
                        )}
                        {project.githubUrl && (
                          <motion.a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2 px-6 py-3 glass-morphism hover:bg-white/10 text-gray-300 hover:text-white rounded-lg font-medium transition-all duration-300"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <Github className="w-5 h-5" />
                            <span>View Source</span>
                          </motion.a>
                        )}
                      </div>
                    </div>
                  );
                })()}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
