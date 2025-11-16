import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#FFFFFF',
        'background-dark': '#1E293B',
        card: '#FFFFFF',
        'card-dark': '#334155',
        'text-primary': '#0F172A',
        'text-primary-dark': '#FFFFFF',
        'text-body': '#475569',
        'text-body-dark': '#E2E8F0',
        'text-muted': '#64748B',
        'text-muted-dark': '#94A3B8',
        accent: '#EC4899',
        'accent-red': '#EF4444',
        'accent-pink': '#F472B6',
        'accent-yellow': '#FEF3C7',
        'accent-pink-light': '#FCE7F3',
        'cta-banner': '#FDF2F8',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(to right, #EC4899, #EF4444)',
        'gradient-pink': 'linear-gradient(to right, #F472B6, #EC4899)',
      },
    },
  },
  plugins: [],
}
export default config

