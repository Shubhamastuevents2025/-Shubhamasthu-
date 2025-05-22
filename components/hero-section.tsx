"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import GoldParticles from "@/components/gold-particles"

const carouselImages = [
  {
    src: "/treatments/Marrige car.webp",
    alt: "Elegant wedding decoration",
  },
  {
    src: "/treatments/Corporate-Events c1.webp",
    alt: "Corporate event setup",
  },
  {
    src: "/treatments/Birthaday car.jpg",
    alt: "Birthday celebration",
  },
  {
    src: "/treatments/school c1.jpg",
    alt: "School event",
  },
]

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isClient, setIsClient] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  // Set isClient to true on mount
  useEffect(() => {
    setIsClient(true)
  }, [])

  // Auto-advance carousel
  useEffect(() => {
    if (!isClient) return

    intervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev === carouselImages.length - 1 ? 0 : prev + 1))
    }, 5000)

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [isClient])

  // Parallax effect
  useEffect(() => {
    if (!isClient) return

    const handleScroll = () => {
      const scrollY = window.scrollY
      const parallaxElements = document.querySelectorAll(".parallax")

      parallaxElements.forEach((element) => {
        const speed = element.getAttribute("data-speed") || "0.5"
        const y = scrollY * Number.parseFloat(speed)
        element.setAttribute("style", `transform: translateY(${y}px)`)
      })
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [isClient])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-20">
      {/* Background Carousel */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <div className="relative w-full h-full">
              {isClient && (
                <Image
                  src={carouselImages[currentSlide].src || "/placeholder.svg"}
                  alt={carouselImages[currentSlide].alt}
                  fill
                  className="object-cover"
                  priority={currentSlide === 0}
                  sizes="(max-width: 768px) 100vw, 100vw"
                />
              )}
              <div className="absolute inset-0 bg-royal-990/70 backdrop-filter backdrop-blur-sm"></div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Gold Particles Animation */}
      {isClient && <GoldParticles density={30} speed={0.5} />}

      {/* Content */}
      <div className="container relative z-20 px-4 py-8 md:py-10 lg:py-20 text-center">
        <motion.div
          className="mb-4 md:mb-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div
            className="inline-block mb-4 relative"
            animate={{
              y: [0, -10, 0],
              rotate: [0, 5, 0, -5, 0],
            }}
            transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          >
            {/* Shubhamasthu Logo with enhanced animation */}
            <motion.div
              className="relative flex flex-col items-center justify-center"
              whileHover={{
                scale: 1.05,
                filter: "drop-shadow(0 0 10px rgba(212, 175, 55, 0.5))",
                transition: { duration: 0.3 },
              }}
            >
              <motion.img
                src="/treatments/Logo.png"
                alt="Shubhamasthu Logo"
                className="h-16 w-auto sm:h-18 md:h-20"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  filter: [
                    "drop-shadow(0 0 0px rgba(212, 175, 55, 0))",
                    "drop-shadow(0 0 10px rgba(212, 175, 55, 0.7))",
                    "drop-shadow(0 0 0px rgba(212, 175, 55, 0))",
                  ],
                }}
                transition={{
                  duration: 0.8,
                  filter: {
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                  },
                }}
              />
            </motion.div>
          </motion.div>

          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center leading-tight md:leading-normal tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.span
              className="block"
              animate={{
                textShadow: [
                  "0px 0px 0px rgba(255,255,255,0)",
                  "0px 0px 10px rgba(255,255,255,0.5)",
                  "0px 0px 0px rgba(255,255,255,0)",
                ],
              }}
              transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
            >
              Creating Memorable
            </motion.span>
            <motion.span
              className="royal-text"
              animate={{
                textShadow: [
                  "0px 0px 0px rgba(212,175,55,0)",
                  "0px 0px 10px rgba(212,175,55,0.5)",
                  "0px 0px 0px rgba(212,175,55,0)",
                ],
              }}
              transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse", delay: 2.5 }}
            >
              Events & Celebrations
            </motion.span>
          </motion.h1>

          <motion.p
            className="mt-3 md:mt-4 text-base sm:text-lg md:text-xl text-white/90 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Top Event Planners in Mysore, Mandya, Maddur & Malavalli and Bharati Nagar
          </motion.p>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-3 sm:gap-4 mt-6 sm:mt-8"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <Button
            size="lg"
            className="relative bg-gold-gradient text-royal-950 hover:shadow-lg hover:shadow-gold-500/20 text-xs sm:text-sm md:text-base px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-6 rounded-full group overflow-hidden"
            asChild
          >
            <Link href="#contact">
              <span className="relative z-10 font-semibold">Book Now</span>
              <motion.span
                className="absolute inset-0 bg-white/20 z-0"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              />
              <Star className="ml-1 sm:ml-2 h-3 w-3 sm:h-4 sm:w-4 inline-block" />
            </Link>
          </Button>

          <Button
            size="lg"
            className="relative bg-gold-gradient text-royal-950 hover:shadow-lg hover:shadow-gold-500/20 text-xs sm:text-sm md:text-base px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-6 rounded-full group overflow-hidden"
            asChild
          >
            <Link href="#service">
              <span className="relative z-10 font-semibold">View our services</span>
              <motion.span
                className="absolute inset-0 bg-white/20 z-0"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              />
              <ChevronRight className="ml-1 sm:ml-2 h-3 w-3 sm:h-4 sm:w-4 inline-block" />
            </Link>
          </Button>
        </motion.div>

        {/* Carousel Indicators with enhanced animation */}
        <div className="absolute bottom-10 left-0 right-0 flex justify-center gap-1 sm:gap-2">
          {carouselImages.map((_, index) => (
            <motion.button
              key={index}
              className={`w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-3 md:h-3 rounded-full transition-all ${
                currentSlide === index ? "bg-gold-500 w-3 sm:w-4 md:w-6" : "bg-white/50"
              }`}
              onClick={() => setCurrentSlide(index)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + index * 0.1 }}
            />
          ))}
        </div>
      </div>

      {/* Scroll Indicator with enhanced animation */}
      <motion.div
        className="absolute bottom-5 left-1/2 transform -translate-x-1/2 text-white/70"
        animate={{
          y: [0, 10, 0],
          opacity: [0.5, 1, 0.5],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      >
        <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 md:h-8 md:w-8 rotate-90" />
      </motion.div>
    </section>
  )
}
