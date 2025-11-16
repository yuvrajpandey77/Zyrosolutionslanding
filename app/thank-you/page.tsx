'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Header from '@/components/Header'

export default function ThankYouPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <main className="min-h-screen" style={{ backgroundColor: '#000000' }}>
      <Header />
      <div className="pt-20 section-padding flex items-center justify-center">
      <div className="container-custom max-w-2xl text-center">
        <motion.div
          className="card"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={mounted ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
          style={{ backgroundColor: '#0A0A0A', borderColor: 'rgba(255, 255, 255, 0.1)' }}
        >
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={mounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.div
              className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r from-[#6366F1] to-[#22D3EE] flex items-center justify-center"
              initial={{ scale: 0, rotate: -180 }}
              animate={mounted ? { scale: 1, rotate: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3, type: "spring", stiffness: 200 }}
            >
              <motion.svg
                className="w-10 h-10 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                initial={{ pathLength: 0 }}
                animate={mounted ? { pathLength: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </motion.svg>
            </motion.div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-[linear-gradient(180deg,_#FFF_0%,_rgba(255,_255,_255,_0.80)_100%)]">
              Thank you!
            </h1>
            <p className="text-xl mb-2 bg-clip-text text-transparent bg-[linear-gradient(180deg,_rgba(255,_255,_255,_0.80)_0%,_rgba(156,_163,_175,_0.80)_100%)]">
              We've received your request for a demo call.
            </p>
            <p className="text-lg bg-clip-text text-transparent bg-[linear-gradient(180deg,_rgba(255,_255,_255,_0.60)_0%,_rgba(156,_163,_175,_0.60)_100%)]">
              Our team will contact you within 24 hours to schedule your free demo.
            </p>
          </motion.div>
          
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={mounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/"
                className="btn-primary inline-block"
              >
                Return to Home
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
      </div>
    </main>
  )
}

