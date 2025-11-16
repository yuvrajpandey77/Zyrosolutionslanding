'use client'

import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { ChevronRight } from "lucide-react"

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
          className="absolute top-0 z-[0] h-screen w-screen bg-purple-950/10 dark:bg-purple-950/10 bg-[radial-gradient(ellipse_20%_80%_at_50%_-20%,rgba(120,119,198,0.15),rgba(255,255,255,0))] dark:bg-[radial-gradient(ellipse_20%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"
          initial={{ opacity: 0 }}
          animate={mounted ? { opacity: 1 } : {}}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
        <section className="relative max-w-full mx-auto z-1">
          <RetroGrid {...gridOptions} />
          <div className="max-w-screen-xl z-10 mx-auto px-4 pt-20 pb-28 gap-12 md:px-8 flex flex-col items-center justify-center min-h-screen">
            <motion.div 
              className="space-y-5 max-w-3xl mx-auto text-center"
              variants={containerVariants}
              initial="hidden"
              animate={mounted ? "visible" : "hidden"}
            >
              <motion.h1 
                className="text-sm text-gray-600 dark:text-gray-400 group font-geist mx-auto px-5 py-2 bg-gradient-to-tr from-zinc-300/20 via-gray-400/20 to-transparent dark:from-zinc-300/5 dark:via-gray-400/5 border-[2px] border-black/5 dark:border-white/5 rounded-3xl w-fit"
                variants={itemVariants}
              >
                {title}
                <ChevronRight className="inline w-4 h-4 ml-2 group-hover:translate-x-1 duration-300" />
              </motion.h1>
              <motion.h2 
                className="text-4xl tracking-tighter font-geist bg-clip-text text-transparent mx-auto md:text-6xl bg-[linear-gradient(180deg,_#000_0%,_rgba(0,_0,_0,_0.75)_100%)] dark:bg-[linear-gradient(180deg,_#FFF_0%,_rgba(255,_255,_255,_0.00)_202.08%)]"
                variants={itemVariants}
              >
                {subtitle.regular}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 dark:from-purple-300 dark:to-orange-200">
                  {subtitle.gradient}
                </span>
              </motion.h2>
              <motion.p 
                className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300"
                variants={itemVariants}
              >
                {description}
              </motion.p>
              <motion.div 
                className="items-center justify-center gap-x-3 space-y-3 sm:flex sm:space-y-0"
                variants={itemVariants}
              >
                <span className="relative inline-block overflow-hidden rounded-full p-[1.5px]">
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                  <div className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-white dark:bg-gray-950 text-xs font-medium backdrop-blur-3xl">
                    <a
                      href={ctaHref}
                      className="inline-flex rounded-full text-center group items-center w-full justify-center bg-gradient-to-tr from-zinc-300/20 via-purple-400/30 to-transparent dark:from-zinc-300/5 dark:via-purple-400/20 text-gray-900 dark:text-white border-input border-[1px] hover:bg-gradient-to-tr hover:from-zinc-300/30 hover:via-purple-400/40 hover:to-transparent dark:hover:from-zinc-300/10 dark:hover:via-purple-400/30 transition-all sm:w-auto py-4 px-10"
                    >
                      {ctaText}
                    </a>
                  </div>
                </span>
              </motion.div>
            </motion.div>
            {bottomImage && (
              <motion.div 
                className="mt-32 mx-4 md:mx-10 relative z-10"
                initial={{ opacity: 0, y: 50 }}
                animate={mounted ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="relative rounded-2xl overflow-hidden border border-white/10 dark:border-white/10 shadow-2xl bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm">
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80 z-10 pointer-events-none" />
                  <img
                    src={bottomImage.light}
                    className="w-full h-auto shadow-2xl rounded-lg border border-gray-200 dark:hidden object-cover"
                    alt="AI Receptionist Dashboard Preview"
                  />
                  <img
                    src={bottomImage.dark}
                    className="hidden w-full h-auto shadow-2xl rounded-lg border border-gray-800 dark:block object-cover"
                    alt="AI Receptionist Dashboard Preview"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/60 z-20 pointer-events-none" />
                </div>
              </motion.div>
            )}
          </div>
        </section>
      </div>
    )
  },
)

HeroSection.displayName = "HeroSection"

export { HeroSection }

