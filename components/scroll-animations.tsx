"use client"

import type React from "react"

import { useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"

interface ScrollAnimationProps {
  children: React.ReactNode
  delay?: number
  duration?: number
  type?: "fade" | "slide" | "scale" | "rotate" | "flip"
  direction?: "up" | "down" | "left" | "right"
  threshold?: number
  className?: string
}

export function ScrollAnimation({
  children,
  delay = 0,
  duration = 0.5,
  type = "fade",
  direction = "up",
  threshold = 0.1,
  className = "",
}: ScrollAnimationProps) {
  const controls = useAnimation()
  const [ref, inView] = useInView({ threshold, triggerOnce: false })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    } else {
      controls.start("hidden")
    }
  }, [controls, inView])

  // Define animation variants based on type and direction
  const getVariants = () => {
    switch (type) {
      case "fade":
        return {
          hidden: {
            opacity: 0,
            y: direction === "up" ? 50 : direction === "down" ? -50 : 0,
            x: direction === "left" ? 50 : direction === "right" ? -50 : 0,
          },
          visible: { opacity: 1, y: 0, x: 0, transition: { duration, delay, ease: "easeOut" } },
        }
      case "slide":
        return {
          hidden: {
            x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
            y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
            opacity: 0,
          },
          visible: {
            x: 0,
            y: 0,
            opacity: 1,
            transition: { duration, delay, ease: "easeOut" },
          },
        }
      case "scale":
        return {
          hidden: { scale: 0.8, opacity: 0 },
          visible: { scale: 1, opacity: 1, transition: { duration, delay, ease: "easeOut" } },
        }
      case "rotate":
        return {
          hidden: { rotate: direction === "left" ? -90 : 90, opacity: 0, scale: 0.8 },
          visible: { rotate: 0, opacity: 1, scale: 1, transition: { duration, delay, ease: "easeOut" } },
        }
      case "flip":
        return {
          hidden: {
            rotateX: direction === "up" || direction === "down" ? 90 : 0,
            rotateY: direction === "left" || direction === "right" ? 90 : 0,
            opacity: 0,
          },
          visible: {
            rotateX: 0,
            rotateY: 0,
            opacity: 1,
            transition: { duration, delay, ease: "easeOut" },
          },
        }
      default:
        return {
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { duration, delay } },
        }
    }
  }

  return (
    <motion.div ref={ref} initial="hidden" animate={controls} variants={getVariants()} className={className}>
      {children}
    </motion.div>
  )
}
