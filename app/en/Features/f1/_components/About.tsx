"use client"

import { motion } from "motion/react"
import { useInView } from "motion/react"
import { useRef } from "react"
import { Tabs } from "@/components/ui/tabs"
import { 
  Calculator, 
  FileText, 
  Building2, 
  User, 
  TrendingUp, 
  Shield,
  BookOpen,
  Receipt
} from "lucide-react"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const individualServices = [
    {
      icon: <User className="h-12 w-12 text-primary" />,
      title: "Personal Tax Management",
      description: "Personalized services to help manage your finances and minimize tax liability with expert guidance."
    },
    {
      icon: <FileText className="h-12 w-12 text-secondary" />,
      title: "Tax Preparation & Filing",
      description: "Complete tax preparation and filing services ensuring accuracy and compliance with current tax laws."
    },
    {
      icon: <Calculator className="h-12 w-12 text-primary" />,
      title: "Financial Planning",
      description: "Comprehensive financial planning services to help you achieve your personal financial objectives."
    }
  ]

  const businessServices = [
    {
      icon: <Building2 className="h-12 w-12 text-primary" />,
      title: "Business Tax Compliance",
      description: "Customized solutions to ensure accurate financial reporting and compliance with business tax laws."
    },
    {
      icon: <BookOpen className="h-12 w-12 text-secondary" />,
      title: "Bookkeeping Services",
      description: "Professional bookkeeping services ranging from basic record keeping to comprehensive financial management."
    },
    {
      icon: <TrendingUp className="h-12 w-12 text-primary" />,
      title: "Tax Planning & Strategy",
      description: "Strategic tax planning services to optimize your business tax position and improve financial efficiency."
    }
  ]

  const tabs = [
    {
      title: "Individual Services",
      value: "individual",
      content: (
        <div className="w-full relative overflow-hidden">
          <div className="pt-8 pb-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {individualServices.map((service, index) => (
                <motion.div
                  key={`individual-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="flex justify-center mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Business Services",
      value: "business",
      content: (
        <div className="w-full relative overflow-hidden">
          <div className="pt-8 pb-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {businessServices.map((service, index) => (
                <motion.div
                  key={`business-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="flex justify-center mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      )
    }
  ]

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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our Accounting & Tax Services
          </h2>
          <div className="max-w-4xl mx-auto text-lg text-gray-600 leading-relaxed space-y-4">
            <p>
              For individuals, we provide personalized services to help manage finances and minimize tax liability. 
              For businesses, we offer customized solutions to ensure accurate financial reporting and compliance with tax laws.
            </p>
            <p>
              With our team of experienced professionals, you can trust us to provide effective and efficient services. 
              Our goal is to help you achieve your financial objectives with reliable & quality accounting and tax filing services.
            </p>
          </div>
        </motion.div>

        {/* Services Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-24"
        >
          <div style={{ minHeight: '500px' }}>
            <Tabs tabs={tabs} />
          </div>
        </motion.div>

        {/* Additional Services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white rounded-2xl p-8 shadow-lg"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Our Service Areas
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <Calculator className="h-10 w-10 text-primary mx-auto mb-4" />
              <h4 className="font-semibold text-gray-900 mb-2">Tax Preparation</h4>
              <p className="text-gray-600 text-sm">Complete tax preparation services for individuals and businesses</p>
            </div>
            
            <div className="text-center">
              <FileText className="h-10 w-10 text-secondary mx-auto mb-4" />
              <h4 className="font-semibold text-gray-900 mb-2">Financial Reporting</h4>
              <p className="text-gray-600 text-sm">Accurate financial reporting and compliance services</p>
            </div>
            
            <div className="text-center">
              <BookOpen className="h-10 w-10 text-primary mx-auto mb-4" />
              <h4 className="font-semibold text-gray-900 mb-2">Bookkeeping</h4>
              <p className="text-gray-600 text-sm">Professional bookkeeping and record management</p>
            </div>
            
            <div className="text-center">
              <TrendingUp className="h-10 w-10 text-secondary mx-auto mb-4" />
              <h4 className="font-semibold text-gray-900 mb-2">Tax Planning</h4>
              <p className="text-gray-600 text-sm">Strategic tax planning and advisory services</p>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our team of experienced professionals provides effective and efficient services to help you achieve your financial objectives with reliable & quality accounting and tax filing services.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}