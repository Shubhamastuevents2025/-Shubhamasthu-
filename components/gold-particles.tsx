"use client"

import { useEffect, useRef } from "react"

interface GoldParticlesProps {
  density?: number
  speed?: number
}

export default function GoldParticles({ density = 50, speed = 1 }: GoldParticlesProps) {
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

    // Particle properties
    const particles: {
      x: number
      y: number
      size: number
      speed: number
      opacity: number
      color: string
      rotation: number
      rotationSpeed: number
    }[] = []

    // Create particles
    const createParticles = () => {
      const goldColors = ["#D4AF37", "#F5E1A4", "#E6BE8A", "#C5B358", "#F0E68C"]

      for (let i = 0; i < density; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 3 + 1,
          speed: (Math.random() * 0.5 + 0.2) * speed,
          opacity: Math.random() * 0.5 + 0.3,
          color: goldColors[Math.floor(Math.random() * goldColors.length)],
          rotation: Math.random() * 360,
          rotationSpeed: (Math.random() - 0.5) * 2,
        })
      }
    }

    createParticles()

    // Draw star shape
    const drawStar = (x: number, y: number, size: number, rotation: number, color: string, opacity: number) => {
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
      ctx.globalAlpha = opacity
      ctx.fill()
      ctx.restore()
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle) => {
        // Draw particle
        if (Math.random() > 0.5) {
          drawStar(particle.x, particle.y, particle.size, particle.rotation, particle.color, particle.opacity)
        } else {
          ctx.beginPath()
          ctx.arc(particle.x, particle.y, particle.size / 2, 0, Math.PI * 2)
          ctx.fillStyle = particle.color
          ctx.globalAlpha = particle.opacity
          ctx.fill()
        }

        // Update particle
        particle.y -= particle.speed
        particle.rotation += particle.rotationSpeed

        // Random opacity fluctuation
        particle.opacity += Math.random() * 0.03 - 0.015
        if (particle.opacity < 0.1) particle.opacity = 0.1
        if (particle.opacity > 0.8) particle.opacity = 0.8

        // Reset if out of bounds
        if (particle.y < -10) {
          particle.y = canvas.height + 10
          particle.x = Math.random() * canvas.width
          particle.size = Math.random() * 3 + 1
        }
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
    }
  }, [density, speed])

  return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-10" />
}
