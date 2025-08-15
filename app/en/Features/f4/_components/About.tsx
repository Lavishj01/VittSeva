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
          <h3 className="text-xl font-bold text-foreground">Investment Advisory & Wealth Management</h3>
        </div>
        <p className="text-muted-foreground leading-relaxed">
          Build and grow your wealth with our expert investment guidance. We offer a wide variety of investment options suitable for all ages and financial statuses, ensuring personalized strategies that maximize returns while managing risk effectively.
        </p>
      </div>
    )
  },
  {
    id: 2,
    className: "md:col-span-1",
    thumbnail: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDUwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjUwMCIgaGVpZ2h0PSIzMDAiIGZpbGw9InVybCgjZ3JhZGllbnQyKSIvPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iZ3JhZGllbnQyIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjZGNmY2U3Ii8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjYjJmMmQ3Ii8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PC9zdmc+",
    content: (
      <div className="bg-card rounded-lg p-6 shadow-lg">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
            <Shield className="w-6 h-6 text-secondary" />
          </div>
          <h3 className="text-xl font-bold text-foreground">Insurance Solutions</h3>
        </div>
        <p className="text-muted-foreground leading-relaxed">
          Comprehensive protection for life's uncertainties. From Life and Medical to General insurance, we provide unbiased advice with multiple options from leading insurers to safeguard your financial future.
        </p>
      </div>
    )
  },
  {
    id: 3,
    className: "md:col-span-1",
    thumbnail: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDUwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjUwMCIgaGVpZ2h0PSIzMDAiIGZpbGw9InVybCgjZ3JhZGllbnQzKSIvPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iZ3JhZGllbnQzIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjZmVmM2M3Ii8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjZmJjZjg4Ci8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PC9zdmc+",
    content: (
      <div className="bg-card rounded-lg p-6 shadow-lg">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
            <CreditCard className="w-6 h-6 text-secondary" />
          </div>
          <h3 className="text-xl font-bold text-foreground">Loan Solutions</h3>
        </div>
        <p className="text-muted-foreground leading-relaxed">
          From personal to business loans, we provide expertise and a network of lenders for hassle-free, cost-effective financing. Home loans, education loans, and more - all through one trusted advisor.
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
          <h3 className="text-xl font-bold text-foreground">Tax Planning & Accounting</h3>
        </div>
        <p className="text-muted-foreground leading-relaxed">
          Optimize your tax strategies with our expert accounting and tax planning services. We help streamline processes, ensure compliance, and maximize your savings through strategic financial planning and business advisory.
        </p>
      </div>
    )
  },
]

const values = [
  {
    icon: Target,
    title: "Personalized Financial Solutions",
    description: "Every client receives customized advice tailored to their specific financial goals, risk tolerance, and life stage. Our multi-brand, multi-option approach ensures you get the most suitable solutions."
  },
  {
    icon: Globe,
    title: "Comprehensive Service Portfolio",
    description: "From investments and insurance to loans and tax planning, we offer a complete range of financial services under one roof, making your financial journey seamless and efficient."
  },
  {
    icon: Users,
    title: "Specialized Expertise",
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
            <IndianRupee className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium text-primary uppercase tracking-wider">Vitt Seva (वित्त सेवा)</span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 relative text-foreground"
          >
            Comprehensive Financial Services
            <br />
            <span className="text-primary">Simple, Personal & Optimal</span>
            <br />
            for Individuals and Businesses
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed"
          >
            From protection to prosperity, we provide a wide range of financial solutions tailored to your specific needs and budget. 
            Our experienced team is committed to making financial decisions easy and optimized for our customers.
          </motion.p>
        </motion.div>

        {/* Core Services - Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-20"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Essential Financial Services for Your Growth</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Complete financial solutions designed to secure your present and build your prosperous future with personalized guidance
            </p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <LayoutGrid cards={capabilities} />
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
              <h3 className="text-3xl font-bold text-foreground mb-6">How We Serve Your Financial Journey</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                At VittSeva, we understand that every individual and business has unique financial needs and aspirations.
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
                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
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
                <div className="w-12 h-12 bg-gradient-to-r bg-primary rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-primary-foreground" />
                </div>
                <h4 className="text-xl font-bold text-foreground">Who We Serve</h4>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-border">
                  <span className="text-muted-foreground">Individual Investors</span>
                  <span className="font-semibold text-secondary">All Ages</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-border">
                  <span className="text-muted-foreground">Women-Focused Services</span>
                  <span className="font-semibold text-primary">Specialized</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-border">
                  <span className="text-muted-foreground">Senior Citizens</span>
                  <span className="font-semibold text-secondary">Dedicated Support</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-border">
                  <span className="text-muted-foreground">NRI Clients</span>
                  <span className="font-semibold text-secondary">Global Reach</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-muted-foreground">Corporate Clients</span>
                  <span className="font-semibold text-secondary">Legal & Advisory</span>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-gradient-to-br bg-primary rounded-2xl p-8 text-primary-foreground">
              <h4 className="text-xl font-bold mb-4">Ready to Optimize Your Financial Future?</h4>
              <p className="mb-6 opacity-90">
                Join thousands of satisfied clients who trust VittSeva to simplify their financial decisions and maximize their wealth potential. 
                From protection to prosperity, we're with you every step of the way.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-card text-primary px-6 py-3 rounded-lg font-semibold hover:bg-accent transition-colors"
                onClick={() => router.push("/contact")}
              >
                Book A Free Consultation
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
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Specialized Advisory Services</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Beyond traditional financial planning, we offer specialized services to address unique financial challenges
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Banknote, title: "Lost Investment Recovery", desc: "Recover forgotten investments in shares, mutual funds, PF, and bank accounts" },
              { icon: Landmark, title: "NRI Services", desc: "Comprehensive financial solutions for Non-Resident Indians worldwide" },
              { icon: Building2, title: "Corporate Legal Advisory", desc: "Business structuring, compliance, and regulatory support services" },
              { icon: Home, title: "Real Estate Finance", desc: "Property loans, investment advisory, and real estate financial planning" }
            ].map((service, index) => (
              <div key={service.title} className="p-6 rounded-xl bg-card/20 backdrop-blur-sm border border-border hover:border-primary transition-all duration-300 group hover:shadow-lg">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-6 h-6 text-primary" />
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
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold hover:bg-primary/90 transition-colors shadow-lg"
            onClick={() => document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" })}
          >
            <TrendingUp className="w-5 h-5" />
            Explore Our Financial Services
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}