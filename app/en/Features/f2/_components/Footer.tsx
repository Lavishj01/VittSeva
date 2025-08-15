"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin, ArrowUp } from "lucide-react"
import Image from "next/image"

const PHONE_NUMBER = "+91 83101 99396"
const EMAIL = "info@vittseva.com" 
const ADDRESS = "Koramangala, Bangalore"

const contactLinks = [
  { name: "Contact Us", href: `mailto:${EMAIL}`, icon: Mail },
  { name: "Call Us", href: `tel:${PHONE_NUMBER}`, icon: Phone },
]

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Our Team", href: "#team" },
  { name: "Contact", href: "#contact" },
]

const financialServices = [
  { name: "Investment Planning", href: "#services" },
  { name: "Insurance Solutions", href: "#services" },
  { name: "Tax Planning", href: "#services" },
  { name: "Loan Advisory", href: "#services" },
  { name: "Wealth Management", href: "#services" },
  { name: "NRI Services", href: "#services" },
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
    <footer className="relative bg-primary text-primary-foreground">
      <div className="w-full px-4 py-6 relative z-10">
        <div className="grid md:grid-cols-5 gap-4 mb-4">
          {/* Brand Section */}
          <div className="space-y-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2"
            >
              <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center p-1.5">
                <Image 
                  src="/portal-logo/logo-wb.png" 
                  alt="VittSeva Logo" 
                  width={32}
                  height={32}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-lg font-bold text-primary-foreground">VittSeva</span>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-primary-foreground/70 text-xs leading-relaxed"
            >
              Financial services simple, personal & optimal for individuals and businesses.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center gap-2 text-xs text-primary-foreground/70"
            >
              <MapPin className="w-3 h-3" />
              <span>{ADDRESS}</span>
            </motion.div>
          </div>

          {/* Quick Links */}
          <div className="space-y-2">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-sm font-semibold text-primary-foreground"
            >
              Quick Links
            </motion.h3>
            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-0.5"
            >
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault()
                      handleNavClick(link.href)
                    }}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors cursor-pointer text-xs"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </motion.ul>
          </div>

          {/* Financial Services - Column 1 */}
          <div className="space-y-2">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-sm font-semibold text-primary-foreground"
            >
              Our Services
            </motion.h3>
            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="space-y-0.5"
            >
              {financialServices.slice(0, 5).map((service) => (
                <li key={service.name}>
                  <a
                    href={service.href}
                    onClick={(e) => {
                      e.preventDefault()
                      handleNavClick(service.href)
                    }}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors cursor-pointer text-xs"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </motion.ul>
          </div>

          {/* Financial Services - Column 2 */}
          <div className="space-y-2">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="text-sm font-semibold text-primary-foreground opacity-0 md:opacity-100"
            >
              More Services
            </motion.h3>
            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="space-y-0.5"
            >
              {financialServices.slice(5).map((service) => (
                <li key={service.name}>
                  <a
                    href={service.href}
                    onClick={(e) => {
                      e.preventDefault()
                      handleNavClick(service.href)
                    }}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors cursor-pointer text-xs"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </motion.ul>
          </div>

          {/* Contact Section */}
          <div className="space-y-2">
            {/* Call to Action - Now positioned above Get in Touch */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white/5 rounded-lg p-2"
            >
              <p className="text-xs text-primary-foreground/90 text-center leading-tight">
                Ready to secure your financial future? Get personalized advice.
              </p>
            </motion.div>

            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="text-sm font-semibold text-primary-foreground"
            >
              Get in Touch
            </motion.h3>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="space-y-1"
            >
              {contactLinks.map((contact, index) => (
                <motion.a
                  key={contact.name}
                  href={contact.href}
                  whileHover={{ scale: 1.05, x: 5 }}
                  className="flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground transition-all"
                >
                  <contact.icon className="w-3 h-3" />
                  <span className="text-xs">{contact.name}</span>
                </motion.a>
              ))}
              
              <motion.button
                onClick={handleContactClick}
                whileHover={{ scale: 1.05, x: 5 }}
                className="flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground transition-all w-full text-left"
              >
                <MapPin className="w-3 h-3" />
                <span className="text-xs">Visit Us</span>
              </motion.button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="space-y-0.5 text-xs text-primary-foreground/70"
            >
              <div className="flex items-center gap-1">
                <Phone className="w-2.5 h-2.5" />
                <span>{PHONE_NUMBER}</span>
              </div>
              <div className="flex items-center gap-1">
                <Mail className="w-2.5 h-2.5" />
                <span>{EMAIL}</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Disclaimer Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-white/5 rounded-lg p-3 mb-4"
        >
          <p className="text-xs text-primary-foreground/60 leading-relaxed text-center">
            <strong>Disclaimer:</strong> VittSeva is a financial advisory service. All investments are subject to market risks. 
            Past performance does not guarantee future results. Please read all scheme related documents carefully before investing. 
            Consult with our certified financial advisors for recommendations tailored to your specific financial situation.
          </p>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-col md:flex-row items-center justify-between pt-4 border-t border-primary-foreground/20"
        >
          <div className="flex flex-col md:flex-row items-center gap-1 md:gap-3 text-xs text-primary-foreground/70 mb-3 md:mb-0">
            <span>© {new Date().getFullYear()} VittSeva Financial Advisory Services. All rights reserved.</span>
            <div className="flex items-center gap-1 md:gap-3">
              <span className="hidden md:inline">•</span>
              <a href="#" className="hover:text-primary-foreground transition-colors">Privacy Policy</a>
              <span>•</span>
              <a href="#" className="hover:text-primary-foreground transition-colors">Terms of Service</a>
              <span>•</span>
              <a href="#" className="hover:text-primary-foreground transition-colors">Disclaimer</a>
            </div>
          </div>
          
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-1 text-xs text-primary-foreground/70 hover:text-primary-foreground transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3 h-3" />
          </motion.button>
        </motion.div>
      </div>
    </footer>
  )
}