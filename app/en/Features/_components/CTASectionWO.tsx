"use client"

import { motion, useInView } from "motion/react"
import { useRef } from "react"
import { 
  Smartphone, 
  QrCode, 
  Camera, 
  MessageSquare, 
  Wifi,
  WifiOff,
  Bell,
  CheckCircle,
  Timer,
  ArrowRight,
  Star,
  Download,
  Users,
  Zap
} from "lucide-react"

const mobileFeatures = [
  {
    icon: QrCode,
    title: "QR Code Scanning",
    description: "Instantly identify equipment and access maintenance history with a simple scan",
    color: "bg-[#f58b00]"
  },
  {
    icon: Camera,
    title: "Photo Documentation",
    description: "Capture before/after photos and attach them directly to work orders",
    color: "bg-blue-500"
  },
  {
    icon: MessageSquare,
    title: "Voice Notes",
    description: "Record audio updates on-the-go when typing isn't convenient",
    color: "bg-green-500"
  },
  {
    icon: WifiOff,
    title: "Offline Mode",
    description: "Work without internet connection and sync automatically when back online",
    color: "bg-purple-500"
  },
  {
    icon: Bell,
    title: "Push Notifications",
    description: "Receive instant alerts for new assignments and priority updates",
    color: "bg-red-500"
  },
  {
    icon: Timer,
    title: "Time Tracking",
    description: "Track labor hours automatically with start/stop timers",
    color: "bg-indigo-500"
  }
]

const appStats = [
  { value: "4.8", label: "App Store Rating", icon: Star },
  { value: "50K+", label: "Active Users", icon: Users },
  { value: "99%", label: "Uptime", icon: CheckCircle },
  { value: "2sec", label: "Sync Speed", icon: Zap }
]

const testimonials = [
  {
    quote: "The mobile app is incredibly intuitive. My technicians were up and running in minutes!",
    author: "Mike Johnson",
    role: "Maintenance Manager",
    company: "TechCorp Industries"
  },
  {
    quote: "Voice notes have been a game-changer. No more struggling to type with dirty gloves.",
    author: "Sarah Chen",
    role: "Field Technician", 
    company: "Metro Facilities"
  },
  {
    quote: "Offline mode saves us when we're working in areas with poor cell coverage.",
    author: "David Rodriguez",
    role: "Service Supervisor",
    company: "Industrial Solutions"
  }
]

