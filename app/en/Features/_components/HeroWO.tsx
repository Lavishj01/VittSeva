"use client"

import { motion, useInView } from "motion/react"
import { useRef, useState } from "react"
import { 
  AlertCircle, 
  CheckCircle, 
  Clock, 
  Users, 
  Smartphone, 
  Brain, 
  Zap, 
  TrendingUp, 
  Building2, 
  Factory, 
  Truck,
  ArrowRight,
  Play,
  Pause,
  RotateCcw,
  MessageSquare,
  FileText,
  Camera,
  Calendar,
  Bell,
  Settings
} from "lucide-react"
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials"
import { BackgroundBeams } from "@/components/ui/background-beams"


const PORTAL_URL = "https://portal.oxmaint.ai"

// Define proper TypeScript interfaces
interface WorkOrder {
  id: string;
  title: string;
  priority: "Low" | "Medium" | "High" | "Critical";
  assignee: string;
  progress?: number;
  completedAt?: string;
}

interface WorkOrderState {
  id: string;
  title: string;
  count: number;
  color: string;
  orders: WorkOrder[];
}

interface PainPoint {
  problem: string;
  impact: string;
  solution: string;
  icon: React.ElementType;
}

interface Industry {
  name: string;
  icon: React.ElementType;
  description: string;
  stats: Record<string, string>;
  features: string[];
}

interface Testimonial {
  quote: string;
  name: string;
  designation: string;
  src: string;
}

// Problem-Solution Data
const painPoints: PainPoint[] = [
  {
    problem: "Lost Work Orders",
    impact: "23% of maintenance requests get lost in paperwork",
    solution: "Digital tracking ensures 100% visibility",
    icon: FileText
  },
  {
    problem: "Delayed Response",
    impact: "Average 4-hour delay in emergency responses",
    solution: "Instant mobile notifications in seconds", 
    icon: Clock
  },
  {
    problem: "Poor Communication",
    impact: "67% of delays caused by miscommunication",
    solution: "Real-time updates and team messaging",
    icon: MessageSquare
  },
  {
    problem: "Manual Processes",
    impact: "45 minutes per work order creation",
    solution: "AI-powered 3-minute automated creation",
    icon: Brain
  }
]

// Interactive Dashboard Demo Data with proper typing
const workOrderStates: WorkOrderState[] = [
  {
    id: "pending",
    title: "Pending Review",
    count: 8,
    color: "bg-yellow-500",
    orders: [
      { id: "WO-001", title: "HVAC Filter Replacement", priority: "Low", assignee: "Unassigned" },
      { id: "WO-002", title: "Electrical Panel Inspection", priority: "Medium", assignee: "Unassigned" }
    ]
  },
  {
    id: "assigned",
    title: "Assigned", 
    count: 15,
    color: "bg-blue-500",
    orders: [
      { id: "WO-003", title: "Boiler Maintenance", priority: "High", assignee: "John Smith" },
      { id: "WO-004", title: "Conveyor Belt Repair", priority: "Critical", assignee: "Sarah Johnson" }
    ]
  },
  {
    id: "progress",
    title: "In Progress",
    count: 12,
    color: "bg-orange-500", 
    orders: [
      { id: "WO-005", title: "Pump Replacement", priority: "High", assignee: "Mike Chen", progress: 65 },
      { id: "WO-006", title: "Lighting Repair", priority: "Medium", assignee: "Lisa Park", progress: 30 }
    ]
  },
  {
    id: "completed",
    title: "Completed",
    count: 42,
    color: "bg-green-500",
    orders: [
      { id: "WO-007", title: "Generator Test", priority: "Medium", assignee: "Tom Wilson", completedAt: "2 hours ago" },
      { id: "WO-008", title: "Fire Alarm Check", priority: "High", assignee: "Emma Davis", completedAt: "4 hours ago" }
    ]
  }
]

