'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Hero() {
  const [showVideo, setShowVideo] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  const dashboardVariants = {
    hidden: { opacity: 0, scale: 0.95, x: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
        delay: 0.3,
      },
    },
  }

  return (
    <section className="section-padding bg-white overflow-hidden" id="hero">
      <div className="container-custom">
        <motion.div
          className="grid lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate={mounted ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="max-w-2xl">
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
              style={{ color: '#0F172A' }}
              initial={{ opacity: 0, y: 20 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Never miss another customer call.
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl mb-8 leading-relaxed"
              style={{ color: '#475569' }}
              initial={{ opacity: 0, y: 20 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Zyro Solutions gives your business a 24/7 AI receptionist that answers calls, responds to texts, and books appointments directly into your calendar—so you stop losing money every time you can't pick up the phone.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <motion.a
                href="/demo"
                className="btn-primary text-center"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Book Demo
              </motion.a>
              <motion.button
                onClick={() => setShowVideo(true)}
                className="btn-secondary text-center"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Watch Demo
              </motion.button>
            </motion.div>
          </motion.div>
          
          <motion.div
            className="relative"
            variants={dashboardVariants}
          >
            <motion.div
              className="relative bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden"
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.3 }}
              style={{
                boxShadow: '0 20px 60px -15px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(0, 0, 0, 0.05)',
              }}
            >
              {/* Gradient accent bar */}
              <div className="h-1 bg-gradient-to-r from-pink-500 via-red-500 to-pink-500"></div>
              
              <div className="p-6">
                {/* Header */}
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-200">
                  <div className="flex items-center gap-3">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-pink-500"></div>
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-gray-900">AI Receptionist</h3>
                      <p className="text-xs text-gray-500">Live Dashboard</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1.5 bg-pink-50 rounded-full">
                    <div className="w-2 h-2 rounded-full bg-pink-500 animate-pulse"></div>
                    <span className="text-xs font-semibold text-pink-600">Active</span>
                  </div>
                </div>
                
                {/* Metrics */}
                <div className="space-y-4">
                  <motion.div
                    className="relative bg-gradient-to-br from-pink-50 to-red-50 rounded-xl p-5 border border-pink-100/50"
                    initial={{ opacity: 0, x: -20 }}
                    animate={mounted ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.8, duration: 0.5 }}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">Calls Answered</p>
                        <p className="text-xs text-gray-400">Today</p>
                      </div>
                      <motion.div
                        className="text-right"
                        initial={{ scale: 0 }}
                        animate={mounted ? { scale: 1 } : {}}
                        transition={{ delay: 1, type: "spring", stiffness: 200 }}
                      >
                        <span className="text-3xl font-bold text-gray-900">47</span>
                        <span className="text-xs text-pink-600 font-semibold ml-1">+12%</span>
                      </motion.div>
                    </div>
                    <div className="h-2 bg-white/60 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-pink-500 to-red-500 rounded-full"
                        initial={{ width: 0 }}
                        animate={mounted ? { width: '78%' } : {}}
                        transition={{ delay: 1.2, duration: 1, ease: "easeOut" }}
                      />
                    </div>
                  </motion.div>
                  
                  <motion.div
                    className="relative bg-gradient-to-br from-yellow-50 to-pink-50 rounded-xl p-5 border border-yellow-100/50"
                    initial={{ opacity: 0, x: -20 }}
                    animate={mounted ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 1, duration: 0.5 }}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">Appointments</p>
                        <p className="text-xs text-gray-400">Booked</p>
                      </div>
                      <motion.div
                        className="text-right"
                        initial={{ scale: 0 }}
                        animate={mounted ? { scale: 1 } : {}}
                        transition={{ delay: 1.2, type: "spring", stiffness: 200 }}
                      >
                        <span className="text-3xl font-bold text-gray-900">23</span>
                        <span className="text-xs text-pink-600 font-semibold ml-1">+8%</span>
                      </motion.div>
                    </div>
                    <div className="h-2 bg-white/60 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-yellow-400 to-pink-500 rounded-full"
                        initial={{ width: 0 }}
                        animate={mounted ? { width: '65%' } : {}}
                        transition={{ delay: 1.4, duration: 1, ease: "easeOut" }}
                      />
                    </div>
                  </motion.div>
                  
                  <motion.div
                    className="relative bg-gradient-to-br from-pink-50 to-white rounded-xl p-5 border-2 border-pink-200/50"
                    initial={{ opacity: 0, x: -20 }}
                    animate={mounted ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 1.2, duration: 0.5 }}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">Status</p>
                        <p className="text-xs text-gray-400">Current Activity</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="flex gap-1 items-end h-6">
                          {[0, 1, 2, 3, 4].map((i) => (
                            <motion.div
                              key={i}
                              className="w-1 bg-gradient-to-t from-pink-500 to-red-500 rounded-full"
                              style={{ height: `${0.75 + i * 0.25}rem` }}
                              animate={{
                                scaleY: [1, 1.8, 1],
                              }}
                              transition={{
                                duration: 0.6,
                                repeat: Infinity,
                                delay: i * 0.1,
                                ease: "easeInOut",
                              }}
                            />
                          ))}
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-bold text-pink-600">Answering</p>
                          <p className="text-xs text-gray-400">Call #1247</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
      
      <AnimatePresence>
        {showVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setShowVideo(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-xl p-8 max-w-4xl w-full relative shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.button
                onClick={() => setShowVideo(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </motion.button>
              <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center border border-gray-200">
                <p className="text-gray-600">Video placeholder - Replace with actual video embed</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

