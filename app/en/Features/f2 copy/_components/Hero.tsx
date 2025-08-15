"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"
import { ChevronDown, ArrowRight, TrendingUp, Shield, PieChart, Calculator, CreditCard, Banknote, Target, Users, Landmark, IndianRupee } from "lucide-react"
import { BackgroundBeams } from "@/components/ui/background-beams"
import { BackgroundGradient } from "@/components/ui/background-gradient"
import { PinContainer } from "@/components/ui/3d-pin"

const vittSevaServices = [
  "Investment Planning", 
  "Insurance Solutions", 
  "Loan Advisory", 
  "Tax Planning",
  "Wealth Management",
  "NRI Services"
]

export default function Hero() {
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return

    const currentService = vittSevaServices[currentServiceIndex]
    const typeSpeed = isDeleting ? 10 : 50
    const pauseTime = 200

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentService.length) {
          setDisplayText(currentService.substring(0, displayText.length + 1))
        } else {
          setTimeout(() => setIsDeleting(true), pauseTime)
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(currentService.substring(0, displayText.length - 1))
        } else {
          setIsDeleting(false)
          setCurrentServiceIndex((prev) => (prev + 1) % vittSevaServices.length)
        }
      }
    }, typeSpeed)

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, currentServiceIndex, mounted])

  return (
    <section id="home" className="relative min-h-[85vh] sm:min-h-screen flex items-center justify-center overflow-hidden pb-12 sm:pb-20">
      {/* Background Beams - only for Hero section */}
      <div className="absolute inset-0 z-0">
        <BackgroundBeams  />
      </div>

      {/* Main Content */}
      <div className="relative z-30 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="space-y-6"
        >
          {/* Main Heading */}
          <div className="space-y-4">
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-xs sm:text-sm font-medium mt-12 sm:mt-16 md:mt-20"
            >
              <IndianRupee className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="hidden sm:inline">Comprehensive Financial Advisory</span>
              <span className="sm:hidden">Financial Advisory</span>
            </motion.div>
            
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
              <span className="text-foreground">Transform Your</span>
              <br />
              <span className="text-primary">
                Financial Future
              </span>
            </h1>

            <div className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
              <span className="hidden sm:inline">Expert guidance for </span>
              <span className="sm:hidden">Smart </span>
              <span className="text-primary font-semibold min-h-[1.2em] inline-block text-sm sm:text-base">
                {displayText}
                <span className="animate-pulse">|</span>
              </span>
              <br />
              <span className="text-xs sm:text-sm md:text-base text-muted-foreground mt-1 block">
                <span className="hidden sm:inline">with personalized solutions and transparent advice</span>
                <span className="sm:hidden">with personalized solutions</span>
              </span>
            </div>
          </div>

          {/* 3D Pin for Free Consultation */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex justify-center"
          >
            <PinContainer
              title="Free Consultation"
              href="https://vittseva.com/contact/?source=see_more"
              containerClassName="w-full max-w-sm sm:max-w-2xl w-[20rem] sm:w-[40rem] h-[11rem] sm:h-[13rem]"
            >
              <div className="flex flex-col gap-2 w-[16rem] sm:w-[20rem]">
                {/* Book Consultation Button */}
                <div className="flex w-full rounded-lg mt-3 sm:mt-4 bg-primary items-center justify-center">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="group relative overflow-hidden px-6 py-2 sm:px-8 sm:py-2 bg-primary backdrop-blur-sm text-white font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2 border border-white/20 hover:bg-white/20 w-full h-[3rem] sm:h-[3.5rem] text-sm sm:text-base"
                    onClick={() => {
                      window.location.href = "https://vittseva.com/contact/?source=see_more"
                    }}
                  >
                    {/* Shimmer effect */}
                    <div className="absolute inset-0 bg-primary -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                    
                    {/* Button content */}
                    <span className="relative z-10">
                      <span className="hidden sm:inline">Book Free Consultation</span>
                      <span className="sm:hidden">Get Started</span>
                    </span>
                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                  </motion.button>
                </div>

                <div className="flex flex-col gap-1.5 sm:gap-2 mt-3 sm:mt-5">
                  <h2 className="max-w-xs !pb-1 sm:!pb-2 !m-0 font-bold text-sm sm:text-base text-gray-800">
                    <span className="hidden sm:inline">No obligation consultation</span>
                    <span className="sm:hidden">Free consultation</span>
                  </h2>
                  <div className="text-sm sm:text-base !m-0 !p-0 font-normal">
                    <span className="text-gray-600">
                      Personalized Financial Advice
                    </span>
                  </div>  
                </div>
              </div>
            </PinContainer>
          </motion.div>

          {/* Financial Service Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 pt-8 sm:pt-12 max-w-6xl mx-auto"
          >
            {[
              { 
                icon: Calculator, 
                title: "ACCOUNTING AND TAX FILING", 
                subtitle: "Streamlined Finances, Optimized Returns.",
                delay: 0.1
              },
              { 
                icon: Shield, 
                title: "INSURANCE (SURAKSHA)", 
                subtitle: "Protection Made Personal.",
                delay: 0.2
              },
              { 
                icon: Target, 
                title: "CLAIM SETTLEMENT (SAMADHAN)", 
                subtitle: "Efficient Solutions for Fair Compensation.",
                delay: 0.3
              },
              { 
                icon: CreditCard, 
                title: "LOANS (SAHYOG)", 
                subtitle: "Unlocking Opportunities, Empowering Growth.",
                delay: 0.4
              },
              { 
                icon: TrendingUp, 
                title: "INVESTMENTS (SAMRIDDHI)", 
                subtitle: "Building Wealth, Maximizing Potential.",
                delay: 0.5
              },
              { 
                icon: IndianRupee, 
                title: "FUNDING AND FINANCE (SUVIDHA)", 
                subtitle: "Fueling Ambitions, Enabling Success.",
                delay: 0.6
              },
              { 
                icon: Landmark, 
                title: "BUSINESS BANKING (SAMRIDHI)", 
                subtitle: "Tailored Solutions for Business Growth.",
                delay: 0.7
              },
              { 
                icon: Users, 
                title: "NRI SERVICES (PRAVASI SEVA)", 
                subtitle: "Seamless Financial Management, Global Reach.",
                delay: 0.8
              },
              { 
                icon: PieChart, 
                title: "COMMERCIAL & CORPORATE LAW ADVISORY", 
                subtitle: "Expert Legal Guidance for Businesses.",
                delay: 0.9
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: 1 + item.delay }}
                className="group relative bg-card/10 backdrop-blur-sm rounded-2xl p-6 border border-border/50 hover:border-primary/30 hover:shadow-xl hover:bg-card/20 transition-all duration-300 cursor-pointer"
              >
                {/* Background gradient on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Content */}
                <div className="relative z-10 text-center space-y-4">
                  {/* Icon Circle */}
                  <div className="mx-auto w-16 h-16 rounded-full border-2 border-primary/20 bg-primary/5 flex items-center justify-center group-hover:border-primary/40 group-hover:bg-primary/10 group-hover:scale-110 transition-all duration-300">
                    <item.icon className="w-7 h-7 text-primary" />
                  </div>
                  
                  {/* Title */}
                  <h3 className="font-bold text-sm sm:text-base text-foreground leading-tight group-hover:text-primary transition-colors duration-300">
                    {item.title}
                  </h3>
                  
                  {/* Subtitle */}
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                    {item.subtitle}
                  </p>
                </div>

                {/* Hover effect border */}
                <div className="absolute inset-0 rounded-2xl border border-primary/0 group-hover:border-primary/20 transition-all duration-300" />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator - Positioned at bottom of entire section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 z-40"
      >
        <motion.button
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          onClick={() => {
            const aboutSection = document.querySelector('#about');
            aboutSection?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="p-2 sm:p-3 rounded-full border-2 border-border bg-card/30 backdrop-blur-sm text-muted-foreground cursor-pointer hover:text-primary hover:border-primary hover:bg-card/40 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50 shadow-lg"
        >
          <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6" />
        </motion.button>
      </motion.div>
    </section>
  )
}