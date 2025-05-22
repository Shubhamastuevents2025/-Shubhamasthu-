"use client"

import { createContext, useContext, useEffect, useState, type ReactNode } from "react"

interface AnimationContextType {
  canAnimate: boolean
  isReducedMotion: boolean
  isLowPowerMode: boolean
  isMobile: boolean
}

const AnimationContext = createContext<AnimationContextType>({
  canAnimate: false,
  isReducedMotion: false,
  isLowPowerMode: false,
  isMobile: false,
})

export const useAnimation = () => useContext(AnimationContext)

interface SafeAnimationProviderProps {
  children: ReactNode
}

export default function SafeAnimationProvider({ children }: SafeAnimationProviderProps) {
  const [state, setState] = useState<AnimationContextType>({
    canAnimate: false,
    isReducedMotion: false,
    isLowPowerMode: false,
    isMobile: false,
  })

  useEffect(() => {
    // Check if we're on the client
    if (typeof window === "undefined") return

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches

    // Check if device is likely in low power mode (simplified heuristic)
    const isLowPower =
      navigator.hardwareConcurrency <= 4 ||
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)

    // Check if mobile device
    const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)

    // Determine if we can safely animate
    const canSafelyAnimate = !prefersReducedMotion && !isLowPower

    setState({
      canAnimate: canSafelyAnimate,
      isReducedMotion: prefersReducedMotion,
      isLowPowerMode: isLowPower,
      isMobile: isMobileDevice,
    })

    // Add error handler for animation errors
    const originalError = console.error
    console.error = (...args) => {
      const errorMsg = args[0]?.toString() || ""

      // Suppress common animation-related errors
      if (errorMsg.includes("ResizeObserver") || errorMsg.includes("animation") || errorMsg.includes("Framer Motion")) {
        return
      }

      return originalError.apply(console, args)
    }

    return () => {
      console.error = originalError
    }
  }, [])

  return <AnimationContext.Provider value={state}>{children}</AnimationContext.Provider>
}
