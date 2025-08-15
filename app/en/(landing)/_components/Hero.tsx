"use client"

import { motion } from "framer-motion"
import { useRouter } from "next/navigation"
import { ArrowRight, Shield, TrendingUp, CheckCircle, IndianRupee, Star } from "lucide-react"
import { BackgroundBeams } from "@/components/ui/background-beams"

const stats = [
  { icon: CheckCircle, value: "2000+", label: "Happy Clients" },
  { icon: TrendingUp, value: "15%", label: "Avg Portfolio Growth" },
  { icon: Shield, value: "99.5%", label: "Client Satisfaction" },
]

const features = [
  "Multi-brand Financial Products",
  "Personalized Investment Advisory", 
  "Comprehensive Insurance Solutions",
  "Expert Tax Planning & Optimization"
]

export default function VittSevaHero() {
  const router = useRouter()

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-background">
      {/* Background Effects */}
      <BackgroundBeams className="absolute inset-0" />
      <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-background to-blue-600/5" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="text-center max-w-6xl mx-auto">
          {/* Brand Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 mb-8 px-4 py-2 bg-gradient-to-r from-green-500/10 to-blue-600/10 backdrop-blur-sm rounded-full border border-green-500/20"
          >
            <IndianRupee className="w-4 h-4 text-green-500" />
            <span className="text-sm font-medium">
              <span className="text-green-500">वित्त सेवा</span> • <span className="text-blue-600">Financial Services</span>
            </span>
            <Star className="w-4 h-4 text-blue-600 fill-current" />
          </motion.div>

          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8 text-center"
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              <span className="text-green-500">Vitt</span>
              <span className="text-blue-600">Seva</span>
              <span className="text-foreground"> – </span>
              <br />
              <span className="text-foreground">Transform Your</span>
              <br />
              <span className="text-blue-600">Financial</span> <span className="text-green-500">Future</span>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mb-8"
          >
            <p className="text-lg md:text-xl text-muted-foreground mb-4 max-w-3xl mx-auto leading-relaxed">
              Expert guidance for <span className="text-blue-600 font-semibold">NRI Services</span>
              <br />
              with personalized solutions and transparent advice
            </p>
            <p className="text-base text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Your trusted financial partner providing comprehensive wealth management, 
              insurance solutions, and investment advisory services for individuals and businesses across India. 
              We specialize in helping NRIs manage their finances seamlessly with expert tax planning, 
              optimal investment strategies, and complete regulatory compliance.
            </p>
          </motion.div>

          {/* Single CTA Button with Effects */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex justify-center mb-12"
          >
            <motion.button
              whileHover={{ 
                scale: 1.02
              }}
              whileTap={{ scale: 0.95 }}
              className="group relative overflow-hidden px-6 py-2 sm:px-8 sm:py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2 border border-blue-500/20 w-full max-w-sm h-[3rem] sm:h-[3.5rem] text-sm sm:text-base"
              onClick={() => router.push("/consultation")}
            >
              {/* Sliding background effect */}
              <div className="absolute inset-0 bg-blue-500 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              
              {/* Button content */}
              <span className="relative z-10">
                <span className="hidden sm:inline">Book Free Consultation</span>
                <span className="sm:hidden">Get Started</span>
              </span>
              <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.button>
          </motion.div>

          {/* Service Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-sm sm:text-base font-bold text-gray-800 mb-2">
              <span className="hidden sm:inline">No obligation consultation</span>
              <span className="sm:hidden">Free consultation</span>
            </h2>
            <p className="text-sm sm:text-base text-gray-600">Personalized Financial Advice</p>
          </motion.div>

          
        </div>
      </div>
    </section>
  )
}