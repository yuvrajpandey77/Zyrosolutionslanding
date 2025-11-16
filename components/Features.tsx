'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function Features() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const features = [
    {
      title: 'Natural Conversations',
      description: 'Our AI understands context and responds naturally, making every interaction feel human.',
      icon: '💬',
    },
    {
      title: 'Multi-Language Support',
      description: 'Serve customers in multiple languages with automatic language detection and translation.',
      icon: '🌐',
    },
    {
      title: 'Smart Scheduling',
      description: 'Intelligent calendar management that avoids conflicts and optimizes your schedule.',
      icon: '📅',
    },
    {
      title: 'Real-Time Analytics',
      description: 'Track performance metrics, call quality, and customer satisfaction in real-time.',
      icon: '📊',
    },
    {
      title: 'Custom Branding',
      description: 'Personalize your AI receptionist with your brand voice and business-specific knowledge.',
      icon: '🎨',
    },
    {
      title: 'Enterprise Security',
      description: 'Bank-level encryption and compliance with industry standards for data protection.',
      icon: '🔒',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section className="section-padding bg-white" ref={ref} id="features">
      <div className="container-custom">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Powerful Features
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to transform your customer communication
          </p>
        </motion.div>
        
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="card card-hover bg-white"
              variants={itemVariants}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.2 }}
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                {feature.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

