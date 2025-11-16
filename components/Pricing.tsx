'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function Pricing() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const plans = [
    {
      name: 'Starter',
      price: '$299',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Up to 500 calls/month',
        'Basic call routing',
        'Email notifications',
        'Calendar integration',
        'Email support',
      ],
      popular: false,
    },
    {
      name: 'Professional',
      price: '$599',
      period: '/month',
      description: 'For growing businesses',
      features: [
        'Up to 2,000 calls/month',
        'Advanced call flows',
        'SMS notifications',
        'CRM integration',
        'Priority support',
        'Custom branding',
      ],
      popular: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'For large organizations',
      features: [
        'Unlimited calls',
        'Dedicated account manager',
        'Custom integrations',
        '24/7 phone support',
        'Advanced analytics',
        'SLA guarantee',
      ],
      popular: false,
    },
  ]

  return (
    <section className="section-padding bg-pink-50/20" ref={ref} id="pricing">
      <div className="container-custom">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the plan that fits your business needs
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              className={`card relative ${plan.popular ? 'ring-2 ring-pink-500 scale-105' : ''}`}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-pink-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2 text-gray-900">{plan.name}</h3>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-5xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-600">{plan.period}</span>
                </div>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-pink-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="/demo"
                className={`block w-full text-center py-3 rounded-lg font-medium transition-all ${
                  plan.popular
                    ? 'btn-primary'
                    : 'border-2 border-gray-300 text-gray-900 hover:border-pink-500 hover:text-pink-600 hover:bg-pink-50'
                }`}
              >
                Get Started
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

