"use client"

import { motion } from "motion/react"
import { useInView } from "motion/react"
import { useRef } from "react"
import { 
  Clock, 
  Shield, 
  TrendingUp, 
  Users, 
  Headphones, 
  CheckCircle,
  Calculator,
  Globe,
  Building2,
  FileText
} from "lucide-react"

const benefits = [
  {
    icon: Users,
    title: "Personalized Service",
    description: "For individuals, we provide personalized services to help manage finances and minimize tax liability.",
    color: "text-blue-600"
  },
  {
    icon: Building2,
    title: "Business Solutions",
    description: "For businesses, we offer customized solutions to ensure accurate financial reporting and compliance.",
    color: "text-green-500"
  },
  {
    icon: Shield,
    title: "Professional Expertise",
    description: "Our team of experienced professionals provides effective and efficient accounting services.",
    color: "text-blue-600"
  },
  {
    icon: FileText,
    title: "Comprehensive Solutions",
    description: "We offer comprehensive solutions, ranging from bookkeeping and tax planning to tax preparation and filing.",
    color: "text-green-500"
  },
  {
    icon: TrendingUp,
    title: "Financial Objectives",
    description: "Our goal is to help you achieve your financial objectives with reliable & quality services.",
    color: "text-blue-600"
  },
  {
    icon: CheckCircle,
    title: "Compliance Focused",
    description: "Ensuring financial stability and compliance with all relevant tax laws and regulations.",
    color: "text-green-500"
  }
]

const features = [
  "Bookkeeping and financial record management",
  "Tax planning and preparation services", 
  "Individual tax liability minimization",
  "Business financial reporting and compliance",
  "Professional team of experienced experts",
  "Reliable and quality service delivery"
]

export default function Benefits() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <div className="bg-white py-16 md:py-24" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-blue-600">Service</span> <span className="text-green-500">Approach</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive accounting and tax filing services designed to ensure financial stability and compliance for both individuals and businesses.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center p-6 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors group border border-gray-100 hover:border-blue-200"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-2xl mb-6 shadow-lg group-hover:shadow-xl transition-shadow">
                <benefit.icon className={`h-8 w-8 ${benefit.color}`} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-600">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Features List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-gradient-to-r from-blue-600/10 to-green-500/10 rounded-2xl p-8 border border-gray-100"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            What You Get With Our <span className="text-blue-600">Service</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="flex items-center space-x-3 p-2 rounded-lg hover:bg-white/50 transition-colors"
              >
                <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0" />
                <span className="text-gray-700">{feature}</span>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-700 mb-4 font-medium">
              Trusted accounting and tax filing services for individuals and businesses
            </p>
            <div className="flex justify-center items-center space-x-8 text-sm">
              <span className="flex items-center gap-1 text-blue-600">
                <CheckCircle className="h-4 w-4" />
                Professional Team
              </span>
              <span className="flex items-center gap-1 text-green-500">
                <CheckCircle className="h-4 w-4" />
                Quality Services
              </span>
              <span className="flex items-center gap-1 text-blue-600">
                <CheckCircle className="h-4 w-4" />
                Compliance Focused
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}