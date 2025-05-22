"use client"

import { useState, useEffect } from "react"
import RoyalLoadingScreen from "@/components/royal-loading-screen"
import NavigationBar from "@/components/navigation-bar"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import ServicesSection from "@/components/services-section"
import GallerySection from "@/components/gallery-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import GoldParticles from "@/components/gold-particles"
import RoyalConfetti from "@/components/royal-confetti"
import FloatingDecorations from "@/components/floating-decorations"
import RoyalCursorEffect from "@/components/royal-cursor-effect"
import RoyalBackground from "@/components/royal-background"
import { ScrollAnimation } from "@/components/scroll-animations"
import ShimmerText from "@/components/shimmer-text"
import CorporateEventsSection from "@/components/corporate-events-section"
import PageTransition from "@/components/page-transition"
import ErrorBoundary from "@/components/error-boundary"
import { useAnimation } from "@/components/safe-animation-provider"

export default function Home() {
  const [loading, setLoading] = useState(true)
  const [showConfetti, setShowConfetti] = useState(false)
  const [isClient, setIsClient] = useState(false)
  const { canAnimate, isReducedMotion } = useAnimation()

  useEffect(() => {
    setIsClient(true)
  }, [])

  // Handle loading complete
  const handleLoadingComplete = () => {
    setLoading(false)

    // Show confetti after loading completes
    if (canAnimate && !isReducedMotion) {
      setTimeout(() => {
        setShowConfetti(true)
      }, 1000)
    }
  }

  if (!isClient) {
    return null
  }

  return (
    <main className="min-h-screen relative overflow-hidden font-['Poppins']">
      {loading ? (
        <ErrorBoundary>
          <RoyalLoadingScreen onLoadingComplete={handleLoadingComplete} />
        </ErrorBoundary>
      ) : (
        <PageTransition>
          {/* Background Animations */}
          <ErrorBoundary>
            <RoyalBackground />
          </ErrorBoundary>

          <ErrorBoundary>
            {canAnimate && <GoldParticles density={isReducedMotion ? 10 : 30} speed={0.5} />}
          </ErrorBoundary>

          <ErrorBoundary>
            {showConfetti && canAnimate && <RoyalConfetti density={isReducedMotion ? 10 : 20} />}
          </ErrorBoundary>

          <ErrorBoundary>{canAnimate && !isReducedMotion && <FloatingDecorations />}</ErrorBoundary>

          <ErrorBoundary>{canAnimate && !isReducedMotion && <RoyalCursorEffect />}</ErrorBoundary>

          {/* Main Content */}
          <ErrorBoundary>
            <NavigationBar />
          </ErrorBoundary>

          <ErrorBoundary>
            <HeroSection />
          </ErrorBoundary>

          <ErrorBoundary>
            <ScrollAnimation type="fade" delay={0.2}>
              <div className="py-8 bg-royal-900/90 text-center">
                <ShimmerText
                  text="Creating Unforgettable Royal Experiences"
                  className="text-2xl md:text-3xl font-bold text-gold-500"
                  delay={1}
                />
              </div>
            </ScrollAnimation>
          </ErrorBoundary>

          <ErrorBoundary>
            <ScrollAnimation type="slide" direction="right">
              <AboutSection />
            </ScrollAnimation>
          </ErrorBoundary>

          <ErrorBoundary>
            <ScrollAnimation type="fade">
              <ServicesSection />
            </ScrollAnimation>
          </ErrorBoundary>

          <ErrorBoundary>
            <ScrollAnimation type="scale">
              <GallerySection />
            </ScrollAnimation>
          </ErrorBoundary>

          {/* Corporate Events Section now appears before Contact Section */}
          <ErrorBoundary>
            <ScrollAnimation type="slide" direction="left">
              <CorporateEventsSection />
            </ScrollAnimation>
          </ErrorBoundary>

          <ErrorBoundary>
            <ScrollAnimation type="slide" direction="up">
              <ContactSection />
            </ScrollAnimation>
          </ErrorBoundary>

          <ErrorBoundary>
            <Footer />
          </ErrorBoundary>
        </PageTransition>
      )}
    </main>
  )
}
