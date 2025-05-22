"use client"

import { useRef } from "react"
import { motion } from "framer-motion"

interface ShimmerTextProps {
  text: string
  className?: string
  delay?: number
}

export default function ShimmerText({ text, className = "", delay = 0 }: ShimmerTextProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
      <div className="relative z-10">{text}</div>
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-gold-300/30 to-transparent"
        initial={{ x: "-100%" }}
        animate={{ x: "100%" }}
        transition={{
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "loop",
          duration: 2,
          ease: "linear",
          delay,
        }}
      />
    </div>
  )
}
