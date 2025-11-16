'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Check } from 'lucide-react'

export default function Pricing() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const plans = [
    {
      name: 'Starter',
      price: '$500',
      period: '/month',
      description: 'Setup + monthly retainer',
      setupFee: 'One-time setup fee included',
      features: [
        '24/7 AI phone receptionist',
        'AI SMS follow-up',
        'Calendar integration',
        'Basic call flows',
        'Email support',
        'Up to 100 calls/month',
      ],
      popular: false,
    },
    {
      name: 'Professional',
      price: 'Custom',
      period: '',
      description: 'Custom pricing based on your needs',
      setupFee: 'Setup + monthly retainer',
      features: [
        'Everything in Starter',
        'Unlimited calls',
        'Advanced call flows & scripting',
        'CRM integration',
        'Google Sheets lead tracking',
        'Priority support',
        'Custom integrations',
        'Ongoing optimization',
      ],
      popular: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Tailored solutions for large teams',
      setupFee: 'Custom setup + retainer',
      features: [
        'Everything in Professional',
        'Dedicated account manager',
        '24/7 phone support',
        'Advanced analytics & reporting',
        'SLA guarantee',
        'Multi-location support',
        'Custom AI training',
      ],
      popular: false,
    },
  ]

  return (
    <section className="section-padding" ref={ref} id="pricing" style={{ backgroundColor: '#000000' }}>
      <div className="container-custom">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-[linear-gradient(180deg,_#FFF_0%,_rgba(255,_255,_255,_0.80)_100%)] leading-tight pb-2" style={{ lineHeight: '1.1' }}>
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl max-w-2xl mx-auto bg-clip-text text-transparent bg-[linear-gradient(180deg,_#FFF_0%,_rgba(255,_255,_255,_0.60)_100%)]">
            Choose the plan that fits your business needs
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              className={`card relative flex flex-col ${plan.popular ? 'scale-105' : ''}`}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              style={{ 
                backgroundColor: '#0A0A0A', 
                borderColor: plan.popular ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 255, 255, 0.05)',
                borderWidth: plan.popular ? '2px' : '1px',
                boxShadow: plan.popular ? '0 0 30px rgba(99, 102, 241, 0.3), 0 0 60px rgba(34, 211, 238, 0.2)' : '0 0 20px rgba(99, 102, 241, 0.1)',
                padding: '2rem'
              }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <span className="px-4 py-1.5 rounded-full text-sm font-medium shadow-lg" style={{ backgroundColor: '#F97316', color: '#F9FAFB' }}>
                    Most Popular
                  </span>
                </div>
              )}
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2 bg-clip-text text-transparent bg-[linear-gradient(180deg,_#FFF_0%,_rgba(255,_255,_255,_0.80)_100%)]">{plan.name}</h3>
                <p className="mb-2 bg-clip-text text-transparent bg-[linear-gradient(180deg,_rgba(255,_255,_255,_0.60)_0%,_rgba(156,_163,_175,_0.60)_100%)]">{plan.description}</p>
                {plan.setupFee && (
                  <p className="text-sm mb-4 bg-clip-text text-transparent bg-[linear-gradient(180deg,_rgba(255,_255,_255,_0.50)_0%,_rgba(107,_114,_128,_0.50)_100%)]">{plan.setupFee}</p>
                )}
                <div className="flex items-baseline justify-center gap-1 mb-6">
                  <span className="text-5xl font-bold bg-clip-text text-transparent bg-[linear-gradient(180deg,_#FFF_0%,_rgba(255,_255,_255,_0.80)_100%)]">{plan.price}</span>
                  <span className="bg-clip-text text-transparent bg-[linear-gradient(180deg,_rgba(255,_255,_255,_0.60)_0%,_rgba(156,_163,_175,_0.60)_100%)]">{plan.period}</span>
                </div>
              </div>
              <ul className="space-y-3 mb-8 flex-grow">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-0.5">
                      <Check className="w-5 h-5" style={{ color: '#22D3EE' }} strokeWidth={2.5} />
                    </div>
                    <span className="bg-clip-text text-transparent bg-[linear-gradient(180deg,_rgba(255,_255,_255,_0.60)_0%,_rgba(156,_163,_175,_0.60)_100%)] text-sm leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto">
                {plan.popular ? (
                  <a
                    href="/demo"
                    className="relative inline-block overflow-hidden rounded-full w-full"
                  >
                    <span className="inline-flex rounded-full text-center group items-center w-full justify-center bg-white text-black border-input border-[1px] hover:bg-gray-100 transition-all py-3.5 px-10 font-semibold shadow-lg">
                      Get Started
                    </span>
                  </a>
                ) : (
                  <a
                    href="/demo"
                    className="relative inline-block overflow-hidden rounded-full w-full"
                  >
                    <span className="inline-flex rounded-full text-center group items-center w-full justify-center bg-transparent text-white border border-white/30 hover:border-white hover:bg-white/10 transition-all py-3.5 px-10 font-semibold">
                      Get Started
                    </span>
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

