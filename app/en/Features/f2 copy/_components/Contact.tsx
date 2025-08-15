"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { 
  Mail, Phone, MapPin, MessageCircle, 
  ArrowRight, Calendar, Clock, Video, Users, Globe, Headphones
} from "lucide-react"
import WorldMap from "@/components/ui/world-map"
import { Boxes } from "@/components/ui/background-boxes"
import { CALENDLY_URL, EMAIL, SALES_EMAIL } from "@/constants/constants"

// Global office locations for the world map
const dots = [
  {
    start: { lat: 37.7749, lng: -122.4194 }, // San Francisco Bay Area (HQ)
    end: { lat: 12.9716, lng: 77.5946 }, // Jaipur
  },
  {
    start: { lat: 37.7749, lng: -122.4194 }, // San Francisco Bay Area
    end: { lat: 14.0444, lng: 31.2357 }, // Cairo
  },
  {
    start: { lat: 37.7749, lng: -122.4194 }, // San Francisco Bay Area
    end: { lat: -44.7479, lng: 24.2293 }, // South Africa (Pretoria)
  },
  {
    start: { lat: 37.7749, lng: -122.4194 }, // San Francisco Bay Area
    end: { lat: 20.7490, lng: -81.3880 }, // Atlanta
  },
  {
    start: { lat: 37.7749, lng: -122.4194 }, // San Francisco Bay Area
    end: { lat: -50.8688, lng: 151.2093 }, // Sydney
  }
]

const contactInfo = [
  {
    icon: Mail,
    label: "Business Email",
    value: EMAIL,
    href: `mailto:${EMAIL}`,
    description: "For partnerships & inquiries"
  },
  {
    icon: Phone,
    label: "Sales Hotline",
    value: "+1 (470) 209-9781",
    href: "tel:+14702099781",
    description: "24/7 sales support available"
  },
  {
    icon: MapPin,
    label: "Headquarters",
    value: "San Francisco Bay Area, CA",
    href: "https://maps.google.com/?q=San+Francisco+Bay+Area,+CA",
    description: "Headquarters"
  }
]

const supportChannels = [
  {
    icon: Users,
    title: "Enterprise Sales",
    description: "Dedicated team for enterprise solutions",
    action: "Contact Sales",
    contact: SALES_EMAIL
  },
  {
    icon: Headphones,
    title: "Technical Support",
    description: "24/7 technical assistance",
    action: "Get Support",
    contact: EMAIL
  },
  {
    icon: Globe,
    title: "Global Partnerships",
    description: "Strategic partnerships and integrations",
    action: "Partner with us",
    contact: EMAIL
  }
]

