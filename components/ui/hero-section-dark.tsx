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
          <div className="max-w-screen-xl z-10 mx-auto px-4 pt-20 pb-28 gap-12 md:px-8 flex flex-col items-center justify-center min-h-screen">
            <motion.div 
              className="space-y-6 max-w-3xl mx-auto text-center"
              variants={containerVariants}
              initial="hidden"
              animate={mounted ? "visible" : "hidden"}
            >
              <motion.h1 
                className="text-4xl tracking-tight font-geist bg-clip-text text-transparent mx-auto md:text-6xl px-4 whitespace-nowrap bg-[linear-gradient(180deg,_#000_0%,_rgba(0,_0,_0,_0.75)_100%)] dark:bg-[linear-gradient(180deg,_#FFF_0%,_rgba(255,_255,_255,_0.00)_202.08%)]"
                variants={itemVariants}
              >
                {title}
              </motion.h1>
              <motion.p 
                className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300"
                variants={itemVariants}
              >
                {description}
              </motion.p>
              <motion.div 
                className="flex items-center justify-center gap-6 flex-wrap max-w-4xl mx-auto"
                variants={itemVariants}
              >
                <span className="text-sm text-gray-400 dark:text-gray-400 whitespace-nowrap">24/7 AI receptionist — voice + SMS</span>
                <span className="text-sm text-gray-400 dark:text-gray-400 whitespace-nowrap">No missed calls, no missed bookings</span>
                <span className="text-sm text-gray-400 dark:text-gray-400 whitespace-nowrap">Integrates with your existing calendar</span>
              </motion.div>
              <motion.div 
                className="flex items-center justify-center gap-4 flex-wrap"
                variants={itemVariants}
              >
                {/* Primary Button - White */}
                <a
                  href={ctaHref}
                  className="inline-flex items-center justify-center rounded-full bg-white text-black font-semibold px-10 py-4 hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl text-base min-w-[200px]"
                >
                  Book a demo
                </a>
                {/* Secondary Button - Transparent with white border */}
                <a
                  href={ctaHref}
                  className="inline-flex items-center justify-center rounded-full bg-transparent text-white font-semibold px-10 py-4 border-2 border-white/50 hover:border-white hover:bg-white/10 transition-all duration-300 text-base min-w-[200px]"
                >
                  Watch demo
                </a>
              </motion.div>
            </motion.div>
            {/* Comparison and 3D Bot Section */}
            <motion.div 
              className="mt-20 w-full max-w-7xl mx-auto px-4 md:px-8 relative z-10"
              initial={{ opacity: 0, y: 50 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center border border-white/10 rounded-2xl p-6 lg:p-8 bg-black/20 backdrop-blur-sm">
                {/* Left: Comparison Section */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={mounted ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: 1 }}
                  className="space-y-6"
                >
                  <div>
                    <h3 className="text-2xl font-semibold mb-6 bg-clip-text text-transparent bg-[linear-gradient(180deg,_#FFF_0%,_rgba(255,_255,_255,_0.80)_100%)]">
                      Before vs After
                    </h3>
                  </div>
                  
                  {/* Side-by-side Comparison */}
                  <div className="grid grid-cols-2 gap-4">
                    {/* Before Column */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={mounted ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.6, delay: 1.2 }}
                      className="space-y-4"
                    >
                      <div className="mb-4">
                        <h4 className="text-base font-semibold mb-2 text-gray-400">Before Zyro</h4>
                      </div>
                      
                      {/* Metric 1 */}
                      <Card className="border border-white/10 rounded-xl p-4 bg-black/40 backdrop-blur-sm hover:border-white/20 transition-all">
                        <div className="space-y-2">
                          <span className="text-xs text-gray-500 block">Missed calls</span>
                          <div className="flex items-baseline gap-2">
                            <span className="text-2xl font-bold text-white">23</span>
                            <span className="text-xs text-gray-500">/week</span>
                          </div>
                        </div>
                      </Card>

                      {/* Metric 2 */}
                      <Card className="border border-white/10 rounded-xl p-4 bg-black/40 backdrop-blur-sm hover:border-white/20 transition-all">
                        <div className="space-y-2">
                          <span className="text-xs text-gray-500 block">Response time</span>
                          <div className="flex items-baseline gap-2">
                            <span className="text-2xl font-bold text-white">4.2</span>
                            <span className="text-xs text-gray-500">hours</span>
                          </div>
                        </div>
                      </Card>

                      {/* Metric 3 */}
                      <Card className="border border-white/10 rounded-xl p-4 bg-black/40 backdrop-blur-sm hover:border-white/20 transition-all">
                        <div className="space-y-2">
                          <span className="text-xs text-gray-500 block">Conversion rate</span>
                          <div className="flex items-baseline gap-2">
                            <span className="text-2xl font-bold text-white">12%</span>
                          </div>
                        </div>
                      </Card>
                    </motion.div>

                    {/* After Column */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={mounted ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.6, delay: 1.4 }}
                      className="space-y-4"
                    >
                      <div className="mb-4">
                        <h4 className="text-base font-semibold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-[#6366F1] to-[#22D3EE]">After Zyro</h4>
                      </div>
                      
                      {/* Metric 1 */}
                      <Card className="border border-[#22D3EE]/30 rounded-xl p-4 bg-gradient-to-br from-[#22D3EE]/10 via-[#6366F1]/10 to-transparent backdrop-blur-sm hover:border-[#22D3EE]/50 transition-all shadow-lg shadow-[#22D3EE]/10">
                        <div className="space-y-2">
                          <span className="text-xs text-gray-400 block">Booked appointments</span>
                          <div className="flex items-baseline gap-2">
                            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#6366F1] to-[#22D3EE]">47</span>
                            <span className="text-xs text-gray-400">/week</span>
                          </div>
                        </div>
                      </Card>

                      {/* Metric 2 */}
                      <Card className="border border-[#22D3EE]/30 rounded-xl p-4 bg-gradient-to-br from-[#22D3EE]/10 via-[#6366F1]/10 to-transparent backdrop-blur-sm hover:border-[#22D3EE]/50 transition-all shadow-lg shadow-[#22D3EE]/10">
                        <div className="space-y-2">
                          <span className="text-xs text-gray-400 block">Response time</span>
                          <div className="flex items-baseline gap-2">
                            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#6366F1] to-[#22D3EE]">&lt;30s</span>
                          </div>
                        </div>
                      </Card>

                      {/* Metric 3 */}
                      <Card className="border border-[#22D3EE]/30 rounded-xl p-4 bg-gradient-to-br from-[#22D3EE]/10 via-[#6366F1]/10 to-transparent backdrop-blur-sm hover:border-[#22D3EE]/50 transition-all shadow-lg shadow-[#22D3EE]/10">
                        <div className="space-y-2">
                          <span className="text-xs text-gray-400 block">Conversion rate</span>
                          <div className="flex items-baseline gap-2">
                            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#6366F1] to-[#22D3EE]">34%</span>
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
                  className="relative"
                >
                  <Card className="w-full h-[500px] bg-black/[0.96] relative overflow-hidden border-0">
                    <Spotlight
                      className="-top-40 left-0 md:left-60 md:-top-20"
                      fill="white"
                    />
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

