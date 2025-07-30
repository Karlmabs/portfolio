import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Linkedin,
  Github,
  MapPin,
  Send,
  CheckCircle,
  MessageCircle,
  Calendar,
  ExternalLink,
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });

      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "maboukarl2@gmail.com",
      href: "mailto:maboukarl2@gmail.com",
      color: "text-red-400",
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "linkedin.com/in/karlmabs",
      href: "https://linkedin.com/in/karlmabs",
      color: "text-blue-400",
    },
    {
      icon: Github,
      title: "GitHub",
      value: "github.com/karlmabs",
      href: "https://github.com/karlmabs",
      color: "text-gray-400",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Brussels, Belgium",
      href: "#",
      color: "text-green-400",
    },
  ];

  const quickActions = [
    {
      title: "Schedule a Call",
      description: "Book a 30-minute consultation",
      icon: Calendar,
      href: "https://calendly.com/karlmabou",
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "View Resume",
      description: "Download my latest CV",
      icon: ExternalLink,
      href: "/karl-mabou-resume.pdf",
      color: "from-green-500 to-teal-500",
    },
    {
      title: "WhatsApp",
      description: "Message me directly",
      icon: MessageCircle,
      href: "https://wa.me/+32488909193",
      color: "from-green-600 to-green-500",
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading">Let's Work Together</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Ready to bring your next project to life? Let's discuss how I can
            help you achieve your goals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-1"
          >
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <MessageCircle className="w-6 h-6 text-primary-400 mr-2" />
                  Get in Touch
                </h3>
                <p className="text-gray-400 mb-6">
                  I'm always open to discussing new opportunities, innovative
                  projects, or just having a chat about technology.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-4">
                {contactInfo.map((item) => {
                  const IconComponent = item.icon;
                  return (
                    <motion.a
                      key={item.title}
                      href={item.href}
                      target={
                        item.href.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        item.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="flex items-center space-x-4 p-4 glass-morphism rounded-xl hover:bg-white/10 transition-all duration-300 group"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div
                        className={`w-12 h-12 rounded-lg bg-gradient-to-br from-gray-800 to-gray-700 flex items-center justify-center group-hover:from-primary-600 group-hover:to-primary-700 transition-all duration-300`}
                      >
                        <IconComponent
                          className={`w-6 h-6 ${item.color} group-hover:text-white transition-colors duration-300`}
                        />
                      </div>
                      <div>
                        <h4 className="text-white font-medium group-hover:text-primary-300 transition-colors">
                          {item.title}
                        </h4>
                        <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">
                          {item.value}
                        </p>
                      </div>
                    </motion.a>
                  );
                })}
              </div>

              {/* Quick Actions */}
              <div className="mt-8">
                <h4 className="text-lg font-semibold text-white mb-4">
                  Quick Actions
                </h4>
                <div className="space-y-3">
                  {quickActions.map((action) => {
                    const IconComponent = action.icon;
                    return (
                      <motion.a
                        key={action.title}
                        href={action.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center space-x-3 p-3 rounded-lg bg-gradient-to-r ${action.color} bg-opacity-10 border border-white/10 hover:bg-opacity-20 transition-all duration-300 group`}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <IconComponent className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
                        <div>
                          <div className="text-white font-medium text-sm">
                            {action.title}
                          </div>
                          <div className="text-gray-400 text-xs">
                            {action.description}
                          </div>
                        </div>
                      </motion.a>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2"
          >
            <div className="glass-morphism p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Send className="w-6 h-6 text-primary-400 mr-2" />
                Send Message
              </h3>

              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-lg flex items-center space-x-2 text-green-300"
                >
                  <CheckCircle className="w-5 h-5" />
                  <span>
                    Message sent successfully! I'll get back to you soon.
                  </span>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all duration-300"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all duration-300"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all duration-300"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all duration-300 resize-none"
                    placeholder="Tell me about your project, timeline, and how I can help..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 px-6 rounded-lg font-semibold text-white transition-all duration-300 flex items-center justify-center space-x-2 ${
                    isSubmitting
                      ? "bg-gray-600 cursor-not-allowed"
                      : "bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 hover:scale-[1.02] active:scale-[0.98]"
                  }`}
                  whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                  whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>
              </form>

              <div className="mt-6 pt-6 border-t border-gray-700/50">
                <p className="text-gray-400 text-sm text-center">
                  I typically respond within 24 hours. For urgent matters, feel
                  free to reach out via{" "}
                  <a
                    href="https://linkedin.com/in/karlmabs"
                    className="text-primary-400 hover:text-primary-300 transition-colors"
                  >
                    LinkedIn
                  </a>{" "}
                  or{" "}
                  <a
                    href="https://wa.me/+32488909193"
                    className="text-primary-400 hover:text-primary-300 transition-colors"
                  >
                    WhatsApp
                  </a>
                  .
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16 p-8 glass-morphism rounded-2xl"
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to Start Your Project?
          </h3>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Whether you need a full-stack developer, robotics engineer, or
            system architect, I'm here to help bring your vision to life with
            cutting-edge technology and proven expertise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="mailto:maboukarl2@gmail.com"
              className="px-8 py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-lg font-medium hover:from-primary-600 hover:to-primary-700 transition-all duration-300 flex items-center justify-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="w-5 h-5" />
              <span>Start a Conversation</span>
            </motion.a>
            <motion.a
              href="/karl-mabou-resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 glass-morphism hover:bg-white/10 text-gray-300 hover:text-white rounded-lg font-medium transition-all duration-300 flex items-center justify-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ExternalLink className="w-5 h-5" />
              <span>Download Resume</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
