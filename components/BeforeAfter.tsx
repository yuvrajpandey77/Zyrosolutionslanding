'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function BeforeAfter() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const beforeMetrics = [
    { label: 'Missed calls per week', value: '23', trend: 'down' },
    { label: 'Average response time', value: '4.2 hrs', trend: 'down' },
    { label: 'Appointments booked', value: '12', trend: 'down' },
  ]

  const afterMetrics = [
    { label: 'Missed calls per week', value: '0', trend: 'up' },
    { label: 'Response time', value: 'Instant', trend: 'up' },
    { label: 'Appointments booked', value: '47', trend: 'up' },
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
    <section className="section-padding bg-pink-50/30" ref={ref}>
      <div className="container-custom">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            The difference is immediate
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
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
              <h3 className="text-2xl font-semibold text-gray-600 mb-2">Before</h3>
              <p className="text-gray-700">Missed calls, slow replies, lost revenue</p>
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
                  className="card bg-white border-2 border-gray-100"
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, x: 5 }}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">{metric.label}</span>
                    <div className="flex items-center gap-2">
                      <motion.span
                        className="text-2xl font-bold text-gray-900"
                        initial={{ scale: 0 }}
                        animate={isInView ? { scale: 1 } : {}}
                        transition={{ delay: 0.5 + index * 0.1, type: "spring", stiffness: 200 }}
                      >
                        {metric.value}
                      </motion.span>
                      <motion.svg
                        className="w-5 h-5 text-red-500"
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
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">After</h3>
              <p className="text-gray-700">24/7 coverage, instant response, more bookings</p>
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
                  className="card bg-white border-2 border-pink-200 bg-pink-50/30"
                  variants={afterItemVariants}
                  whileHover={{ scale: 1.02, x: -5, y: -4 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">{metric.label}</span>
                    <div className="flex items-center gap-2">
                      <motion.span
                        className="text-2xl font-bold text-pink-600"
                        initial={{ scale: 0 }}
                        animate={isInView ? { scale: 1 } : {}}
                        transition={{ delay: 0.5 + index * 0.1, type: "spring", stiffness: 200 }}
                      >
                        {metric.value}
                      </motion.span>
                      <motion.svg
                        className="w-5 h-5 text-pink-500"
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

