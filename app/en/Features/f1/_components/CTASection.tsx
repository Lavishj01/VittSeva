"use client"

import { motion } from "motion/react"
import { useInView } from "motion/react"
import { useRef } from "react"
import { BackgroundGradient } from "@/components/ui/background-gradient"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { 
  ArrowRight, 
  Phone, 
  Mail, 
  Calendar,
  CheckCircle,
  Clock,
  Shield,
  TrendingUp
} from "lucide-react"

const urgencyPoints = [
  "Comprehensive accounting solutions",
  "Tax preparation and filing services", 
  "Individual and business services",
  "Professional expertise and support"
]

const guarantees = [
  {
    icon: Shield,
    text: "Professional Expertise"
  },
  {
    icon: TrendingUp,
    text: "Quality Service Delivery"
  },
  {
    icon: Clock,
    text: "Reliable Support"
  }
]

export default function CTASection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <div className="bg-blue-600 py-16 md:py-24 relative overflow-hidden" ref={ref}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '20px 20px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6 }}
            className="text-white"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Get Professional{" "}
              <span className="text-green-400">Accounting Services</span>
            </h2>
            
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Contact us for comprehensive accounting and tax filing services. Our experienced professionals 
              are ready to help you achieve financial stability and compliance.
            </p>

            {/* Urgency Points */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-green-400 mb-4">
                Our Service Areas
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {urgencyPoints.map((point, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-blue-100 text-sm">{point}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Guarantees */}
            <div className="flex flex-wrap gap-6">
              {guarantees.map((guarantee, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="flex items-center space-x-2"
                >
                  <guarantee.icon className="h-5 w-5 text-green-400" />
                  <span className="text-blue-100 text-sm font-medium">{guarantee.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - CTA Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <BackgroundGradient className="rounded-3xl max-w-sm mx-auto lg:max-w-none">
              <div className="bg-white p-8 rounded-3xl shadow-2xl">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Contact Our <span className="text-blue-600">Team</span>
                  </h3>
                  <p className="text-gray-600">
                    Get in touch with our accounting professionals for personalized service and expert guidance.
                  </p>
                </div>

                {/* Main CTA */}
                <div className="space-y-4 mb-6">
                  <Link href="https://vitt-seva.vercel.app/en" target="_blank">
                    <Button 
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6 text-lg group font-semibold transition-colors"
                      size="lg"
                    >
                      <Calendar className="mr-2 h-5 w-5" />
                      Contact Us
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>

                  <div className="flex justify-center">
                    <Button 
                      variant="outline"
                      className="py-4 border-green-500 text-green-500 hover:bg-green-500 hover:text-white transition-colors"
                      asChild
                    >
                      <Link href="mailto:info@vittseva.com">
                        <Mail className="mr-2 h-4 w-4" />
                        Email Us
                      </Link>
                    </Button>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="border-t border-gray-200 pt-6 mb-6">
                  <div className="text-center space-y-3">
                    <div className="flex items-center justify-center space-x-2 text-gray-600">
                      <Phone className="h-4 w-4 text-blue-600" />
                      <span className="font-medium">+91 83101 99396</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2 text-gray-600">
                      <Mail className="h-4 w-4 text-green-500" />
                      <span className="font-medium">info@vittseva.com</span>
                    </div>
                    <p className="text-sm text-gray-500">
                      Available for professional consultation
                    </p>
                  </div>
                </div>

                {/* What's Included */}
                <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-4 border border-gray-100">
                  <h4 className="font-semibold text-gray-900 mb-3 text-center">
                    Our <span className="text-blue-600">Services</span> Include:
                  </h4>
                  <div className="space-y-2">
                    {[
                      "Tax preparation and filing",
                      "Bookkeeping services", 
                      "Financial planning",
                      "Compliance support"
                    ].map((item, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <CheckCircle className={`h-4 w-4 ${index % 2 === 0 ? 'text-blue-600' : 'text-green-500'}`} />
                        <span className="text-gray-700 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </BackgroundGradient>
          </motion.div>
        </div>

        {/* Bottom Trust Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <h4 className="text-xl font-semibold text-white mb-4">
              Professional <span className="text-green-400">Accounting</span> & <span className="text-green-400">Tax Services</span>
            </h4>
            <div className="flex flex-wrap justify-center items-center gap-8 text-blue-100 text-sm">
              <span className="flex items-center gap-1">
                <CheckCircle className="h-4 w-4 text-green-400" />
                Experienced Professionals
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle className="h-4 w-4 text-green-400" />
                Comprehensive Solutions
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle className="h-4 w-4 text-green-400" />
                Individual & Business Services
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle className="h-4 w-4 text-green-400" />
                Quality Service Delivery
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle className="h-4 w-4 text-green-400" />
                Compliance Focused
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}