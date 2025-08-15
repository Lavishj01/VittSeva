"use client"

import { motion, useInView } from "motion/react"
import { useRef, useState } from "react"
import { 
  TrendingUp, 
  DollarSign, 
  Clock, 
  Users, 
  Target,
  ArrowUp,
  ArrowDown,
  CheckCircle,
  Building2,
  Factory,
  Truck,
  Zap,
  BarChart3,
  Timer,
  Shield,
  ArrowRight
} from "lucide-react"

const benefitCategories = [
  {
    title: "Cost Reduction",
    icon: DollarSign,
    color: "from-green-500 to-emerald-600",
    benefits: [
      { metric: "50%", description: "Reduction in maintenance costs", icon: ArrowDown },
      { metric: "75%", description: "Less administrative overhead", icon: ArrowDown },
      { metric: "60%", description: "Reduced emergency repairs", icon: ArrowDown },
      { metric: "$125K", description: "Average annual savings", icon: DollarSign }
    ]
  },
  {
    title: "Efficiency Gains",
    icon: Zap,
    color: "from-[#f58b00] to-orange-600",
    benefits: [
      { metric: "85%", description: "Faster work order completion", icon: ArrowUp },
      { metric: "90%", description: "Reduced creation time", icon: Timer },
      { metric: "95%", description: "On-time completion rate", icon: Target },
      { metric: "40%", description: "Increased productivity", icon: ArrowUp }
    ]
  },
  {
    title: "Team Performance",
    icon: Users,
    color: "from-[#15227a] to-blue-700",
    benefits: [
      { metric: "98%", description: "User adoption rate", icon: CheckCircle },
      { metric: "3x", description: "Faster technician response", icon: ArrowUp },
      { metric: "70%", description: "Improved communication", icon: Users },
      { metric: "55%", description: "Better job satisfaction", icon: ArrowUp }
    ]
  }
]

const industryResults = [
  {
    industry: "Manufacturing",
    icon: Factory,
    results: [
      "45% reduction in unplanned downtime",
      "60% improvement in asset reliability", 
      "$2.3M annual cost savings",
      "30% faster maintenance cycles"
    ]
  },
  {
    industry: "Facilities Management",
    icon: Building2,
    results: [
      "80% faster work order processing",
      "65% reduction in tenant complaints",
      "$890K savings in first year",
      "50% improvement in SLA compliance"
    ]
  },
  {
    industry: "Fleet Management",
    icon: Truck,
    results: [
      "35% reduction in vehicle downtime",
      "55% improvement in fuel efficiency",
      "$1.2M operational savings",
      "40% faster inspection cycles"
    ]
  }
]

const beforeAfter = [
  {
    category: "Work Order Creation",
    before: { value: "45 min", description: "Manual paperwork and data entry" },
    after: { value: "3 min", description: "AI-powered automated creation" },
    improvement: "93% faster"
  },
  {
    category: "Response Time",
    before: { value: "2.5 hours", description: "Paper-based notifications" },
    after: { value: "8 min", description: "Real-time mobile notifications" },
    improvement: "94% faster"
  },
  {
    category: "Documentation",
    before: { value: "30 min", description: "Manual reporting and filing" },
    after: { value: "Real-time", description: "Automated digital records" },
    improvement: "100% elimination"
  },
  {
    category: "Communication",
    before: { value: "Multiple calls", description: "Phone tag and emails" },
    after: { value: "Instant", description: "In-app messaging and updates" },
    improvement: "Real-time"
  }
]

const roiCalculator = {
  inputs: {
    workOrders: 500,
    avgTime: 45,
    hourlyRate: 75,
    adminTime: 20
  },
  calculations: {
    currentCost: 0,
    optimizedCost: 0,
    monthlySavings: 0,
    annualSavings: 0
  }
}

