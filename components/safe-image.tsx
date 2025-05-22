"use client"

import { useState, useEffect } from "react"
import Image, { type ImageProps } from "next/image"
import { Loader2 } from "lucide-react"

interface SafeImageProps extends Omit<ImageProps, "onError" | "onLoad"> {
  fallbackSrc?: string
  showLoader?: boolean
}

export default function SafeImage({
  src,
  alt,
  fallbackSrc = "/placeholder.svg",
  showLoader = true,
  className = "",
  ...props
}: SafeImageProps) {
  const [imgSrc, setImgSrc] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    setImgSrc(typeof src === "string" ? src : fallbackSrc)
  }, [src, fallbackSrc])

  const handleError = () => {
    setIsError(true)
    setIsLoading(false)
    setImgSrc(fallbackSrc)
  }

  const handleLoad = () => {
    setIsLoading(false)
  }

  if (!isClient) {
    return null
  }

  return (
    <div className="relative">
      {isLoading && showLoader && (
        <div className="absolute inset-0 flex items-center justify-center bg-royal-950/20 backdrop-blur-sm">
          <Loader2 className="w-8 h-8 text-gold-500 animate-spin" />
        </div>
      )}

      {imgSrc && (
        <Image
          {...props}
          src={imgSrc || "/placeholder.svg"}
          alt={alt}
          className={`transition-opacity duration-300 ${isLoading ? "opacity-0" : "opacity-100"} ${className}`}
          onLoadingComplete={handleLoad}
          onError={handleError}
        />
      )}
    </div>
  )
}
