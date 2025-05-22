"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Award, Gift, Users, Calendar, Mic, Utensils, Camera, Music, Share2, Rocket } from "lucide-react"

export default function CorporateEventsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 })

  const weddingServices = [
    {
      icon: <Calendar className="h-5 w-5 sm:h-6 sm:w-6" />,
      title: "Wedding Planning",
      description: "Complete wedding planning from engagement to reception.",
    },
    {
      icon: <Rocket className="h-5 w-5 sm:h-6 sm:w-6" />,
      title: "Destination Weddings",
      description: "Exotic locations with travel arrangements and accommodations.",
    },
    {
      icon: <Gift className="h-5 w-5 sm:h-6 sm:w-6" />,
      title: "Wedding Favors",
      description: "Customized gifts for guests to remember your special day.",
    },
    {
      icon: <Users className="h-5 w-5 sm:h-6 sm:w-6" />,
      title: "Guest Management",
      description: "RSVP tracking, seating arrangements, and guest accommodations.",
    },
    {
      icon: <Award className="h-5 w-5 sm:h-6 sm:w-6" />,
      title: "Decor & Styling",
      description: "Elegant decorations matching your wedding theme and vision.",
    },
    {
      icon: <Mic className="h-5 w-5 sm:h-6 sm:w-6" />,
      title: "Entertainment",
      description: "DJs, live bands, dancers, and traditional performances.",
    },
    {
      icon: <Utensils className="h-5 w-5 sm:h-6 sm:w-6" />,
      title: "Catering Services",
      description: "Customized menus with multi-cuisine options and cake design.",
    },
    {
      icon: <Camera className="h-5 w-5 sm:h-6 sm:w-6" />,
      title: "Photography & Videography",
      description: "Premium photo and video coverage with same-day edits.",
    },
    {
      icon: <Music className="h-5 w-5 sm:h-6 sm:w-6" />,
      title: "Venue Selection",
      description: "Assistance in finding and booking the perfect venue.",
    },
    {
      icon: <Share2 className="h-5 w-5 sm:h-6 sm:w-6" />,
      title: "Wedding Invitations",
      description: "Custom designed digital and printed invitations.",
    },
  ]

  const locations = [
    {
      id: "mysore",
      name: "Mysore",
      address: "#5, Kalidasa road, Near mutthoot finance, Jayalakshmipuram, Mysore 570012",
    },
    {
      id: "mandya",
      name: "Mandya",
      address: "#1160, Near Chamundeshwari temple, chamundeshwari nagara, Mandya 571401",
    },
    {
      id: "maddur",
      name: "Maddur",
      address: "#204, Government hospital road, Next to sanjay theater, Maddur 571428",
    },
    {
      id: "malavalli",
      name: "Malavalli",
      address: "#425, Near church, Sultan Road, Malavalli 571430",
    },
    {
      id: "bharathinagara",
      name: "Bharathi Nagar",
      address: "#66, Siri conevention Hall, Maddur-malavalli main road, Bharathinagara 571422",
    },
  ]

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  }

  const iconVariants = {
    hidden: { scale: 0, rotate: -45 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 10,
      },
    },
  }

  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Number.POSITIVE_INFINITY,
      repeatType: "reverse",
      ease: "easeInOut",
    },
  }

  return (
    <section
      ref={sectionRef}
      id="corporate-events"
      className="py-10 sm:py-16 md:py-24 bg-white relative overflow-hidden"
    >
      {/* Decorative elements with animation */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gold-gradient"></div>
      <motion.div
        className="absolute top-20 right-10 w-40 h-40 rounded-full bg-gold-500/5"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      ></motion.div>
      <motion.div
        className="absolute bottom-20 left-10 w-60 h-60 rounded-full bg-royal-900/5"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      ></motion.div>

      {/* Floating elements */}
      <motion.div className="absolute top-1/4 right-[5%] text-gold-500/20" animate={floatingAnimation}>
        <Award className="h-10 w-10 sm:h-16 sm:w-16" />
      </motion.div>
      <motion.div
        className="absolute bottom-1/4 left-[5%] text-royal-900/20"
        animate={{
          ...floatingAnimation,
          transition: {
            ...floatingAnimation.transition,
            delay: 1,
          },
        }}
      >
        <Calendar className="h-10 w-10 sm:h-16 sm:w-16" />
      </motion.div>

      <div className="container px-4 relative z-10">
        <motion.div
          className="text-center mb-8 sm:mb-10 md:mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4 text-royal-900"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
          >
            Wedding <span className="royal-text">Services</span>
          </motion.h1>

          <motion.div
            className="h-1 w-16 sm:w-20 bg-gold-gradient mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : { width: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          />

          <motion.h2
            className="text-lg sm:text-xl md:text-2xl font-medium mt-4 md:mt-6 text-royal-900/80"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Creating Magical Moments for Your Special Day
          </motion.h2>
        </motion.div>

        {/* Corporate Services Grid with enhanced animations */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-10 sm:mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {weddingServices.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white p-4 sm:p-6 rounded-xl shadow-md gold-border hover:shadow-lg transition-all duration-300"
              variants={itemVariants}
              whileHover={{
                y: -5,
                boxShadow: "0 10px 25px -5px rgba(212, 175, 55, 0.2)",
                transition: { duration: 0.2 },
              }}
            >
              <div className="flex items-start gap-3 sm:gap-4">
                <motion.div
                  className="bg-royal-100 p-2 sm:p-3 rounded-full text-gold-500 flex-shrink-0"
                  variants={iconVariants}
                  whileHover={{
                    rotate: [0, -10, 10, -10, 0],
                    transition: { duration: 0.5 },
                  }}
                >
                  {service.icon}
                </motion.div>
                <div>
                  <h3 className="font-semibold text-base sm:text-lg text-royal-900 mb-1 sm:mb-2">{service.title}</h3>
                  <p className="text-royal-900/70 text-xs sm:text-sm">{service.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Locations with enhanced animations */}
        <motion.div
          className="mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="text-center mb-6 sm:mb-10 relative">
            <motion.div
              className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-gold-500/20"
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1, rotate: [0, 5, 0, -5, 0] } : { scale: 0 }}
              transition={{ duration: 1.5, delay: 0.2 }}
            >
              <Award className="h-8 w-8 sm:h-12 sm:w-12" />
            </motion.div>

            <motion.div
              className="relative inline-block"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h3
                className="text-2xl sm:text-3xl font-bold text-royal-900 mb-2 relative z-10 tracking-wide"
                animate={
                  isInView
                    ? {
                        textShadow: [
                          "0px 0px 0px rgba(212,175,55,0)",
                          "0px 0px 10px rgba(212,175,55,0.3)",
                          "0px 0px 0px rgba(212,175,55,0)",
                        ],
                      }
                    : {}
                }
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
              >
                <span className="text-gold-500">Our</span> Locations
              </motion.h3>
              <motion.div
                className="h-1 w-0 bg-gold-gradient mx-auto rounded-full"
                initial={{ width: 0 }}
                animate={isInView ? { width: "80%" } : { width: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
              />
            </motion.div>

            <motion.p
              className="text-royal-900/70 mt-3 sm:mt-4 max-w-2xl mx-auto text-xs sm:text-sm italic"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              Visit us at any of our elegant venues across Karnataka to plan your perfect celebration
            </motion.p>
          </div>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {locations.map((location, index) => (
              <motion.div
                key={location.id}
                className="bg-white p-4 sm:p-6 rounded-xl shadow-md gold-border"
                variants={itemVariants}
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 10px 25px -5px rgba(212, 175, 55, 0.2)",
                  transition: { duration: 0.2 },
                }}
                custom={index}
              >
                <h4 className="font-semibold text-base sm:text-lg text-royal-900 mb-1 sm:mb-2">{location.name}</h4>
                <p className="text-royal-900/70 text-xs sm:text-sm">{location.address}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* SEO Meta Information (hidden visually but available for search engines) */}
        <div className="sr-only">
          <h2>Wedding Planners in Mysore, Mandya, Maddur, Malavalli, Bharathi Nagar</h2>
          <p>
            Shubhamasthu Events offers professional wedding planning services across Mysore, Mandya, Maddur, Malavalli,
            and Bharathi Nagar, including destination weddings, decor, catering, and entertainment.
          </p>
        </div>
      </div>
    </section>
  )
}
