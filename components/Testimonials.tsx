'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const testimonials = [
    {
      quote: "We stopped missing calls and filled our schedule within two weeks. The AI receptionist handles everything perfectly.",
      business: "Elite Auto Detailing",
      name: "Mike Chen",
      initials: "MC",
    },
    {
      quote: "Our response time went from hours to instant. Customers love the immediate attention, and we love the bookings.",
      business: "GreenScape Lawn Care",
      name: "Sarah Johnson",
      initials: "SJ",
    },
    {
      quote: "Best investment we've made. The AI handles after-hours calls and books appointments directly into our calendar.",
      business: "Premier Home Services",
      name: "David Martinez",
      initials: "DM",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  return (
    <section className="section-padding bg-white" ref={ref} id="testimonials">
      <div className="container-custom">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Trusted by growing businesses
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See what our clients say about their results
          </p>
        </motion.div>
        
        <motion.div
          className="grid md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="card card-hover bg-white"
              variants={itemVariants}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.2 }}
            >
              <motion.p
                className="text-gray-700 mb-6 leading-relaxed text-lg"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.3 + index * 0.15 }}
              >
                "{testimonial.quote}"
              </motion.p>
              <div className="flex items-center gap-4">
                <motion.div
                  className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-white font-semibold"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ delay: 0.4 + index * 0.15, type: "spring", stiffness: 200 }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  {testimonial.initials}
                </motion.div>
                <div>
                  <p className="text-gray-900 font-semibold">
                    {testimonial.name}
                  </p>
                  <p className="text-gray-600 text-sm">
                    {testimonial.business}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

