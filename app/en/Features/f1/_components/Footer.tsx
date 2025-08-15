"use client"

import { motion } from "framer-motion"
import { 
  Mail, Phone, MapPin, ArrowUp, IndianRupee, Shield, 
  TrendingUp, Users, Award, Heart, Star, CheckCircle,
  Facebook, Twitter, Linkedin, Instagram
} from "lucide-react"

const VITTSEVA_PHONE = "+91 83101 99396"
const VITTSEVA_EMAIL = "info@vittseva.com" 
const VITTSEVA_ADDRESS = "Koramangala, Bangalore"

const vitSevaContactLinks = [
  { name: "Contact Us", href: `mailto:${VITTSEVA_EMAIL}`, icon: Mail },
  { name: "Call Us", href: `tel:${VITTSEVA_PHONE}`, icon: Phone },
  { name: "Visit Us", href: "#", icon: MapPin },
]

const vitSevaQuickLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Free", href: "#services" },
  { name: "Blog", href: "#services" },
  { name: "Our Team", href: "#team" },
  { name: "Contact", href: "#contact" },
]

const vitSevaServices = [
  { name: "Investment Planning", href: "#services" },
  { name: "Insurance Solutions", href: "#services" },
  { name: "Tax Planning", href: "#services" },
  { name: "Loan Advisory", href: "#services" },
  { name: "Wealth Management", href: "#services" },
]

const vitSevaMoreServices = [
  { name: "NRI Services", href: "#services" },
]