export default function MobileApp() {
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
    <section id="mobile" ref={ref} className="py-20 lg:py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 mb-4">
            <Smartphone className="w-5 h-5 text-[#f58b00]" />
            <span className="text-sm font-medium text-[#f58b00] uppercase tracking-wider">Mobile First</span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900"
          >
            Built for
            <br />
            <span className="text-[#15227a]">Field Technicians</span>
            <br />
            <span className="text-gray-600 text-3xl md:text-4xl lg:text-5xl">Mobile-First Experience</span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
          >
            Our mobile app puts the full power of work order management in your technicians' pockets. 
            Work efficiently from anywhere, whether online or offline, with intuitive tools designed for the field.
          </motion.p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          
          {/* Left - Phone Mockup */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="relative flex justify-center"
          >
            {/* Phone Frame */}
            <div className="relative">
              <div className="w-80 h-[600px] bg-gray-900 rounded-[3rem] p-2 shadow-2xl">
                {/* Screen */}
                <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
                  {/* Status Bar */}
                  <div className="bg-[#15227a] text-white px-6 py-4 flex items-center justify-between text-sm">
                    <span className="font-semibold">Oxmaint</span>
                    <div className="flex items-center gap-2">
                      <Wifi className="w-4 h-4" />
                      <div className="flex gap-1">
                        <div className="w-1 h-3 bg-white rounded-full"></div>
                        <div className="w-1 h-3 bg-white rounded-full"></div>
                        <div className="w-1 h-3 bg-white/50 rounded-full"></div>
                      </div>
                    </div>
                  </div>

                  {/* App Content */}
                  <div className="p-4 space-y-4">
                    {/* Work Order Card */}
                    <div className="bg-gradient-to-r from-[#f58b00]/10 to-[#15227a]/10 rounded-xl p-4 border border-gray-200">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-medium text-gray-600">WO-2024-001</span>
                        <span className="px-2 py-1 bg-red-100 text-red-700 text-xs rounded-full">High Priority</span>
                      </div>
                      <h3 className="font-semibold text-gray-800 mb-2">HVAC Maintenance - Building A</h3>
                      <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                        <Timer className="w-4 h-4" />
                        <span>Assigned to: John Doe</span>
                      </div>
                      <div className="flex gap-2">
                        <button className="flex-1 bg-[#15227a] text-white py-2 rounded-lg text-sm font-medium">
                          Start Work
                        </button>
                        <button className="px-3 py-2 border border-gray-300 rounded-lg">
                          <QrCode className="w-4 h-4 text-gray-600" />
                        </button>
                      </div>
                    </div>

                    {/* Quick Actions */}
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-gray-50 rounded-lg p-3 text-center">
                        <Camera className="w-6 h-6 text-[#f58b00] mx-auto mb-2" />
                        <span className="text-xs font-medium text-gray-700">Take Photo</span>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-3 text-center">
                        <MessageSquare className="w-6 h-6 text-[#15227a] mx-auto mb-2" />
                        <span className="text-xs font-medium text-gray-700">Voice Note</span>
                      </div>
                    </div>

                    {/* Recent Activity */}
                    <div className="space-y-2">
                      <h4 className="font-medium text-gray-800 text-sm">Recent Activity</h4>
                      {[
                        { action: "Photo uploaded", time: "2 min ago", status: "completed" },
                        { action: "Status updated", time: "5 min ago", status: "completed" },
                        { action: "Voice note recorded", time: "8 min ago", status: "completed" }
                      ].map((activity, idx) => (
                        <div key={idx} className="flex items-center gap-3 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span className="flex-1 text-gray-700">{activity.action}</span>
                          <span className="text-gray-500 text-xs">{activity.time}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Home Indicator */}
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gray-400 rounded-full"></div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 bg-green-500 text-white p-2 rounded-full shadow-lg"
              >
                <Bell className="w-5 h-5" />
              </motion.div>

              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 3, delay: 1, repeat: Infinity }}
                className="absolute -bottom-4 -left-4 bg-[#f58b00] text-white p-2 rounded-full shadow-lg"
              >
                <CheckCircle className="w-5 h-5" />
              </motion.div>
            </div>
          </motion.div>

          {/* Right - Features */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-6"
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Powerful Mobile Features</h3>
              <p className="text-gray-600 leading-relaxed mb-8">
                Every feature is designed with field technicians in mind. Work efficiently, stay connected, 
                and never miss a beat with our comprehensive mobile solution.
              </p>
            </motion.div>

            <div className="space-y-4">
              {mobileFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                >
                  <div className={`w-12 h-12 ${feature.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{feature.title}</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Download Buttons */}
            <motion.div variants={itemVariants} className="flex gap-4 pt-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
              >
                <Download className="w-5 h-5" />
                <div className="text-left">
                  <div className="text-xs opacity-80">Download on the</div>
                  <div className="text-sm font-semibold">App Store</div>
                </div>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
              >
                <Download className="w-5 h-5" />
                <div className="text-left">
                  <div className="text-xs opacity-80">Get it on</div>
                  <div className="text-sm font-semibold">Google Play</div>
                </div>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* App Stats */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {appStats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-center p-6 bg-gray-50 rounded-xl"
            >
              <div className="w-12 h-12 bg-[#f58b00]/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-6 h-6 text-[#f58b00]" />
              </div>
              <div className="text-3xl font-bold text-[#15227a] mb-2">{stat.value}</div>
              <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-16"
        >
          <motion.h3 variants={itemVariants} className="text-3xl font-bold text-center text-gray-900 mb-12">
            What Field Technicians Say
          </motion.h3>

          <div className="grid lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <blockquote className="text-gray-700 leading-relaxed mb-4">
                  "{testimonial.quote}"
                </blockquote>
                <div className="border-t border-gray-100 pt-4">
                  <div className="font-semibold text-gray-900">{testimonial.author}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                  <div className="text-sm text-[#f58b00] font-medium">{testimonial.company}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center bg-gradient-to-r from-[#15227a] to-[#1e40af] rounded-2xl p-8 text-white"
        >
          <Smartphone className="w-12 h-12 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-4">Ready to Go Mobile?</h3>
          <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
            Experience the future of field maintenance with our award-winning mobile app. 
            Download now and transform how your team works in the field.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-[#15227a] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center gap-2"
            onClick={() => window.open("https://portal.oxmaint.ai", '_blank')}
          >
            <span>Start Free Trial</span>
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}