// Industry Use Cases
const industries: Industry[] = [
  {
    name: "Manufacturing",
    icon: Factory,
    description: "Production line maintenance, equipment monitoring, and planned downtime optimization",
    stats: { orders: "2,500+", uptime: "98.5%", savings: "$2.3M" },
    features: ["Production Integration", "Downtime Scheduling", "Parts Management", "Quality Compliance"]
  },
  {
    name: "Facilities",
    icon: Building2, 
    description: "Building maintenance, HVAC systems, security, and tenant service requests",
    stats: { orders: "1,800+", response: "15min", satisfaction: "96%" },
    features: ["Tenant Portals", "Emergency Response", "Preventive Scheduling", "Vendor Management"]
  },
  {
    name: "Fleet Management",
    icon: Truck,
    description: "Vehicle maintenance, inspections, compliance tracking, and route optimization",
    stats: { vehicles: "500+", compliance: "100%", costs: "-35%" },
    features: ["DOT Compliance", "Fuel Tracking", "Driver Reporting", "Maintenance Alerts"]
  }
]

const testimonials: Testimonial[] = [
  {
    quote: "Oxmaint transformed our work order chaos into a streamlined process. We went from losing 25% of requests to 100% tracking in just two weeks.",
    name: "Michael Rodriguez",
    designation: "Maintenance Manager",
    src: "/api/placeholder/150/150"
  },
  {
    quote: "The AI-powered creation feature is incredible. What took our team 45 minutes now takes 3 minutes, and it's more accurate than ever.",
    name: "Sarah Chen",
    designation: "Operations Director", 
    src: "/api/placeholder/150/150"
  },
  {
    quote: "Our technicians love the mobile app. Voice notes and photo capture have revolutionized how we document maintenance work.",
    name: "David Thompson", 
    designation: "Field Supervisor",
    src: "/api/placeholder/150/150"
  }
]

