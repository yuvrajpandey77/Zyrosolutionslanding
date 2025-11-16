'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function BeforeAfter() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const beforeMetrics = [
    { label: 'Missed calls per week', value: '23', trend: 'down' },
  ]

  const afterMetrics = [
    { label: 'Booked appointments per week', value: '47', trend: 'up' },
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
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  const afterItemVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  return (
    <section className="section-padding" ref={ref} style={{ backgroundColor: '#000000' }}>
      <div className="container-custom">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-[linear-gradient(180deg,_#FFF_0%,_rgba(255,_255,_255,_0.80)_100%)] leading-tight pb-2" style={{ lineHeight: '1.1' }}>
            The difference is immediate
          </h2>
          <p className="text-xl max-w-2xl mx-auto bg-clip-text text-transparent bg-[linear-gradient(180deg,_#FFF_0%,_rgba(255,_255,_255,_0.60)_100%)]">
            See how businesses transform their customer communication
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Before */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="mb-6">
              <h3 className="text-2xl font-semibold mb-2 bg-clip-text text-transparent bg-[linear-gradient(180deg,_rgba(255,_255,_255,_0.60)_0%,_rgba(156,_163,_175,_0.60)_100%)]">Before Zyro</h3>
              <p className="bg-clip-text text-transparent bg-[linear-gradient(180deg,_rgba(255,_255,_255,_0.60)_0%,_rgba(156,_163,_175,_0.60)_100%)]">Missed calls, slow replies, lost revenue</p>
            </div>
            <motion.div
              className="space-y-4"
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              {beforeMetrics.map((metric, index) => (
                <motion.div
                  key={index}
                  className="card border-2"
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, x: 5 }}
                  style={{ backgroundColor: '#0A0A0A', borderColor: 'rgba(255, 255, 255, 0.1)', boxShadow: '0 0 15px rgba(99, 102, 241, 0.1)' }}
                >
                  <div className="flex items-center justify-between">
                    <span className="bg-clip-text text-transparent bg-[linear-gradient(180deg,_rgba(255,_255,_255,_0.60)_0%,_rgba(156,_163,_175,_0.60)_100%)]">{metric.label}</span>
                    <div className="flex items-center gap-2">
                      <motion.span
                        className="text-2xl font-bold bg-clip-text text-transparent bg-[linear-gradient(180deg,_#FFF_0%,_rgba(255,_255,_255,_0.80)_100%)]"
                        initial={{ scale: 0 }}
                        animate={isInView ? { scale: 1 } : {}}
                        transition={{ delay: 0.5 + index * 0.1, type: "spring", stiffness: 200 }}
                      >
                        {metric.value}
                      </motion.span>
                      <motion.svg
                        className="w-5 h-5"
                        style={{ color: '#F97316' }}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        animate={{ y: [0, -3, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, delay: index * 0.2 }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                      </motion.svg>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          
          {/* After */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="mb-6">
              <h3 className="text-2xl font-semibold mb-2 bg-clip-text text-transparent bg-[linear-gradient(180deg,_#FFF_0%,_rgba(255,_255,_255,_0.80)_100%)]">After Zyro</h3>
              <p className="bg-clip-text text-transparent bg-[linear-gradient(180deg,_rgba(255,_255,_255,_0.60)_0%,_rgba(156,_163,_175,_0.60)_100%)]">24/7 coverage, instant response, more bookings</p>
            </div>
            <motion.div
              className="space-y-4"
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              {afterMetrics.map((metric, index) => (
                <motion.div
                  key={index}
                  className="card border-2"
                  variants={afterItemVariants}
                  whileHover={{ scale: 1.02, x: -5, y: -4 }}
                  transition={{ duration: 0.2 }}
                  style={{ backgroundColor: '#0A0A0A', borderColor: 'rgba(255, 255, 255, 0.15)', background: 'linear-gradient(135deg, rgba(34, 211, 238, 0.15) 0%, rgba(99, 102, 241, 0.15) 100%)', boxShadow: '0 0 25px rgba(34, 211, 238, 0.2), 0 0 50px rgba(99, 102, 241, 0.15)' }}
                >
                  <div className="flex items-center justify-between">
                    <span className="bg-clip-text text-transparent bg-[linear-gradient(180deg,_rgba(255,_255,_255,_0.60)_0%,_rgba(156,_163,_175,_0.60)_100%)]">{metric.label}</span>
                    <div className="flex items-center gap-2">
                      <motion.span
                        className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#6366F1] to-[#22D3EE]"
                        initial={{ scale: 0 }}
                        animate={isInView ? { scale: 1 } : {}}
                        transition={{ delay: 0.5 + index * 0.1, type: "spring", stiffness: 200 }}
                      >
                        {metric.value}
                      </motion.span>
                      <motion.svg
                        className="w-5 h-5"
                        style={{ color: '#22D3EE' }}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        animate={{ y: [0, -3, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, delay: index * 0.2 }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                      </motion.svg>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

