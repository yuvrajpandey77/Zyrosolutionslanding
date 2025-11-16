'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import Header from '@/components/Header'

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

  const inputClasses = "w-full px-4 py-3.5 bg-white border-2 border-gray-200 rounded-xl text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-all duration-200 text-base"
  const labelClasses = "block text-sm font-semibold text-gray-900 mb-2.5"

  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="pt-20 section-padding">
        <div className="container-custom max-w-4xl">
          <motion.div
            className="mb-12 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={mounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Get your 24/7 AI receptionist
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Fill out the form below and we'll get back to you within 24 hours to schedule your free demo
            </p>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            className="card space-y-8 bg-white shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={mounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Personal Information Section */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-text-primary pb-2 border-b border-gray-200">
                Contact Information
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="fullName" className={labelClasses}>
                    Full Name <span className="text-pink-600">*</span>
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
                    Business Name <span className="text-pink-600">*</span>
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
                    Email Address <span className="text-pink-600">*</span>
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
                    Phone Number <span className="text-pink-600">*</span>
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
            </div>

            {/* Business Information Section */}
            <div className="space-y-6 pt-6 border-t border-gray-200">
              <h2 className="text-2xl font-bold text-text-primary pb-2 border-b border-gray-200">
                Business Details
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="industry" className={labelClasses}>
                    Industry <span className="text-pink-600">*</span>
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
                    Daily Call Volume <span className="text-pink-600">*</span>
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
                    <option value="0-10">0-10 calls per day</option>
                    <option value="11-25">11-25 calls per day</option>
                    <option value="26-50">26-50 calls per day</option>
                    <option value="51-100">51-100 calls per day</option>
                    <option value="100+">100+ calls per day</option>
                  </select>
                </div>
              </div>

              <div>
                <label className={labelClasses}>
                  Services of Interest <span className="text-pink-600">*</span>
                </label>
                <div className="grid sm:grid-cols-2 gap-4 mt-3">
                  {[
                    'AI Phone Receptionist',
                    'AI SMS & Follow-Up',
                    'Custom Call Flows',
                    'Calendar Integration',
                    'CRM Integration',
                    'Done-For-You Setup',
                  ].map((interest) => (
                    <label
                      key={interest}
                      className="flex items-center gap-3 p-4 rounded-xl border-2 border-gray-200 hover:border-pink-500 hover:bg-pink-50/50 cursor-pointer transition-all duration-200 group"
                    >
                      <input
                        type="checkbox"
                        value={interest}
                        checked={formData.interests.includes(interest)}
                        onChange={handleCheckboxChange}
                        className="w-5 h-5 rounded border-2 border-gray-300 text-pink-600 focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 cursor-pointer group-hover:border-pink-500 transition-colors"
                      />
                      <span className="text-gray-700 font-medium group-hover:text-pink-600 transition-colors">
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
                <label htmlFor="message" className={labelClasses}>
                  Additional Information
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  placeholder="Tell us about your business and what you're looking for..."
                  className={inputClasses + " resize-none"}
                />
                <p className="mt-2 text-sm text-text-muted">
                  Optional: Share any specific requirements or questions
                </p>
              </div>
            </div>

            <div className="pt-6 border-t border-gray-200">
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
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
                  'Submit Request'
                )}
              </motion.button>
              <p className="mt-4 text-sm text-center text-gray-600">
                By submitting this form, you agree to be contacted by Zyro Solutions. We respect your privacy.
              </p>
            </div>
          </motion.form>
        </div>
      </div>
    </main>
  )
}
