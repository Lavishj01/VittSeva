"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Brain, Calculator, Zap, Target, TrendingUp, Shield, PieChart, BarChart3, IndianRupee } from "lucide-react"

const vitSevaIntelligenceFeatures = [
  {
    icon: Brain,
    title: "VittSeva Smart Analytics",
    description: "Advanced financial algorithms analyze your portfolio performance and market trends, helping optimize your investment decisions by up to 25% better returns.",
    color: "primary",
    delay: 0
  },
  {
    icon: Calculator,
    title: "VittSeva Automated Planning",
    description: "Intelligent financial planning automation streamlines your wealth management processes, eliminating manual errors and ensuring optimal asset allocation.",
    color: "secondary",
    delay: 0.1
  },
  {
    icon: Target,
    title: "VittSeva Precision Advisory",
    description: "Data-driven insights provide actionable recommendations for optimal investment timing, tax planning, and financial goal achievement strategies.",
    color: "primary",
    delay: 0.2
  },
  {
    icon: TrendingUp,
    title: "VittSeva Performance Optimization",
    description: "Continuous market analysis and portfolio rebalancing optimize your financial strategies based on historical data and real-time market performance.",
    color: "secondary",
    delay: 0.3
  }
]

export default function VittSevaFinancialIntelligence() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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

  return (
    <section ref={ref} className="relative py-20 lg:py-32 overflow-hidden bg-muted/20">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-background to-blue-600/5" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 mb-6">
            <Zap className="w-5 h-5 text-green-500" />
            <IndianRupee className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium uppercase tracking-wider">
              <span className="text-green-500">VittSeva</span> <span className="text-blue-600">Financial Intelligence</span>
            </span>
          </motion.div>
          
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground"
          >
            <span className="text-green-500">Smart Financial</span>
            <span className="block text-blue-600">
              Intelligence Platform
            </span>
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-base text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed"
          >
            Harness the power of <span className="text-green-500 font-semibold">VittSeva's</span> advanced financial intelligence to transform your wealth management with predictive insights, automated planning, and intelligent investment decisions.
          </motion.p>
        </motion.div>

        {/* VittSeva Intelligence Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
        >
          {vitSevaIntelligenceFeatures.map((feature, index) => {
            const getColorClasses = (color: string) => {
              const colorMap = {
                primary: "bg-green-500/10 text-green-500 border-green-500/20",
                secondary: "bg-blue-600/10 text-blue-600 border-blue-600/20",
              }
              return colorMap[color as keyof typeof colorMap] || colorMap.primary
            }

            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative bg-card/20 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-border"
              >
                <div className={`w-16 h-16 rounded-2xl ${getColorClasses(feature.color)} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">{feature.title}</h3>
                <p className="text-base text-muted-foreground leading-relaxed">{feature.description}</p>
                
                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-blue-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            )
          })}
        </motion.div>

        {/* VittSeva Financial Intelligence Stats */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-16"
        >
          {[
            { value: "25%", label: "Better Investment Returns", icon: TrendingUp, color: "green" },
            { value: "60%", label: "Faster Financial Planning", icon: Zap, color: "blue" },
            { value: "95%", label: "Goal Achievement Rate", icon: Target, color: "green" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-card/20 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-border"
            >
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4 ${
                stat.color === 'green' ? 'bg-green-500/10 text-green-500' : 'bg-blue-600/10 text-blue-600'
              }`}>
                <stat.icon className="w-6 h-6" />
              </div>
              <div className="text-4xl font-bold text-foreground mb-2">{stat.value}</div>
              <div className="text-muted-foreground font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* VittSeva Intelligence Tools */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-16"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              <span className="text-green-500">VittSeva</span> <span className="text-blue-600">Intelligence Tools</span>
            </h3>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto">
              Advanced financial tools powered by <span className="text-green-500 font-semibold">VittSeva's</span> intelligent platform
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="grid md:grid-cols-4 gap-6">
            {[
              { icon: PieChart, title: "Portfolio Analyzer", desc: "Real-time portfolio performance tracking and optimization suggestions" },
              { icon: BarChart3, title: "Market Intelligence", desc: "Advanced market analysis and trend prediction for informed decisions" },
              { icon: Calculator, title: "Financial Calculator", desc: "Comprehensive financial calculators for planning and projections" },
              { icon: Shield, title: "Risk Assessment", desc: "Intelligent risk profiling and management recommendations" }
            ].map((tool, index) => (
              <div key={index} className="group p-6 bg-card/20 backdrop-blur-sm rounded-xl border border-border hover:border-green-500/30 transition-all duration-300 hover:shadow-lg">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500/10 to-blue-600/10 rounded-lg flex items-center justify-center mb-4 group-hover:from-green-500/20 group-hover:to-blue-600/20 transition-colors">
                  <tool.icon className="w-6 h-6 text-green-500" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">{tool.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{tool.desc}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div 
            variants={itemVariants}
            className="relative p-8 bg-gradient-to-r from-green-500 to-blue-600 rounded-2xl text-white text-center overflow-hidden"
          >
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Experience <span className="text-green-100">VittSeva's</span> Financial Intelligence
              </h3>
              <p className="text-base mb-6 max-w-3xl mx-auto opacity-90">
                Transform your financial decision-making with <span className="font-semibold text-green-100">VittSeva's</span> advanced intelligence platform. 
                Get personalized insights, automated planning, and optimized investment strategies.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Try VittSeva Intelligence
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Schedule Demo
                </motion.button>
              </div>
            </div>

            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-32 translate-x-32" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-32 -translate-x-32" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}