const vitSevaSocialLinks = [
  { name: "Facebook", icon: Facebook, href: "#", color: "blue" },
  { name: "Twitter", icon: Twitter, href: "#", color: "blue" },
  { name: "LinkedIn", icon: Linkedin, href: "#", color: "green" },
  { name: "Instagram", icon: Instagram, href: "#", color: "green" },
]

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleNavClick = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href)
      element?.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleContactClick = () => {
    window.open("https://vittseva.com/contact/?source=footer", "_blank")
  }

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 to-slate-800 text-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-blue-600/5" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />

      <div className="relative z-10 w-full px-4 py-8">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-5 gap-8 mb-8">
            {/* VittSeva Brand Section */}
            <div className="md:col-span-2 space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-3"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-green-500 to-blue-600 flex items-center justify-center p-2">
                  <IndianRupee className="w-6 h-6 text-white" />
                </div>
                <div>
                  <span className="text-xl font-bold">
                    <span className="text-green-400">Vitt</span><span className="text-blue-400">Seva</span>
                  </span>
                  <p className="text-sm text-gray-400">वित्त सेवा</p>
                </div>
              </motion.div>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-base text-gray-300 leading-relaxed max-w-md"
              >
                Financial services simple, personal & optimal for individuals and businesses.
              </motion.p>

              {/* VittSeva Address */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex items-center gap-2 text-sm text-gray-300"
              >
                <MapPin className="w-4 h-4 text-green-400" />
                <span>{VITTSEVA_ADDRESS}</span>
              </motion.div>
            </div>

            {/* VittSeva Quick Links */}
            <div className="space-y-4">
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-base font-semibold text-green-400"
              >
                Quick Links
              </motion.h3>
              <motion.ul
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="space-y-2"
              >
                {vitSevaQuickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault()
                        handleNavClick(link.href)
                      }}
                      className="text-gray-300 hover:text-white transition-colors cursor-pointer text-sm flex items-center gap-2"
                    >
                      <CheckCircle className="w-3 h-3 text-blue-400" />
                      {link.name}
                    </a>
                  </li>
                ))}
              </motion.ul>
            </div>

            {/* VittSeva Our Services */}
            <div className="space-y-4">
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-base font-semibold text-blue-400"
              >
                Our Services
              </motion.h3>
              <motion.ul
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="space-y-2"
              >
                {vitSevaServices.map((service) => (
                  <li key={service.name}>
                    <a
                      href={service.href}
                      onClick={(e) => {
                        e.preventDefault()
                        handleNavClick(service.href)
                      }}
                      className="text-gray-300 hover:text-white transition-colors cursor-pointer text-sm"
                    >
                      {service.name}
                    </a>
                  </li>
                ))}
              </motion.ul>

              {/* More Services */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.35 }}
              >
                <h4 className="text-sm font-semibold text-green-400 mb-2">More Services</h4>
                <ul className="space-y-1">
                  {vitSevaMoreServices.map((service) => (
                    <li key={service.name}>
                      <a
                        href={service.href}
                        onClick={(e) => {
                          e.preventDefault()
                          handleNavClick(service.href)
                        }}
                        className="text-gray-300 hover:text-white transition-colors cursor-pointer text-sm"
                      >
                        {service.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* VittSeva Contact & Social */}
            <div className="space-y-4">
              {/* VittSeva CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-gradient-to-r from-green-500/10 to-blue-600/10 rounded-lg p-4 border border-green-500/20"
              >
                <p className="text-sm text-gray-300 leading-relaxed mb-3">
                  Ready to secure your financial future? Get personalized advice.
                </p>
                <motion.button
                  onClick={handleContactClick}
                  whileHover={{ scale: 1.05 }}
                  className="w-full bg-gradient-to-r from-green-500 to-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:from-green-600 hover:to-blue-700 transition-colors"
                >
                  Book Consultation
                </motion.button>
              </motion.div>

              {/* VittSeva Get in Touch */}
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.35 }}
                className="text-base font-semibold text-green-400"
              >
                Get in Touch
              </motion.h3>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="space-y-2"
              >
                {vitSevaContactLinks.map((contact) => (
                  <motion.a
                    key={contact.name}
                    href={contact.href}
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="flex items-center gap-2 text-gray-300 hover:text-white transition-all text-sm"
                  >
                    <contact.icon className="w-4 h-4 text-blue-400" />
                    <span>{contact.name}</span>
                  </motion.a>
                ))}
              </motion.div>

              {/* Contact Details */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.45 }}
                className="space-y-1 text-sm text-gray-300"
              >
                <p>{VITTSEVA_PHONE}</p>
                <p>{VITTSEVA_EMAIL}</p>
              </motion.div>

              {/* VittSeva Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex gap-3 pt-2"
              >
                {vitSevaSocialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${
                      social.color === 'green' 
                        ? 'bg-green-500/20 text-green-400 hover:bg-green-500/30' 
                        : 'bg-blue-600/20 text-blue-400 hover:bg-blue-600/30'
                    }`}
                  >
                    <social.icon className="w-4 h-4" />
                  </motion.a>
                ))}
              </motion.div>
            </div>
          </div>

          {/* VittSeva Disclaimer Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-gradient-to-r from-green-500/5 to-blue-600/5 rounded-xl p-4 mb-6 border border-green-500/10"
          >
            <div className="flex items-start gap-2 mb-2">
              <Shield className="w-4 h-4 text-green-400 mt-0.5" />
              <span className="text-sm font-semibold text-white">Disclaimer</span>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed">
              VittSeva is a financial advisory service. All investments are subject to market risks. 
              Past performance does not guarantee future results. Please read all scheme related documents carefully before investing. 
              Consult with our certified financial advisors for recommendations tailored to your specific financial situation.
            </p>
          </motion.div>

          {/* VittSeva Bottom Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-col md:flex-row items-center justify-between pt-6 border-t border-gray-700"
          >
            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 text-sm text-gray-400 mb-4 md:mb-0">
              <span>
                © {new Date().getFullYear()} VittSeva Financial Advisory Services. All rights reserved.
              </span>
              <div className="flex items-center gap-3">
                <span className="hidden md:inline">•</span>
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <span>•</span>
                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                <span>•</span>
                <a href="#" className="hover:text-white transition-colors">Disclaimer</a>
              </div>
            </div>
            
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 text-sm bg-gradient-to-r from-green-500 to-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-green-600 hover:to-blue-700 transition-colors"
            >
              <span>Back to top</span>
              <ArrowUp className="w-4 h-4" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}