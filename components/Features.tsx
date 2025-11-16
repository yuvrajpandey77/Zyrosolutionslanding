'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { MessageSquare, Globe, Calendar, BarChart3, Palette, Shield } from 'lucide-react'

export default function Features() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const features = [
    {
      title: 'Natural Conversations',
      description: 'Our AI understands context and responds naturally, making every interaction feel human.',
      icon: MessageSquare,
    },
    {
      title: 'Multi-Language Support',
      description: 'Serve customers in multiple languages with automatic language detection and translation.',
      icon: Globe,
    },
    {
      title: 'Smart Scheduling',
      description: 'Intelligent calendar management that avoids conflicts and optimizes your schedule.',
      icon: Calendar,
    },
    {
      title: 'Real-Time Analytics',
      description: 'Track performance metrics, call quality, and customer satisfaction in real-time.',
      icon: BarChart3,
    },
    {
      title: 'Custom Branding',
      description: 'Personalize your AI receptionist with your brand voice and business-specific knowledge.',
      icon: Palette,
    },
    {
      title: 'Enterprise Security',
      description: 'Bank-level encryption and compliance with industry standards for data protection.',
      icon: Shield,
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
    <section className="section-padding" ref={ref} id="features" style={{ backgroundColor: '#000000' }}>
      <div className="container-custom">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-[linear-gradient(180deg,_#FFF_0%,_rgba(255,_255,_255,_0.80)_100%)] leading-tight pb-2" style={{ lineHeight: '1.1' }}>
            Powerful Features
          </h2>
          <p className="text-xl max-w-2xl mx-auto mb-4 bg-clip-text text-transparent bg-[linear-gradient(180deg,_#FFF_0%,_rgba(255,_255,_255,_0.60)_100%)]">
            Everything you need to transform your customer communication
          </p>
          <p className="text-lg max-w-2xl mx-auto italic bg-clip-text text-transparent bg-gradient-to-r from-[#6366F1] to-[#22D3EE]">
            24/7 voice & SMS agents for service businesses.
          </p>
        </motion.div>
        
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <motion.div
                key={index}
                className="card card-hover"
                variants={itemVariants}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.2 }}
                style={{ backgroundColor: '#0A0A0A', borderColor: 'rgba(255, 255, 255, 0.1)', padding: '2rem', boxShadow: '0 0 20px rgba(99, 102, 241, 0.1)' }}
              >
                <div className="mb-5 flex items-center justify-center w-14 h-14 rounded-xl" style={{ backgroundColor: 'rgba(99, 102, 241, 0.1)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                  <IconComponent className="w-7 h-7" style={{ color: '#6366F1' }} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-semibold mb-3 bg-clip-text text-transparent bg-[linear-gradient(180deg,_#FFF_0%,_rgba(255,_255,_255,_0.80)_100%)]">
                  {feature.title}
                </h3>
                <p className="leading-relaxed bg-clip-text text-transparent bg-[linear-gradient(180deg,_rgba(255,_255,_255,_0.80)_0%,_rgba(156,_163,_175,_0.80)_100%)]">
                  {feature.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

