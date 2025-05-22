"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

interface NavItem {
  name: string
  href: string
  isButton?: boolean
}

const navItems: NavItem[] = [
  { name: "Home", href: "#" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Gallery", href: "#gallery" },
  { name: "Contact", href: "#contact", isButton: true },
]

export default function NavigationBar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Handle scroll event to change navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu when clicking a link
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const href = e.currentTarget.getAttribute("href")

    // Only prevent default and handle smooth scroll for hash links
    if (href && href.startsWith("#")) {
      e.preventDefault()

      // Close the mobile menu first
      setIsOpen(false)

      // Small delay to allow menu closing animation to complete
      setTimeout(() => {
        if (href === "#") {
          window.scrollTo({ top: 0, behavior: "smooth" })
        } else {
          const element = document.getElementById(href.substring(1))
          if (element) {
            element.scrollIntoView({ behavior: "smooth" })
          }
        }
      }, 300)
    } else {
      // For non-hash links like /blog, let the default navigation happen
      setIsOpen(false)
    }
  }

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-royal-950/90 backdrop-blur-md shadow-md py-2" : "bg-transparent py-4",
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="z-10 flex items-center">
            <div className={cn("relative transition-all duration-300", scrolled ? "h-16" : "h-20")}>
              <img
                src="/treatments/Logo.png"
                alt="Shubhamasthu Logo"
                className="h-full object-contain"
                style={{ maxWidth: "180px" }}
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={handleLinkClick}
                className={cn(
                  "relative group",
                  item.isButton
                    ? "bg-gold-gradient text-royal-950 px-4 py-2 rounded-full hover:shadow-lg transition-all duration-300"
                    : scrolled
                      ? "text-white hover:text-gold-500 px-3 py-2 rounded-md transition-colors"
                      : "text-white hover:text-gold-500 px-3 py-2 rounded-md transition-colors",
                )}
              >
                {item.name}
                {!item.isButton && (
                  <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-gold-500 group-hover:w-full group-hover:left-0 transition-all duration-300"></span>
                )}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden z-10 p-2 rounded-full bg-royal-950/20 backdrop-blur-md text-white"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-royal-950/95 backdrop-blur-md shadow-lg absolute top-full left-0 right-0 overflow-hidden"
          >
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-3">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={handleLinkClick}
                    className={cn(
                      "px-4 py-3 rounded-lg transition-colors",
                      item.isButton
                        ? "bg-gold-gradient text-royal-950 font-medium"
                        : "text-white hover:bg-royal-900 hover:text-gold-500",
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
