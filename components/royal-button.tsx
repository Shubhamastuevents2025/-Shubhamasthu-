"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"

interface RoyalButtonProps {
  children: React.ReactNode
  href?: string
  onClick?: () => void
  variant?: "primary" | "secondary" | "outline"
  size?: "sm" | "md" | "lg"
  className?: string
  icon?: React.ReactNode
}

export default function RoyalButton({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
  icon,
}: RoyalButtonProps) {
  const [isHovered, setIsHovered] = useState(false)

  // Determine styles based on variant
  const getVariantStyles = () => {
    switch (variant) {
      case "primary":
        return "bg-gold-gradient text-royal-900 hover:shadow-lg hover:shadow-gold-500/20"
      case "secondary":
        return "bg-royal-900 text-gold-500 hover:shadow-lg hover:shadow-royal-900/20"
      case "outline":
        return "bg-transparent border-2 border-gold-500 text-gold-500 hover:bg-gold-500/10"
      default:
        return "bg-gold-gradient text-royal-900 hover:shadow-lg hover:shadow-gold-500/20"
    }
  }

  // Determine styles based on size
  const getSizeStyles = () => {
    switch (size) {
      case "sm":
        return "text-xs px-4 py-2"
      case "md":
        return "text-sm px-6 py-3"
      case "lg":
        return "text-base px-8 py-4"
      default:
        return "text-sm px-6 py-3"
    }
  }

  const buttonContent = (
    <>
      <span className="relative z-10">{children}</span>

      {/* Shimmer effect */}
      <motion.span
        className="absolute inset-0 bg-white/20 z-0"
        initial={{ x: "-100%" }}
        animate={isHovered ? { x: "100%" } : { x: "-100%" }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      />

      {/* Corner decorations */}
      <motion.span
        className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/50"
        initial={{ opacity: 0 }}
        animate={isHovered ? { opacity: 1, width: 6, height: 6 } : { opacity: 0, width: 2, height: 2 }}
        transition={{ duration: 0.3 }}
      />
      <motion.span
        className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white/50"
        initial={{ opacity: 0 }}
        animate={isHovered ? { opacity: 1, width: 6, height: 6 } : { opacity: 0, width: 2, height: 2 }}
        transition={{ duration: 0.3 }}
      />
      <motion.span
        className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white/50"
        initial={{ opacity: 0 }}
        animate={isHovered ? { opacity: 1, width: 6, height: 6 } : { opacity: 0, width: 2, height: 2 }}
        transition={{ duration: 0.3 }}
      />
      <motion.span
        className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/50"
        initial={{ opacity: 0 }}
        animate={isHovered ? { opacity: 1, width: 6, height: 6 } : { opacity: 0, width: 2, height: 2 }}
        transition={{ duration: 0.3 }}
      />

      {/* Icon with animation */}
      {icon && (
        <motion.span
          className="ml-2 inline-flex"
          animate={isHovered ? { x: [0, 5, 0], rotate: [0, 10, 0] } : {}}
          transition={{ duration: 0.5 }}
        >
          {icon}
        </motion.span>
      )}
    </>
  )

  const buttonClasses = `relative overflow-hidden rounded-full font-medium ${getVariantStyles()} ${getSizeStyles()} ${className}`

  if (href) {
    return (
      <motion.div
        whileHover={{ y: -3 }}
        whileTap={{ y: 1 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        <Link href={href} className={buttonClasses}>
          {buttonContent}
        </Link>
      </motion.div>
    )
  }

  return (
    <motion.button
      className={buttonClasses}
      onClick={onClick}
      whileHover={{ y: -3 }}
      whileTap={{ y: 1 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {buttonContent}
    </motion.button>
  )
}
