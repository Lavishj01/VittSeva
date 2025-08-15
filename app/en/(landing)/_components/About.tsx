"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { IndianRupee, Shield, Target, Globe, TrendingUp, Users, PieChart, CreditCard, Banknote, Calculator, Building2, Home, Landmark } from "lucide-react"
import { LayoutGrid } from "@/components/ui/layout-grid"
import { useRouter } from "next/navigation"

const stats = [
  { label: "Happy Clients", value: "2000+", icon: Users },
  { label: "Portfolio Growth", value: "15%", icon: TrendingUp },
  { label: "Satisfaction Rate", value: "99.5%", icon: Target },
]

const capabilities = [
  {
    id: 1,
    className: "md:col-span-2",
    thumbnail: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDUwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjUwMCIgaGVpZ2h0PSIzMDAiIGZpbGw9InVybCgjZ3JhZGllbnQxKSIvPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iZ3JhZGllbnQxIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjZGJlYWZlIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjYzdhZGY5Ii8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PC9zdmc+",
    content: (
      <div className="bg-card rounded-lg p-6 shadow-lg">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
            <PieChart className="w-6 h-6 text-primary" />
          </div>
          <h3 className="text-xl font-bold text-foreground">VittSeva Investment Advisory & Wealth Management</h3>
        </div>
        <p className="text-muted-foreground leading-relaxed">
          Build and grow your wealth with VittSeva's expert investment guidance. We offer a wide variety of investment options suitable for all ages and financial statuses, ensuring personalized strategies that maximize returns while managing risk effectively.
        </p>
      </div>
    )
  },
  {
    id: 2,
    className: "md:col-span-1",
    thumbnail: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDUwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjUwMCIgaGVpZ2h0PSIzMDAiIGZpbGw9InVybCgjZ3JhZGllbnQyKSIvPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iZ3JhZGllbnQyIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjZGNmY2U3Ii8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjYjJmMmQ3Ci8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PC9zdmc+",
    content: (
      <div className="bg-card rounded-lg p-6 shadow-lg">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
            <Shield className="w-6 h-6 text-secondary" />
          </div>
          <h3 className="text-xl font-bold text-foreground">VittSeva Insurance Solutions</h3>
        </div>
        <p className="text-muted-foreground leading-relaxed">
          Comprehensive protection for life's uncertainties with VittSeva. From Life and Medical to General insurance, we provide unbiased advice with multiple options from leading insurers to safeguard your financial future.
        </p>
      </div>
    )
  },
  {
    id: 3,
    className: "md:col-span-1",
    thumbnail: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDUwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjUwMCIgaGVpZ2h0PSIzMDAiIGZpbGw9InVybCgjZ3JhZGllbnQzKSIvPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iZ3JhZGllbnQzIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjZmVmM2M3Ci8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjZmJjZjg4Ci8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PC9zdmc+",
    content: (
      <div className="bg-card rounded-lg p-6 shadow-lg">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
            <CreditCard className="w-6 h-6 text-secondary" />
          </div>
          <h3 className="text-xl font-bold text-foreground">VittSeva Loan Solutions</h3>
        </div>
        <p className="text-muted-foreground leading-relaxed">
          From personal to business loans, VittSeva provides expertise and a network of lenders for hassle-free, cost-effective financing. Home loans, education loans, and more - all through one trusted advisor.
        </p>
      </div>
    )
  },
  {
    id: 4,
    className: "md:col-span-2",
    thumbnail: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDUwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjUwMCIgaGVpZ2h0PSIzMDAiIGZpbGw9InVybCgjZ3JhZGllbnQ0KSIvPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iZ3JhZGllbnQ0IiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjZmFmNWZmIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjYzdhZGY5Ci8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PC9zdmc+",
    content: (
      <div className="bg-card rounded-lg p-6 shadow-lg">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
            <Calculator className="w-6 h-6 text-primary" />
          </div>
          <h3 className="text-xl font-bold text-foreground">VittSeva Tax Planning & Accounting</h3>
        </div>
        <p className="text-muted-foreground leading-relaxed">
          Optimize your tax strategies with VittSeva's expert accounting and tax planning services. We help streamline processes, ensure compliance, and maximize your savings through strategic financial planning and business advisory.
        </p>
      </div>
    )
  },
]

