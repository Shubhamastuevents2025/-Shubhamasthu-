"use client"

import { useEffect, useRef } from "react"

interface RoyalConfettiProps {
  density?: number
}

export default function RoyalConfetti({ density = 30 }: RoyalConfettiProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Confetti types: rectangle, circle, star, crown
    const confettiTypes = ["rectangle", "circle", "star", "crown"]

    // Royal colors
    const royalColors = [
      "#D4AF37", // Gold
      "#0A2463", // Navy
      "#4B0082", // Indigo
      "#800080", // Purple
      "#FFD700", // Gold
      "#C0C0C0", // Silver
    ]

    // Confetti particles
    const particles: {
      x: number
      y: number
      size: number
      color: string
      type: string
      rotation: number
      rotationSpeed: number
      speedX: number
      speedY: number
      gravity: number
      opacity: number
      fadeDirection: number
    }[] = []

    // Create particles
    const createParticles = () => {
      for (let i = 0; i < density; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height * 0.5,
          size: Math.random() * 8 + 4,
          color: royalColors[Math.floor(Math.random() * royalColors.length)],
          type: confettiTypes[Math.floor(Math.random() * confettiTypes.length)],
          rotation: Math.random() * 360,
          rotationSpeed: (Math.random() - 0.5) * 2,
          speedX: (Math.random() - 0.5) * 2,
          speedY: Math.random() * 1 + 0.5,
          gravity: 0.1,
          opacity: Math.random() * 0.7 + 0.3,
          fadeDirection: Math.random() > 0.5 ? 1 : -1,
        })
      }
    }

    createParticles()

    // Draw crown
    const drawCrown = (x: number, y: number, size: number, rotation: number, color: string) => {
      ctx.save()
      ctx.translate(x, y)
      ctx.rotate((rotation * Math.PI) / 180)

      ctx.beginPath()
      // Base
      ctx.rect(-size / 2, size / 4, size, size / 4)

      // Spikes
      for (let i = 0; i < 5; i++) {
        const spikeX = -size / 2 + (i * size) / 4
        ctx.moveTo(spikeX, size / 4)
        ctx.lineTo(spikeX, -size / 2)
        ctx.lineTo(spikeX + size / 8, -size / 4)
        ctx.lineTo(spikeX + size / 4, -size / 2)
      }

      ctx.fillStyle = color
      ctx.fill()
      ctx.restore()
    }

    // Draw star
    const drawStar = (x: number, y: number, size: number, rotation: number, color: string) => {
      ctx.save()
      ctx.translate(x, y)
      ctx.rotate((rotation * Math.PI) / 180)
      ctx.beginPath()

      for (let i = 0; i < 5; i++) {
        const angle = (i * 2 * Math.PI) / 5 - Math.PI / 2
        const innerAngle = angle + Math.PI / 5

        if (i === 0) {
          ctx.moveTo(Math.cos(angle) * size, Math.sin(angle) * size)
        } else {
          ctx.lineTo(Math.cos(angle) * size, Math.sin(angle) * size)
        }

        ctx.lineTo(Math.cos(innerAngle) * (size / 2), Math.sin(innerAngle) * (size / 2))
      }

      ctx.closePath()
      ctx.fillStyle = color
      ctx.fill()
      ctx.restore()
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle, index) => {
        ctx.globalAlpha = particle.opacity

        // Draw based on type
        switch (particle.type) {
          case "rectangle":
            ctx.save()
            ctx.translate(particle.x, particle.y)
            ctx.rotate((particle.rotation * Math.PI) / 180)
            ctx.fillStyle = particle.color
            ctx.fillRect(-particle.size / 2, -particle.size / 4, particle.size, particle.size / 2)
            ctx.restore()
            break

          case "circle":
            ctx.beginPath()
            ctx.arc(particle.x, particle.y, particle.size / 2, 0, Math.PI * 2)
            ctx.fillStyle = particle.color
            ctx.fill()
            break

          case "star":
            drawStar(particle.x, particle.y, particle.size, particle.rotation, particle.color)
            break

          case "crown":
            drawCrown(particle.x, particle.y, particle.size, particle.rotation, particle.color)
            break
        }

        // Update particle
        particle.x += particle.speedX
        particle.y += particle.speedY
        particle.speedY += particle.gravity
        particle.rotation += particle.rotationSpeed

        // Fade in/out
        particle.opacity += 0.01 * particle.fadeDirection
        if (particle.opacity > 0.9) particle.fadeDirection = -1
        if (particle.opacity < 0.1) particle.fadeDirection = 1

        // Reset if out of bounds
        if (particle.y > canvas.height + particle.size) {
          particles[index] = {
            x: Math.random() * canvas.width,
            y: -particle.size,
            size: Math.random() * 8 + 4,
            color: royalColors[Math.floor(Math.random() * royalColors.length)],
            type: confettiTypes[Math.floor(Math.random() * confettiTypes.length)],
            rotation: Math.random() * 360,
            rotationSpeed: (Math.random() - 0.5) * 2,
            speedX: (Math.random() - 0.5) * 2,
            speedY: Math.random() * 1 + 0.5,
            gravity: 0.1,
            opacity: Math.random() * 0.7 + 0.3,
            fadeDirection: Math.random() > 0.5 ? 1 : -1,
          }
        }
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
    }
  }, [density])

  return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-10 opacity-40" />
}
