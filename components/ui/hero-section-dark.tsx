'use client'

import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { SplineScene } from "@/components/ui/splite"
import { Card } from "@/components/ui/card"
import { Spotlight } from "@/components/ui/spotlight"

interface HeroSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string
  subtitle?: {
    regular: string
    gradient: string
  }
  description?: string
  ctaText?: string
  ctaHref?: string
  bottomImage?: {
    light: string
    dark: string
  }
  gridOptions?: {
    angle?: number
    cellSize?: number
    opacity?: number
    lightLineColor?: string
    darkLineColor?: string
  }
}

export const RetroGrid = ({
  angle = 65,
  cellSize = 60,
  opacity = 0.5,
  lightLineColor = "gray",
  darkLineColor = "gray",
}) => {
  const gridStyles = {
    "--grid-angle": `${angle}deg`,
    "--cell-size": `${cellSize}px`,
    "--opacity": opacity,
    "--light-line": lightLineColor,
    "--dark-line": darkLineColor,
  } as React.CSSProperties

  return (
    <div
      className={cn(
        "pointer-events-none absolute size-full overflow-hidden [perspective:200px]",
        `opacity-[var(--opacity)]`,
      )}
      style={gridStyles}
    >
      <div className="absolute inset-0 [transform:rotateX(var(--grid-angle))]">
        <div className="animate-grid [background-image:linear-gradient(to_right,var(--light-line)_1px,transparent_0),linear-gradient(to_bottom,var(--light-line)_1px,transparent_0)] [background-repeat:repeat] [background-size:var(--cell-size)_var(--cell-size)] [height:300vh] [inset:0%_0px] [margin-left:-200%] [transform-origin:100%_0_0] [width:600vw] dark:[background-image:linear-gradient(to_right,var(--dark-line)_1px,transparent_0),linear-gradient(to_bottom,var(--dark-line)_1px,transparent_0)]" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent to-90% dark:from-black" />
    </div>
  )
}

