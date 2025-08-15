"use client"

import { motion } from "framer-motion"
import { MessageCircle, BookOpen, ExternalLink, Users, Phone, Mail, Linkedin, Github } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { LINKEDIN_URL } from "@/constants/constants"

const teamLinks = [
  {
    title: "Schedule a Discussion",
    description: "Connect with our experts for personalized guidance",
    icon: MessageCircle,
    href: "mailto:contact@oxmaint.ai?subject=Discussion Request",
    type: "primary"
  },
  {
    title: "Book a Demo",
    description: "See Oxmaint AI in action",
    icon: Users,
    href: "tel:+18005556962",
    type: "secondary"
  }
]

const blogLinks = [
  {
    title: "Latest Articles",
    description: "Explore our newest insights",
    icon: BookOpen,
    href: "/blogs"
  },
  {
    title: "Technology Insights",
    description: "Deep dive into AI & ML",
    icon: ExternalLink,
    href: "/blogs?category=technology"
  },
  {
    title: "Case Studies",
    description: "Real-world success stories",
    icon: ExternalLink,
    href: "/blogs?category=case-studies"
  }
]

const usefulLinks = [
  {
    title: "Documentation",
    description: "Technical guides & APIs",
    icon: BookOpen,
    href: "#",
    external: false
  },
  {
    title: "LinkedIn",
    description: "Follow us for updates",
    icon: Linkedin,
    href: LINKEDIN_URL,
    external: true
  }
]

export default function LeftSidebar() {
  return (
    <div className="sticky top-24 space-y-6">
      {/* Connect with Team */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl p-6 border border-primary/20"
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
            <MessageCircle className="w-5 h-5 text-primary" />
          </div>
          <h3 className="text-lg font-semibold text-foreground">Connect with Our Team</h3>
        </div>
        
        <p className="text-sm text-muted-foreground mb-4">
          Get personalized insights and solutions tailored to your needs.
        </p>
        
        <div className="space-y-3">
          {teamLinks.map((link, index) => (
            <motion.a
              key={link.title}
              href={link.href}
              whileHover={{ scale: 1.02, x: 5 }}
              className={`flex items-start gap-3 p-3 rounded-lg transition-all ${
                link.type === 'primary' 
                  ? 'bg-primary text-primary-foreground hover:bg-primary/90' 
                  : 'bg-background border border-border hover:border-primary/30'
              }`}
            >
              <link.icon className="w-4 h-4 mt-0.5 flex-shrink-0" />
              <div>
                <div className="text-sm font-medium">{link.title}</div>
                <div className={`text-xs ${
                  link.type === 'primary' ? 'text-primary-foreground/80' : 'text-muted-foreground'
                }`}>
                  {link.description}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </motion.div>

      {/* More Blogs */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="bg-background rounded-xl p-6 border border-border"
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
            <BookOpen className="w-5 h-5 text-primary" />
          </div>
          <h3 className="text-lg font-semibold text-foreground">Explore More</h3>
        </div>
        
        <div className="space-y-3">
          {blogLinks.map((link, index) => (
            <motion.div
              key={link.title}
              whileHover={{ x: 5 }}
            >
              <Link
                href={link.href}
                className="flex items-start gap-3 p-3 rounded-lg hover:bg-primary/5 transition-colors group"
              >
                <link.icon className="w-4 h-4 mt-0.5 text-muted-foreground group-hover:text-primary transition-colors" />
                <div>
                  <div className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                    {link.title}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {link.description}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Useful Links */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-background rounded-xl p-6 border border-border"
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
            <ExternalLink className="w-5 h-5 text-primary" />
          </div>
          <h3 className="text-lg font-semibold text-foreground">Useful Links</h3>
        </div>
        
        <div className="space-y-3">
          {usefulLinks.map((link, index) => (
            <motion.div
              key={link.title}
              whileHover={{ x: 5 }}
            >
              <a
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="flex items-start gap-3 p-3 rounded-lg hover:bg-primary/5 transition-colors group"
              >
                <link.icon className="w-4 h-4 mt-0.5 text-muted-foreground group-hover:text-primary transition-colors" />
                <div className="flex-1">
                  <div className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                    {link.title}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {link.description}
                  </div>
                </div>
                {link.external && (
                  <ExternalLink className="w-3 h-3 text-muted-foreground group-hover:text-primary transition-colors" />
                )}
              </a>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Contact Card */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="bg-gradient-to-br from-primary to-primary/80 rounded-xl p-6 text-primary-foreground"
      >
        <div className="flex items-center gap-3 mb-3">
          <Image 
            src="/portal-logo/logo-wb.png" 
            alt="Oxmaint AI" 
            width={32} 
            height={32}
            className="rounded-lg"
          />
          <h3 className="text-lg font-semibold">Need Help?</h3>
        </div>
        
        <p className="text-sm text-primary-foreground/80 mb-4">
          Our team is available 24/7 to assist you with any questions.
        </p>
        
        <div className="flex gap-2">
          <a
            href="mailto:contact@oxmaint.ai"
            className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
          >
            <Mail className="w-4 h-4" />
          </a>
          <a
            href="tel:+18005556962"
            className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
          >
            <Phone className="w-4 h-4" />
          </a>
        </div>
      </motion.div>
    </div>
  )
}