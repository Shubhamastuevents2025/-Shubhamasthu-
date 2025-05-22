"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface CarouselImage {
  src: string
  alt: string
}

interface OptimizedCarouselProps {
  images: CarouselImage[]
  autoPlayInterval?: number
  showControls?: boolean
  showIndicators?: boolean
  className?: string
  overlayClassName?: string
  imageClassName?: string
  onImageChange?: (index: number) => void
}

export default function OptimizedCarousel({
  images,
  autoPlayInterval = 5000,
  showControls = true,
  showIndicators = true,
  className = "",
  overlayClassName = "bg-royal-990/70 backdrop-filter backdrop-blur-sm",
  imageClassName = "object-cover",
  onImageChange,
}: OptimizedCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isClient, setIsClient] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const touchStartX = useRef<number | null>(null)

  // Set isClient to true on mount
  useEffect(() => {
    setIsClient(true)
  }, [])

  // Handle image preloading - simplified to avoid destructuring errors
  useEffect(() => {
    if (!isClient) return

    // Simple preload function that doesn't try to track individual image load status
    const preloadImages = () => {
      images.forEach((image) => {
        if (!image.src || image.src.includes("placeholder.svg")) {
          return
        }

        const img = new Image()
        img.src = image.src
        img.crossOrigin = "anonymous"

        // We don't need to track load status, just preload
        img.onload = () => {
          // Image loaded successfully
        }

        img.onerror = () => {
          console.warn(`Failed to preload image: ${image.src}`)
        }
      })
    }

    preloadImages()
  }, [images, isClient])

  // Auto-advance carousel
  useEffect(() => {
    if (!isClient || isPaused || autoPlayInterval <= 0) return

    const startInterval = () => {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
      }, autoPlayInterval)
    }

    startInterval()

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [isClient, images.length, autoPlayInterval, isPaused])

  // Notify parent component when image changes
  useEffect(() => {
    if (onImageChange) {
      onImageChange(currentIndex)
    }
  }, [currentIndex, onImageChange])

  // Handle navigation
  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
    resetInterval()
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
    resetInterval()
  }

  const goToIndex = (index: number) => {
    setCurrentIndex(index)
    resetInterval()
  }

  const resetInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)

      if (!isPaused && autoPlayInterval > 0) {
        intervalRef.current = setInterval(() => {
          setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
        }, autoPlayInterval)
      }
    }
  }

  // Touch event handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
    setIsPaused(true)
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return

    const touchEndX = e.changedTouches[0].clientX
    const diff = touchStartX.current - touchEndX

    if (diff > 50) {
      // Swipe left, go to next
      goToNext()
    } else if (diff < -50) {
      // Swipe right, go to previous
      goToPrevious()
    }

    touchStartX.current = null
    setIsPaused(false)
  }

  // Handle mouse events
  const handleMouseEnter = () => {
    setIsPaused(true)
  }

  const handleMouseLeave = () => {
    setIsPaused(false)
  }

  // Don't render anything on server or if no images
  if (!isClient || images.length === 0) {
    return <div className={`relative w-full h-full ${className}`} />
  }

  return (
    <div
      className={`relative w-full h-full overflow-hidden ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          <div className="relative w-full h-full">
            <Image
              src={images[currentIndex].src || "/placeholder.svg"}
              alt={images[currentIndex].alt}
              fill
              className={imageClassName}
              priority={currentIndex === 0}
              sizes="100vw"
              onError={(e) => {
                // Fallback for image loading errors
                const target = e.target as HTMLImageElement
                target.src = "/placeholder.svg"
              }}
            />
            <div className={`absolute inset-0 ${overlayClassName}`}></div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Controls */}
      {showControls && images.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full p-2 z-10 transition-all"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full p-2 z-10 transition-all"
            aria-label="Next image"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </>
      )}

      {/* Indicators */}
      {showIndicators && images.length > 1 && (
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToIndex(index)}
              className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all ${
                currentIndex === index ? "bg-gold-500 w-4 md:w-6" : "bg-white/50"
              }`}
              aria-label={`Go to image ${index + 1}`}
              aria-current={currentIndex === index ? "true" : "false"}
            />
          ))}
        </div>
      )}
    </div>
  )
}
