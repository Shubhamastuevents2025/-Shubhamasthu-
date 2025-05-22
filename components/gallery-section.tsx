"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react"

const galleryCategories = [
  { id: "all", name: "All" },
  { id: "weddings", name: "Weddings" },
  { id: "birthdays", name: "Birthdays" },
  { id: "corporate", name: "Corporate" },
  { id: "school", name: "School Events" },
]

const galleryImages = [
  {
    src: "/treatments/wedding1.jpg",
    alt: "Wedding decoration with elegant floral arrangements",
    category: "weddings",
    size: "large",
  },
  {
    src: "/treatments/corporate1.jpg",
    alt: "Corporate event with professional stage setup",
    category: "corporate",
    size: "medium",
  },
  {
    src: "/treatments/Birthady1.jpg",
    alt: "Birthday celebration with colorful decorations",
    category: "birthdays",
    size: "medium",
  },
  {
    src: "/treatments/school1.jpg",
    alt: "School annual day cultural performance",
    category: "school",
    size: "medium",
  },
  {
    src: "/treatments/wedding.webp",
    alt: "Elegant wedding reception table setting",
    category: "weddings",
    size: "medium",
  },
  {
    src: "/treatments/corporate-events.jpg",
    alt: "Corporate team building activities",
    category: "corporate",
    size: "medium",
  },
  {
    src: "/treatments/Birthaday.jpg",
    alt: "Themed kids birthday party",
    category: "birthdays",
    size: "large",
  },
  {
    src: "/treatments/School.avif",
    alt: "School Annual day Celebration",
    category: "school",
    size: "medium",
  },
]

export default function GallerySection() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [currentIndex, setCurrentIndex] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 })

  const filteredImages =
    activeCategory === "all" ? galleryImages : galleryImages.filter((img) => img.category === activeCategory)

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? 0 : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === Math.max(0, filteredImages.length - 4) ? prev : prev + 1))
  }

  // Calculate how many images to show based on screen size
  const getImagesPerView = () => {
    // This is a client-side calculation, so we need to check if window exists
    if (typeof window !== "undefined") {
      if (window.innerWidth < 640) return 2 // Mobile: 2 images
      if (window.innerWidth < 1024) return 4 // Tablet: 4 images
      return 8 // Desktop: 8 images
    }
    return 8 // Default for SSR
  }

  return (
    <section ref={sectionRef} id="gallery" className="py-10 sm:py-16 md:py-24 bg-royal-950 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gold-gradient"></div>
      <div className="absolute -top-20 right-20 w-40 h-40 rounded-full bg-royal-900/5"></div>
      <div className="absolute -bottom-20 left-20 w-60 h-60 rounded-full bg-gold-500/5"></div>

      <div className="container px-4 relative z-10">
        <motion.div
          className="text-center mb-8 sm:mb-10 md:mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4 text-white"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
          >
            Our Event <span className="royal-text">Gallery</span>
          </motion.h2>

          <motion.div
            className="h-1 w-16 sm:w-20 bg-gold-gradient mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : { width: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          />

          <motion.p
            className="text-sm sm:text-base text-white/70 max-w-2xl mx-auto mt-3 md:mt-4"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Browse through our portfolio of successful events and celebrations we've organized over the years.
          </motion.p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-1 sm:gap-2 mb-6 sm:mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          {galleryCategories.map((category) => (
            <button
              key={category.id}
              className={`px-2 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-royal-900 text-white"
                  : "bg-royal-100 text-royal-900 hover:bg-royal-200"
              }`}
              onClick={() => {
                setActiveCategory(category.id)
                setCurrentIndex(0)
              }}
            >
              {category.name}
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <div className="relative">
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {filteredImages.slice(currentIndex, currentIndex + getImagesPerView()).map((image, index) => (
              <motion.div
                key={index}
                className={`relative overflow-hidden rounded-lg shadow-md group ${
                  image.size === "large" ? "sm:col-span-2 sm:row-span-2" : ""
                }`}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="relative h-40 sm:h-48 md:h-64 w-full">
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-royal-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-2 sm:p-4">
                    <div>
                      <Sparkles className="h-3 w-3 sm:h-5 sm:w-5 text-gold-500 mb-1 sm:mb-2" />
                      <p className="text-white text-xs sm:text-sm">{image.alt}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Navigation Arrows */}
          {filteredImages.length > getImagesPerView() && (
            <>
              <button
                onClick={handlePrev}
                disabled={currentIndex === 0}
                className={`absolute top-1/2 -left-2 sm:-left-4 transform -translate-y-1/2 bg-white p-1 sm:p-2 rounded-full shadow-md z-10 ${
                  currentIndex === 0 ? "opacity-50 cursor-not-allowed" : "hover:bg-royal-50"
                }`}
                aria-label="Previous images"
              >
                <ChevronLeft className="h-4 w-4 sm:h-6 sm:w-6 text-royal-900" />
              </button>
              <button
                onClick={handleNext}
                disabled={currentIndex >= Math.max(0, filteredImages.length - getImagesPerView())}
                className={`absolute top-1/2 -right-2 sm:-right-4 transform -translate-y-1/2 bg-white p-1 sm:p-2 rounded-full shadow-md z-10 ${
                  currentIndex >= Math.max(0, filteredImages.length - getImagesPerView())
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:bg-royal-50"
                }`}
                aria-label="Next images"
              >
                <ChevronRight className="h-4 w-4 sm:h-6 sm:w-6 text-royal-900" />
              </button>
            </>
          )}
        </div>
      </div>
    </section>
  )
}
