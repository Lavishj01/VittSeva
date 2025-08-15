"use client"

import { motion } from "framer-motion"
import { PlayCircle, Calendar, Phone, Mail, ExternalLink, Users, Award, TrendingUp, Shield } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { LINKEDIN_URL } from "@/constants/constants"

const demoFeatures = [
  {
    icon: TrendingUp,
    title: "Predictive Analytics",
    description: "See AI predictions in action"
  },
  {
    icon: Shield,
    title: "Real-time Monitoring",
    description: "Live equipment insights"
  },
  {
    icon: Award,
    title: "ROI Calculator",
    description: "Estimate your savings"
  }
]

const socialLinks = [
  {
    name: "LinkedIn",
    href: LINKEDIN_URL,
    icon: "linkedin"
  }
]

const stats = [
  { label: "Enterprise Clients", value: "500+" },
  { label: "Uptime Improvement", value: "70%" },
  { label: "Cost Reduction", value: "40%" },
  { label: "Global Presence", value: "25+" }
]

export default function RightSidebar() {
  return (
    <div className="sticky top-24 space-y-6">
      {/* Experience Oxmaint AI */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-br from-primary to-primary/80 rounded-xl p-6 text-primary-foreground"
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-xl bg-primary-foreground/10 flex items-center justify-center">
            <Image 
              src="/portal-logo/logo-wb.png" 
              alt="Oxmaint AI" 
              width={32} 
              height={32}
              className="rounded-lg"
            />
          </div>
          <div>
            <h3 className="text-lg font-bold">Experience Oxmaint.AI</h3>
            <p className="text-sm text-primary-foreground/80">See the future of maintenance</p>
          </div>
        </div>

        <p className="text-sm text-primary-foreground/80 mb-6">
          Transform your operations with AI-powered predictive maintenance. Join 500+ enterprises already saving millions.
        </p>

        <div className="space-y-3 mb-6">
          {demoFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="flex items-start gap-3"
            >
              <feature.icon className="w-4 h-4 mt-0.5 text-primary-foreground/80" />
              <div>
                <div className="text-sm font-medium">{feature.title}</div>
                <div className="text-xs text-primary-foreground/70">{feature.description}</div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="space-y-3">
          <motion.a
            href="mailto:contact@oxmaint.ai?subject=Book Demo"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center justify-center gap-3 w-full py-3 bg-primary-foreground text-primary rounded-lg font-medium hover:bg-primary-foreground/90 transition-all shadow-lg"
          >
            <PlayCircle className="w-4 h-4" />
            <span>Book Live Demo</span>
          </motion.a>
          
          <motion.a
            href="tel:+18005556962"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center justify-center gap-3 w-full py-3 border border-primary-foreground/30 text-primary-foreground rounded-lg font-medium hover:bg-primary-foreground/10 transition-all"
          >
            <Phone className="w-4 h-4" />
            <span>Call Expert</span>
          </motion.a>
        </div>
      </motion.div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="bg-background rounded-xl p-6 border border-border"
      >
        <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
          <Award className="w-5 h-5 text-primary" />
          Proven Results
        </h3>
        
        <div className="grid grid-cols-2 gap-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="text-center p-3 rounded-lg bg-primary/5 border border-primary/10"
            >
              <div className="text-lg font-bold text-primary">{stat.value}</div>
              <div className="text-xs text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Quick Contact */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-background rounded-xl p-6 border border-border"
      >
        <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
          <Users className="w-5 h-5 text-primary" />
          Get in Touch
        </h3>
        
        <p className="text-sm text-muted-foreground mb-4">
          Ready to revolutionize your maintenance operations? Our experts are here to help.
        </p>
        
        <div className="space-y-3">
          <motion.a
            href="mailto:contact@oxmaint.ai"
            whileHover={{ scale: 1.02, x: 5 }}
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-primary/5 transition-all group"
          >
            <Mail className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
            <div>
              <div className="text-sm font-medium text-foreground">Email Us</div>
              <div className="text-xs text-muted-foreground">contact@oxmaint.ai</div>
            </div>
          </motion.a>
          
          <motion.a
            href="tel:+18005556962"
            whileHover={{ scale: 1.02, x: 5 }}
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-primary/5 transition-all group"
          >
            <Phone className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
            <div>
              <div className="text-sm font-medium text-foreground">Call Us</div>
              <div className="text-xs text-muted-foreground">+1 (800) 555-6962</div>
            </div>
          </motion.a>
          
          <motion.a
            href="#"
            whileHover={{ scale: 1.02, x: 5 }}
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-primary/5 transition-all group"
          >
            <Calendar className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
            <div>
              <div className="text-sm font-medium text-foreground">Schedule Meeting</div>
              <div className="text-xs text-muted-foreground">Book a consultation</div>
            </div>
          </motion.a>
        </div>
      </motion.div>

      {/* Social Links */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="bg-background rounded-xl p-6 border border-border"
      >
        <h3 className="text-lg font-semibold text-foreground mb-4">Follow Us</h3>
        
        <div className="flex gap-3">
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="w-10 h-10 rounded-lg bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors group"
            >
              {social.icon === 'linkedin' && <ExternalLink className="w-4 h-4 text-primary" />}
              {social.icon === 'twitter' && <ExternalLink className="w-4 h-4 text-primary" />}
              {social.icon === 'github' && <ExternalLink className="w-4 h-4 text-primary" />}
            </motion.a>
          ))}
        </div>
        
        <p className="text-xs text-muted-foreground mt-3">
          Stay updated with the latest in AI-powered maintenance solutions.
        </p>
      </motion.div>

      {/* Availability Notice */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="bg-green-50 border border-green-200 rounded-xl p-4 text-center"
      >
        <div className="w-3 h-3 bg-green-400 rounded-full mx-auto mb-2 animate-pulse" />
        <div className="text-sm font-medium text-green-800">We're Online!</div>
        <div className="text-xs text-green-600">Available 24/7 for support</div>
      </motion.div>
    </div>
  )
}