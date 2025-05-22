"use client"

import type React from "react"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { MapPin, Phone, Mail, Send, Calendar, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ContactSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 })
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormStatus("submitting")

    const form = e.target as HTMLFormElement
    const formData = new FormData(form)

    formData.append("access_key", "54dec43e-b0c0-4c12-ba96-a8f2cc34d864 ") // Replace with your Web3Forms access key
    formData.append("from_name", "Shubhamastu") // 👈 ADD THIS LINE
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      })

      const data = await response.json()

      if (data.success) {
        setFormStatus("success")
        form.reset()

        setTimeout(() => {
          setFormStatus("idle")
        }, 3000)
      } else {
        setFormStatus("error")
      }
    } catch (error) {
      console.error("Web3Forms error:", error)
      setFormStatus("error")
    }
  }

  return (
    <section ref={sectionRef} id="contact" className="py-10 sm:py-16 md:py-24 bg-royal-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gold-gradient"></div>
      <div className="absolute -top-20 -left-20 w-40 h-40 rounded-full bg-royal-900/5"></div>
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
            Book Your <span className="royal-text">Event</span>
          </motion.h2>

          <motion.div
            className="h-1 w-20 bg-gold-gradient mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : { width: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          />

          <motion.p
            className="text-royal-900/70 max-w-2xl mx-auto mt-4"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Contact us to discuss your event requirements or book our services. We're here to make your celebration
            memorable.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg gold-border h-full">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <MapPin className="text-gold-500 w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-royal-900">Our Address</h4>
                    <p className="text-sm text-royal-900/70">
                     #5, Kalidasa road, Near mutthoot finance,
                      <br />
                     Jayalakshmipuram, Mysore 570012
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <Phone className="text-gold-500 w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-royal-900">Phone</h4>
                    <p className="text-sm text-royal-900/70">+91 9611115050</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <Mail className="text-gold-500 w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-royal-900">Email</h4>
                    <p className="text-sm text-royal-900/70">yashuhs666@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <Calendar className="text-gold-500 w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-royal-900">Working Hours</h4>
                    <p className="text-sm text-royal-900/70">Mon - Sat: 9:00 AM - 7:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg gold-border">
              <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-royal-900 text-center">
                Book Your Event
              </h3>

              <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-royal-900 mb-1">
                      Your Name
                    </label>
                    <Input id="name" name="name" placeholder="John Doe" required className="..." />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-royal-900 mb-1">
                      Email Address
                    </label>
                    <Input id="email" name="email" type="email" placeholder="john@example.com" required className="..." />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-xs sm:text-sm font-medium text-royal-900 mb-1">
                      Phone Number
                    </label>
                    <Input id="phone" name="phone" placeholder="+91 9876543210" required className="..." />
                  </div>
                  <div>
                    <label htmlFor="event-type" className="block text-xs sm:text-sm font-medium text-royal-900 mb-1">
                      Event Type
                    </label>
                    <Select name="event-type">
                      <SelectTrigger className="...">
                        <SelectValue placeholder="Select event type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="wedding">Wedding</SelectItem>
                        <SelectItem value="birthday">Birthday</SelectItem>
                        <SelectItem value="corporate">Corporate Event</SelectItem>
                        <SelectItem value="school">School/College Event</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-royal-900 mb-1">
                    Event Details
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your event requirements..."
                    rows={3}
                    className="..."
                  />
                </div>

                <Button
                  type="submit"
                  className="..."
                  disabled={formStatus === "submitting"}
                >
                  {formStatus === "idle" && (
                    <>
                      <Send className="..." /> Book Now
                    </>
                  )}
                  {formStatus === "submitting" && "Submitting..."}
                  {formStatus === "success" && (
                    <>
                      <CheckCircle className="..." /> Request Sent!
                    </>
                  )}
                  {formStatus === "error" && "Error! Try Again"}
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
