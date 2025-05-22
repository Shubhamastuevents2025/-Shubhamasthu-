"use client"

import type React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { MapPin, Phone, Mail, Instagram, Facebook, ArrowRight } from "lucide-react"

export default function Footer() {
  // Utility function for smooth scrolling to sections
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault()
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="py-8 sm:py-10 md:py-16 relative overflow-hidden bg-royal-950">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-6 md:mb-8">
          {/* Column 1: About */}
          <div className="text-center md:text-left">
            <div className="flex flex-col items-center md:items-start mb-4 md:mb-6">
              {/* Using the actual logo image */}
              <img
                src="/treatments/Logo.png"
                alt="Shubhamasthu Logo"
                className="h-16 sm:h-18 md:h-20 object-contain mb-3 md:mb-4"
                style={{ maxWidth: "160px" }}
              />
              <p className="text-white/80 text-sm sm:text-base mb-4 md:mb-6 max-w-md mx-auto md:mx-0">
                Creating memorable celebrations across Mysore, Mandya, Maddur, and Malavalli. With our creative vision
                and meticulous planning, we transform ordinary occasions into extraordinary experiences.
              </p>
            </div>
            <div className="flex justify-center md:justify-start space-x-3 md:space-x-4">
              {[
                {
                  icon: <Instagram className="h-4 w-4 sm:h-5 sm:w-5" />,
                  color: "bg-white/10 hover:bg-white/20",
                  href: "https://www.instagram.com/shubhamasthu_event_planner?igsh=c2doZGYyZXo1Z3l6",
                },
                {
                  icon: <Facebook className="h-4 w-4 sm:h-5 sm:w-5" />,
                  color: "bg-white/10 hover:bg-white/20",
                  href: "https://www.facebook.com/share/16PeztpMvZ/",
                },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${social.color} p-2 sm:p-3 rounded-full text-white hover:shadow-lg transition-all duration-300`}
                  whileHover={{ y: -3, scale: 1.05 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Column 2: Contact & Hours */}
          <div className="text-center md:text-left mt-6 md:mt-0">
            <h3 className="text-lg sm:text-xl font-bold text-white mb-3 md:mb-4">Contact Information</h3>
            <ul className="space-y-2 md:space-y-3 text-white/80 text-sm sm:text-base">
              <li className="flex items-start justify-center md:justify-start">
                <MapPin className="h-4 w-4 mr-2 text-gold-500 mt-1 flex-shrink-0" />
                <span className="max-w-xs">
                  #5, Kalidasa road, Near mutthoot finance, Jayalakshmipuram, Mysore 570012
                </span>
              </li>
              <li className="flex items-center justify-center md:justify-start">
                <Phone className="h-4 w-4 mr-2 text-gold-500 flex-shrink-0" />
                <span>+91 9611115050</span>
              </li>
              <li className="flex items-center justify-center md:justify-start">
                <Mail className="h-4 w-4 mr-2 text-gold-500 flex-shrink-0" />
                <span>yashuhs666@gmail.com</span>
              </li>
            </ul>

            {/* Yash's Contact Information - Added here */}
            <h3 className="text-lg sm:text-xl font-bold text-white mt-5 md:mt-6 mb-2 md:mb-3">Contact Person</h3>
            <ul className="space-y-1 md:space-y-2 text-white/80 text-sm sm:text-base">
              <li className="font-semibold">Yash</li>
              <li className="flex items-center justify-center md:justify-start">
                <Phone className="h-4 w-4 mr-2 text-gold-500 flex-shrink-0" />
                <span>+91 9611115050</span>
              </li>
              <li className="flex items-center justify-center md:justify-start">
                <Phone className="h-4 w-4 mr-2 text-gold-500 flex-shrink-0" />
                <span>+91 9611112050</span>
              </li>
              <li className="flex items-center justify-center md:justify-start">
                <Mail className="h-4 w-4 mr-2 text-gold-500 flex-shrink-0" />
                <span>yashuhs666@gmail.com</span>
              </li>
            </ul>

            <h3 className="text-lg sm:text-xl font-bold text-white mt-5 md:mt-6 mb-2 md:mb-3">Business Hours</h3>
            <ul className="space-y-1 text-white/80 text-sm sm:text-base">
              <li className="flex justify-between max-w-xs mx-auto md:mx-0">
                <span>Monday - Saturday:</span>
                <span>9:00 AM - 7:00 PM</span>
              </li>
              <li className="flex justify-between max-w-xs mx-auto md:mx-0">
                <span>Sunday:</span>
                <span>By Appointment Only</span>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div className="text-center md:text-left mt-6 md:mt-0">
            <h3 className="text-lg sm:text-xl font-bold text-white mb-3 md:mb-4">Quick Links</h3>
            <ul className="space-y-1 md:space-y-2 text-white/80 text-sm sm:text-base">
              {[
                { name: "Home", link: "#" },
                { name: "About Us", link: "about" },
                { name: "Our Services", link: "services" },
                // { name: "Wedding Services", link: "services" },
                // { name: "Birthday Events", link: "services" },
                // { name: "Corporate Events", link: "corporate-events" },
                // { name: "School & College Events", link: "services" },
                { name: "Gallery", link: "gallery" },
                { name: "Contact Us", link: "contact" },
              ].map((item) => (
                <li key={item.name} className="flex justify-center md:justify-start">
                  <Link
                    href={`#${item.link}`}
                    onClick={(e) => scrollToSection(e, item.link)}
                    className="hover:text-gold-500 transition-colors flex items-center"
                  >
                    <ArrowRight className="h-3 w-3 mr-1 sm:mr-2" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 pt-4 md:pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/80 text-xs sm:text-sm mb-3 md:mb-0 text-center md:text-left">
            © 2023 Shubhamasthu Events. All rights reserved.
          </p>
          <div className="flex space-x-3 md:space-x-4 text-white/60 text-xs sm:text-sm">
            <Link href="#" className="hover:text-gold-500 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-gold-500 transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-gold-500 transition-colors">
              Refund Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
