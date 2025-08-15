"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { 
  Mail, Phone, MapPin, MessageCircle, 
  ArrowRight, Calendar, Clock, Video, Users, Globe, Headphones, IndianRupee
} from "lucide-react"
import WorldMap from "@/components/ui/world-map"
import { Boxes } from "@/components/ui/background-boxes"

// VittSeva service locations for the world map
const dots = [
  {
    start: { lat: 26.9124, lng: 75.7873 }, // Jaipur (HQ)
    end: { lat: 28.6139, lng: 77.2090 }, // Delhi
  },
  {
    start: { lat: 26.9124, lng: 75.7873 }, // Jaipur
    end: { lat: 19.0760, lng: 72.8777 }, // Mumbai
  },
  {
    start: { lat: 26.9124, lng: 75.7873 }, // Jaipur
    end: { lat: 12.9716, lng: 77.5946 }, // Bangalore
  },
  {
    start: { lat: 26.9124, lng: 75.7873 }, // Jaipur
    end: { lat: 17.3850, lng: 78.4867 }, // Hyderabad
  },
  {
    start: { lat: 26.9124, lng: 75.7873 }, // Jaipur
    end: { lat: 22.5726, lng: 88.3639 }, // Kolkata
  }
]

const vitSevaContactInfo = [
  {
    icon: Mail,
    label: "VittSeva Business Email",
    value: "info@vittseva.com",
    href: "mailto:info@vittseva.com",
    description: "For financial consultations & inquiries"
  },
  {
    icon: Phone,
    label: "VittSeva Advisory Hotline",
    value: "+91 141 XXX XXXX",
    href: "tel:+91141XXXXXXX",
    description: "Financial advisory support available"
  },
  {
    icon: MapPin,
    label: "VittSeva Headquarters",
    value: "Jaipur, Rajasthan, India",
    href: "https://maps.google.com/?q=Jaipur,+Rajasthan,+India",
    description: "Main office and consultation center"
  }
]

const vitSevaServices = [
  {
    icon: Users,
    title: "VittSeva Investment Advisory",
    description: "Dedicated team for wealth management and investment planning",
    action: "Book Investment Consultation",
    contact: "investments@vittseva.com"
  },
  {
    icon: Headphones,
    title: "VittSeva Insurance Support",
    description: "Comprehensive insurance advisory and claim assistance",
    action: "Get Insurance Quote",
    contact: "insurance@vittseva.com"
  },
  {
    icon: Globe,
    title: "VittSeva NRI Services",
    description: "Specialized financial services for Non-Resident Indians",
    action: "Connect with NRI Desk",
    contact: "nri@vittseva.com"
  }
]

const vitSevaLocations = [
  { city: "Jaipur", state: "Rajasthan", type: "Headquarters & Main Office" },
  { city: "Delhi", state: "Delhi", type: "Regional Office" },
  { city: "Mumbai", state: "Maharashtra", type: "Financial Hub" },
  { city: "Bangalore", state: "Karnataka", type: "Technology Center" },
  { city: "Hyderabad", state: "Telangana", type: "Service Center" },
  { city: "Kolkata", state: "West Bengal", type: "Regional Office" }
]

