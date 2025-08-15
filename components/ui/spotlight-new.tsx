"use client"

import React from "react"

interface SpotlightProps {
  className?: string
  fill?: string
}

export function Spotlight({ className = "", fill = "rgba(0,0,0,0.05)" }: SpotlightProps) {
  return (
    <div className={`absolute inset-0 bg-gradient-radial from-gray-100/50 to-transparent opacity-50 ${className}`} />
  )
} 