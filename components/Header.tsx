'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

export default function Header() {
  const [mounted, setMounted] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

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

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/demo', label: 'Demo' },
  ]

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/80 backdrop-blur-md' : ''}`}>
      <nav className="container-custom max-w-full px-4 sm:px-6 lg:px-8 pt-6 pb-4">
        <div className="flex items-center justify-between relative">
          {/* Left: Navigation Links */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8 flex-1">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: -20 }}
                animate={mounted ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                {link.href === '/' ? (
                <Link
                  href={link.href}
                    className={`relative text-base font-medium transition-colors duration-200 cursor-pointer hover:text-white ${
                    pathname === link.href
                      ? 'text-white'
                        : 'text-gray-400'
                  }`}
                >
                  {link.label}
                  {pathname === link.href && (
                    <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-[#6366F1] to-[#22D3EE]"
                      layoutId="activeTab"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
                ) : (
                  <span
                    className={`relative text-base font-medium transition-colors duration-200 cursor-default ${
                      pathname === link.href
                        ? 'text-white'
                        : 'text-gray-400'
                    }`}
                  >
                    {link.label}
                    {pathname === link.href && (
                      <motion.div
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-[#6366F1] to-[#22D3EE]"
                        layoutId="activeTab"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </span>
                )}
              </motion.div>
            ))}
          </div>

          {/* Middle: Logo */}
          <motion.div
            className="absolute left-[calc(50%-2rem)] flex items-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={mounted ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link href="/" className="flex items-center justify-center group cursor-pointer">
              <motion.div
                className="relative h-28 w-auto"
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              >
                <Image
                  src="/image copy.png"
                  alt="Zyro Solutions Logo"
                  width={280}
                  height={112}
                  className="object-contain h-28 w-auto"
                  priority
                />
              </motion.div>
            </Link>
          </motion.div>

          {/* Right: CTA Button */}
          <div className="flex-1 flex justify-end">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={mounted ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
            <motion.span
              className="relative inline-block overflow-hidden rounded-full"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/demo"
                className="inline-flex rounded-full text-center group items-center justify-center bg-white text-black border-input border-[1px] hover:bg-gray-100 transition-all py-2 px-5 text-sm font-semibold shadow-lg"
              >
                Book a free demo call
              </Link>
            </motion.span>
            </motion.div>
          </div>
        </div>
      </nav>
    </header>
  )
}

