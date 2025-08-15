"use client"

import { motion, useInView } from "motion/react"
import { useRef } from "react"
import { 
  ClipboardList, 
  Timer, 
  Users, 
  CheckCircle, 
  AlertTriangle, 
  Calendar, 
  Workflow, 
  Brain, 
  Smartphone, 
  Zap, 
  BarChart3, 
  Settings,
  Camera,
  MessageSquare,
  QrCode,
  Bell,
  FileText,
  UserCheck,
  ArrowRight
} from "lucide-react"
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid"
import { BackgroundGradient } from "@/components/ui/background-gradient"

const PORTAL_URL = "https://portal.oxmaint.ai" // Replace with actual URL

const mainFeatures = [
  {
    title: "AI-Powered Work Order Creation",
    description: "Create work orders instantly with intelligent suggestions for equipment details, procedures, required parts, and estimated completion times. Reduce creation time by 90%.",
    link: "#",
    className: "md:col-span-2 md:row-span-2",
    icon: <Brain className="w-8 h-8 text-[#f58b00]" />,
    header: (
      <div className="flex flex-1 w-full h-full min-h-[6rem] bg-gradient-to-br from-[#f58b00]/20 via-white to-[#15227a]/10 rounded-xl relative overflow-hidden">
        <div className="absolute inset-0 bg-white/80" />
        <div className="relative p-6 w-full">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-[#f58b00]/20 rounded-lg flex items-center justify-center">
              <Brain className="w-6 h-6 text-[#f58b00]" />
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-800">OXY AI Assistant</h4>
              <p className="text-sm text-gray-600">Intelligent work order creation</p>
            </div>
          </div>
          <div className="space-y-3">
            <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-100">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm font-medium text-gray-700">Auto-suggest equipment details</span>
              </div>
              <div className="text-xs text-gray-500">HVAC Unit #A-101 • Routine Maintenance • Est. 2 hours</div>
            </div>
            <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-100">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-sm font-medium text-gray-700">Recommend required parts</span>
              </div>
              <div className="text-xs text-gray-500">Filter Kit #F-2041 • Belt Assembly #B-3052</div>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "Smart Priority Management",
    description: "Automatically prioritize work orders based on equipment criticality, safety impact, and business operations. Ensure urgent tasks get immediate attention.",
    link: "#",
    className: "md:col-span-1",
    icon: <AlertTriangle className="w-6 h-6 text-[#f58b00]" />,
    header: (
      <div className="flex flex-1 w-full h-full min-h-[6rem] bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-4">
        <div className="w-full space-y-2">
          {[
            { priority: "Critical", color: "bg-red-500", label: "Safety Issue - Boiler #3" },
            { priority: "High", color: "bg-orange-500", label: "Production Line A - Conveyor" },
            { priority: "Medium", color: "bg-yellow-500", label: "HVAC Maintenance - Building 2" },
            { priority: "Low", color: "bg-green-500", label: "Lighting Replacement - Office" }
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-3 p-2 bg-white rounded-lg shadow-sm">
              <div className={`w-3 h-3 ${item.color} rounded-full`}></div>
              <div className="flex-1">
                <div className="text-xs font-medium text-gray-700">{item.label}</div>
                <div className="text-xs text-gray-500">{item.priority} Priority</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  },
  {
    title: "Real-Time Status Tracking",
    description: "Monitor work order progress in real-time with live updates, completion tracking, and instant notifications. Never lose track of maintenance tasks.",
    link: "#",
    className: "md:col-span-1",
    icon: <Timer className="w-6 h-6 text-[#15227a]" />,
    header: (
      <div className="flex flex-1 w-full h-full min-h-[6rem] bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-4">
        <div className="w-full">
          <div className="grid grid-cols-2 gap-2">
            {[
              { status: "In Progress", count: "12", color: "text-blue-600" },
              { status: "Completed", count: "28", color: "text-green-600" },
              { status: "Pending", count: "5", color: "text-yellow-600" },
              { status: "Overdue", count: "2", color: "text-red-600" }
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-lg p-3 text-center shadow-sm">
                <div className={`text-lg font-bold ${item.color}`}>{item.count}</div>
                <div className="text-xs text-gray-600">{item.status}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  },
  {
    title: "Mobile Field Technician App",
    description: "Full mobile functionality for field technicians. Update status, capture photos, record time, and complete work orders directly from any location.",
    link: "#",
    className: "md:col-span-2 md:row-span-1",
    icon: <Smartphone className="w-6 h-6 text-[#15227a]" />,
    header: (
      <div className="flex flex-1 w-full h-full min-h-[6rem] bg-gradient-to-r from-[#15227a]/10 to-[#f58b00]/10 rounded-xl p-4">
        <div className="flex items-center justify-between w-full">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#15227a]/20 rounded-lg flex items-center justify-center">
                <QrCode className="w-5 h-5 text-[#15227a]" />
              </div>
              <div>
                <div className="text-sm font-medium text-gray-800">QR Code Scanning</div>
                <div className="text-xs text-gray-600">Instant asset identification</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#f58b00]/20 rounded-lg flex items-center justify-center">
                <Camera className="w-5 h-5 text-[#f58b00]" />
              </div>
              <div>
                <div className="text-sm font-medium text-gray-800">Photo Documentation</div>
                <div className="text-xs text-gray-600">Before & after evidence</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                <MessageSquare className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <div className="text-sm font-medium text-gray-800">Voice Notes</div>
                <div className="text-xs text-gray-600">Audio updates on the go</div>
              </div>
            </div>
          </div>
          <div className="w-20 h-32 bg-gray-800 rounded-xl p-2 flex flex-col">
            <div className="flex-1 bg-white rounded-lg p-1">
              <div className="h-full bg-gradient-to-b from-[#15227a]/20 to-[#f58b00]/20 rounded"></div>
            </div>
            <div className="w-8 h-1 bg-white rounded-full mx-auto mt-2"></div>
          </div>
        </div>
      </div>
    )
  }
]

const additionalFeatures = [
  {
    title: "Automated Workflows",
    description: "Set up approval workflows and automatic task routing based on work order type, priority, and technician availability.",
    icon: Workflow
  },
  {
    title: "Smart Scheduling",
    description: "Optimize technician schedules with AI-powered planning that considers skills, location, priority, and estimated completion times.",
    icon: Calendar
  },
  {
    title: "Team Collaboration",
    description: "Enable seamless communication between technicians, supervisors, and requestors with real-time messaging and updates.",
    icon: Users
  },
  {
    title: "Performance Analytics",
    description: "Track completion rates, response times, technician productivity, and maintenance costs with comprehensive reporting.",
    icon: BarChart3
  },
  {
    title: "Digital Checklists",
    description: "Create and manage digital maintenance checklists, SOPs, and inspection forms that technicians can complete on mobile.",
    icon: FileText
  },
  {
    title: "Integration Hub",
    description: "Connect with 400+ business applications including ERP systems, IoT devices, and existing maintenance management tools.",
    icon: Settings
  }
]

export default function WorkOrderFeatures() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
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
    <section id="features" ref={ref} className="py-20 lg:py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 mb-4">
            <ClipboardList className="w-5 h-5 text-[#f58b00]" />
            <span className="text-sm font-medium text-[#f58b00] uppercase tracking-wider">Work Order Features</span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900"
          >
            Powerful Work Order
            <br />
            <span className="text-[#15227a]">Management Features</span>
            <br />
            <span className="text-gray-600 text-3xl md:text-4xl lg:text-5xl">Built for Efficiency</span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
          >
            Comprehensive work order management tools that streamline every aspect of your maintenance operations. 
            From AI-powered creation to mobile field completion, experience the future of maintenance management.
          </motion.p>
        </motion.div>

        {/* Main Features Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-32"
        >
          <motion.div variants={itemVariants}>
            <BentoGrid className="max-w-7xl mx-auto">
              {mainFeatures.map((item, i) => (
                <BentoGridItem
                  key={i}
                  title={item.title}
                  description={item.description}
                  header={item.header}
                  icon={item.icon}
                  className={item.className}
                />
              ))}
            </BentoGrid>
          </motion.div>
        </motion.div>

        {/* Additional Features Grid - FIXED */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-20"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Complete Feature Set</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need to manage work orders efficiently, from creation to completion and analysis
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {additionalFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl hover:border-[#f58b00]/30 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-[#f58b00]/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#f58b00]/20 transition-colors duration-300">
                    <feature.icon className="w-7 h-7 text-[#f58b00]" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900 mb-3 text-lg group-hover:text-[#15227a] transition-colors duration-300">
                      {feature.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
                
                {/* Hover effect gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#f58b00]/5 to-[#15227a]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Feature Highlights */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left - Key Benefits */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Work Order System</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Built specifically for maintenance professionals who need powerful, intuitive tools that actually work 
                in the field. Our work order management system eliminates paperwork and streamlines every process.
              </p>
            </div>
            
            <div className="space-y-6">
              {[
                { icon: Zap, title: "90% Faster Creation", desc: "AI-powered work order generation saves time" },
                { icon: CheckCircle, title: "95% Completion Rate", desc: "Mobile-first field execution ensures follow-through" },
                { icon: Bell, title: "Real-Time Updates", desc: "Instant notifications keep everyone informed" },
                { icon: UserCheck, title: "Smart Assignment", desc: "Automated technician routing optimizes efficiency" }
              ].map((benefit, index) => (
                <div key={index} className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                  <div className="w-14 h-14 bg-[#f58b00]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-7 h-7 text-[#f58b00]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-lg mb-1">{benefit.title}</h4>
                    <p className="text-gray-600">{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right - CTA Card */}
          <motion.div variants={itemVariants}>
            <BackgroundGradient className="w-full">
              <div className="bg-gradient-to-br from-[#15227a] to-[#1e40af] rounded-2xl p-8 text-white">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center">
                    <ClipboardList className="w-7 h-7 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold">Ready to Transform Your Work Orders?</h4>
                </div>
                
                <p className="mb-8 opacity-90 text-lg">
                  Join thousands of maintenance professionals who have revolutionized their operations with intelligent 
                  work order management. Start your free trial today.
                </p>

                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span>No credit card required</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span>Free forever plan</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span>Setup in minutes</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span>24/7 support</span>
                    </div>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-white text-[#15227a] px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2 text-lg"
                    onClick={() => window.open(PORTAL_URL, '_blank')}
                  >
                    <span>Start Managing Work Orders Free</span>
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </div>
              </div>
            </BackgroundGradient>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}