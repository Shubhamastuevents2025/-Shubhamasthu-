"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import {
  Cake,
  Music,
  Users,
  GraduationCap,
  Heart,
  Sparkles,
  Calendar,
  Palette,
  Home,
  Baby,
} from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"

export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState("weddings")
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 })

  const services = [
    {
      id: "weddings",
      title: "Wedding Services",
      icon: <Heart className="h-6 w-6" />,
      description: "Create your dream wedding with our comprehensive planning and execution services.",
      image: "/treatments/wedding.webp",
      features: [
        { name: "Venue Selection & Decoration", icon: <Palette /> },
        { name: "Catering & Menu Planning", icon: <Cake /> },
        { name: "Photography & Videography", icon: <Sparkles /> },
        { name: "Entertainment & Music", icon: <Music /> },
        { name: "Guest Management", icon: <Users /> },
        { name: "Complete Wedding Planning", icon: <Calendar /> },
      ],
    },
    {
      id: "birthdays",
      title: "Birthday Celebrations",
      icon: <Cake className="h-6 w-6" />,
      description: "Make your birthday special with our themed parties and entertainment options.",
      image: "/treatments/Birthaday.jpg",
      features: [
        { name: "Theme Design & Execution", icon: <Palette /> },
        { name: "Cake & Catering", icon: <Cake /> },
        { name: "Entertainment & Games", icon: <Music /> },
        { name: "Decoration & Balloons", icon: <Sparkles /> },
        { name: "Photography & Memories", icon: <Calendar /> },
        { name: "Return Gifts & Favors", icon: <Heart /> },
      ],
    },
    {
      id: "corporate",
      title: "Corporate Events",
      icon: <Users className="h-6 w-6" />,
      description: "Elevate your corporate events with our professional planning and execution services.",
      image: "/treatments/corporate-events.jpg",
      features: [
        { name: "Conference & Meeting Setup", icon: <Users /> },
        { name: "Product Launches", icon: <Sparkles /> },
        { name: "Team Building Activities", icon: <Heart /> },
        { name: "Corporate Dinners", icon: <Cake /> },
        { name: "Award Ceremonies", icon: <Calendar /> },
        { name: "Technical Support", icon: <Music /> },
      ],
    },
    {
      id: "School Events",
      title: "School",
      icon: <GraduationCap className="h-6 w-6" />,
      description: "Create memorable academic events with our specialized planning services.",
      image: "/treatments/School.avif",
      features: [
        { name: "Annual Day Celebrations", icon: <Calendar /> },
        { name: "Cultural Festivals", icon: <Music /> },
        { name: "Sports Day Events", icon: <Users /> },
        { name: "Graduation Ceremonies", icon: <GraduationCap /> },
        { name: "College Fests", icon: <Sparkles /> },
        { name: "Academic Conferences", icon: <Palette /> },
      ],
    },
    {
      id: "baby-shower",
      title: "Baby Shower",
      icon: <Baby className="h-6 w-6" />,
      description: "Celebrate the arrival of your little one with joyfully curated baby shower experiences.",
      image: "/treatments/Babyshower.webp",
      features: [
        { name: "Decor & Themes", icon: <Palette /> },
        { name: "Games & Entertainment", icon: <Music /> },
        { name: "Cake & Catering", icon: <Cake /> },
        { name: "Photography", icon: <Sparkles /> },
        { name: "Guest Engagement", icon: <Users /> },
        { name: "Gifts & Giveaways", icon: <Heart /> },
      ],
    },
    {
      id: "bridal-shower",
      title: "Bridal Shower",
      icon: <Heart className="h-6 w-6" />,
      description: "Make the bride-to-be feel special with elegant bridal shower arrangements.",
      image: "/treatments/Bridalshower.jpg",
      features: [
        { name: "Theme Decor", icon: <Palette /> },
        { name: "Catering & Treats", icon: <Cake /> },
        { name: "Games & Fun", icon: <Music /> },
        { name: "Photo Booth", icon: <Sparkles /> },
        { name: "Gifting Ideas", icon: <Heart /> },
        { name: "Guest Management", icon: <Users /> },
      ],
    },
    {
      id: "naming-ceremony",
      title: "Naming Ceremony",
      icon: <Baby className="h-6 w-6" />,
      description: "Cherish your child’s naming ceremony with thoughtful planning and beautiful setups.",
      image: "/treatments/Naming ceremony.avif",
      features: [
        { name: "Traditional Setup", icon: <Palette /> },
        { name: "Music & Rituals", icon: <Music /> },
        { name: "Catering", icon: <Cake /> },
        { name: "Photography", icon: <Sparkles /> },
        { name: "Return Gifts", icon: <Heart /> },
        { name: "Guest Seating", icon: <Users /> },
      ],
    },
    {
      id: "engagement-ceremony",
      title: "Engagement Ceremony",
      icon: <Heart className="h-6 w-6" />,
      description: "Begin your journey of togetherness with elegant and well-managed engagement events.",
      image: "/treatments/Engagement CEremony.jpeg",
      features: [
        { name: "Stage Decoration", icon: <Palette /> },
        { name: "Live Music", icon: <Music /> },
        { name: "Cake Cutting", icon: <Cake /> },
        { name: "Photography & Videos", icon: <Sparkles /> },
        { name: "Ring Ceremony Setup", icon: <GraduationCap /> },
        { name: "Seating & Food", icon: <Users /> },
      ],
    },
    {
      id: "anniversary-party",
      title: "Anniversary Party",
      icon: <Cake className="h-6 w-6" />,
      description: "Celebrate years of love with a personalized anniversary party experience.",
      image: "/treatments/Aniversary Party.avif",
      features: [
        { name: "Decor & Lights", icon: <Palette /> },
        { name: "Entertainment", icon: <Music /> },
        { name: "Custom Cake", icon: <Cake /> },
        { name: "Memory Wall", icon: <Sparkles /> },
        { name: "Guest Handling", icon: <Users /> },
        { name: "Surprise Planning", icon: <Heart /> },
      ],
    },
    {
      id: "graduation-party",
      title: "Graduation Party",
      icon: <GraduationCap className="h-6 w-6" />,
      description: "Throw a memorable graduation bash to mark your academic achievement in style.",
      image: "/treatments/Graduation party.avif",
      features: [
        { name: "Cap & Gown Decor", icon: <Palette /> },
        { name: "DJ & Music", icon: <Music /> },
        { name: "Celebration Cake", icon: <Cake /> },
        { name: "Memories Slideshow", icon: <Sparkles /> },
        { name: "Group Photos", icon: <Users /> },
        { name: "Speech Setup", icon: <Calendar /> },
      ],
    },
    {
      id: "get-together",
      title: "Get-Together Party",
      icon: <Users className="h-6 w-6" />,
      description: "Reconnect and enjoy with friends and family through our fun and vibrant gatherings.",
      image: "/treatments/Get Together.jpg",
      features: [
        { name: "Casual Setup", icon: <Palette /> },
        { name: "Games & Activities", icon: <Music /> },
        { name: "Snacks & Catering", icon: <Cake /> },
        { name: "Group Entertainment", icon: <Sparkles /> },
        { name: "Seating & Space", icon: <Users /> },
        { name: "Memory Capture", icon: <Calendar /> },
      ],
    },
    {
      id: "house-warming",
      title: "House Warming",
      icon: <Home className="h-6 w-6" />,
      description: "Bless your new beginning with traditional and modern house warming party ideas.",
      image: "/treatments/Housewarming.jpeg",
      features: [
        { name: "Traditional Decor", icon: <Palette /> },
        { name: "Puja Arrangements", icon: <Calendar /> },
        { name: "Guest Snacks", icon: <Cake /> },
        { name: "Background Music", icon: <Music /> },
        { name: "Home Photography", icon: <Sparkles /> },
        { name: "Guest Support", icon: <Users /> },
      ],
    },
  ]

  return (
    <section ref={sectionRef} id="services" className="py-16 md:py-24 bg-royal-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gold-gradient"></div>
      <div className="absolute top-20 right-10 w-40 h-40 rounded-full bg-gold-500/5"></div>
      <div className="absolute bottom-20 left-10 w-60 h-60 rounded-full bg-royal-900/5"></div>

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
            Our <span className="royal-text">Premium Services</span>
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
            From intimate gatherings to grand celebrations, we offer comprehensive event planning and execution services tailored to your needs.
          </motion.p>
        </motion.div>

        <Tabs defaultValue="weddings" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2 bg-transparent h-auto mb-8">
            {services.map((service) => (
              <TabsTrigger
                key={service.id}
                value={service.id}
                className={`
                  data-[state=active]:bg-royal-900 data-[state=active]:text-white
                  data-[state=inactive]:bg-white data-[state=inactive]:text-royal-900
                  border border-royal-900/10 rounded-lg p-4 h-auto flex flex-col items-center gap-2
                  transition-all duration-300 hover:shadow-md
                  ${activeTab === service.id ? "gold-border" : ""}
                `}
              >
                <div className={`${activeTab === service.id ? "text-gold-500" : "text-royal-900"}`}>{service.icon}</div>
                <span className="text-sm font-medium">{service.title}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {services.map((service) => (
            <TabsContent key={service.id} value={service.id} className="mt-0">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg gold-border"
              >
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="relative h-64 md:h-auto">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6 md:p-8">
                    <h3 className="text-2xl font-bold mb-4 text-royal-900">{service.title}</h3>
                    <p className="text-royal-900/70 mb-6">{service.description}</p>

                    <div className="grid grid-cols-2 gap-4">
                      {service.features.map((feature, index) => (
                        <motion.div
                          key={index}
                          className="flex items-center gap-2"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                        >
                          <div className="text-gold-500">{feature.icon}</div>
                          <span className="text-sm text-royal-900/80">{feature.name}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}