const values = [
  {
    icon: Target,
    title: "VittSeva Personalized Financial Solutions",
    description: "Every client receives customized advice tailored to their specific financial goals, risk tolerance, and life stage. Our multi-brand, multi-option approach ensures you get the most suitable solutions."
  },
  {
    icon: Globe,
    title: "VittSeva Comprehensive Service Portfolio",
    description: "From investments and insurance to loans and tax planning, we offer a complete range of financial services under one roof, making your financial journey seamless and efficient."
  },
  {
    icon: Users,
    title: "VittSeva Specialized Expertise",
    description: "Our experienced team includes specialists for NRI services, women-centered financial planning, senior citizen advisory, and corporate legal services, ensuring expert guidance for every client segment."
  },
]

export default function About() {
  const router = useRouter()
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

  return (
    <section id="about" ref={ref} className="py-20 lg:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 mb-4">
            <IndianRupee className="w-5 h-5 text-green-500" />
            <span className="text-sm font-medium text-blue-600 uppercase tracking-wider">
              <span className="text-green-500">Vitt</span><span className="text-blue-600">Seva</span> (वित्त सेवा)
            </span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 relative text-foreground"
          >
            <span className="text-green-500">VittSeva</span> Comprehensive Financial Services
            <br />
            <span className="text-blue-600">Simple, Personal & Optimal</span>
            <br />
            for Individuals and Businesses
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-base text-muted-foreground max-w-4xl mx-auto leading-relaxed"
          >
            From protection to prosperity, <span className="text-green-500 font-semibold">VittSeva</span> provides a wide range of financial solutions tailored to your specific needs and budget. 
            Our experienced team is committed to making financial decisions easy and optimized for our customers.
          </motion.p>
        </motion.div>

        {/* VittSeva Core Services - 9 Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-20"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Complete <span className="text-green-500">VittSeva</span> <span className="text-blue-600">Service Portfolio</span>
            </h3>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto">
              Comprehensive financial solutions designed to meet every aspect of your financial journey with <span className="text-green-500 font-semibold">VittSeva's</span> expert guidance
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Calculator,
                title: "ACCOUNTING AND TAX FILING",
                subtitle: "Streamlined Finances, Optimized Returns.",
                color: "green"
              },
              {
                icon: Shield,
                title: "INSURANCE (SURAKSHA)",
                subtitle: "Protection Made Personal.",
                color: "blue"
              },
              {
                icon: Target,
                title: "CLAIM SETTLEMENT (SAMADHAN)",
                subtitle: "Efficient Solutions for Fair Compensation.",
                color: "green"
              },
              {
                icon: CreditCard,
                title: "LOANS (SAHYOG)",
                subtitle: "Unlocking Opportunities, Empowering Growth.",
                color: "blue"
              },
              {
                icon: TrendingUp,
                title: "INVESTMENTS (SAMRIDDHI)",
                subtitle: "Building Wealth, Maximizing Potential.",
                color: "green"
              },
              {
                icon: IndianRupee,
                title: "FUNDING AND FINANCE (SUVIDHA)",
                subtitle: "Fueling Ambitions, Enabling Success.",
                color: "blue"
              },
              {
                icon: Building2,
                title: "BUSINESS BANKING (SAMRIDHI)",
                subtitle: "Tailored Solutions for Business Growth.",
                color: "green"
              },
              {
                icon: Users,
                title: "NRI SERVICES (PRAVASI SEVA)",
                subtitle: "Seamless Financial Management, Global Reach.",
                color: "blue"
              },
              {
                icon: Landmark,
                title: "COMMERCIAL & CORPORATE LAW ADVISORY",
                subtitle: "Expert Legal Guidance for Businesses.",
                color: "green"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: service.color === 'green' 
                    ? "0 10px 30px rgba(16, 185, 129, 0.15)" 
                    : "0 10px 30px rgba(37, 99, 235, 0.15)"
                }}
                className="group p-6 bg-card/20 backdrop-blur-sm rounded-xl border border-border hover:border-green-500/30 transition-all duration-300"
              >
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 ${
                  service.color === 'green' 
                    ? 'bg-green-500/10 text-green-500 group-hover:bg-green-500/20' 
                    : 'bg-blue-600/10 text-blue-600 group-hover:bg-blue-600/20'
                }`}>
                  <service.icon className="w-8 h-8 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h4 className="text-lg font-bold text-foreground mb-3 group-hover:text-green-500 transition-colors duration-300">
                  {service.title}
                </h4>
                <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300">
                  {service.subtitle}
                </p>
                
                {/* Hover gradient overlay */}
                <div className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                  service.color === 'green' 
                    ? 'bg-gradient-to-br from-green-500/5 to-transparent' 
                    : 'bg-gradient-to-br from-blue-600/5 to-transparent'
                }`} />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

    

        {/* Company Values */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-16 items-center mb-20"
        >
          {/* Left Column - Values */}
          <motion.div
            variants={containerVariants}
            className="space-y-8"
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                How <span className="text-green-500">VittSeva</span> Serves Your <span className="text-blue-600">Financial Journey</span>
              </h3>
              <p className="text-base leading-relaxed mb-8 text-muted-foreground">
                At <span className="text-green-500 font-semibold">VittSeva</span>, we understand that every individual and business has unique financial needs and aspirations.
                Our approach is built on providing highly personalized, transparent, and optimized financial solutions 
                that evolve with your changing circumstances and goals.
              </p>
            </motion.div>

            <div className="space-y-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  variants={itemVariants}
                  className="flex items-start gap-4 p-6 rounded-xl bg-card/20 backdrop-blur-sm border border-border hover:border-primary transition-all duration-300 group hover:shadow-lg"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-lg mb-2 text-foreground">{value.title}</h5>
                    <p className="text-base leading-relaxed text-muted-foreground">{value.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Client Segments & Results */}
          <motion.div
            variants={containerVariants}
            className="space-y-8"
          >
            <motion.div variants={itemVariants} className="bg-card/20 backdrop-blur-sm rounded-2xl p-8 border border-border shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-xl font-bold text-foreground">
                  Who <span className="text-green-500">VittSeva</span> Serves
                </h4>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-border">
                  <span className="text-muted-foreground">Individual Investors</span>
                  <span className="font-semibold text-green-500">All Ages</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-border">
                  <span className="text-muted-foreground">Women-Focused Services</span>
                  <span className="font-semibold text-blue-600">Specialized</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-border">
                  <span className="text-muted-foreground">Senior Citizens</span>
                  <span className="font-semibold text-green-500">Dedicated Support</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-border">
                  <span className="text-muted-foreground">NRI Clients</span>
                  <span className="font-semibold text-blue-600">Global Reach</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-muted-foreground">Corporate Clients</span>
                  <span className="font-semibold text-green-500">Legal & Advisory</span>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl p-8 text-white">
              <h4 className="text-xl font-bold mb-4">
                Ready to Optimize Your Financial Future with <span className="text-green-100">VittSeva</span>?
              </h4>
              <p className="mb-6 opacity-90">
                Join thousands of satisfied clients who trust <span className="font-semibold">VittSeva</span> to simplify their financial decisions and maximize their wealth potential. 
                From protection to prosperity, we're with you every step of the way.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                onClick={() => router.push("/contact")}
              >
                Book A Free VittSeva Consultation
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Specialized Services */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-20"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              <span className="text-green-500">VittSeva</span> Specialized <span className="text-blue-600">Advisory Services</span>
            </h3>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto">
              Beyond traditional financial planning, <span className="text-green-500 font-semibold">VittSeva</span> offers specialized services to address unique financial challenges
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Banknote, title: "VittSeva Lost Investment Recovery", desc: "Recover forgotten investments in shares, mutual funds, PF, and bank accounts" },
              { icon: Landmark, title: "VittSeva NRI Services", desc: "Comprehensive financial solutions for Non-Resident Indians worldwide" },
              { icon: Building2, title: "VittSeva Corporate Legal Advisory", desc: "Business structuring, compliance, and regulatory support services" },
              { icon: Home, title: "VittSeva Real Estate Finance", desc: "Property loans, investment advisory, and real estate financial planning" }
            ].map((service, index) => (
              <div key={service.title} className="p-6 rounded-xl bg-card/20 backdrop-blur-sm border border-border hover:border-primary transition-all duration-300 group hover:shadow-lg">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500/20 to-blue-600/20 rounded-lg flex items-center justify-center mb-4 group-hover:from-green-500/30 group-hover:to-blue-600/30 transition-colors">
                  <service.icon className="w-6 h-6 text-green-500" />
                </div>
                <h5 className="font-semibold text-foreground mb-2">{service.title}</h5>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.desc}</p>
              </div>
            ))}
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
            className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:from-green-600 hover:to-blue-700 transition-colors shadow-lg"
            onClick={() => document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" })}
          >
            <TrendingUp className="w-5 h-5" />
            Explore VittSeva Financial Services
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}