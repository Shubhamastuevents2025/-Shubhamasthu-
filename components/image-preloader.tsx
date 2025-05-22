"use client"

import { useEffect, useState } from "react"

interface ImagePreloaderProps {
  imageSrcs: string[]
  onComplete?: () => void
}

export default function ImagePreloader({ imageSrcs, onComplete }: ImagePreloaderProps) {
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    if (!imageSrcs || imageSrcs.length === 0) {
      setIsComplete(true)
      onComplete?.()
      return
    }

    let loadedCount = 0
    const totalImages = imageSrcs.length

    const checkAllLoaded = () => {
      loadedCount++
      if (loadedCount >= totalImages) {
        setIsComplete(true)
        onComplete?.()
      }
    }

    // Simplified preloading without complex promise handling
    imageSrcs.forEach((src) => {
      if (!src || src.includes("placeholder.svg")) {
        // Skip placeholder images or empty sources
        checkAllLoaded()
        return
      }

      const img = new Image()
      img.src = src
      img.crossOrigin = "anonymous" // Prevent CORS issues

      img.onload = () => {
        checkAllLoaded()
      }

      img.onerror = () => {
        console.warn(`Failed to preload image: ${src}`)
        checkAllLoaded() // Still count as loaded to not block
      }
    })
  }, [imageSrcs, onComplete])

  return null // This component doesn't render anything
}
