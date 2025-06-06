"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

interface BookingFormProps {
  services: { name: string }[]
  inView: boolean
}

export default function BookingForm({ services, inView }: BookingFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formStatus, setFormStatus] = useState<{
    type: "success" | "error" | null
    message: string
  }>({
    type: null,
    message: "",
  })

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsSubmitting(true)
    setFormStatus({ type: null, message: "" })

    try {
      const formData = new FormData(event.currentTarget)

      formData.append("access_key", "a20d82e5-dcc2-48bb-a83c-c86203a42d6a")
      formData.append("subject", "New Booking Request from Shubhamasthu Website")
      formData.append("from_name", "Shubhamasthu Website")
      formData.append("replyto", formData.get("email") as string)
      formData.append("botcheck", "")

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      })

      const data = await response.json()

      if (data.success) {
        setFormStatus({
          type: "success",
          message: "Your booking request has been sent successfully! We'll contact you shortly.",
        })
        ;(event.target as HTMLFormElement).reset()
      } else {
        setFormStatus({
          type: "error",
          message: data.message || "Something went wrong. Please try again later.",
        })
      }
    } catch (error) {
      setFormStatus({
        type: "error",
        message: "An unexpected error occurred. Please try again.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form className="space-y-3 md:space-y-6" onSubmit={handleSubmit}>
      {[{ label: "Your Name", name: "name", type: "text", placeholder: "Enter your full name" },
        { label: "Your Email", name: "email", type: "email", placeholder: "Enter your email address" },
        { label: "Your Phone", name: "phone", type: "tel", placeholder: "Enter your phone number" }
      ].map((field, index) => (
        <motion.div
          key={field.name}
          className="space-y-1 md:space-y-2"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
        >
          <label className="text-xs md:text-sm font-medium">
            {field.label} <span className="text-red-500">*</span>
          </label>
          <Input
            type={field.type}
            name={field.name}
            placeholder={field.placeholder}
            required
            className="rounded-lg md:rounded-xl border-[#FF007F]/20 focus:border-[#FF007F] focus:ring-[#FF007F]/10 py-2 md:py-6 text-xs md:text-base"
          />
        </motion.div>
      ))}

      <motion.div
        className="space-y-1 md:space-y-2"
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <label className="text-xs md:text-sm font-medium">Select Event Type</label>
        <select
          name="service"
          className="w-full rounded-lg md:rounded-xl border-[#FF007F]/20 focus:border-[#FF007F] focus:ring-[#FF007F]/10 py-2 md:py-6 px-2 md:px-3 text-xs md:text-base"
          required
        >
          <option value="">Choose your event type</option>
          {services.map((service) => (
            <option key={service.name} value={service.name}>
              {service.name}
            </option>
          ))}
        </select>
      </motion.div>

      <motion.div
        className="space-y-1 md:space-y-2"
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, delay: 0.7 }}
      >
        <label className="text-xs md:text-sm font-medium">Your Message</label>
        <Textarea
          name="message"
          placeholder="Tell us about your event, date, venue, and any special requirements"
          className="rounded-lg md:rounded-xl border-[#FF007F]/20 focus:border-[#FF007F] focus:ring-[#FF007F]/10 min-h-[60px] md:min-h-[100px] text-xs md:text-base"
          required
        />
      </motion.div>

      {formStatus.type && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`p-3 rounded-lg text-sm ${
            formStatus.type === "success"
              ? "bg-green-100 text-green-800"
              : "bg-red-100 text-red-800"
          }`}
        >
          {formStatus.message}
        </motion.div>
      )}

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="pt-2 md:pt-4"
      >
        <Button
          type="submit"
          disabled={isSubmitting}
          size="sm"
          className="w-full bg-gradient-to-r from-[#FF007F] to-[#FF5A36] text-white hover:opacity-90 text-xs md:text-lg py-2 md:py-6 rounded-lg md:rounded-xl relative overflow-hidden group shadow-md hover:shadow-lg transition-all duration-300"
        >
          <span className="relative z-10">{isSubmitting ? "Sending..." : "Book Your Event"}</span>
          <motion.span
            className="absolute inset-0 bg-white/20 z-0"
            initial={{ x: "-100%" }}
            whileHover={{ x: "100%" }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          />
        </Button>
      </motion.div>
    </form>
  )
}