// Custom Tabs Component to fix layout issues
const CustomTabs = () => {
  const [activeTab, setActiveTab] = useState("problem")

  const tabs = [
    { id: "problem", label: "Problem" },
    { id: "solution", label: "Solution" },
    { id: "results", label: "Results" }
  ]

  const renderContent = () => {
    switch (activeTab) {
      case "problem":
        return (
          <div className="space-y-8">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">The Work Order Challenge</h3>
              <p className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto">
                Most organizations struggle with inefficient, paper-based work order systems that create bottlenecks, 
                communication gaps, and costly delays. The result? Lost productivity, frustrated teams, and higher operational costs.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
              {painPoints.map((point, index) => (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="border border-red-200 bg-red-50 rounded-xl p-6 hover:bg-red-100 transition-all duration-200 hover:shadow-md"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <point.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-red-800 mb-2 text-lg">{point.problem}</h4>
                      <p className="text-sm text-red-700">{point.impact}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )
      
      case "solution":
        return (
          <div className="space-y-8">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">The Oxmaint Difference</h3>
              <p className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto">
                Our intelligent work order management system eliminates every pain point with AI-powered automation, 
                real-time tracking, and mobile-first design that your team will actually love to use.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
              {painPoints.map((point, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="border border-green-200 bg-green-50 rounded-xl p-6 hover:bg-green-100 transition-all duration-200 hover:shadow-md"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-green-800 mb-2 text-lg">{point.problem} - Solved</h4>
                      <p className="text-sm text-green-700">{point.solution}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )
      
      case "results":
        return (
          <div className="space-y-8">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Proven Industry Results</h3>
              <p className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto">
                Companies across industries have transformed their maintenance operations with measurable improvements 
                in efficiency, cost reduction, and team satisfaction.
              </p>
            </div>
            
            <div className="grid gap-6 max-w-6xl mx-auto">
              {industries.map((industry, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="border border-gray-200 bg-white rounded-xl p-8 hover:shadow-lg transition-all duration-200"
                >
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-[#15227a]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <industry.icon className="w-8 h-8 text-[#15227a]" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 mb-3 text-xl">{industry.name}</h4>
                      <p className="text-gray-600 mb-4">{industry.description}</p>
                      
                      <div className="flex gap-8 text-sm text-gray-500 mb-4">
                        {Object.entries(industry.stats).map(([key, value]) => (
                          <div key={key} className="text-center">
                            <div className="font-bold text-[#15227a] text-lg">{value}</div>
                            <div className="capitalize">{key.replace(/([A-Z])/g, ' $1')}</div>
                          </div>
                        ))}
                      </div>
                      
                      <div className="flex flex-wrap gap-3">
                        {industry.features.map((feature, featureIndex) => (
                          <span key={featureIndex} className="px-3 py-1 bg-[#f58b00]/10 text-[#f58b00] text-sm rounded-full">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )
      
      default:
        return null
    }
  }

  return (
    <div className="w-full">
      {/* Tab Navigation */}
      <div className="flex justify-center mb-12">
        <div className="inline-flex bg-gray-100 rounded-xl p-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                activeTab === tab.id
                  ? 'bg-white text-[#15227a] shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="min-h-[600px]">
        {renderContent()}
      </div>
    </div>
  )
}

export default function WorkOrderAbout() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeDashboard, setActiveDashboard] = useState(0)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
    <section id="about" ref={ref} className="py-20 lg:py-32 bg-white relative overflow-hidden">
      {/* Background Beams */}
      <BackgroundBeams className="absolute inset-0 z-0" />
      
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        
        {/* Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-20"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 mb-6">
            <Zap className="w-5 h-5 text-[#f58b00]" />
            <span className="text-sm font-medium text-[#f58b00] uppercase tracking-wider">Smart Work Orders</span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-gray-900"
          >
            Why Traditional Work Orders
            <br />
            <span className="text-[#15227a]">Fail Organizations</span>
            <br />
            <span className="text-gray-600 text-3xl md:text-4xl lg:text-5xl">And How We Fix Them</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12"
          >
            Discover why thousands of maintenance teams have moved from chaotic, paper-based systems to our 
            intelligent work order management platform that actually works the way your team does.
          </motion.p>

          {/* Hero Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#15227a] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#15227a]/90 transition-colors inline-flex items-center justify-center gap-2 text-lg shadow-lg"
              onClick={() => window.open(PORTAL_URL, '_blank')}
            >
              <span>Start Free Trial</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-[#f58b00] text-[#f58b00] px-8 py-4 rounded-xl font-bold hover:bg-[#f58b00] hover:text-white transition-colors inline-flex items-center justify-center gap-2 text-lg"
            >
              <Play className="w-5 h-5" />
              <span>Watch Demo</span>
            </motion.button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center items-center gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span>Free forever plan</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span>Setup in 5 minutes</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Interactive Dashboard Demo */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-32"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Live Work Order Dashboard</h2>
            <p className="text-lg text-gray-600">Interactive preview of real work order management</p>
          </motion.div>

          <motion.div variants={itemVariants} className="bg-gray-50 rounded-3xl p-8 shadow-xl">
            {/* Dashboard Header */}
            <div className="flex items-center justify-between mb-8 pb-6 border-b border-gray-200">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#15227a] rounded-xl flex items-center justify-center">
                  <Settings className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg">Work Order Command Center</h3>
                  <p className="text-gray-600">Real-time maintenance operations</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-gray-600">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="font-medium">Live System</span>
              </div>
            </div>

            {/* Status Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {workOrderStates.map((state, index) => (
                <motion.button
                  key={state.id}
                  onClick={() => setActiveDashboard(index)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`text-left p-6 rounded-xl border-2 transition-all duration-200 ${
                    activeDashboard === index 
                      ? 'border-[#f58b00] bg-[#f58b00]/5 shadow-lg' 
                      : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-md'
                  }`}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`w-4 h-4 ${state.color} rounded-full`}></div>
                    <span className="font-medium text-gray-900">{state.title}</span>
                  </div>
                  <div className="text-3xl font-bold text-gray-900">{state.count}</div>
                </motion.button>
              ))}
            </div>

            {/* Active Work Orders */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h4 className="font-semibold text-gray-900 mb-6 text-lg">
                {workOrderStates[activeDashboard].title} - {workOrderStates[activeDashboard].orders.length} Orders
              </h4>
              <div className="space-y-4">
                {workOrderStates[activeDashboard].orders.map((order, index) => (
                  <div key={order.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <div className="flex items-center gap-4">
                      <span className="text-xs font-mono text-gray-500 bg-white px-3 py-1 rounded-md border">
                        {order.id}
                      </span>
                      <div>
                        <div className="font-medium text-gray-900">{order.title}</div>
                        <div className="text-sm text-gray-600">
                          {order.assignee} • {order.priority} Priority
                        </div>
                      </div>
                    </div>
                    {order.progress !== undefined && (
                      <div className="text-right">
                        <div className="text-sm font-medium text-gray-900 mb-1">{order.progress}%</div>
                        <div className="w-20 h-2 bg-gray-200 rounded-full">
                          <div 
                            className="h-full bg-[#f58b00] rounded-full transition-all duration-500"
                            style={{ width: `${order.progress}%` }}
                          ></div>
                        </div>
                      </div>
                    )}
                    {order.completedAt && (
                      <div className="text-sm text-gray-500">
                        Completed {order.completedAt}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Problem/Solution/Results - Fixed Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-32"
        >
          <motion.div variants={itemVariants}>
            <CustomTabs />
          </motion.div>
        </motion.div>

        {/* Key Metrics */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-32"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Proven Results</h2>
            <p className="text-lg text-gray-600">The numbers speak for themselves</p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: "90%", label: "Faster Creation", icon: Zap, color: "text-[#f58b00]" },
              { value: "95%", label: "On-Time Completion", icon: CheckCircle, color: "text-green-500" },
              { value: "60%", label: "Cost Reduction", icon: TrendingUp, color: "text-[#15227a]" },
              { value: "24/7", label: "Mobile Access", icon: Smartphone, color: "text-purple-500" }
            ].map((metric, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center p-8 bg-white/80 rounded-xl hover:bg-white/90 transition-colors duration-200 backdrop-blur-sm border border-gray-200"
              >
                <metric.icon className={`w-12 h-12 ${metric.color} mx-auto mb-4`} />
                <div className="text-4xl font-bold text-gray-900 mb-2">{metric.value}</div>
                <div className="text-gray-600 font-medium">{metric.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Customer Stories */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
            <p className="text-lg text-gray-600">Real stories from maintenance professionals who transformed their operations</p>
          </div>
          <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
        </motion.div>

        {/* CTA Section */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center bg-gradient-to-r from-[#15227a] to-[#1e40af] rounded-3xl p-12 text-white"
        >
          <Brain className="w-16 h-16 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-6">Experience the Transformation</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            See why thousands of maintenance teams have ditched their old systems for Oxmaint's intelligent 
            work order management. Start your free trial and experience the difference in minutes.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-[#15227a] px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center gap-2 text-lg"
              onClick={() => window.open(PORTAL_URL, '_blank')}
            >
              <span>Start Free Trial</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-[#15227a] transition-colors inline-flex items-center justify-center gap-2 text-lg"
            >
              <Play className="w-5 h-5" />
              <span>Watch 2-Min Demo</span>
            </motion.button>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center gap-8 text-sm opacity-80">
            <div className="flex items-center justify-center gap-2">
              <CheckCircle className="w-4 h-4" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <CheckCircle className="w-4 h-4" />
              <span>Free forever plan</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <CheckCircle className="w-4 h-4" />
              <span>Setup in 5 minutes</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}