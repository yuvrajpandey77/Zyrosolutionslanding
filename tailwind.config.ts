import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        geist: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      colors: {
        // Dark theme colors per requirements
        background: '#050816', // Primary background (very dark blue/black)
        'background-dark': '#111827', // Card/surface background (dark gray-blue)
        card: '#111827', // Card background
        'card-dark': '#1F2937',
        'text-primary': '#F9FAFB', // Main text (almost white)
        'text-primary-dark': '#F9FAFB',
        'text-body': '#9CA3AF', // Secondary text (gray)
        'text-body-dark': '#9CA3AF',
        'text-muted': '#6B7280',
        'text-muted-dark': '#6B7280',
        // Accent colors
        accent: '#6366F1', // Primary accent (indigo)
        'accent-primary': '#6366F1', // Indigo
        'accent-secondary': '#22D3EE', // Secondary accent (cyan/teal)
        'accent-warning': '#F97316', // Warning/high attention (warm orange)
        // Legacy colors for gradual migration
        'accent-red': '#EF4444',
        'accent-pink': '#F472B6',
        'accent-yellow': '#FEF3C7',
        'accent-pink-light': '#FCE7F3',
        'cta-banner': '#0F172A',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(to right, #6366F1, #22D3EE)', // Indigo to cyan
        'gradient-pink': 'linear-gradient(to right, #6366F1, #22D3EE)',
        'gradient-hero': 'linear-gradient(135deg, #050816 0%, #1E1B4B 50%, #0C4A6E 100%)', // Dark gradient for hero
      },
    },
  },
  plugins: [],
}
export default config

