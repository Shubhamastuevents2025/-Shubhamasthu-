"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Sparkles, Star, Gem, Crown, Wand2, Palette } from "lucide-react"

export default function PersistentAnimations() {
  const [isClient, setIsClient] = useState(false)
  const animationsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsClient(true)

    // Add error handler for ResizeObserver errors
    const errorHandler = (event: ErrorEvent) => {
      if (event.message.includes("ResizeObserver") || event.error?.message?.includes("ResizeObserver")) {
        // Prevent the error from showing in console
        event.preventDefault()
        event.stopPropagation()
      }
    }

    window.addEventListener("error", errorHandler)
    return () => window.removeEventListener("error", errorHandler)
  }, [])

  // Don't render on server
  if (!isClient) return null

  // Fixed positions for elements to avoid layout shifts
  const floatingElements = [
    { icon: <Sparkles className="h-6 w-6" />, color: "text-[#FF007F]", position: { top: "15%", left: "10%" } },
    { icon: <Star className="h-6 w-6" />, color: "text-[#FFD500]", position: { top: "25%", right: "15%" } },
    { icon: <Gem className="h-6 w-6" />, color: "text-[#00E5CF]", position: { top: "45%", left: "20%" } },
    { icon: <Crown className="h-6 w-6" />, color: "text-white", position: { top: "65%", right: "10%" } },
    { icon: <Wand2 className="h-6 w-6" />, color: "text-[#FF5A36]", position: { bottom: "25%", left: "15%" } },
    { icon: <Palette className="h-6 w-6" />, color: "text-[#0077FF]", position: { bottom: "15%", right: "20%" } },
  ]

  // Fixed positions for phrases
  const phrases = [
    {
      text: "Creating Memorable",
      color: "text-gold-400",
      position: { top: "35%", left: "15%" },
    },
    {
      text: "Events & Celebrations",
      color: "text-gold-300",
      position: { top: "65%", right: "15%" },
    },
  ]

  return (
    <div
      ref={animationsRef}
      className="fixed inset-0 pointer-events-none z-10 overflow-hidden"
      style={{ willChange: "transform" }} // Optimize for animations
    >
      {/* Floating elements with fixed positions */}
      {floatingElements.map((element, index) => (
        <motion.div
          key={`element-${index}`}
          className={`absolute ${element.color} opacity-30`}
          style={{
            ...element.position,
            willChange: "transform", // Optimize for animations
            position: "absolute",
            width: "auto",
            height: "auto",
          }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            y: {
              duration: 10 + index * 2,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              ease: "easeInOut",
            },
            rotate: {
              duration: 20 + index * 3,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            },
            delay: index * 0.5,
          }}
        >
          {element.icon}
        </motion.div>
      ))}

      {/* Floating phrases with fixed positions */}
      {phrases.map((phrase, index) => (
        <motion.div
          key={`phrase-${index}`}
          className={`absolute font-serif italic ${phrase.color} opacity-20 text-xl md:text-2xl lg:text-3xl whitespace-nowrap`}
          style={{
            ...phrase.position,
            willChange: "transform", // Optimize for animations
            position: "absolute",
          }}
          animate={{
            y: [0, -15, 0],
            rotate: [-1, 1, -1],
          }}
          transition={{
            y: {
              duration: 15 + index * 5,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              ease: "easeInOut",
            },
            rotate: {
              duration: 10 + index * 3,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              ease: "easeInOut",
            },
            delay: index * 2,
          }}
        >
          {phrase.text}
        </motion.div>
      ))}

      {/* Subtle background gradient animation */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-transparent via-gold-500/5 to-transparent opacity-30 pointer-events-none"
        animate={{
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          ease: "linear",
        }}
        style={{
          willChange: "opacity", // Optimize for animations
        }}
      />
    </div>
  )
}
