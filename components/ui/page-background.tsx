import React from "react"

interface PageBackgroundProps {
  children: React.ReactNode
}

export default function PageBackground({ children }: PageBackgroundProps) {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {children}
    </div>
  )
} 