"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin, ArrowUp, Linkedin, Twitter } from "lucide-react"
import Image from "next/image"
import { PHONE_NUMBER, LINKEDIN_URL, EMAIL, ADDRESS } from "@/constants/constants"

const contactLinks = [
  { name: "Contact Us", href: `mailto:${EMAIL}`, icon: Mail },
  { name: "Sales", href: `tel:${PHONE_NUMBER}`, icon: Phone },
  { name: "LinkedIn", href: LINKEDIN_URL, icon: Linkedin },
]

const quickLinks = [
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Solutions", href: "#solutions" },
  { name: "Company", href: "#company" },
  { name: "Contact", href: "#contact" },
]

const solutions = [
  { name: "Predictive Maintenance", href: "#solutions" },
  { name: "Real-time Monitoring", href: "#solutions" },
  { name: "Process Optimization", href: "#solutions" },
  { name: "AI Analytics", href: "#solutions" },
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

  return (
    <footer className="relative bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-lg flex items-center justify-center">
                <Image 
                  src="/portal-logo/logo-wb.png" 
                  alt="Oxmaint AI Logo" 
                  width={40} 
                  height={40}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-xl font-bold text-primary-foreground">Oxmaint AI</span>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-primary-foreground/70 max-w-xs"
            >
              Revolutionizing maintenance operations with cutting-edge artificial intelligence. 
              Trusted by 500+ enterprise clients worldwide.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center gap-2 text-sm text-primary-foreground/70"
            >
              <MapPin className="w-4 h-4" />
              <span>{ADDRESS} | Global Presence</span>
            </motion.div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg font-semibold text-primary-foreground"
            >
              Quick Links
            </motion.h3>
            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-2"
            >
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault()
                      handleNavClick(link.href)
                    }}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </motion.ul>
          </div>

          {/* Solutions */}
          <div className="space-y-4">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg font-semibold text-primary-foreground"
            >
              AI Solutions
            </motion.h3>
            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="space-y-2"
            >
              {solutions.map((solution) => (
                <li key={solution.name}>
                  <a
                    href={solution.href}
                    onClick={(e) => {
                      e.preventDefault()
                      handleNavClick(solution.href)
                    }}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {solution.name}
                  </a>
                </li>
              ))}
            </motion.ul>
          </div>

          {/* Contact Section */}
          <div className="space-y-4">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg font-semibold text-primary-foreground"
            >
              Get in Touch
            </motion.h3>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="space-y-3"
            >
              {contactLinks.map((contact, index) => (
                <motion.a
                  key={contact.name}
                  href={contact.href}
                  target={contact.href.startsWith("http") ? "_blank" : undefined}
                  rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  whileHover={{ scale: 1.05, x: 5 }}
                  className="flex items-center gap-3 text-primary-foreground/70 hover:text-primary-foreground transition-all"
                >
                  <contact.icon className="w-4 h-4" />
                  <span className="text-sm">{contact.name}</span>
                </motion.a>
              ))}
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-sm text-primary-foreground/70"
            >
              Ready to transform your maintenance operations? Contact our team today.
            </motion.p>
          </div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-primary-foreground/20"
        >
          <div className="flex items-center gap-4 text-sm text-primary-foreground/70 mb-4 md:mb-0">
            <span>© {new Date().getFullYear()} Oxmaint AI. All rights reserved.</span>
            <span>•</span>
            <a href="#" className="hover:text-primary-foreground transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-primary-foreground transition-colors">Terms of Service</a>
          </div>
          
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4" />
          </motion.button>
        </motion.div>
      </div>
    </footer>
  )
} 