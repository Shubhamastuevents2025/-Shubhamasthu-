"use client"

import { useEffect, useRef } from "react"

interface PerformanceMonitorProps {
  onPerformanceIssue?: (metrics: {
    fps: number
    memoryUsage?: number
    longTasks: number
  }) => void
}

export default function PerformanceMonitor({ onPerformanceIssue }: PerformanceMonitorProps) {
  const frameCountRef = useRef(0)
  const lastTimeRef = useRef(performance.now())
  const longTasksRef = useRef(0)
  const isMonitoringRef = useRef(true)

  useEffect(() => {
    if (typeof window === "undefined") return

    // FPS monitoring
    let animationFrameId: number
    let lastFpsUpdateTime = performance.now()

    const monitorFps = (timestamp: number) => {
      if (!isMonitoringRef.current) return

      frameCountRef.current++
      const elapsed = timestamp - lastFpsUpdateTime

      if (elapsed >= 1000) {
        // Update every second
        const fps = Math.round((frameCountRef.current * 1000) / elapsed)
        frameCountRef.current = 0
        lastFpsUpdateTime = timestamp

        // Get memory usage if available
        let memoryUsage
        if (performance && "memory" in performance) {
          // @ts-ignore - memory is not in the standard TypeScript Performance interface
          memoryUsage = performance.memory.usedJSHeapSize / (1024 * 1024) // MB
        }

        // Check for performance issues
        if (fps < 30 || (memoryUsage && memoryUsage > 100) || longTasksRef.current > 5) {
          onPerformanceIssue?.({
            fps,
            memoryUsage,
            longTasks: longTasksRef.current,
          })

          // Temporarily pause monitoring to allow recovery
          isMonitoringRef.current = false
          setTimeout(() => {
            isMonitoringRef.current = true
            longTasksRef.current = 0
          }, 5000)
        }
      }

      animationFrameId = requestAnimationFrame(monitorFps)
    }

    animationFrameId = requestAnimationFrame(monitorFps)

    // Long tasks monitoring
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.duration > 50) {
          // Tasks longer than 50ms
          longTasksRef.current++
        }
      }
    })

    try {
      observer.observe({ entryTypes: ["longtask"] })
    } catch (e) {
      console.warn("Long task monitoring not supported in this browser")
    }

    return () => {
      cancelAnimationFrame(animationFrameId)
      try {
        observer.disconnect()
      } catch (e) {
        // Ignore
      }
    }
  }, [onPerformanceIssue])

  // This component doesn't render anything
  return null
}
