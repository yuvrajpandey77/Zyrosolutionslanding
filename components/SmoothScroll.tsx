'use client'

import { useEffect } from 'react'

export default function SmoothScroll() {
  useEffect(() => {
    // Smooth scroll for anchor links
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const anchor = target.closest('a[href^="#"]') as HTMLAnchorElement
      
      if (anchor) {
        const href = anchor.getAttribute('href')
        if (href && href !== '#' && href.startsWith('#')) {
          e.preventDefault()
          const targetElement = document.querySelector(href)
          if (targetElement) {
            targetElement.scrollIntoView({
              behavior: 'smooth',
              block: 'start',
            })
          }
        }
      }
    }

    // Smooth scroll for programmatic navigation
    const handleSmoothScroll = () => {
      document.documentElement.style.scrollBehavior = 'smooth'
    }

    document.addEventListener('click', handleClick)
    handleSmoothScroll()

    return () => {
      document.removeEventListener('click', handleClick)
    }
  }, [])

  return null
}

