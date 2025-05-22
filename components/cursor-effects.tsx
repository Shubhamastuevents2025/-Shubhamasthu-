"use client"

import { useEffect, useState, useRef } from "react"

export default function CursorEffects() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const sparklesRef = useRef<HTMLDivElement>(null)
  const sparklePoolRef = useRef<HTMLDivElement[]>([])
  const sparkleIndexRef = useRef(0)
  const lastSparkleTimeRef = useRef(0)
  const sparkleColors = ["#734F96", "#5D3FD3", "#483D8B"]

  // Initialize sparkle pool
  useEffect(() => {
    if (!sparklesRef.current) return

    // Clear existing sparkles
    while (sparklesRef.current.firstChild) {
      sparklesRef.current.removeChild(sparklesRef.current.firstChild)
    }

    sparklePoolRef.current = []

    // Create pool of sparkle elements
    for (let i = 0; i < 30; i++) {
      const sparkle = document.createElement("div")
      sparkle.className = "absolute pointer-events-none"
      sparkle.style.width = "0px"
      sparkle.style.height = "0px"
      sparkle.style.borderRadius = "50%"
      sparkle.style.background = `radial-gradient(circle, rgba(255,255,255,0.8) 0%, ${sparkleColors[i % sparkleColors.length]}80 100%)`
      sparkle.style.boxShadow = `0 0 10px 2px ${sparkleColors[i % sparkleColors.length]}50`
      sparkle.style.transform = "translate(-50%, -50%) scale(0)"
      sparkle.style.opacity = "0"
      sparkle.style.position = "absolute"
      sparkle.style.zIndex = "9999"

      sparklePoolRef.current.push(sparkle)
      sparklesRef.current.appendChild(sparkle)
    }

    return () => {
      if (sparklesRef.current) {
        while (sparklesRef.current.firstChild) {
          sparklesRef.current.removeChild(sparklesRef.current.firstChild)
        }
      }
    }
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      setIsVisible(true)
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    window.addEventListener("mousemove", handleMouseMove)
    document.body.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      document.body.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  // Create sparkle effect
  useEffect(() => {
    if (!sparklesRef.current || mousePosition.x === 0 || mousePosition.y === 0 || !isVisible) return

    // Throttle sparkle creation
    const now = performance.now()
    if (now - lastSparkleTimeRef.current < 50) return
    lastSparkleTimeRef.current = now

    // Find an available sparkle from the pool
    const availableSparkle = sparklePoolRef.current[sparkleIndexRef.current]
    sparkleIndexRef.current = (sparkleIndexRef.current + 1) % sparklePoolRef.current.length

    if (!availableSparkle) return

    // Reset and position the sparkle
    const size = Math.random() * 10 + 5
    const color = sparkleColors[Math.floor(Math.random() * sparkleColors.length)]

    availableSparkle.style.width = `${size}px`
    availableSparkle.style.height = `${size}px`
    availableSparkle.style.left = `${mousePosition.x}px`
    availableSparkle.style.top = `${mousePosition.y}px`
    availableSparkle.style.transform = "translate(-50%, -50%) scale(0)"
    availableSparkle.style.opacity = "1"
    availableSparkle.style.background = `radial-gradient(circle, rgba(255,255,255,0.8) 0%, ${color}80 100%)`
    availableSparkle.style.boxShadow = `0 0 10px 2px ${color}50`

    // Random animation
    const duration = Math.random() * 800 + 400
    const angle = Math.random() * Math.PI * 2
    const distance = Math.random() * 80 + 40
    const destX = Math.cos(angle) * distance
    const destY = Math.sin(angle) * distance

    // Use requestAnimationFrame for smoother animation
    let startTime: number | null = null
    const animateSparkle = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const elapsed = timestamp - startTime
      const progress = Math.min(elapsed / duration, 1)

      // Easing function
      const easeOutQuad = (t: number) => t * (2 - t)
      const easedProgress = easeOutQuad(progress)

      // Apply animation
      const scaleValue = progress < 0.5 ? progress * 2 : 2 - progress * 2
      const translateX = destX * easedProgress
      const translateY = destY * easedProgress
      const opacity = progress < 0.7 ? 1 : 1 - (progress - 0.7) / 0.3

      availableSparkle.style.transform = `translate(calc(-50% + ${translateX}px), calc(-50% + ${translateY}px)) scale(${scaleValue})`
      availableSparkle.style.opacity = `${opacity}`

      if (progress < 1) {
        requestAnimationFrame(animateSparkle)
      } else {
        availableSparkle.style.opacity = "0"
      }
    }

    requestAnimationFrame(animateSparkle)
  }, [mousePosition, isVisible])

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] overflow-visible">
      {/* Main cursor glow */}
      <div
        className="absolute pointer-events-none z-[101] rounded-full mix-blend-screen"
        style={{
          background: `radial-gradient(circle, ${sparkleColors[0]}B3 0%, rgba(255,255,255,0) 70%)`,
          width: "300px",
          height: "300px",
          left: mousePosition.x,
          top: mousePosition.y,
          transform: "translate(-50%, -50%)",
          filter: "blur(5px) brightness(1.5)",
          opacity: 0.7,
          transition: "opacity 0.3s, transform 0.3s",
          willChange: "transform, opacity",
        }}
      />

      {/* Sparkle container */}
      <div ref={sparklesRef} className="absolute inset-0 pointer-events-none z-[102] overflow-hidden" />

      {/* Small cursor dot */}
      <div
        className="absolute pointer-events-none z-[103] rounded-full"
        style={{
          background: `radial-gradient(circle, rgba(255,255,255,0.9) 0%, ${sparkleColors[0]}B3 100%)`,
          boxShadow: `0 0 15px 5px ${sparkleColors[0]}80`,
          width: "15px",
          height: "15px",
          left: mousePosition.x,
          top: mousePosition.y,
          transform: `translate(-50%, -50%)`,
          transition: "transform 0.3s",
          willChange: "transform, left, top",
        }}
      >
        {/* Inner sparkle */}
        <div
          className="absolute inset-0 rounded-full animate-pulse"
          style={{
            background: "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 70%)",
            animation: "pulse 1.5s infinite ease-in-out",
          }}
        />
      </div>
    </div>
  )
}
