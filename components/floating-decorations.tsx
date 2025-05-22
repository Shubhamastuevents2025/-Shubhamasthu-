"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Crown, Star, Award, Gem, Sparkles, Flower } from "lucide-react"

export default function FloatingDecorations() {
  const [dimensions, setDimensions] = useState({ width: 1000, height: 800 })

  useEffect(() => {
    // Only access window in useEffect (client-side only)
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    })

    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const decorations = [
    { icon: <Crown className="h-6 w-6" />, color: "text-gold-500" },
    { icon: <Star className="h-6 w-6" />, color: "text-gold-400" },
    { icon: <Gem className="h-6 w-6" />, color: "text-royal-300" },
    { icon: <Award className="h-6 w-6" />, color: "text-gold-500" },
    { icon: <Sparkles className="h-6 w-6" />, color: "text-gold-300" },
    { icon: <Flower className="h-6 w-6" />, color: "text-royal-400" },
  ]

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {decorations.map((decoration, index) => (
        <motion.div
          key={index}
          className={`absolute ${decoration.color} opacity-30`}
          initial={{
            x: Math.random() * dimensions.width,
            y: Math.random() * dimensions.height,
            scale: Math.random() * 0.5 + 0.5,
          }}
          animate={{
            x: [Math.random() * dimensions.width, Math.random() * dimensions.width, Math.random() * dimensions.width],
            y: [
              Math.random() * dimensions.height,
              Math.random() * dimensions.height,
              Math.random() * dimensions.height,
            ],
            rotate: [0, 180, 360],
            scale: [1, 1.2, 0.8, 1],
          }}
          transition={{
            duration: 20 + Math.random() * 10,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            ease: "linear",
            delay: index * 2,
          }}
        >
          {decoration.icon}
        </motion.div>
      ))}
    </div>
  )
}
