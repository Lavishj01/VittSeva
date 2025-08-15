"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "motion/react"
import { useRouter } from "next/navigation"
import { 
  Navbar, 
  MobileNavHeader, 
  MobileNavMenu, 
  MobileNavToggle,
  NavbarButton
} from "@/components/ui/resizable-navbar"

// Navigation items for VittSeva - Updated with Blog and Free sections
const navigationItems = [
  { name: "Home", link: "#home" },
  { name: "About Us", link: "#about" },
  { name: "Services", link: "#services" },
  { name: "Blog", link: "/blog" },
  { name: "Free", link: "/free" },
  { name: "Our Team", link: "#team" },
  { name: "Contact", link: "#contact" },
]

// Custom NavItems component that properly handles click events
const CustomNavItems = ({ 
  items, 
  onItemClick,
  className
}: {
  items: { name: string; link: string }[]
  onItemClick: (link: string) => void
  className?: string
}) => {
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <motion.div
      onMouseLeave={() => setHovered(null)}
      className={`absolute inset-0 hidden flex-1 flex-row items-center justify-center space-x-2 text-sm font-medium text-muted-foreground transition duration-200 hover:text-foreground lg:flex lg:space-x-2 ${className || ''}`}
    >
      {items.map((item, idx) => (
        <a
          key={`link-${idx}`}
          onMouseEnter={() => setHovered(idx)}
          onClick={(e) => {
            e.preventDefault()
            onItemClick(item.link)
          }}
          className="relative px-4 py-2 text-muted-foreground hover:text-foreground cursor-pointer"
          href={item.link}
        >
          {hovered === idx && (
            <motion.div
              layoutId="hovered"
              className="absolute inset-0 h-full w-full rounded-full bg-accent"
            />
          )}
          <span className="relative z-20">{item.name}</span>
        </a>
      ))}
    </motion.div>
  )
}

// Custom NavBody component
const CustomNavBody = ({ 
  children, 
  className, 
  visible
}: {
  children: React.ReactNode
  className?: string
  visible?: boolean
}) => {
  return (
    <motion.div
      animate={{
        backdropFilter: visible ? "blur(10px)" : "none",
        boxShadow: visible
          ? "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset"
          : "none",
        width: visible ? "70%" : "100%",
        y: visible ? 20 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 50,
      }}
      style={{
        minWidth: "800px",
      }}
      className={`relative z-[60] mx-auto hidden w-full max-w-7xl flex-row items-center justify-between self-start rounded-full bg-white px-6 py-4 lg:flex ${visible ? 'bg-card/90 backdrop-blur-md' : ''} ${className || ''}`}
    >
      {children}
    </motion.div>
  )
}

// Custom MobileNav component
const CustomMobileNav = ({ 
  children, 
  className, 
  visible
}: {
  children: React.ReactNode
  className?: string
  visible?: boolean
}) => {
  return (
    <motion.div
      animate={{
        backdropFilter: visible ? "blur(10px)" : "none",
        boxShadow: visible
          ? "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset"
          : "none",
        width: visible ? "90%" : "100%",
        paddingRight: visible ? "12px" : "0px",
        paddingLeft: visible ? "12px" : "0px",
        borderRadius: visible ? "4px" : "2rem",
        y: visible ? 20 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 50,
      }}
      className={`relative z-50 mx-auto flex w-full max-w-[calc(100vw-2rem)] flex-col items-center justify-between bg-transparent px-0 py-4 lg:hidden ${visible ? 'bg-card/90 backdrop-blur-md' : ''} ${className || ''}`}
    >
      {children}
    </motion.div>
  )
}

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const router = useRouter()

  const handleNavClick = (link: string) => {
    setIsMobileMenuOpen(false)
    
    // If it's a section link (starts with #), scroll to the section
    if (link.startsWith("#")) {
      const element = document.querySelector(link)
      element?.scrollIntoView({ behavior: "smooth" })
    } else {
      // Navigate to external pages (like /blog, /free)
      router.push(link)
    }
  }

  const handleContactClick = () => {
    window.open("https://vittseva.com/contact/?source=navbar", "_blank")
  }

  return (
    <Navbar className="fixed inset-x-0 top-2 z-50 w-full">
      {/* Desktop Navigation */}
      <CustomNavBody>
        <div className="flex items-center">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault()
              handleNavClick("#home")
            }}
            className="flex items-center justify-center mr-16 text-xl font-bold"
          >
            <div className="w-20 h-20 rounded-lg flex items-center justify-center mr-6 bg-white/10 backdrop-blur-sm">
              <Image 
                src="/portal-logo/logo-wb.png" 
                alt="VittSeva Logo" 
                width={200} 
                height={200}
                className="w-16 h-16 object-contain"
                priority
              />
            </div>
           
          </a>
        </div>

        <CustomNavItems 
          items={navigationItems}
          onItemClick={handleNavClick}
        />

        <div className="flex items-center gap-4 relative z-30">
          <NavbarButton 
            as="button"
            onClick={handleContactClick} 
            variant="gradient"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-colors"
          >
            Book a Free Consultation
          </NavbarButton>
        </div>
      </CustomNavBody>

      {/* Mobile Navigation */}
      <CustomMobileNav>
        <MobileNavHeader>
          <div className="flex items-center w-full">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault()
                handleNavClick("#home")
              }}
              className="flex items-center text-lg font-bold"
            >
              <div className="w-14 h-14 rounded-lg flex items-center justify-center bg-white/10 backdrop-blur-sm">
                <Image 
                  src="/portal-logo/logo.png" 
                  alt="VittSeva Logo" 
                  width={48}
                  height={48}
                  className="object-contain w-12 h-12"
                  priority
                />
              </div>
            </a>
            
            <div className="ml-auto">
              <MobileNavToggle
                isOpen={isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              />
            </div>
          </div>
        </MobileNavHeader>

        <MobileNavMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        >
          <div className="w-full">
            {navigationItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.link)}
                className="block w-full px-4 py-3 text-left text-foreground hover:text-primary hover:bg-accent transition-colors duration-200 font-medium"
              >
                {item.name}
              </button>
            ))}
            <div className="pt-4 border-t border-border">
              <NavbarButton 
                as="button"
                onClick={handleContactClick} 
                variant="gradient" 
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-colors"
              >
                Book a Free Consultation
              </NavbarButton>
            </div>
          </div>
        </MobileNavMenu>
      </CustomMobileNav>
    </Navbar>
  )
}