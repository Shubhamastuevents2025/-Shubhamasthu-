"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { Award, Users, Calendar, CheckCircle } from "lucide-react"

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 })

  return (
    <section ref={sectionRef} id="about" className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gold-gradient"></div>
      <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-royal-900/5"></div>
      <div className="absolute -bottom-20 -right-20 w-60 h-60 rounded-full bg-gold-500/5"></div>

      <div className="container px-4 relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4 text-royal-900"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
          >
            About <span className="royal-text">Shubhamasthu Events</span>
          </motion.h2>

          <motion.div
            className="h-1 w-20 bg-gold-gradient mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : { width: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden gold-border">
              <Image src="/treatments/wedding-planner-in-india01.jpg" alt="Shubhamasthu Events Team" fill className="object-cover" />
            </div>

            <motion.div
              className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg gold-border"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div className="flex items-center gap-4">
                <Calendar className="h-10 w-10 text-gold-500" />
                <div>
                  <p className="text-sm text-royal-900/70">Experience</p>
                  <p className="text-xl font-bold text-royal-900">10+ Years</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-royal-900">Creating Magical Moments Since 2013</h3>

            <p className="text-royal-900/80 mb-6">
              Shubhamasthu Events is a premier event management company specializing in creating memorable celebrations
              across Mysore, Mandya, Maddur, and Malavalli. With our creative vision and meticulous planning, we
              transform ordinary occasions into extraordinary experiences.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-6">
              {[
                { icon: <Award className="h-5 w-5 text-gold-500" />, text: "Award-Winning Service" },
                { icon: <Users className="h-5 w-5 text-gold-500" />, text: "Expert Team" },
                { icon: <CheckCircle className="h-5 w-5 text-gold-500" />, text: "Customized Solutions" },
                { icon: <Calendar className="h-5 w-5 text-gold-500" />, text: "500+ Events Completed" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                >
                  {item.icon}
                  <span className="text-sm md:text-base text-royal-900/80">{item.text}</span>
                </motion.div>
              ))}
            </div>

            <p className="text-royal-900/80">
              Our mission is to understand your vision and bring it to life with our expertise in event design,
              coordination, and execution. From intimate gatherings to grand celebrations, we handle every detail with
              precision and care.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
