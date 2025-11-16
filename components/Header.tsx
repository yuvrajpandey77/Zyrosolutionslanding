'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  const [mounted, setMounted] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="container-custom max-w-full px-4 sm:px-6 lg:px-8 pt-6">
        <div className="flex items-center">
          {/* Logo */}
          <AnimatePresence>
            {!isScrolled && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                <Link href="/" className="flex items-center group">
                  <motion.div
                    className="relative w-16 h-16"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={mounted ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <Image
                      src="/image.png"
                      alt="Zyro Solutions Logo"
                      width={64}
                      height={64}
                      className="object-contain"
                      priority
                    />
                  </motion.div>
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>
    </header>
  )
}

