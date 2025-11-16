'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function CTABanner() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="section-padding" ref={ref} style={{ backgroundColor: '#000000', background: 'linear-gradient(135deg, #000000 0%, #0A0A1A 50%, #000A14 100%)' }}>
      <div className="container-custom">
        <motion.div
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-8 bg-clip-text text-transparent bg-[linear-gradient(180deg,_#FFF_0%,_rgba(255,_255,_255,_0.80)_100%)] leading-tight pb-2"
            style={{ lineHeight: '1.1' }}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Ready to eliminate missed calls forever?
          </motion.h2>
          <motion.span
            className="relative inline-block overflow-hidden rounded-full p-[1.5px]"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <div className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-black text-xs font-medium backdrop-blur-3xl">
              <a
                href="/demo"
                className="inline-flex rounded-full text-center group items-center w-full justify-center bg-gradient-to-tr from-zinc-300/20 via-purple-400/30 to-transparent dark:from-zinc-300/5 dark:via-purple-400/20 text-white border-input border-[1px] hover:bg-gradient-to-tr hover:from-zinc-300/30 hover:via-purple-400/40 hover:to-transparent dark:hover:from-zinc-300/10 dark:hover:via-purple-400/30 transition-all sm:w-auto py-4 px-10 font-semibold"
              >
                Book Demo
              </a>
            </div>
          </motion.span>
        </motion.div>
      </div>
    </section>
  )
}