const HeroSection = React.forwardRef<HTMLDivElement, HeroSectionProps>(
  (
    {
      className,
      title = "Build products for everyone",
      subtitle = {
        regular: "Designing your projects faster with ",
        gradient: "the largest figma UI kit.",
      },
      description = "Sed ut perspiciatis unde omnis iste natus voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.",
      ctaText = "Browse courses",
      ctaHref = "#",
      bottomImage = {
        light: "https://farmui.vercel.app/dashboard-light.png",
        dark: "https://farmui.vercel.app/dashboard.png",
      },
      gridOptions,
      ...props
    },
    ref,
  ) => {
    const [mounted, setMounted] = React.useState(false)

    React.useEffect(() => {
      setMounted(true)
    }, [])

    const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.15,
          delayChildren: 0.2,
        },
      },
    }

    const itemVariants = {
      hidden: { opacity: 0, y: 30 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        },
      },
    }

    return (
      <div className={cn("relative", className)} ref={ref} {...props}>
        <motion.div 
          className="absolute top-0 z-[0] h-screen w-screen bg-[radial-gradient(ellipse_20%_80%_at_50%_-20%,rgba(99,102,241,0.3),rgba(34,211,238,0.2),rgba(255,255,255,0))]"
          initial={{ opacity: 0 }}
          animate={mounted ? { opacity: 1 } : {}}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
        <section className="relative max-w-full mx-auto z-1">
          <RetroGrid {...gridOptions} />
          <div className="max-w-screen-xl z-10 mx-auto px-1 sm:px-4 md:px-8 pt-24 md:pt-20 pb-4 md:pb-8 gap-12 flex flex-col items-center justify-center min-h-screen">
            <motion.div 
              className="space-y-4 md:space-y-6 w-full mx-auto text-center"
              variants={containerVariants}
              initial="hidden"
              animate={mounted ? "visible" : "hidden"}
            >
              <motion.h1 
                className="text-xl sm:text-2xl md:text-6xl tracking-tight font-geist bg-clip-text text-transparent mx-auto whitespace-nowrap bg-[linear-gradient(180deg,_#000_0%,_rgba(0,_0,_0,_0.75)_100%)] dark:bg-[linear-gradient(180deg,_#FFF_0%,_rgba(255,_255,_255,_0.00)_202.08%)] leading-tight"
                variants={itemVariants}
              >
                {title}
              </motion.h1>
              <motion.p 
                className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300 px-2"
                variants={itemVariants}
              >
                {description}
              </motion.p>
              <motion.div 
                className="flex items-center justify-center gap-1.5 sm:gap-2 md:gap-4 max-w-4xl mx-auto px-2 sm:px-4"
                variants={itemVariants}
              >
                <span className="text-[10px] sm:text-xs md:text-sm text-gray-300 dark:text-gray-300 whitespace-nowrap flex items-center flex-shrink-0 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-2 sm:px-2.5 md:px-3 py-0.5 sm:py-1 md:py-1.5">
                  24/7 AI receptionist — voice + SMS
                </span>
                <span className="text-[10px] sm:text-xs md:text-sm text-gray-300 dark:text-gray-300 whitespace-nowrap flex items-center flex-shrink-0 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-2 sm:px-2.5 md:px-3 py-0.5 sm:py-1 md:py-1.5">
                  No missed calls, no missed bookings
                </span>
                <span className="text-[10px] sm:text-xs md:text-sm text-gray-300 dark:text-gray-300 whitespace-nowrap flex items-center flex-shrink-0 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-2 sm:px-2.5 md:px-3 py-0.5 sm:py-1 md:py-1.5">
                  Integrates with your existing calendar
                </span>
              </motion.div>
              <motion.div 
                className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 md:gap-4 w-full sm:w-auto px-4 sm:px-0"
                variants={itemVariants}
              >
                {/* Primary Button - White */}
                <a
                  href={ctaHref}
                  className="inline-flex items-center justify-center rounded-full bg-white text-black font-semibold px-6 md:px-10 py-3 md:py-4 hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl text-sm md:text-base w-full sm:w-auto sm:min-w-[200px]"
                >
                  Book a demo
                </a>
                {/* Secondary Button - Transparent with white border */}
                <a
                  href={ctaHref}
                  className="inline-flex items-center justify-center rounded-full bg-transparent text-white font-semibold px-6 md:px-10 py-3 md:py-4 border-2 border-white/50 hover:border-white hover:bg-white/10 transition-all duration-300 text-sm md:text-base w-full sm:w-auto sm:min-w-[200px]"
                >
                  Watch demo
                </a>
              </motion.div>
            </motion.div>
            {/* Comparison and 3D Bot Section */}
            <motion.div 
              className="mt-4 md:mt-8 w-full max-w-7xl mx-auto px-4 md:px-8 relative z-10"
              initial={{ opacity: 0, y: 50 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="grid md:grid-cols-2 gap-4 md:gap-8 lg:gap-12 items-start md:items-center border border-white/10 rounded-xl md:rounded-2xl p-4 md:p-6 lg:p-8 bg-black/20 backdrop-blur-sm">
                {/* Left: Comparison Section */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={mounted ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: 1 }}
                  className="space-y-4 md:space-y-6"
                >
                  <div>
                    <h3 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6 bg-clip-text text-transparent bg-[linear-gradient(180deg,_#FFF_0%,_rgba(255,_255,_255,_0.80)_100%)]">
                      Before vs After
                    </h3>
                  </div>
                  
                  {/* Side-by-side Comparison */}
                  <div className="grid grid-cols-2 gap-1.5 sm:gap-2 md:gap-4">
                    {/* Before Column */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={mounted ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.6, delay: 1.2 }}
                      className="space-y-2 sm:space-y-3 md:space-y-4"
                    >
                      <div className="mb-2 sm:mb-3 md:mb-4">
                        <h4 className="text-xs sm:text-sm md:text-base font-semibold mb-1 sm:mb-2 text-gray-300">Before Zyro</h4>
                      </div>
                      
                      {/* Metric 1 */}
                      <Card className="border border-white/10 rounded-lg md:rounded-xl p-2 sm:p-3 md:p-4 bg-black/40 backdrop-blur-sm hover:border-white/20 transition-all">
                        <div className="space-y-0.5 sm:space-y-1 md:space-y-2">
                          <span className="text-[10px] sm:text-xs text-gray-500 block">Missed calls</span>
                          <div className="flex items-baseline gap-0.5 sm:gap-1 md:gap-2">
                            <span className="text-lg sm:text-xl md:text-2xl font-bold text-white">23</span>
                            <span className="text-[10px] sm:text-xs text-gray-500">/week</span>
                          </div>
                        </div>
                      </Card>

                      {/* Metric 2 */}
                      <Card className="border border-white/10 rounded-lg md:rounded-xl p-2 sm:p-3 md:p-4 bg-black/40 backdrop-blur-sm hover:border-white/20 transition-all">
                        <div className="space-y-0.5 sm:space-y-1 md:space-y-2">
                          <span className="text-[10px] sm:text-xs text-gray-500 block">Response time</span>
                          <div className="flex items-baseline gap-0.5 sm:gap-1 md:gap-2">
                            <span className="text-lg sm:text-xl md:text-2xl font-bold text-white">4.2</span>
                            <span className="text-[10px] sm:text-xs text-gray-500">hours</span>
                          </div>
                        </div>
                      </Card>

                      {/* Metric 3 */}
                      <Card className="border border-white/10 rounded-lg md:rounded-xl p-2 sm:p-3 md:p-4 bg-black/40 backdrop-blur-sm hover:border-white/20 transition-all">
                        <div className="space-y-0.5 sm:space-y-1 md:space-y-2">
                          <span className="text-[10px] sm:text-xs text-gray-500 block">Conversion rate</span>
                          <div className="flex items-baseline gap-0.5 sm:gap-1 md:gap-2">
                            <span className="text-lg sm:text-xl md:text-2xl font-bold text-white">12%</span>
                          </div>
                        </div>
                      </Card>
                    </motion.div>

                    {/* After Column */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={mounted ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.6, delay: 1.4 }}
                      className="space-y-2 sm:space-y-3 md:space-y-4"
                    >
                      <div className="mb-2 sm:mb-3 md:mb-4">
                        <h4 className="text-xs sm:text-sm md:text-base font-semibold mb-1 sm:mb-2 text-white">After Zyro</h4>
                      </div>
                      
                      {/* Metric 1 */}
                      <Card className="border border-white/20 rounded-lg md:rounded-xl p-2 sm:p-3 md:p-4 bg-white hover:border-white/40 transition-all shadow-lg">
                        <div className="space-y-0.5 sm:space-y-1 md:space-y-2">
                          <span className="text-[10px] sm:text-xs text-gray-600 block">Booked appointments</span>
                          <div className="flex items-baseline gap-0.5 sm:gap-1 md:gap-2">
                            <span className="text-lg sm:text-xl md:text-2xl font-bold text-black">47</span>
                            <span className="text-[10px] sm:text-xs text-gray-600">/week</span>
                          </div>
                        </div>
                      </Card>

                      {/* Metric 2 */}
                      <Card className="border border-white/20 rounded-lg md:rounded-xl p-2 sm:p-3 md:p-4 bg-white hover:border-white/40 transition-all shadow-lg">
                        <div className="space-y-0.5 sm:space-y-1 md:space-y-2">
                          <span className="text-[10px] sm:text-xs text-gray-600 block">Response time</span>
                          <div className="flex items-baseline gap-0.5 sm:gap-1 md:gap-2">
                            <span className="text-lg sm:text-xl md:text-2xl font-bold text-black">&lt;30s</span>
                          </div>
                        </div>
                      </Card>

                      {/* Metric 3 */}
                      <Card className="border border-white/20 rounded-lg md:rounded-xl p-2 sm:p-3 md:p-4 bg-white hover:border-white/40 transition-all shadow-lg">
                        <div className="space-y-0.5 sm:space-y-1 md:space-y-2">
                          <span className="text-[10px] sm:text-xs text-gray-600 block">Conversion rate</span>
                          <div className="flex items-baseline gap-0.5 sm:gap-1 md:gap-2">
                            <span className="text-lg sm:text-xl md:text-2xl font-bold text-black">34%</span>
                          </div>
                        </div>
                      </Card>
                    </motion.div>
                  </div>
                </motion.div>

                {/* Right: 3D Bot Animation */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={mounted ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: 1 }}
                  className="relative mt-4 sm:mt-6 md:mt-0"
                >
                  <Card className="w-full h-[250px] sm:h-[300px] md:h-[500px] bg-black/[0.96] relative overflow-hidden border-0 rounded-lg md:rounded-xl">
                    <div className="relative h-full">
                      <SplineScene 
                        scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                        className="w-full h-full"
                      />
                    </div>
                  </Card>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    )
  },
)

HeroSection.displayName = "HeroSection"

export { HeroSection }

