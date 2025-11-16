'use client'

import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { SplineScene } from "@/components/ui/splite"
import { Card } from "@/components/ui/card"
import { Spotlight } from "@/components/ui/spotlight"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { DemoForm } from "@/components/DemoForm"

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
    const [isModalOpen, setIsModalOpen] = React.useState(false)

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
          <div className="max-w-screen-xl z-10 mx-auto px-3 sm:px-4 md:px-8 pt-20 sm:pt-24 md:pt-20 pb-6 sm:pb-4 md:pb-8 gap-8 sm:gap-12 flex flex-col items-center justify-center min-h-screen">
            <motion.div 
              className="space-y-3 sm:space-y-4 md:space-y-6 w-full mx-auto text-center"
              variants={containerVariants}
              initial="hidden"
              animate={mounted ? "visible" : "hidden"}
            >
              <motion.h1 
                className="text-5xl sm:text-4xl md:text-6xl tracking-tight font-geist bg-clip-text text-transparent mx-auto bg-[linear-gradient(180deg,_#000_0%,_rgba(0,_0,_0,_0.75)_100%)] dark:bg-[linear-gradient(180deg,_#FFF_0%,_rgba(255,_255,_255,_0.00)_202.08%)] leading-tight px-1"
                variants={itemVariants}
              >
                {title}
              </motion.h1>
              <motion.p 
                className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-gray-400 dark:text-gray-300 px-1 sm:px-2 leading-relaxed"
                variants={itemVariants}
              >
                {description}
              </motion.p>
              <motion.div 
                className="flex items-center justify-center gap-1.5 sm:gap-2 md:gap-4 max-w-4xl mx-auto px-1 sm:px-4 flex-wrap"
                variants={itemVariants}
              >
                <span className="text-[11px] sm:text-xs md:text-sm text-gray-200 dark:text-gray-200 whitespace-nowrap flex items-center flex-shrink-0 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-2.5 sm:px-2.5 md:px-3 py-1 sm:py-1 md:py-1.5">
                  24/7 AI receptionist — voice + SMS
                </span>
                <span className="text-[11px] sm:text-xs md:text-sm text-gray-200 dark:text-gray-200 whitespace-nowrap flex items-center flex-shrink-0 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-2.5 sm:px-2.5 md:px-3 py-1 sm:py-1 md:py-1.5">
                  No missed calls, no missed bookings
                </span>
                <span className="text-[11px] sm:text-xs md:text-sm text-gray-200 dark:text-gray-200 whitespace-nowrap flex items-center flex-shrink-0 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-2.5 sm:px-2.5 md:px-3 py-1 sm:py-1 md:py-1.5">
                  Integrates with your existing calendar
                </span>
              </motion.div>
              <motion.div 
                className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-2.5 sm:gap-3 md:gap-4 w-full sm:w-auto px-2 sm:px-0"
                variants={itemVariants}
              >
                {/* Primary Button - White */}
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="inline-flex items-center justify-center rounded-full bg-white text-black font-semibold px-8 sm:px-6 md:px-10 py-2.5 sm:py-3 md:py-4 hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl text-sm sm:text-sm md:text-base w-full sm:w-auto sm:min-w-[200px]"
                >
                  Book a demo
                </button>
                {/* Secondary Button - Transparent with white border */}
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="inline-flex items-center justify-center rounded-full bg-transparent text-white font-semibold px-8 sm:px-6 md:px-10 py-2.5 sm:py-3 md:py-4 border-2 border-white/50 hover:border-white hover:bg-white/10 transition-all duration-300 text-sm sm:text-sm md:text-base w-full sm:w-auto sm:min-w-[200px]"
                >
                  Watch demo
                </button>
              </motion.div>
            </motion.div>
            {/* Comparison and 3D Bot Section */}
            <motion.div 
              className="mt-0 sm:mt-0 md:mt-2 w-full max-w-7xl mx-auto px-3 sm:px-4 md:px-8 relative z-10"
              initial={{ opacity: 0, y: 50 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex flex-col lg:flex-row gap-4 md:gap-6 lg:gap-8 items-center md:items-center border border-white/10 rounded-lg sm:rounded-xl md:rounded-2xl p-4 sm:p-4 md:p-6 lg:p-8 bg-black/20 backdrop-blur-sm">
                {/* Left Side: Content Sections */}
                <div className="flex flex-col gap-4 md:gap-6 lg:gap-8 flex-1 md:max-w-2xl w-full items-center md:items-start">
                  {/* First Column: Dashboard/Mockup Cards */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={mounted ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: 1 }}
                  className="w-full grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 md:gap-4"
                >
                  {/* Calls Answered Dashboard */}
                  <Card className="border border-white/20 rounded-lg md:rounded-xl p-3 sm:p-4 md:p-5 bg-gradient-to-br from-[#6366F1]/20 to-[#22D3EE]/20 backdrop-blur-sm hover:border-white/40 transition-all overflow-hidden">
                    <div className="space-y-2 sm:space-y-2">
                      <div className="flex items-center justify-between gap-1.5 sm:gap-2 min-w-0">
                        <span className="text-[10px] sm:text-xs md:text-sm text-gray-300 font-medium leading-tight flex-1 min-w-0 truncate">Calls Answered</span>
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 rounded-full animate-pulse flex-shrink-0"></div>
                      </div>
                      <div className="flex items-baseline gap-1.5 sm:gap-2 flex-wrap min-w-0">
                        <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-none">1,247</span>
                        <span className="text-[10px] sm:text-xs text-gray-400 whitespace-nowrap">this week</span>
                      </div>
                      <div className="h-1.5 sm:h-2 bg-white/10 rounded-full overflow-hidden mt-1">
                        <div className="h-full bg-gradient-to-r from-[#6366F1] to-[#22D3EE] rounded-full" style={{ width: '87%' }}></div>
                      </div>
                    </div>
                  </Card>

                  {/* Appointments Booked Dashboard */}
                  <Card className="border border-white/20 rounded-lg md:rounded-xl p-3 sm:p-4 md:p-5 bg-gradient-to-br from-[#22D3EE]/20 to-[#6366F1]/20 backdrop-blur-sm hover:border-white/40 transition-all overflow-hidden">
                    <div className="space-y-2 sm:space-y-2">
                      <div className="flex items-center justify-between gap-1.5 sm:gap-2 min-w-0">
                        <span className="text-[10px] sm:text-xs md:text-sm text-gray-300 font-medium leading-tight flex-1 min-w-0 truncate">Appointments Booked</span>
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-400 rounded-full animate-pulse flex-shrink-0"></div>
                      </div>
                      <div className="flex items-baseline gap-1.5 sm:gap-2 flex-wrap min-w-0">
                        <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-none">342</span>
                        <span className="text-[10px] sm:text-xs text-gray-400 whitespace-nowrap">this week</span>
                      </div>
                      <div className="h-1.5 sm:h-2 bg-white/10 rounded-full overflow-hidden mt-1">
                        <div className="h-full bg-gradient-to-r from-[#22D3EE] to-[#6366F1] rounded-full" style={{ width: '72%' }}></div>
                      </div>
                    </div>
                  </Card>

                  {/* Missed Calls Reduced Dashboard */}
                  <Card className="border border-white/20 rounded-lg md:rounded-xl p-3 sm:p-4 md:p-5 bg-gradient-to-br from-[#6366F1]/20 to-[#22D3EE]/20 backdrop-blur-sm hover:border-white/40 transition-all overflow-hidden">
                    <div className="space-y-2 sm:space-y-2">
                      <div className="flex items-center justify-between gap-1.5 sm:gap-2 min-w-0">
                        <span className="text-[10px] sm:text-xs md:text-sm text-gray-300 font-medium leading-tight flex-1 min-w-0 truncate">Missed Calls Reduced</span>
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-red-400 rounded-full flex-shrink-0"></div>
                      </div>
                      <div className="flex items-baseline gap-1.5 sm:gap-2 flex-wrap min-w-0">
                        <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-none">-89%</span>
                        <span className="text-[10px] sm:text-xs text-gray-400 whitespace-nowrap">vs last month</span>
                      </div>
                      <div className="h-1.5 sm:h-2 bg-white/10 rounded-full overflow-hidden mt-1">
                        <div className="h-full bg-gradient-to-r from-red-500/50 to-red-400/50 rounded-full" style={{ width: '89%' }}></div>
                      </div>
                    </div>
                  </Card>
                </motion.div>

                  {/* Second Column: Before/After Stats */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={mounted ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 1 }}
                    className="space-y-3 sm:space-y-4 md:space-y-4 w-full"
                >
                  <div>
                    <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold mb-3 sm:mb-4 md:mb-4 bg-clip-text text-transparent bg-[linear-gradient(180deg,_#FFF_0%,_rgba(255,_255,_255,_0.80)_100%)] text-center md:text-left">
                      Before vs After
                    </h3>
                  </div>
                  
                  {/* Side-by-side Comparison */}
                  <div className="grid grid-cols-2 gap-2.5 sm:gap-2 md:gap-3">
                    {/* Before Column */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={mounted ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.6, delay: 1.2 }}
                      className="space-y-2 sm:space-y-2 md:space-y-3"
                    >
                      <div className="mb-1.5 sm:mb-2">
                        <h4 className="text-xs sm:text-xs md:text-sm font-semibold mb-1 text-gray-300">Before Zyro</h4>
                      </div>
                      
                      {/* Metric 1 */}
                      <Card className="border border-white/10 rounded-lg md:rounded-xl p-3 sm:p-2.5 md:p-3 bg-black/40 backdrop-blur-sm hover:border-white/20 transition-all">
                        <div className="space-y-1.5 sm:space-y-1">
                          <span className="text-xs sm:text-xs text-gray-400 block leading-tight">Missed calls</span>
                          <div className="flex items-baseline gap-1">
                            <span className="text-xl sm:text-xl md:text-2xl font-bold text-white leading-none">23</span>
                            <span className="text-xs text-gray-400">/week</span>
                          </div>
                        </div>
                      </Card>
                    </motion.div>

                    {/* After Column */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={mounted ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.6, delay: 1.4 }}
                      className="space-y-2 sm:space-y-2 md:space-y-3"
                    >
                      <div className="mb-1.5 sm:mb-2">
                        <h4 className="text-xs sm:text-xs md:text-sm font-semibold mb-1 text-white">After Zyro</h4>
                      </div>
                      
                      {/* Metric 1 */}
                      <Card className="border border-white/20 rounded-lg md:rounded-xl p-3 sm:p-2.5 md:p-3 bg-white hover:border-white/40 transition-all shadow-lg">
                        <div className="space-y-1.5 sm:space-y-1">
                          <span className="text-xs sm:text-xs text-gray-600 block leading-tight">Booked appointments</span>
                          <div className="flex items-baseline gap-1">
                            <span className="text-xl sm:text-xl md:text-2xl font-bold text-black leading-none">47</span>
                            <span className="text-xs text-gray-600">/week</span>
                          </div>
                        </div>
                      </Card>
                    </motion.div>
                  </div>
                </motion.div>

                  {/* Third Column: CTA Button */}
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={mounted ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.8, delay: 1 }}
                    className="flex flex-col items-center justify-center w-full"
                  >
                    <div className="w-full">
                      <motion.span
                        className="relative inline-block overflow-hidden rounded-full w-full"
                        initial={{ opacity: 0, y: 20 }}
                        animate={mounted ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 1.4 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <button
                          onClick={() => setIsModalOpen(true)}
                          className="w-full inline-flex rounded-full text-center items-center justify-center bg-white text-black border-input border-[1px] hover:bg-gray-100 transition-all py-3.5 sm:py-3.5 md:py-4 px-6 sm:px-8 md:px-10 text-sm sm:text-base md:text-lg font-semibold shadow-lg"
                        >
                          Book a Free Demo Call
                        </button>
                      </motion.span>
                    </div>
                  </motion.div>
                </div>

                {/* Right Side: 3D Bot Animation */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={mounted ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: 1.2 }}
                  className="w-full md:w-auto md:flex-1 md:max-w-md lg:max-w-lg relative md:mt-0 mt-6 sm:mt-8"
                >
                  <Card className="w-full h-[280px] sm:h-[300px] md:h-[500px] lg:h-[600px] bg-black/[0.96] relative overflow-visible border-0 rounded-lg md:rounded-xl">
                    <div className="relative h-full w-full flex items-center justify-center">
                      <SplineScene 
                        scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                        className="w-full h-full"
                      />
                      
                      {/* Icon above robot head */}
                      <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={mounted ? { 
                          opacity: 1, 
                          y: [0, -8, 0],
                        } : {}}
                        transition={{ 
                          opacity: { duration: 0.6, delay: 1.2 },
                          y: {
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 1.2,
                          }
                        }}
                        className="absolute top-[2%] left-[49] transform -translate-x-1/2 z-20"
                      >
                        <div className="bg-white/8 backdrop-blur-md border border-white/20 rounded-full p-2 sm:p-2.5 md:p-3 shadow-lg">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            className="w-4 h-4 sm:w-4 sm:h-4 md:w-5 md:h-5 text-white/80"
                            fill="currentColor"
                          >
                            <path d="M7 2h10a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm0 2v16h10V4H7zm5 14a1.25 1.25 0 1 1 0 2.5A1.25 1.25 0 0 1 12 18z" />
                          </svg>
                        </div>
                      </motion.div>

                      {/* Icon on the left */}
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={mounted ? { 
                          opacity: 1, 
                          x: 0,
                          y: [0, -8, 0],
                        } : {}}
                        transition={{ 
                          opacity: { duration: 0.6, delay: 1.2 },
                          x: { duration: 0.6, delay: 1.2 },
                          y: {
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 1.2,
                          }
                        }}
                        
                        className="absolute left-[8%] sm:left-[5%] top-[15%] transform translate-x-5 z-20"
                      >
                        <div className="bg-white/8 backdrop-blur-md border border-white/20 rounded-full p-2 sm:p-2.5 md:p-3 shadow-lg">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            className="w-4 h-4 sm:w-4 sm:h-4 md:w-5 md:h-5 text-white/80"
                            fill="currentColor"
                          >
                            <path d="M7 2a1 1 0 0 1 1 1v1h8V3a1 1 0 1 1 2 0v1h1a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1V3a1 1 0 0 1 1-1zm12 7H5v10h14V9zM7 7H5v2h14V7h-2V6h-2v1H9V6H7v1z" />
                          </svg>
                        </div>
                      </motion.div>

                      {/* Icon on the right */}
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={mounted ? { 
                          opacity: 1, 
                          x: 0,
                          y: [0, -8, 0],
                        } : {}}
                        transition={{ 
                          opacity: { duration: 0.6, delay: 1.2 },
                          x: { duration: 0.6, delay: 1.2 },
                          y: {
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 1.2,
                          }
                        }}
                        className="absolute right-[8%] sm:right-[5%] md:right-[3%] top-[15%] z-20"
                      >
                        <div className="bg-white/8 backdrop-blur-md border border-white/20 rounded-full p-2 sm:p-2.5 md:p-3 shadow-lg">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            className="w-4 h-4 sm:w-4 sm:h-4 md:w-5 md:h-5 text-white/80"
                            fill="currentColor"
                          >
                            <path d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20zm1 5h-2v6l4.5 2.5 1-1.732L13 11.268V7z" />
                          </svg>
                        </div>
                      </motion.div>
                    </div>
                  </Card>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
        
        {/* Demo Form Modal */}
        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogContent onClose={() => setIsModalOpen(false)}>
            <DemoForm 
              onSuccess={() => {
                setIsModalOpen(false)
                // Optionally redirect to thank you page
                // window.location.href = '/thank-you'
              }} 
            />
          </DialogContent>
        </Dialog>
      </div>
    )
  },
)

HeroSection.displayName = "HeroSection"

export { HeroSection }

