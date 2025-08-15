"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Brain, Cpu, Zap, Target, TrendingUp, Shield } from "lucide-react"

const aiFeatures = [
  {
    icon: Brain,
    title: "Predictive Analytics",
    description: "Advanced machine learning algorithms predict equipment failures before they happen, reducing downtime by up to 70%.",
    color: "primary",
    delay: 0
  },
  {
    icon: Cpu,
    title: "Smart Automation",
    description: "Intelligent workflow automation streamlines maintenance processes, eliminating manual tasks and human error.",
    color: "secondary",
    delay: 0.1
  },
  {
    icon: Target,
    title: "Precision Insights",
    description: "AI-driven analytics provide actionable insights for optimal maintenance scheduling and resource allocation.",
    color: "primary",
    delay: 0.2
  },
  {
    icon: TrendingUp,
    title: "Performance Optimization",
    description: "Continuous learning algorithms optimize maintenance strategies based on historical data and real-time performance.",
    color: "secondary",
    delay: 0.3
  }
]

export default function AISection() {
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
    <section ref={ref} className="relative py-20 lg:py-32 overflow-hidden">
      {/* Content */}
      <div className="relative z-20 container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 mb-6">
            <Zap className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium text-primary uppercase tracking-wider">Artificial Intelligence</span>
          </motion.div>
          
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground"
          >
            AI-Powered
            <span className="block text-primary">
              Maintenance Intelligence
            </span>
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed"
          >
            Harness the power of artificial intelligence to transform your maintenance operations with predictive insights, automated workflows, and intelligent decision-making.
          </motion.p>
        </motion.div>

        {/* AI Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
        >
          {aiFeatures.map((feature, index) => {
            const getColorClasses = (color: string) => {
              const colorMap = {
                primary: "bg-primary/10 text-primary border-primary/20",
                secondary: "bg-secondary/10 text-secondary border-secondary/20",
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
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                
                {/* Hover Effect */}
                <div className="absolute inset-0 bg-primary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            )
          })}
        </motion.div>

        {/* AI Stats */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
        >
          {[
            { value: "70%", label: "Reduction in Downtime", icon: TrendingUp },
            { value: "50%", label: "Faster Issue Detection", icon: Zap },
            { value: "90%", label: "Prediction Accuracy", icon: Target }
          ].map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-card/20 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-border"
            >
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-6 h-6" />
              </div>
              <div className="text-4xl font-bold text-foreground mb-2">{stat.value}</div>
              <div className="text-muted-foreground font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
} 