export default function Benefits() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [selectedCategory, setSelectedCategory] = useState(0)

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

  // Calculate ROI
  const currentMonthlyCost = (roiCalculator.inputs.workOrders * roiCalculator.inputs.avgTime * roiCalculator.inputs.hourlyRate) / 60
  const optimizedMonthlyCost = (roiCalculator.inputs.workOrders * 3 * roiCalculator.inputs.hourlyRate) / 60
  const monthlySavings = currentMonthlyCost - optimizedMonthlyCost
  const annualSavings = monthlySavings * 12

  return (
    <section id="benefits" ref={ref} className="py-20 lg:py-32 bg-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 mb-4">
            <TrendingUp className="w-5 h-5 text-[#f58b00]" />
            <span className="text-sm font-medium text-[#f58b00] uppercase tracking-wider">Business Impact</span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900"
          >
            Measurable Business
            <br />
            <span className="text-[#15227a]">Results & ROI</span>
            <br />
            <span className="text-gray-600 text-3xl md:text-4xl lg:text-5xl">That Drive Growth</span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
          >
            Don't just take our word for it. See the quantifiable impact our work order management system 
            delivers across industries, with real metrics from real customers.
          </motion.p>
        </motion.div>

        {/* Key Benefits Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-3 gap-8 mb-20"
        >
          {benefitCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center mb-6`}>
                <category.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{category.title}</h3>
              
              <div className="space-y-4">
                {category.benefits.map((benefit, benefitIndex) => (
                  <div key={benefitIndex} className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <benefit.icon className={`w-5 h-5 ${
                        benefit.icon === ArrowUp ? 'text-green-500' : 
                        benefit.icon === ArrowDown ? 'text-green-500' : 
                        benefit.icon === DollarSign ? 'text-green-600' :
                        'text-blue-500'
                      }`} />
                      <span className="text-2xl font-bold text-[#15227a]">{benefit.metric}</span>
                    </div>
                    <span className="text-gray-600 text-sm leading-tight">{benefit.description}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Before vs After */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-20"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Before vs After</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              See the dramatic transformation in your maintenance operations
            </p>
          </motion.div>

          <div className="bg-white rounded-2xl p-8 shadow-lg overflow-x-auto">
            <div className="min-w-[800px]">
              <div className="grid grid-cols-4 gap-8">
                <div className="font-semibold text-gray-900 text-lg">Process</div>
                <div className="text-center">
                  <div className="text-red-600 font-semibold mb-2">❌ Before</div>
                  <div className="text-sm text-gray-600">Traditional Method</div>
                </div>
                <div className="text-center">
                  <div className="text-green-600 font-semibold mb-2">✅ After</div>
                  <div className="text-sm text-gray-600">With Oxmaint</div>
                </div>
                <div className="text-center">
                  <div className="text-[#f58b00] font-semibold mb-2">📈 Improvement</div>
                  <div className="text-sm text-gray-600">Results</div>
                </div>
              </div>

              <div className="border-t border-gray-200 mt-4 pt-6 space-y-6">
                {beforeAfter.map((comparison, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="grid grid-cols-4 gap-8 items-center py-4 hover:bg-gray-50 rounded-lg transition-colors"
                  >
                    <div className="font-medium text-gray-900">{comparison.category}</div>
                    <div className="text-center">
                      <div className="text-xl font-bold text-red-600 mb-1">{comparison.before.value}</div>
                      <div className="text-sm text-gray-600">{comparison.before.description}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xl font-bold text-green-600 mb-1">{comparison.after.value}</div>
                      <div className="text-sm text-gray-600">{comparison.after.description}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xl font-bold text-[#f58b00]">{comparison.improvement}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Industry Results */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-20"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Industry Success Stories</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real results from companies across different industries
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {industryResults.map((industry, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-[#15227a]/10 rounded-lg flex items-center justify-center">
                    <industry.icon className="w-6 h-6 text-[#15227a]" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900">{industry.industry}</h4>
                </div>

                <ul className="space-y-3">
                  {industry.results.map((result, resultIndex) => (
                    <li key={resultIndex} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{result}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ROI Calculator */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="bg-gradient-to-r from-[#15227a] to-[#1e40af] rounded-2xl p-8 text-white mb-16"
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Calculate Your Potential Savings</h3>
              <p className="text-lg opacity-90 mb-6">
                Based on industry averages, here's what you could save with Oxmaint's work order management system:
              </p>
              
              <div className="space-y-4">
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-sm opacity-80 mb-1">Monthly Work Orders</div>
                  <div className="text-2xl font-bold">{roiCalculator.inputs.workOrders.toLocaleString()}</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-sm opacity-80 mb-1">Current Time per Order</div>
                  <div className="text-2xl font-bold">{roiCalculator.inputs.avgTime} minutes</div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h4 className="text-xl font-semibold mb-4">Your Potential ROI</h4>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-2 border-b border-white/20">
                  <span>Current Monthly Cost:</span>
                  <span className="font-bold">${currentMonthlyCost.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-white/20">
                  <span>Optimized Monthly Cost:</span>
                  <span className="font-bold">${optimizedMonthlyCost.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center text-green-300">
                  <span>Monthly Savings:</span>
                  <span className="font-bold text-xl">${monthlySavings.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center text-green-300 text-xl pt-2 border-t border-white/20">
                  <span className="font-semibold">Annual Savings:</span>
                  <span className="font-bold">${annualSavings.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Ready to Achieve These Results?</h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of companies who have transformed their maintenance operations and achieved 
            measurable ROI with our work order management system.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#15227a] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#15227a]/90 transition-colors inline-flex items-center justify-center gap-2"
              onClick={() => window.open("https://portal.oxmaint.ai", '_blank')}
            >
              <span>Start Free Trial</span>
              <ArrowRight className="w-4 h-4" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-[#f58b00] text-[#f58b00] px-8 py-3 rounded-lg font-semibold hover:bg-[#f58b00] hover:text-white transition-colors inline-flex items-center justify-center gap-2"
            >
              <BarChart3 className="w-4 h-4" />
              <span>Schedule ROI Demo</span>
            </motion.button>
          </div>
          
          <div className="grid grid-cols-3 gap-6 max-w-lg mx-auto mt-8 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span>Free forever plan</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span>Setup in minutes</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}