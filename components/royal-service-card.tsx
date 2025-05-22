"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

interface RoyalServiceCardProps {
  title: string
  description: string
  icon: React.ReactNode
  image?: string
  onClick?: () => void
}

export default function RoyalServiceCard({
  title,
  description,
  icon,
  image = "/placeholder.svg",
  onClick,
}: RoyalServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="relative group cursor-pointer overflow-hidden rounded-xl"
      whileHover={{ y: -10, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      onClick={onClick}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Background Image with Overlay */}
      <div className="relative w-full h-64 overflow-hidden rounded-xl">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-royal-900/70 group-hover:bg-royal-900/60 transition-colors duration-300" />
      </div>

      {/* Content */}
      <div className="absolute inset-0 p-6 flex flex-col justify-end">
        <motion.div
          className="absolute top-4 right-4 text-gold-500"
          animate={
            isHovered
              ? {
                  rotate: [0, 15, -15, 0],
                  scale: [1, 1.2, 1],
                }
              : {}
          }
          transition={{ duration: 0.5 }}
        >
          {icon}
        </motion.div>

        {/* Royal Corner Decorations */}
        <motion.div
          className="absolute top-2 left-2 w-8 h-8 border-t-2 border-l-2 border-gold-500 opacity-0 group-hover:opacity-100"
          animate={isHovered ? { x: [20, 0], y: [20, 0], opacity: 1 } : {}}
          transition={{ duration: 0.3 }}
        />
        <motion.div
          className="absolute top-2 right-2 w-8 h-8 border-t-2 border-r-2 border-gold-500 opacity-0 group-hover:opacity-100"
          animate={isHovered ? { x: [-20, 0], y: [20, 0], opacity: 1 } : {}}
          transition={{ duration: 0.3 }}
        />
        <motion.div
          className="absolute bottom-2 left-2 w-8 h-8 border-b-2 border-l-2 border-gold-500 opacity-0 group-hover:opacity-100"
          animate={isHovered ? { x: [20, 0], y: [-20, 0], opacity: 1 } : {}}
          transition={{ duration: 0.3 }}
        />
        <motion.div
          className="absolute bottom-2 right-2 w-8 h-8 border-b-2 border-r-2 border-gold-500 opacity-0 group-hover:opacity-100"
          animate={isHovered ? { x: [-20, 0], y: [-20, 0], opacity: 1 } : {}}
          transition={{ duration: 0.3 }}
        />

        <motion.h3
          className="text-xl font-bold text-white mb-2 relative"
          animate={isHovered ? { y: -5 } : {}}
          transition={{ duration: 0.3 }}
        >
          {title}
          <motion.div
            className="absolute -bottom-1 left-0 h-0.5 bg-gold-500"
            initial={{ width: 0 }}
            animate={isHovered ? { width: "100%" } : { width: 0 }}
            transition={{ duration: 0.3 }}
          />
        </motion.h3>

        <motion.p
          className="text-white/80 text-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={isHovered ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
        >
          {description}
        </motion.p>

        <motion.div
          className="mt-4 flex items-center text-gold-500 text-sm font-medium"
          initial={{ opacity: 0 }}
          animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <span>Learn More</span>
          <motion.span
            className="ml-1"
            animate={isHovered ? { x: [0, 5, 0] } : {}}
            transition={{ duration: 0.5, repeat: Number.POSITIVE_INFINITY }}
          >
            →
          </motion.span>
        </motion.div>
      </div>
    </motion.div>
  )
}