const globalOffices = [
  { city: "San Francisco Bay Area", country: "USA", type: "Headquarters" },
  { city: "Jaipur", country: "India", type: "Development Center" },
  { city: "Cairo", country: "Egypt", type: "Regional Office" },
  { city: "Cape Town", country: "South Africa", type: "Regional Office" },
  { city: "Atlanta", country: "USA", type: "Regional Office" },
  { city: "Sydney", country: "Australia", type: "Regional Office" }
]

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        damping: 20,
        stiffness: 100,
      },
    },
  }

  return (
    <section id="contact" ref={ref} className="py-20 lg:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 mb-4">
            <MessageCircle className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium text-primary uppercase tracking-wider">Get In Touch</span>
          </motion.div>
          
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground"
          >
            Ready to Transform
            <span className="text-primary"> Your Operations?</span>
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            Let&apos;s discuss how Oxmaint AI can revolutionize your maintenance operations. 
            Our experts are ready to help you implement cutting-edge AI solutions.
          </motion.p>
        </motion.div>

        {/* Global Presence World Map */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-20"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Global <span className="text-primary">Presence</span>
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Serving clients worldwide with local expertise and 24/7 support across multiple time zones
            </p>
          </motion.div>
          
          <motion.div 
            variants={itemVariants}
            className="relative bg-card/20 backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-border max-w-6xl mx-auto"
          >
            <WorldMap dots={dots} lineColor="hsl(var(--primary))" />
            
            {/* Office locations grid */}
            <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {globalOffices.map((office, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="text-center p-4 bg-card/10 backdrop-blur-sm rounded-lg hover:bg-primary/10 transition-colors"
                >
                  <div className="w-2 h-2 bg-primary rounded-full mx-auto mb-2"></div>
                  <div className="font-semibold text-sm text-foreground">{office.city}</div>
                  <div className="text-xs text-muted-foreground">{office.country}</div>
                  <div className="text-xs text-primary font-medium mt-1">{office.type}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-8"
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold mb-6 text-foreground">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.label}
                    href={info.href}
                    target={info.href.startsWith("http") ? "_blank" : undefined}
                    rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center gap-4 p-4 bg-card/20 backdrop-blur-sm border border-border rounded-xl hover:border-primary transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <info.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{info.label}</h4>
                      <p className="text-muted-foreground text-sm mb-1">{info.value}</p>
                      <p className="text-xs text-muted-foreground">{info.description}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-muted-foreground ml-auto group-hover:text-primary transition-colors" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Support Channels */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold mb-6 text-foreground">How Can We Help?</h3>
              <div className="space-y-4">
                {supportChannels.map((channel, index) => (
                  <motion.div
                    key={channel.title}
                    whileHover={{ scale: 1.02 }}
                    className="p-4 bg-card/20 backdrop-blur-sm border border-border rounded-xl hover:border-primary/30 transition-all duration-300 group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <channel.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground mb-1">{channel.title}</h4>
                        <p className="text-sm text-muted-foreground mb-2">{channel.description}</p>
                        <a 
                          href={`mailto:${channel.contact}`}
                          className="text-sm text-primary hover:text-primary/80 font-medium"
                        >
                          {channel.action} →
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Demo Scheduling Card */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.div 
              variants={itemVariants}
              className="p-8 h-full bg-card/10 backdrop-blur-sm rounded-2xl border border-border flex flex-col justify-center items-center"
            >
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-foreground">Schedule a Demo</h3>
                <p className="text-muted-foreground">
                  See our AI platform in action with a personalized demonstration
                </p>
              </div>

              <div className="space-y-4 mb-8 w-full">
                <div className="flex items-center gap-3 p-3 bg-card/60 rounded-lg border border-border">
                  <Clock className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium text-foreground">45-60 minutes</p>
                    <p className="text-sm text-muted-foreground">Comprehensive demo</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-3 bg-card/60 rounded-lg border border-border">
                  <Video className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium text-foreground">Virtual meeting</p>
                    <p className="text-sm text-muted-foreground">Online or on-site available</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-3 bg-card/60 rounded-lg border border-border">
                  <Users className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium text-foreground">Expert consultation</p>
                    <p className="text-sm text-muted-foreground">Industry specialists</p>
                  </div>
                </div>
              </div>

              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors"
                onClick={() => {
                  window.open(CALENDLY_URL, "_blank")
                }}
              >
                <Calendar className="w-5 h-5" />
                Request Demo
                <ArrowRight className="w-4 h-4 ml-1" />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto mt-16"
        >
          <motion.div
            variants={itemVariants}
            className="relative text-center p-8 bg-primary rounded-2xl text-primary-foreground overflow-hidden"
          >
            {/* Background Boxes */}
            <div className="absolute inset-0 w-full h-full">
              <Boxes />
            </div>
            
            {/* Mask overlay to make boxes visible */}
            <div className="absolute inset-0 w-full h-full bg-primary z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
            
            {/* Content */}
            <div className="relative z-30 h-full flex items-center justify-center pointer-events-none">
              <div className="max-w-fit mx-auto">
                <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
                <p className="text-lg mb-6 max-w-2xl opacity-90">
                  Join 500+ enterprise clients who trust Oxmaint AI to optimize their maintenance operations 
                  and drive operational excellence.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center pointer-events-auto">
                  <motion.a
                    href={`mailto:${SALES_EMAIL}?subject=Sales Inquiry`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-card text-primary px-8 py-3 rounded-lg font-semibold hover:bg-accent transition-colors"
                  >
                    Contact Sales
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="border-2 border-primary-foreground text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary-foreground/10 transition-colors"
                    onClick={() => {
                      window.open(CALENDLY_URL, "_blank")
                    }}
                  >
                    Book Demo
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 