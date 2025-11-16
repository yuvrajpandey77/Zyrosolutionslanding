'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Car, Sprout, Home, Sparkles, Wand2, Building2 } from 'lucide-react'

export default function Industries() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const industries = [
    { name: 'Auto Detailers', icon: Car },
    { name: 'Lawn Care', icon: Sprout },
    { name: 'Home Services', icon: Home },
    { name: 'Med Spas', icon: Sparkles },
    { name: 'Cleaning Businesses', icon: Wand2 },
    { name: 'Real Estate Teams', icon: Building2 },
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
    <section className="section-padding" ref={ref} id="industries" style={{ backgroundColor: '#000000' }}>
      <div className="container-custom">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-[linear-gradient(180deg,_#FFF_0%,_rgba(255,_255,_255,_0.80)_100%)] leading-tight pb-2" style={{ lineHeight: '1.1' }}>
            Built for service businesses
          </h2>
          <p className="text-xl max-w-2xl mx-auto bg-clip-text text-transparent bg-[linear-gradient(180deg,_#FFF_0%,_rgba(255,_255,_255,_0.60)_100%)]">
            Industries we serve with proven results
          </p>
        </motion.div>
        
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {industries.map((industry, index) => {
            const IconComponent = industry.icon
            return (
              <motion.div
                key={index}
                className="card border cursor-pointer group"
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -4 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
                style={{ backgroundColor: '#0A0A0A', borderColor: 'rgba(255, 255, 255, 0.1)', padding: '1.5rem', boxShadow: '0 0 15px rgba(99, 102, 241, 0.1)' }}
              >
                <div className="flex items-center gap-4">
                  <motion.div
                    className="flex items-center justify-center w-12 h-12 rounded-lg flex-shrink-0"
                    style={{ backgroundColor: 'rgba(99, 102, 241, 0.1)', border: '1px solid rgba(255, 255, 255, 0.1)' }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <IconComponent className="w-6 h-6" style={{ color: '#6366F1' }} strokeWidth={1.5} />
                  </motion.div>
                  <h3 className="text-lg font-semibold bg-clip-text text-transparent bg-[linear-gradient(180deg,_#FFF_0%,_rgba(255,_255,_255,_0.80)_100%)]">
                    {industry.name}
                  </h3>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

