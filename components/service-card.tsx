"use client"

import React from "react"

import { motion } from "framer-motion"
import type { ReactNode } from "react"
import { Sparkles } from "lucide-react"

interface ServiceCardProps {
  service: {
    name: string
    icon: ReactNode
    link?: string
  }
  index: number
  inView: boolean
  "data-cursor-rotate"?: boolean
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void
}

export default function ServiceCard({ service, index, inView, onClick, ...props }: ServiceCardProps) {
  return (
    <motion.div
      className="w-[140px] md:w-[200px] lg:w-[220px] bg-white rounded-xl md:rounded-2xl p-3 md:p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#76B947]/20 cursor-pointer"
      initial={{ opacity: 0, y: 50, rotate: index % 2 === 0 ? -5 : 5 }}
      animate={inView ? { opacity: 1, y: 0, rotate: 0 } : { opacity: 0, y: 50, rotate: index % 2 === 0 ? -5 : 5 }}
      transition={{ duration: 0.8, delay: 0.1 * index, type: "spring", stiffness: 100 }}
      whileHover={{ y: -10, scale: 1.05, rotate: 0 }}
      onClick={(e) => {
        e.preventDefault()
        console.log(`ServiceCard clicked: ${service.name}`)

        // Ensure the click event is properly handled
        if (onClick) {
          try {
            onClick(e)
          } catch (error) {
            console.error(`Error handling click for ${service.name}:`, error)
          }
        }
      }}
      data-service-card={service.name}
    >
      <motion.div
        className="text-[#76B947] mb-2 md:mb-4 flex justify-center"
        animate={{
          rotate: [0, 10, 0, -10, 0],
          scale: [1, 1.1, 1, 0.9, 1],
        }}
        transition={{
          duration: 5,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: index * 0.5,
        }}
      >
        {service.icon &&
          React.cloneElement(service.icon as React.ReactElement, {
            className: "h-5 w-5 md:h-8 md:w-8",
          })}

        {/* Sparkle effect on hover */}
        <motion.div
          className="absolute -top-1 -right-1 md:-top-2 md:-right-2 text-[#76B947] opacity-0 group-hover:opacity-100"
          animate={{
            rotate: [0, 180, 360],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        >
          <Sparkles className="h-3 w-3 md:h-4 md:w-4" />
        </motion.div>
      </motion.div>
      <h3 className="text-sm md:text-lg font-semibold mb-1 md:mb-2 text-center">{service.name}</h3>

      {/* Corner sparkle that appears on hover */}
      <motion.div
        className="absolute -top-1 -right-1 text-[#76B947] opacity-0 group-hover:opacity-100"
        initial={{ scale: 0, rotate: 0 }}
        whileHover={{
          scale: 1,
          rotate: 360,
          transition: { duration: 0.5 },
        }}
      >
        <Sparkles className="h-3 w-3 md:h-5 md:w-5" />
      </motion.div>
    </motion.div>
  )
}
