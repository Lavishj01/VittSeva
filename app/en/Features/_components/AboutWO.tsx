"use client"

import { motion, useInView } from "motion/react"
import { useRef } from "react"
import { 
  ClipboardList, 
  Timer, 
  Users, 
  CheckCircle, 
  AlertTriangle, 
  TrendingUp, 
  Target, 
  Settings, 
  Globe, 
  Brain,
  ArrowRight,
  Building2,
  Factory,
  Truck,
  Smartphone,
  Calendar
} from "lucide-react"
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid"
import { BackgroundGradient } from "@/components/ui/background-gradient"

const PORTAL_URL = "https://portal.oxmaint.ai"

const stats = [
  { label: "Work Orders Processed", value: "50,000+", icon: ClipboardList },
  { label: "Faster Completion", value: "65%", icon: Timer },
  { label: "Team Efficiency Boost", value: "85%", icon: Users },
  { label: "On-Time Completion", value: "95%", icon: CheckCircle },
]

const capabilities = [
  {
    id: 1,
    className: "md:col-span-2",
    content: (
      <div className="bg-white rounded-lg p-6 shadow-lg border border-gray-100">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-[#15227a]/10 rounded-lg flex items-center justify-center">
            <Brain className="w-6 h-6 text-[#15227a]" />
          </div>
          <h3 className="text-xl font-bold text-gray-900">AI-Powered Work Order Creation</h3>
        </div>
        <p className="text-gray-600 leading-relaxed mb-4">
          Create work orders instantly with intelligent suggestions for equipment details, recommended procedures, 
          required parts, and estimated completion times. Reduce creation time by 90%.
        </p>
        <div className="bg-gray-50 rounded-lg p-4 space-y-2">
          <div className="flex items-center gap-2 text-sm">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-gray-700">Auto-suggest equipment details</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <span className="text-gray-700">Recommend required parts</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
            <span className="text-gray-700">Estimate completion time</span>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 2,
    className: "md:col-span-1",
    content: (
      <div className="bg-white rounded-lg p-6 shadow-lg border border-gray-100">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-[#f58b00]/10 rounded-lg flex items-center justify-center">
            <AlertTriangle className="w-6 h-6 text-[#f58b00]" />
          </div>
          <h3 className="text-xl font-bold text-gray-900">Priority Management</h3>
        </div>
        <p className="text-gray-600 leading-relaxed mb-4">
          Intelligent priority assignment based on equipment criticality, safety impact, and business operations.
        </p>
        <div className="space-y-2">
          <div className="flex items-center gap-3 p-2 bg-gray-50 rounded">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <span className="text-sm text-gray-700">Critical Priority</span>
          </div>
          <div className="flex items-center gap-3 p-2 bg-gray-50 rounded">
            <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
            <span className="text-sm text-gray-700">High Priority</span>
          </div>
          <div className="flex items-center gap-3 p-2 bg-gray-50 rounded">
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <span className="text-sm text-gray-700">Medium Priority</span>
          </div>
          <div className="flex items-center gap-3 p-2 bg-gray-50 rounded">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="text-sm text-gray-700">Low Priority</span>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 3,
    className: "md:col-span-1",
    content: (
      <div className="bg-white rounded-lg p-6 shadow-lg border border-gray-100">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-[#15227a]/10 rounded-lg flex items-center justify-center">
            <Timer className="w-6 h-6 text-[#15227a]" />
          </div>
          <h3 className="text-xl font-bold text-gray-900">Real-Time Tracking</h3>
        </div>
        <p className="text-gray-600 leading-relaxed mb-4">
          Monitor work order status with live updates, completion tracking, and instant notifications.
        </p>
        <div className="grid grid-cols-2 gap-2">
          <div className="bg-gray-50 rounded-lg p-2 text-center">
            <div className="text-lg font-bold text-blue-600">12</div>
            <div className="text-xs text-gray-600">In Progress</div>
          </div>
          <div className="bg-gray-50 rounded-lg p-2 text-center">
            <div className="text-lg font-bold text-green-600">28</div>
            <div className="text-xs text-gray-600">Completed</div>
          </div>
          <div className="bg-gray-50 rounded-lg p-2 text-center">
            <div className="text-lg font-bold text-yellow-600">5</div>
            <div className="text-xs text-gray-600">Pending</div>
          </div>
          <div className="bg-gray-50 rounded-lg p-2 text-center">
            <div className="text-lg font-bold text-red-600">2</div>
            <div className="text-xs text-gray-600">Overdue</div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 4,
    className: "md:col-span-2",
    content: (
      <div className="bg-white rounded-lg p-6 shadow-lg border border-gray-100">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-[#f58b00]/10 rounded-lg flex items-center justify-center">
            <Smartphone className="w-6 h-6 text-[#f58b00]" />
          </div>
          <h3 className="text-xl font-bold text-gray-900">Mobile Field Operations</h3>
        </div>
        <p className="text-gray-600 leading-relaxed mb-4">
          Full mobile functionality for field technicians with QR scanning, photo capture, voice notes, and real-time updates.
        </p>
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center p-2 bg-gray-50 rounded-lg">
            <div className="text-2xl mb-1">📱</div>
            <div className="text-xs text-gray-600">QR Scanning</div>
          </div>
          <div className="text-center p-2 bg-gray-50 rounded-lg">
            <div className="text-2xl mb-1">📷</div>
            <div className="text-xs text-gray-600">Photo Capture</div>
          </div>
          <div className="text-center p-2 bg-gray-50 rounded-lg">
            <div className="text-2xl mb-1">🎤</div>
            <div className="text-xs text-gray-600">Voice Notes</div>
          </div>
          <div className="text-center p-2 bg-gray-50 rounded-lg">
            <div className="text-2xl mb-1">🔄</div>
            <div className="text-xs text-gray-600">Offline Mode</div>
          </div>
          <div className="text-center p-2 bg-gray-50 rounded-lg">
            <div className="text-2xl mb-1">⚡</div>
            <div className="text-xs text-gray-600">Real-Time Sync</div>
          </div>
          <div className="text-center p-2 bg-gray-50 rounded-lg">
            <div className="text-2xl mb-1">🔔</div>
            <div className="text-xs text-gray-600">Push Alerts</div>
          </div>
        </div>
      </div>
    )
  },
]

const benefits = [
  {
    icon: Target,
    title: "Streamlined Operations",
    description: "Eliminate manual processes with automated work order routing, approval workflows, and status updates. Reduce administrative overhead by 60%."
  },
  {
    icon: Calendar,
    title: "Smart Scheduling",
    description: "Optimize technician schedules with intelligent planning that considers priorities, skills, location, and estimated completion times."
  },
  {
    icon: Globe,
    title: "Mobile-First Design",
    description: "Access work orders anywhere with full mobile functionality. Technicians can update status, capture photos, and complete orders from the field."
  },
]

const industries = [
  {
    name: "Manufacturing",
    icon: Factory,
    description: "Production line maintenance and equipment monitoring",
    stats: "2,500+ orders monthly, 98.5% uptime"
  },
  {
    name: "Facilities",
    icon: Building2,
    description: "Building maintenance and tenant service requests", 
    stats: "1,800+ orders monthly, 15min response time"
  },
  {
    name: "Fleet",
    icon: Truck,
    description: "Vehicle maintenance and compliance tracking",
    stats: "500+ vehicles, 100% compliance rate"
  }
]

export default function WorkOrderAbout() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
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

  const statVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring" as const,
        damping: 15,
        stiffness: 100,
      },
    },
  }

  return (
    <section id="about" ref={ref} className="py-20 lg:py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 mb-4">
            <ClipboardList className="w-5 h-5 text-[#f58b00]" />
            <span className="text-sm font-medium text-[#f58b00] uppercase tracking-wider">Work Order Excellence</span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 relative text-gray-900"
          >
            Complete Work Order Management
            <br />
            <span className="text-[#15227a]">From Creation to Completion</span>
            <br />
            <span className="text-gray-600 text-3xl md:text-4xl lg:text-5xl">Built for Efficiency</span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
          >
            Transform your maintenance operations with intelligent work order management that automates routine tasks, 
            optimizes scheduling, and provides real-time visibility into every aspect of your maintenance workflow.
          </motion.p>
        </motion.div>

        {/* Work Order Stats */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-20 flex justify-center"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl w-full">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={statVariants}
                className="text-center p-6 rounded-xl bg-gray-50 border border-gray-200 hover:border-[#f58b00] transition-all duration-300 group hover:shadow-lg"
              >
                <div className="w-16 h-16 bg-[#f58b00]/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <stat.icon className="w-8 h-8 text-[#f58b00]" />
                </div>
                <div className="text-3xl font-bold text-[#15227a] mb-2">{stat.value}</div>
                <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Core Capabilities - Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-20"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Advanced Work Order Features</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive work order management tools designed to streamline operations, improve efficiency, 
              and deliver exceptional results for your maintenance team
            </p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <BentoGrid className="max-w-7xl mx-auto">
              {capabilities.map((item) => (
                <BentoGridItem
                  key={item.id}
                  title=""
                  description=""
                  header={<div className="flex flex-1 w-full h-full min-h-[6rem]">{item.content}</div>}
                  className={item.className}
                />
              ))}
            </BentoGrid>
          </motion.div>
        </motion.div>

        {/* Work Order Benefits */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-16 items-center mb-20"
        >
          {/* Left Column - Benefits */}
          <motion.div
            variants={containerVariants}
            className="space-y-8"
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Our Work Order System</h3>
              <p className="text-gray-600 leading-relaxed mb-8">
                Experience the power of intelligent work order management that not only simplifies your processes 
                but actively improves your team's productivity, reduces response times, and ensures every maintenance 
                task is completed efficiently and on schedule.
              </p>
            </motion.div>

            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  variants={itemVariants}
                  className="flex items-start gap-4 p-6 rounded-xl bg-gray-50 border border-gray-200 hover:border-[#f58b00] transition-all duration-300 group hover:shadow-lg"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-[#f58b00]/10 rounded-lg flex items-center justify-center group-hover:bg-[#f58b00]/20 transition-colors">
                    <benefit.icon className="w-6 h-6 text-[#f58b00]" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-lg mb-2 text-gray-900">{benefit.title}</h5>
                    <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Industries */}
          <motion.div
            variants={containerVariants}
            className="space-y-8"
          >
            <motion.div variants={itemVariants} className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-[#15227a] rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900">Industry Performance</h4>
              </div>
              
              <div className="space-y-4">
                {industries.map((industry, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-white rounded-lg border border-gray-100">
                    <div className="w-10 h-10 bg-[#f58b00]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <industry.icon className="w-5 h-5 text-[#f58b00]" />
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-1">{industry.name}</h5>
                      <p className="text-sm text-gray-600 mb-1">{industry.description}</p>
                      <p className="text-xs text-[#15227a] font-medium">{industry.stats}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <BackgroundGradient>
                <div className="bg-gradient-to-br from-[#15227a] to-[#1e40af] rounded-2xl p-8 text-white">
                  <h4 className="text-xl font-bold mb-4">Ready to Revolutionize Your Work Orders?</h4>
                  <p className="mb-6 opacity-90">
                    Join thousands of maintenance professionals who have streamlined their operations with our intelligent work order management system.
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white text-[#15227a] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center gap-2"
                    onClick={() => window.open(PORTAL_URL, '_blank')}
                  >
                    <span>Start Managing Work Orders</span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </div>
              </BackgroundGradient>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 bg-[#f58b00] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#f58b00]/90 transition-colors shadow-lg"
            onClick={() => document.querySelector("#features")?.scrollIntoView({ behavior: "smooth" })}
          >
            <ClipboardList className="w-5 h-5" />
            Explore Work Order Features
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}