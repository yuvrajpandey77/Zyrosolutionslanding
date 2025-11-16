import type { Metadata } from 'next'
import './globals.css'
import SmoothScroll from '@/components/SmoothScroll'

export const metadata: Metadata = {
  title: 'Zyro Solutions - 24/7 AI Receptionist for Your Business',
  description: 'Never miss another customer call. Zyro Solutions gives your business a 24/7 AI receptionist that answers calls, responds to texts, and books appointments directly into your calendar.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <SmoothScroll />
        {children}
      </body>
    </html>
  )
}

