"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Crown, Star, Sparkles, PartyPopper, Gem, CalendarDays, Music, Camera, Cake } from "lucide-react"

interface RoyalLoadingScreenProps {
  onLoadingComplete: () => void
}

export default function RoyalLoadingScreen({ onLoadingComplete }: RoyalLoadingScreenProps) {
  const [progress, setProgress] = useState(0)
  const [currentStage, setCurrentStage] = useState(0)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [showLogo, setShowLogo] = useState(false)
  const [loadingComplete, setLoadingComplete] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  // Royal loading messages
  const loadingMessages = [
    "Preparing your royal experience",
    "Arranging elegant decorations",
    "Orchestrating magical moments",
    "Setting the golden stage",
    "Your celebration awaits",
  ]

  // Event icons with colors
  const eventIcons = [
    { icon: <Crown className="h-8 w-8" />, color: "#D4AF37" },
    { icon: <Star className="h-8 w-8" />, color: "#FFD700" },
    { icon: <PartyPopper className="h-8 w-8" />, color: "#D4AF37" },
    { icon: <Gem className="h-8 w-8" />, color: "#4169E1" },
    { icon: <CalendarDays className="h-8 w-8" />, color: "#D4AF37" },
    { icon: <Music className="h-8 w-8" />, color: "#4169E1" },
    { icon: <Camera className="h-8 w-8" />, color: "#D4AF37" },
    { icon: <Cake className="h-8 w-8" />, color: "#4169E1" },
    { icon: <Sparkles className="h-8 w-8" />, color: "#D4AF37" },
  ]

  // Canvas animation for royal particles
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    // Particle class for royal theme
    class RoyalParticle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      color: string
      shape: string
      rotation: number
      rotationSpeed: number

      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 15 + 5
        this.speedX = (Math.random() - 0.5) * 2
        this.speedY = (Math.random() - 0.5) * 2
        this.color = Math.random() > 0.5 ? "#D4AF37" : "#0A1929"
        // Only use circles and stars, remove crown and diamond shapes
        this.shape = ["star", "circle"][Math.floor(Math.random() * 2)]
        this.rotation = 0
        this.rotationSpeed = (Math.random() - 0.5) * 0.1
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY
        this.rotation += this.rotationSpeed

        // Bounce off edges
        if (this.x > canvas.width || this.x < 0) {
          this.speedX = -this.speedX
        }
        if (this.y > canvas.height || this.y < 0) {
          this.speedY = -this.speedY
        }
      }

      draw() {
        if (!ctx) return

        ctx.save()
        ctx.translate(this.x, this.y)
        ctx.rotate(this.rotation)
        ctx.fillStyle = this.color
        ctx.strokeStyle = "#FFFFFF"
        ctx.lineWidth = 1

        switch (this.shape) {
          case "star":
            this.drawStar(ctx)
            break
          case "circle":
            ctx.beginPath()
            ctx.arc(0, 0, this.size / 2, 0, Math.PI * 2)
            ctx.fill()
            ctx.stroke()
            break
        }

        ctx.restore()
      }

      drawStar(ctx: CanvasRenderingContext2D) {
        const size = this.size
        const spikes = 5
        const outerRadius = size / 2
        const innerRadius = size / 4

        ctx.beginPath()
        for (let i = 0; i < spikes * 2; i++) {
          const radius = i % 2 === 0 ? outerRadius : innerRadius
          const angle = (Math.PI * i) / spikes
          ctx.lineTo(Math.cos(angle) * radius, Math.sin(angle) * radius)
        }
        ctx.closePath()
        ctx.fill()
        ctx.stroke()
      }
    }

    // Create particles
    const particles: RoyalParticle[] = []
    const particleCount = Math.min(50, Math.floor(window.innerWidth / 20))

    for (let i = 0; i < particleCount; i++) {
      particles.push(new RoyalParticle())
    }

    // Animation loop
    let animationFrameId: number

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw and update particles
      particles.forEach((particle) => {
        particle.update()
        particle.draw()
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    // Show logo after a delay - FASTER
    const logoTimer = setTimeout(() => {
      setShowLogo(true)
    }, 400) // Reduced from 800ms to 400ms

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId)
      clearTimeout(logoTimer)
    }
  }, [])

  // Progress simulation - UPDATED to be FASTER
  useEffect(() => {
    let interval: NodeJS.Timeout

    // If we've already completed loading, don't start a new interval
    if (loadingComplete) return

    // Function to handle progress completion
    const completeLoading = () => {
      setLoadingComplete(true)
      // Add a shorter delay before transitioning to main content
      setTimeout(() => {
        onLoadingComplete()
      }, 500) // Reduced from 1000ms to 500ms
    }

    // Simulate loading progress with different phases - FASTER
    if (progress < 85) {
      // Phase 1: FASTER loading speed (0-85%)
      interval = setInterval(() => {
        setProgress((prevProgress) => {
          // Update loading stage based on progress
          const newProgress = prevProgress + (Math.random() * 4 + 3) // Increased from (2+1) to (4+3)
          const newStage = Math.min(Math.floor(newProgress / 20), 4)

          if (newStage !== currentStage) {
            setCurrentStage(newStage)
          }

          return Math.min(newProgress, 85) // Cap at 85% for phase 1
        })
      }, 40) // Reduced from 80ms to 40ms
    } else if (progress < 95) {
      // Phase 2: FASTER loading (85-95%)
      interval = setInterval(() => {
        setProgress((prevProgress) => Math.min(prevProgress + 1.5, 95)) // Increased from 0.5 to 1.5
      }, 50) // Reduced from 100ms to 50ms
    } else if (progress < 100) {
      // Phase 3: FASTER final loading (95-100%)
      interval = setInterval(() => {
        setProgress((prevProgress) => {
          const newProgress = Math.min(prevProgress + 0.8, 100) // Increased from 0.2 to 0.8
          // If we've reached 100%, complete the loading
          if (newProgress >= 100 && !loadingComplete) {
            completeLoading()
          }
          return newProgress
        })
      }, 60) // Reduced from 120ms to 60ms
    } else if (!loadingComplete) {
      // Ensure we complete if we somehow missed it
      completeLoading()
    }

    return () => clearInterval(interval)
  }, [progress, currentStage, onLoadingComplete, loadingComplete])

  // Logo animation variants
  const logoVariants = {
    initial: { opacity: 0, scale: 0.8, y: 20 },
    animate: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  // Progress bar animation variants
  const progressVariants = {
    initial: { width: "0%" },
    animate: {
      width: `${progress}%`,
      transition: {
        duration: 0.2, // Reduced from 0.3 to 0.2
      },
    },
  }

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.3 } }} // Reduced from 0.5 to 0.3
    >
      {/* Canvas background for royal particles */}
      <canvas ref={canvasRef} className="absolute inset-0 bg-gradient-to-br from-royal-950 to-royal-990" />

      {/* Decorative elements - REMOVED the corner decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-royal-990 to-transparent opacity-50" />
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-royal-990 to-transparent opacity-50" />
      </div>

      {/* Main content container */}
      <div className="relative z-10 w-full max-w-md px-8 py-12">
        {/* Logo animation */}
        <AnimatePresence>
          {showLogo && (
            <motion.div
              className="mb-12 text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }} // Reduced from 0.8 to 0.5
            >
              <div className="relative inline-block">
                {/* Using the actual logo image */}
                <motion.div className="mb-4" variants={logoVariants} initial="initial" animate="animate">
                  <img
                    src="/treatments/Logo.png"
                    alt="Shubhamasthu Logo"
                    className="h-32 object-contain mx-auto"
                    style={{ maxWidth: "240px" }}
                  />
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Innovative loading animation - Royal Unfolding Carpet */}
        <div className="mb-10 relative">
          <div className="h-2 bg-royal-990 rounded-full overflow-hidden border border-[#D4AF37]/30">
            {/* Gold carpet unrolling effect */}
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-[#D4AF37] via-[#FFD700] to-[#D4AF37]"
              variants={progressVariants}
              initial="initial"
              animate="animate"
            />

            {/* Moving crown on progress bar */}
            <motion.div
              className="absolute top-1/2 -translate-y-1/2"
              style={{ left: `${Math.min(progress, 99)}%` }}
              initial={{ scale: 0.5 }}
              animate={{
                scale: [0.8, 1, 0.8],
                rotate: [-5, 0, 5, 0, -5],
              }}
              transition={{
                duration: 1.5, // Reduced from 2 to 1.5
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              <Crown className="w-6 h-6 text-[#D4AF37] drop-shadow-[0_0_8px_rgba(212,175,55,0.8)]" />
            </motion.div>
          </div>

          <div className="mt-2 flex justify-between text-white/80 text-sm">
            <span>Preparing your royal experience</span>
            <span>{Math.round(progress)}%</span>
          </div>
        </div>

        {/* Loading message */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStage}
            className="text-center mb-8"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }} // Reduced from 0.4 to 0.3
          >
            <p className="text-white text-lg font-medium">{loadingMessages[currentStage]}</p>
          </motion.div>
        </AnimatePresence>

        {/* Animated event icons - FIXED positioning of the center sparkle */}
        <div className="relative h-24 mb-6" ref={containerRef}>
          {/* Container with fixed dimensions and precise centering */}
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Rotating ring of icons */}
            <div className="relative w-48 h-48 flex items-center justify-center">
              <motion.div
                className="absolute inset-0"
                animate={{ rotate: 360 }}
                transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }} // Reduced from 20s to 15s
              >
                {eventIcons.map((icon, index) => {
                  const angle = (index / eventIcons.length) * Math.PI * 2
                  const x = Math.cos(angle) * 70
                  const y = Math.sin(angle) * 70

                  return (
                    <motion.div
                      key={index}
                      className="absolute"
                      style={{
                        color: icon.color,
                        left: `calc(50% + ${x}px)`,
                        top: `calc(50% + ${y}px)`,
                        transform: "translate(-50%, -50%)",
                      }}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                        rotate: -360, // Counter-rotate to keep icons upright
                      }}
                      transition={{
                        duration: 0.3, // Reduced from 0.5 to 0.3
                        delay: index * 0.05, // Reduced from 0.1 to 0.05
                        rotate: { duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }, // Reduced from 20s to 15s
                      }}
                    >
                      {icon.icon}
                    </motion.div>
                  )
                })}
              </motion.div>

              {/* Center star - FIXED with absolute precise positioning */}
              <div
                className="absolute"
                style={{
                  position: "absolute",
                  left: "50%",
                  top: "50%",
                  transform: "translate(-50%, -50%)",
                  margin: 0,
                  padding: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  zIndex: 20,
                }}
              >
                <motion.div
                  animate={{
                    scale: [0.8, 1.2, 0.8],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 1.5, // Reduced from 2 to 1.5
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Star className="w-5 h-5 text-white" style={{ margin: 0, padding: 0 }} />
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* Loading tips */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStage}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 0.8, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }} // Reduced from 0.5 to 0.3
            className="text-center text-white/70 text-sm italic"
          >
            {
              [
                "We create magical weddings with royal themes",
                "Our birthday celebrations are legendary",
                "Corporate events with elegant sophistication",
                "School & college events with creative excellence",
                "Thank you for choosing Shubhamasthu Events",
              ][currentStage]
            }
          </motion.div>
        </AnimatePresence>

        {/* Completion message that appears at 100% */}
        <AnimatePresence>
          {progress >= 99.5 && (
            <motion.div
              className="absolute bottom-4 left-0 right-0 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }} // Reduced from 0.5 to 0.3
            >
              <p className="text-[#FFD700] font-medium">
                <Sparkles className="inline-block mr-1 h-4 w-4" /> Ready to explore royal celebrations!
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}
