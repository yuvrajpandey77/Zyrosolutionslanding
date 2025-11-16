'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import Header from '@/components/Header'
import { RetroGrid } from '@/components/ui/hero-section-dark'

export default function DemoPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])
  const router = useRouter()
  const [formData, setFormData] = useState({
    fullName: '',
    businessName: '',
    email: '',
    phone: '',
    website: '',
    industry: '',
    callVolume: '',
    interests: [] as string[],
    bestTime: '',
    hearAboutUs: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [focusedField, setFocusedField] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target
    setFormData(prev => ({
      ...prev,
      interests: checked
        ? [...prev.interests, value]
        : prev.interests.filter(i => i !== value)
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Redirect to thank you page
    router.push('/thank-you')
  }

  const inputClasses = "w-full px-4 py-3.5 bg-white/5 dark:bg-white/5 backdrop-blur-sm border-2 border-white/10 dark:border-white/10 rounded-xl text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-accent-primary focus:border-accent-primary transition-all duration-200 text-base [&>option]:bg-[#111827] [&>option]:text-white"
  const labelClasses = "block text-sm font-semibold text-white dark:text-gray-200 mb-2.5"

  return (
    <main className="min-h-screen relative overflow-hidden" style={{ backgroundColor: '#000000' }}>
      <div className="absolute top-0 z-[0] h-screen w-screen bg-[radial-gradient(ellipse_20%_80%_at_50%_-20%,rgba(99,102,241,0.3),rgba(34,211,238,0.2),rgba(255,255,255,0))]" />
      <RetroGrid 
        angle={65}
        opacity={0.2}
        cellSize={50}
        lightLineColor="#6366F1"
        darkLineColor="#22D3EE"
      />
      
      <Header />
      
      <div className="relative z-10 max-w-screen-xl mx-auto px-4 py-28 gap-12 md:px-8 pb-40">
        <motion.div
          className="mb-12 text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={mounted ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.h1 
            className="text-4xl md:text-6xl font-geist tracking-tighter font-bold mb-6 bg-clip-text text-transparent bg-[linear-gradient(180deg,_#FFF_0%,_rgba(255,_255,_255,_0.80)_100%)]"
            initial={{ opacity: 0, y: 20 }}
            animate={mounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            Get your 24/7 AI receptionist
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-300 dark:text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={mounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            Fill out the form below and we'll get back to you within 24 hours to schedule your free demo
          </motion.p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
                 className="max-w-4xl mx-auto space-y-8 bg-[#0A0A0A] backdrop-blur-xl rounded-2xl p-8 border border-white/10 dark:border-white/10 shadow-2xl"
          initial={{ opacity: 0, y: 40 }}
          animate={mounted ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Personal Information Section */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={mounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-2xl font-bold text-white dark:text-gray-100 pb-2 border-b border-white/10">
              Contact Information
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="fullName" className={labelClasses}>
                  Full Name <span className="text-accent-secondary">*</span>
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('fullName')}
                  onBlur={() => setFocusedField(null)}
                  placeholder="John Doe"
                  className={inputClasses}
                />
              </div>

              <div>
                <label htmlFor="businessName" className={labelClasses}>
                  Business Name <span className="text-accent-secondary">*</span>
                </label>
                <input
                  type="text"
                  id="businessName"
                  name="businessName"
                  required
                  value={formData.businessName}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('businessName')}
                  onBlur={() => setFocusedField(null)}
                  placeholder="Acme Services"
                  className={inputClasses}
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="email" className={labelClasses}>
                  Email Address <span className="text-accent-secondary">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                  placeholder="john@acmeservices.com"
                  className={inputClasses}
                />
              </div>

              <div>
                <label htmlFor="phone" className={labelClasses}>
                  Phone Number <span className="text-accent-secondary">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('phone')}
                  onBlur={() => setFocusedField(null)}
                  placeholder="+1 (555) 123-4567"
                  className={inputClasses}
                />
              </div>
            </div>

            <div>
              <label htmlFor="website" className={labelClasses}>
                Website or Instagram
              </label>
              <input
                type="text"
                id="website"
                name="website"
                value={formData.website}
                onChange={handleChange}
                onFocus={() => setFocusedField('website')}
                onBlur={() => setFocusedField(null)}
                placeholder="https://yourwebsite.com or @yourinstagram"
                className={inputClasses}
              />
            </div>
          </motion.div>

          {/* Business Information Section */}
          <motion.div 
            className="space-y-6 pt-6 border-t border-white/10"
            initial={{ opacity: 0, y: 20 }}
            animate={mounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-2xl font-bold text-white dark:text-gray-100 pb-2 border-b border-white/10">
              Business Details
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="industry" className={labelClasses}>
                  Industry <span className="text-accent-secondary">*</span>
                </label>
                <select
                  id="industry"
                  name="industry"
                  required
                  value={formData.industry}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('industry')}
                  onBlur={() => setFocusedField(null)}
                  className={inputClasses}
                >
                  <option value="">Select an industry</option>
                  <option value="auto-detailers">Auto Detailers</option>
                  <option value="lawn-care">Lawn Care</option>
                  <option value="home-services">Home Services</option>
                  <option value="med-spas">Med Spas</option>
                  <option value="cleaning">Cleaning Businesses</option>
                  <option value="real-estate">Real Estate Teams</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="callVolume" className={labelClasses}>
                  Monthly Call Volume <span className="text-accent-secondary">*</span>
                </label>
                <select
                  id="callVolume"
                  name="callVolume"
                  required
                  value={formData.callVolume}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('callVolume')}
                  onBlur={() => setFocusedField(null)}
                  className={inputClasses}
                >
                  <option value="">Select call volume</option>
                  <option value="0-50">0–50 per month</option>
                  <option value="50-150">50–150 per month</option>
                  <option value="150+">150+ per month</option>
                </select>
              </div>
            </div>

            <div>
              <label className={labelClasses}>
                What are you most interested in? <span className="text-accent-secondary">*</span>
              </label>
              <div className="grid sm:grid-cols-2 gap-4 mt-3">
                {[
                  'AI phone receptionist',
                  'AI SMS follow-up',
                  'Full AI automation setup',
                ].map((interest) => (
                  <label
                    key={interest}
                    className="flex items-center gap-3 p-4 rounded-xl border-2 border-white/10 hover:border-accent-primary hover:bg-accent-primary/10 cursor-pointer transition-all duration-200 group"
                  >
                    <input
                      type="checkbox"
                      value={interest}
                      checked={formData.interests.includes(interest)}
                      onChange={handleCheckboxChange}
                      className="w-5 h-5 rounded border-2 border-white/20 text-accent-primary focus:ring-2 focus:ring-accent-primary focus:ring-offset-2 focus:ring-offset-transparent cursor-pointer group-hover:border-accent-primary transition-colors bg-transparent"
                    />
                    <span className="text-gray-300 dark:text-gray-300 font-medium group-hover:text-white transition-colors">
                      {interest}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label htmlFor="bestTime" className={labelClasses}>
                Best Time to Contact
              </label>
              <select
                id="bestTime"
                name="bestTime"
                value={formData.bestTime}
                onChange={handleChange}
                onFocus={() => setFocusedField('bestTime')}
                onBlur={() => setFocusedField(null)}
                className={inputClasses}
              >
                <option value="">Select best time</option>
                <option value="morning">Morning (9 AM - 12 PM)</option>
                <option value="afternoon">Afternoon (12 PM - 5 PM)</option>
                <option value="evening">Evening (5 PM - 8 PM)</option>
                <option value="anytime">Anytime</option>
              </select>
            </div>

            <div>
              <label htmlFor="hearAboutUs" className={labelClasses}>
                How did you hear about us?
              </label>
              <input
                type="text"
                id="hearAboutUs"
                name="hearAboutUs"
                value={formData.hearAboutUs}
                onChange={handleChange}
                onFocus={() => setFocusedField('hearAboutUs')}
                onBlur={() => setFocusedField(null)}
                placeholder="e.g., Google search, social media, referral, etc."
                className={inputClasses}
              />
            </div>

            <div>
              <label htmlFor="message" className={labelClasses}>
                Tell us a bit about your business and current call situation.
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                onFocus={() => setFocusedField('message')}
                onBlur={() => setFocusedField(null)}
                placeholder="Tell us about your business and current call situation..."
                className={inputClasses + " resize-none"}
              />
            </div>
          </motion.div>

          <motion.div 
            className="pt-6 border-t border-white/10"
            initial={{ opacity: 0, y: 20 }}
            animate={mounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.button
              type="submit"
              disabled={isSubmitting}
              className="relative inline-block overflow-hidden rounded-full w-full sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed bg-white text-black hover:bg-gray-100 transition-all py-4 px-10 font-semibold shadow-lg"
              whileHover={isSubmitting ? {} : { scale: 1.02 }}
              whileTap={isSubmitting ? {} : { scale: 0.98 }}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Submitting...
                </span>
              ) : (
                'Submit & request demo'
              )}
            </motion.button>
            <p className="mt-4 text-sm text-center text-gray-400 dark:text-gray-500">
              By submitting this form, you agree to be contacted by Zyro Solutions. We respect your privacy.
              </p>
            </motion.div>
          </motion.form>
      </div>
    </main>
  )
}
