"use client"

import { motion } from "framer-motion"
import { Phone, Mail, MessageCircle, Clock, Users, Headphones } from "lucide-react"
import Image from "next/image"
import { Boxes } from "@/components/ui/background-boxes"
import { EMAIL, PHONE_NUMBER } from "@/constants/constants"

const contactOptions = [
  {
    icon: Phone,
    title: "Call Us",
    description: "Speak directly with our experts",
    action: `tel:${PHONE_NUMBER}`,
    label: PHONE_NUMBER,
    color: "green"
  },
  {
    icon: Mail,
    title: "Email Support",
    description: "Get detailed assistance via email",
    action: `mailto:${EMAIL}`,
    label: EMAIL,
    color: "blue"
  }
]

const supportFeatures = [
  "Instant response within 15 minutes",
  "Technical consultation available",
  "Implementation guidance",
  "Custom solution design"
]

export default function TeamNote() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="py-16 relative"
    >
      <div className="container mx-auto px-4">
        <motion.div
          className="relative p-8 bg-primary rounded-2xl text-primary-foreground overflow-hidden"
        >
          {/* Background Boxes */}
          <div className="absolute inset-0 w-full h-full">
            <Boxes />
          </div>
          
          {/* Mask overlay to make boxes visible */}
          <div className="absolute inset-0 w-full h-full bg-primary z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
          
          {/* Content */}
          <div className="relative z-30 h-full flex items-center justify-center pointer-events-none">
            <div className="max-w-4xl mx-auto text-center pointer-events-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-16 h-16 rounded-full bg-primary-foreground/10 flex items-center justify-center">
                <Image 
                  src="/portal-logo/logo-wb.png" 
                  alt="Oxmaint AI" 
                  width={40} 
                  height={40}
                  className="rounded-lg"
                />
              </div>
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              We're Here to Help You Succeed
            </h2>
            
            <p className="text-xl text-primary-foreground/80 mb-6 max-w-2xl mx-auto">
              Our team of AI and maintenance experts is available 24/7 to support your digital transformation journey.
            </p>

            <div className="flex items-center justify-center gap-6 text-sm text-primary-foreground/70">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>24/7 Available</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                <span>Expert Team</span>
              </div>
              <div className="flex items-center gap-2">
                <Headphones className="w-4 h-4" />
                <span>Instant Support</span>
              </div>
            </div>
          </motion.div>

          {/* Contact Options */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid md:grid-cols-2 gap-6 mb-12"
          >
            {contactOptions.map((option, index) => (
              <motion.a
                key={option.title}
                href={option.action}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6 hover:bg-primary-foreground/20 transition-all group"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-primary-foreground/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <option.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{option.title}</h3>
                  <p className="text-sm text-primary-foreground/70 mb-3">{option.description}</p>
                  <span className="text-sm font-medium text-primary-foreground/90 group-hover:text-primary-foreground transition-colors">
                    {option.label}
                  </span>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Support Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-8 mb-8"
          >
            <h3 className="text-xl font-semibold mb-6">What You Can Expect</h3>
            
            <div className="grid md:grid-cols-2 gap-4">
              {supportFeatures.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-center gap-3 text-left"
                >
                  <div className="w-2 h-2 bg-green-400 rounded-full flex-shrink-0" />
                  <span className="text-primary-foreground/90">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-center"
          >
            <p className="text-lg text-primary-foreground/80 mb-6">
              Ready to transform your maintenance operations with AI?
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.a
                href="mailto:contact@oxmaint.ai?subject=Getting Started"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-primary-foreground text-primary rounded-lg font-semibold hover:bg-primary-foreground/90 transition-colors shadow-lg"
              >
                Get Started Today
              </motion.a>
              
              <motion.a
                href="tel:+18005556962"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-primary-foreground/30 text-primary-foreground rounded-lg font-semibold hover:bg-primary-foreground/10 transition-colors"
              >
                Schedule Call
              </motion.a>
            </div>
          </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}