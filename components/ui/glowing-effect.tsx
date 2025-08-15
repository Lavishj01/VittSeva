"use client"

import React from "react"

interface GlowingEffectProps {
  disabled?: boolean
  glow?: boolean
  spread?: number
  proximity?: number
  blur?: number
  movementDuration?: number
  borderWidth?: number
}

export function GlowingEffect({
  disabled = false,
  glow = true,
  spread = 30,
  proximity = 50,
  blur = 0,
  movementDuration = 1.5,
  borderWidth = 1,
}: GlowingEffectProps) {
  if (disabled || !glow) return null

  return (
    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-gray-200/20 via-gray-300/20 to-gray-200/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
  )
} 