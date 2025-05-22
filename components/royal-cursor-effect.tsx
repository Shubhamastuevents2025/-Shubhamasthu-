"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function RoyalCursorEffect() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)

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

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Main cursor */}
          <motion.div
            className="fixed w-6 h-6 rounded-full border-2 border-gold-500 pointer-events-none z-[9999] mix-blend-difference"
            animate={{
              x: mousePosition.x - 12,
              y: mousePosition.y - 12,
            }}
            transition={{ type: "spring", damping: 20, stiffness: 300, mass: 0.5 }}
            exit={{ opacity: 0, scale: 0 }}
          />

          {/* Trailing effect */}
          <motion.div
            className="fixed w-12 h-12 rounded-full bg-gold-500/10 pointer-events-none z-[9998]"
            animate={{
              x: mousePosition.x - 24,
              y: mousePosition.y - 24,
              scale: [1, 1.2, 1],
            }}
            transition={{
              type: "spring",
              damping: 15,
              stiffness: 150,
              mass: 1,
              scale: { duration: 1.5, repeat: Number.POSITIVE_INFINITY },
            }}
            exit={{ opacity: 0, scale: 0 }}
          />

          {/* Sparkle effect */}
          {Array.from({ length: 3 }).map((_, i) => (
            <motion.div
              key={i}
              className="fixed w-2 h-2 rounded-full bg-gold-400 pointer-events-none z-[9997]"
              initial={{
                x: mousePosition.x,
                y: mousePosition.y,
                scale: 0.5,
                opacity: 0.8,
              }}
              animate={{
                x: mousePosition.x + Math.random() * 40 - 20,
                y: mousePosition.y + Math.random() * 40 - 20,
                scale: 0,
                opacity: 0,
              }}
              transition={{
                duration: 0.5 + Math.random() * 0.5,
                delay: i * 0.1,
                repeat: Number.POSITIVE_INFINITY,
                repeatDelay: 0.2,
              }}
              exit={{ opacity: 0 }}
            />
          ))}
        </>
      )}
    </AnimatePresence>
  )
}
