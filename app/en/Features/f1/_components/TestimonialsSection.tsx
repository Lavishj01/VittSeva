"use client"

import { motion } from "motion/react"
import { useInView } from "motion/react"
import { useRef } from "react"
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials"
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards"
import { Quote, CheckCircle } from "lucide-react"

const testimonials = [
  {
    quote: "VittSeva provides professional accounting services that help us maintain accurate financial records and ensure tax compliance for our business operations.",
    name: "Rahul Sharma",
    designation: "Business Owner",
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
  },
  {
    quote: "Their team handles my personal tax filing efficiently and provides helpful guidance on financial planning throughout the year.",
    name: "Priya Patel",
    designation: "Working Professional",
    src: "https://images.unsplash.com/photo-1494790108755-2616b612b593?w=150&h=150&fit=crop&crop=face"
  },
  {
    quote: "The accounting services are reliable and the team understands our business requirements well. Good professional support.",
    name: "Amit Kumar",
    designation: "Company Director",
    src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
  },
  {
    quote: "Professional tax preparation services with clear communication and timely completion of all required filings.",
    name: "Sneha Reddy",
    designation: "Entrepreneur",
    src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
  }
]


const stats = [
  { number: "Individual", label: "Tax Services" },
  { number: "Business", label: "Accounting Solutions" },
  { number: "Professional", label: "Service Delivery" },
  { number: "Reliable", label: "Support Team" }
]

export default function TestimonialsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <div className="bg-gray-50 py-16 md:py-24" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600/10 rounded-2xl mb-6">
            <Quote className="h-8 w-8 text-blue-600" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            What Our <span className="text-blue-600">Clients</span> <span className="text-green-500">Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our clients appreciate our professional accounting and tax filing services. 
            Here's what they have to say about working with our team.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-4 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className={`text-3xl md:text-4xl font-bold mb-2 ${index % 2 === 0 ? 'text-blue-600' : 'text-green-500'}`}>
                {stat.number}
              </div>
              <div className="text-gray-600 text-sm md:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Animated Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
        </motion.div>

        
        {/* Professional Standards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-white rounded-2xl p-8 shadow-lg text-center border border-gray-100"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Professional <span className="text-blue-600">Standards</span>
          </h3>
          <p className="text-gray-600 mb-6">
            Our team maintains professional standards in all accounting and tax services, ensuring quality and reliability in every client engagement.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8 p-4 bg-gradient-to-r from-blue-50 to-green-50 rounded-xl">
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5 text-blue-600" />
              <span className="text-gray-700 font-medium">Professional Team</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5 text-green-500" />
              <span className="text-gray-700 font-medium">Quality Service</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5 text-blue-600" />
              <span className="text-gray-700 font-medium">Reliable Support</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}