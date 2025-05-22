"use client"

import { motion } from "framer-motion"
import { Crown } from "lucide-react"

interface RoyalDividerProps {
  className?: string
}

export default function RoyalDivider({ className = "" }: RoyalDividerProps) {
  return (
    <div className={`flex items-center justify-center py-4 ${className}`}>
      <motion.div
        className="h-0.5 bg-gradient-to-r from-transparent via-gold-500 to-transparent w-full max-w-md"
        initial={{ width: 0, opacity: 0 }}
        whileInView={{ width: "100%", opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      />
      <motion.div
        className="mx-4 text-gold-500"
        initial={{ scale: 0, rotate: -180 }}
        whileInView={{ scale: 1, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.5 }}
        whileHover={{
          rotate: [0, 10, -10, 0],
          scale: [1, 1.2, 1],
          transition: { duration: 0.5 },
        }}
      >
        <Crown size={24} />
      </motion.div>
      <motion.div
        className="h-0.5 bg-gradient-to-r from-gold-500 via-gold-500 to-transparent w-full max-w-md"
        initial={{ width: 0, opacity: 0 }}
        whileInView={{ width: "100%", opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      />
    </div>
  )
}
