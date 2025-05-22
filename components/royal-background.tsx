"use client"

import { useEffect, useRef } from "react"

export default function RoyalBackground() {
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

    // Create pattern
    const patternSize = 30
    const patternSpacing = 100
    const patternOpacity = 0.1

    // Animation variables
    let angle = 0
    const speed = 0.0005

    // Draw pattern
    const drawPattern = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Rotate pattern
      angle += speed

      // Draw grid of patterns
      for (let x = -patternSpacing; x < canvas.width + patternSpacing; x += patternSpacing) {
        for (let y = -patternSpacing; y < canvas.height + patternSpacing; y += patternSpacing) {
          const offsetX = Math.sin(angle + y * 0.01) * 20
          const offsetY = Math.cos(angle + x * 0.01) * 20

          ctx.save()
          ctx.translate(x + offsetX, y + offsetY)
          ctx.rotate(angle)

          // Draw crown
          ctx.beginPath()
          ctx.moveTo(-patternSize / 2, patternSize / 4)
          ctx.lineTo(-patternSize / 2, -patternSize / 2)
          ctx.lineTo(-patternSize / 4, -patternSize / 4)
          ctx.lineTo(0, -patternSize / 2)
          ctx.lineTo(patternSize / 4, -patternSize / 4)
          ctx.lineTo(patternSize / 2, -patternSize / 2)
          ctx.lineTo(patternSize / 2, patternSize / 4)
          ctx.closePath()

          // Fill with gold gradient
          const gradient = ctx.createLinearGradient(
            -patternSize / 2,
            -patternSize / 2,
            patternSize / 2,
            patternSize / 2,
          )
          gradient.addColorStop(0, `rgba(212, 175, 55, ${patternOpacity})`)
          gradient.addColorStop(1, `rgba(255, 215, 0, ${patternOpacity})`)

          ctx.fillStyle = gradient
          ctx.fill()

          ctx.restore()
        }
      }

      requestAnimationFrame(drawPattern)
    }

    drawPattern()

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0 opacity-30" />
}
