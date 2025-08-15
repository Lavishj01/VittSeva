"use client"

import { motion } from "motion/react"
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calculator, TrendingUp, Shield } from "lucide-react"
import Link from "next/link"

const words = [
  { text: "Streamlined", className: "text-gray-900" },
  { text: "Finances,", className: "text-gray-900" },
  { text: "Optimized", className: "text-blue-600" },
  { text: "Returns", className: "text-gray-900" },
]

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(59 130 246) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
            <span className="text-blue-600">Accounting</span> & <span className="text-green-500">Tax Filing</span>
          </h1>
          
          <TypewriterEffectSmooth 
            words={words} 
            className="text-xl md:text-2xl mb-8"
          />
          
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
            Accounting and tax filing services are critical for both individuals and businesses to achieve financial stability and compliance. We offer comprehensive solutions, ranging from bookkeeping and tax planning to tax preparation and filing.
          </p>

          <Link href="https://vittseva.com/contact/" target="_blank">
            <Button 
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg group font-semibold transition-colors"
            >
              Book A Free Consultation
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          <div className="flex items-center justify-center space-x-4 text-gray-900">
            <div className="p-3 bg-blue-600/10 rounded-full">
              <Calculator className="h-8 w-8 text-blue-600" />
            </div>
            <div>
              <div className="text-2xl font-bold">Professional</div>
              <div className="text-gray-600">Service</div>
            </div>
          </div>
          <div className="flex items-center justify-center space-x-4 text-gray-900">
            <div className="p-3 bg-green-500/10 rounded-full">
              <TrendingUp className="h-8 w-8 text-green-500" />
            </div>
            <div>
              <div className="text-2xl font-bold">Expert</div>
              <div className="text-gray-600">Team</div>
            </div>
          </div>
          <div className="flex items-center justify-center space-x-4 text-gray-900">
            <div className="p-3 bg-blue-600/10 rounded-full">
              <Shield className="h-8 w-8 text-blue-600" />
            </div>
            <div>
              <div className="text-2xl font-bold">Reliable</div>
              <div className="text-gray-600">Support</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}