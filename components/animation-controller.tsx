"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { detectBrowserCapabilities } from "@/lib/browser-utils"
import PerformanceMonitor from "./performance-monitor"

interface AnimationSettings {
  enabled: boolean
  quality: "high" | "medium" | "low" | "none"
  complexity: "complex" | "simple" | "minimal" | "none"
}

interface AnimationContextType {
  settings: AnimationSettings
  updateSettings: (newSettings: Partial<AnimationSettings>) => void
}

const defaultSettings: AnimationSettings = {
  enabled: true,
  quality: "high",
  complexity: "complex",
}

const AnimationContext = createContext<AnimationContextType>({
  settings: defaultSettings,
  updateSettings: () => {},
})

export const useAnimationSettings = () => useContext(AnimationContext)

interface AnimationControllerProps {
  children: ReactNode
  initialSettings?: Partial<AnimationSettings>
}

export default function AnimationController({ children, initialSettings = {} }: AnimationControllerProps) {
  const [settings, setSettings] = useState<AnimationSettings>({
    ...defaultSettings,
    ...initialSettings,
  })
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)

    // Detect browser capabilities and adjust settings accordingly
    const capabilities = detectBrowserCapabilities()

    if (capabilities.prefersReducedMotion) {
      setSettings({
        enabled: false,
        quality: "none",
        complexity: "none",
      })
      return
    }

    if (capabilities.isLowPowerDevice) {
      setSettings({
        enabled: true,
        quality: "low",
        complexity: "minimal",
      })
      return
    }

    if (capabilities.isOlderBrowser) {
      setSettings({
        enabled: true,
        quality: "low",
        complexity: "simple",
      })
      return
    }
  }, [])

  const updateSettings = (newSettings: Partial<AnimationSettings>) => {
    setSettings((prev) => ({
      ...prev,
      ...newSettings,
    }))
  }

  const handlePerformanceIssue = ({ fps, memoryUsage, longTasks }: any) => {
    // Adjust settings based on performance metrics
    if (fps < 20 || memoryUsage > 150 || longTasks > 10) {
      updateSettings({
        quality: "low",
        complexity: "minimal",
      })
    } else if (fps < 30 || memoryUsage > 100 || longTasks > 5) {
      updateSettings({
        quality: "medium",
        complexity: "simple",
      })
    }
  }

  return (
    <AnimationContext.Provider value={{ settings, updateSettings }}>
      {isClient && <PerformanceMonitor onPerformanceIssue={handlePerformanceIssue} />}
      {children}
    </AnimationContext.Provider>
  )
}
