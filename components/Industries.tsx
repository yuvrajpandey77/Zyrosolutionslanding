'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function Industries() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const industries = [
    { name: 'Auto Detailers', icon: '🚗' },
    { name: 'Lawn Care', icon: '🌱' },
    { name: 'Home Services', icon: '🏠' },
    { name: 'Med Spas', icon: '💆' },
    { name: 'Cleaning Businesses', icon: '🧹' },
    { name: 'Real Estate Teams', icon: '🏘️' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  return (
    <section className="section-padding bg-white" ref={ref} id="industries">
      <div className="container-custom">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Built for service businesses
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Industries we serve with proven results
          </p>
        </motion.div>
        
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              className="card border border-white/10 cursor-pointer group bg-white"
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -4, borderColor: 'rgba(236, 72, 153, 0.3)' }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-center gap-4">
                <motion.span
                  className="text-3xl"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {industry.icon}
                </motion.span>
                <h3 className="text-lg font-semibold text-gray-900">
                  {industry.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

