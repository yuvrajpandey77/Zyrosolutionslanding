'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const services = [
    {
      title: 'AI Phone Receptionist',
      description: 'Answers inbound calls 24/7. Greets callers naturally, understands intent, answers FAQs, and books appointments directly into Google Calendar/Calendly/etc.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
    },
    {
      title: 'AI SMS & Follow-Up',
      description: 'Responds to missed calls via text automatically. Handles common questions over SMS and follows up with leads who didn\'t book on the first call.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
    },
    {
      title: 'Custom Call Flows & Scripting',
      description: 'Tailored scripts for each niche (auto detailing, lawn care, etc.). After-hours behavior, escalation rules, and human hand-off when needed.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      ),
    },
    {
      title: 'Calendar & Tool Integration',
      description: 'Connects to the client\'s calendar. Optional integration to CRM or Google Sheets for lead tracking.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: 'Done-For-You Setup & Optimization',
      description: 'We gather info about the business. Build, test, and tweak the AI receptionist. Ongoing optimization based on real call recordings and performance.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
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
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  return (
    <section className="section-padding" ref={ref} id="services" style={{ backgroundColor: '#000000' }}>
      <div className="container-custom">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-[linear-gradient(180deg,_#FFF_0%,_rgba(255,_255,_255,_0.80)_100%)] leading-tight pb-2" style={{ lineHeight: '1.1' }}>
            Everything you need to never miss a call
          </h2>
          <p className="text-xl max-w-2xl mx-auto mb-4 bg-clip-text text-transparent bg-[linear-gradient(180deg,_#FFF_0%,_rgba(255,_255,_255,_0.60)_100%)]">
            Comprehensive AI receptionist services designed for service businesses
          </p>
          <p className="text-lg max-w-2xl mx-auto italic bg-clip-text text-transparent bg-gradient-to-r from-[#6366F1] to-[#22D3EE]">
            AI receptionists that book your next customer.
          </p>
        </motion.div>
        
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="card card-hover cursor-pointer group"
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              whileTap={{ scale: 0.98 }}
              style={{ backgroundColor: '#0A0A0A', borderColor: 'rgba(255, 255, 255, 0.1)', padding: '2rem', boxShadow: '0 0 20px rgba(99, 102, 241, 0.1)' }}
            >
              <motion.div
                className="mb-5 flex items-center justify-center w-14 h-14 rounded-xl"
                style={{ backgroundColor: 'rgba(99, 102, 241, 0.1)', border: '1px solid rgba(255, 255, 255, 0.1)' }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div style={{ color: '#6366F1' }}>
                  {service.icon}
                </div>
              </motion.div>
              <h3 className="text-xl font-semibold mb-3 bg-clip-text text-transparent bg-[linear-gradient(180deg,_#FFF_0%,_rgba(255,_255,_255,_0.80)_100%)]">
                {service.title}
              </h3>
              <p className="leading-relaxed bg-clip-text text-transparent bg-[linear-gradient(180deg,_rgba(255,_255,_255,_0.80)_0%,_rgba(156,_163,_175,_0.80)_100%)]">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