export default function VittSevaContact() {
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
            <MessageCircle className="w-5 h-5 text-green-500" />
            <IndianRupee className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium uppercase tracking-wider">
              <span className="text-green-500">VittSeva</span> <span className="text-blue-600">Connect</span>
            </span>
          </motion.div>
          
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground"
          >
            Ready to Transform Your
            <span className="block">
              <span className="text-green-500">Financial</span> <span className="text-blue-600">Future with VittSeva?</span>
            </span>
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            Let&apos;s discuss how <span className="text-green-500 font-semibold">VittSeva</span> can optimize your financial journey. 
            Our expert advisors are ready to help you achieve your wealth management goals with personalized solutions.
          </motion.p>
        </motion.div>

        {/* VittSeva India Presence Map */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-20"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              <span className="text-green-500">VittSeva</span> <span className="text-blue-600">Pan-India</span> Presence
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Serving clients across India with local expertise and personalized financial advisory services in multiple cities
            </p>
          </motion.div>
          
          <motion.div 
            variants={itemVariants}
            className="relative bg-card/20 backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-border max-w-6xl mx-auto"
          >
            <WorldMap dots={dots} lineColor="#10b981" />
            
            {/* VittSeva office locations grid */}
            <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {vitSevaLocations.map((office, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="text-center p-4 bg-gradient-to-br from-green-500/10 to-blue-600/10 backdrop-blur-sm rounded-lg hover:from-green-500/20 hover:to-blue-600/20 transition-colors"
                >
                  <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-blue-600 rounded-full mx-auto mb-2"></div>
                  <div className="font-semibold text-sm text-foreground">{office.city}</div>
                  <div className="text-xs text-muted-foreground">{office.state}</div>
                  <div className="text-xs text-green-500 font-medium mt-1">{office.type}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* VittSeva Contact Information */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-8"
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold mb-6 text-foreground">
                <span className="text-green-500">VittSeva</span> Contact Information
              </h3>
              <div className="space-y-6">
                {vitSevaContactInfo.map((info, index) => (
                  <motion.a
                    key={info.label}
                    href={info.href}
                    target={info.href.startsWith("http") ? "_blank" : undefined}
                    rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center gap-4 p-4 bg-card/20 backdrop-blur-sm border border-border rounded-xl hover:border-green-500/30 transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500/10 to-blue-600/10 rounded-lg flex items-center justify-center group-hover:from-green-500/20 group-hover:to-blue-600/20 transition-colors">
                      <info.icon className="w-6 h-6 text-green-500" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{info.label}</h4>
                      <p className="text-muted-foreground text-sm mb-1">{info.value}</p>
                      <p className="text-xs text-muted-foreground">{info.description}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-muted-foreground ml-auto group-hover:text-green-500 transition-colors" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* VittSeva Service Channels */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold mb-6 text-foreground">
                How Can <span className="text-green-500">VittSeva</span> Help You?
              </h3>
              <div className="space-y-4">
                {vitSevaServices.map((service, index) => (
                  <motion.div
                    key={service.title}
                    whileHover={{ scale: 1.02 }}
                    className="p-4 bg-card/20 backdrop-blur-sm border border-border rounded-xl hover:border-blue-600/30 transition-all duration-300 group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-gradient-to-r from-green-500/10 to-blue-600/10 rounded-lg flex items-center justify-center group-hover:from-green-500/20 group-hover:to-blue-600/20 transition-colors">
                        <service.icon className="w-5 h-5 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground mb-1">{service.title}</h4>
                        <p className="text-sm text-muted-foreground mb-2">{service.description}</p>
                        <a 
                          href={`mailto:${service.contact}`}
                          className="text-sm text-green-500 hover:text-green-600 font-medium"
                        >
                          {service.action} →
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* VittSeva Consultation Booking Card */}
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
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-foreground">
                  Schedule a <span className="text-green-500">VittSeva</span> Consultation
                </h3>
                <p className="text-muted-foreground">
                  Get personalized financial advice with our expert advisors
                </p>
              </div>

              <div className="space-y-4 mb-8 w-full">
                <div className="flex items-center gap-3 p-3 bg-card/60 rounded-lg border border-border">
                  <Clock className="w-5 h-5 text-green-500" />
                  <div>
                    <p className="font-medium text-foreground">45-60 minutes</p>
                    <p className="text-sm text-muted-foreground">Comprehensive financial review</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-3 bg-card/60 rounded-lg border border-border">
                  <Video className="w-5 h-5 text-blue-600" />
                  <div>
                    <p className="font-medium text-foreground">Virtual or In-person</p>
                    <p className="text-sm text-muted-foreground">Flexible meeting options</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-3 bg-card/60 rounded-lg border border-border">
                  <Users className="w-5 h-5 text-green-500" />
                  <div>
                    <p className="font-medium text-foreground">Expert Financial Advisors</p>
                    <p className="text-sm text-muted-foreground">Specialized in your needs</p>
                  </div>
                </div>
              </div>

              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-green-500 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-2 hover:from-green-600 hover:to-blue-700 transition-colors"
                href="mailto:info@vittseva.com?subject=Financial Consultation Request"
              >
                <Calendar className="w-5 h-5" />
                Book VittSeva Consultation
                <ArrowRight className="w-4 h-4 ml-1" />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom VittSeva CTA Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto mt-16"
        >
          <motion.div
            variants={itemVariants}
            className="relative text-center p-8 bg-gradient-to-r from-green-500 to-blue-600 rounded-2xl text-white overflow-hidden"
          >
            {/* Background Boxes */}
            <div className="absolute inset-0 w-full h-full">
              <Boxes />
            </div>
            
            {/* Mask overlay to make boxes visible */}
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-green-500 to-blue-600 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
            
            {/* Content */}
            <div className="relative z-30 h-full flex items-center justify-center pointer-events-none">
              <div className="max-w-fit mx-auto">
                <h3 className="text-2xl font-bold mb-4">
                  Ready to Start Your <span className="text-green-100">VittSeva</span> Financial Journey?
                </h3>
                <p className="text-lg mb-6 max-w-2xl opacity-90">
                  Join 2000+ satisfied clients who trust <span className="font-semibold text-green-100">VittSeva</span> to optimize their financial decisions 
                  and achieve their wealth management goals with personalized advisory services.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center pointer-events-auto">
                  <motion.a
                    href="mailto:info@vittseva.com?subject=Financial Advisory Inquiry"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                  >
                    Contact VittSeva Advisor
                  </motion.a>
                  <motion.a
                    href="tel:+91141XXXXXXX"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                  >
                    Call VittSeva Now
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