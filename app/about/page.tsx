'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Header from '@/components/Header'

export default function AboutPage() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const values = [
    {
      title: 'Innovation First',
      description: 'We stay ahead of AI technology to deliver cutting-edge solutions that give your business a competitive edge.',
      icon: '💡',
    },
    {
      title: 'Customer Success',
      description: 'Your success is our success. We measure our performance by how much we help your business grow.',
      icon: '🎯',
    },
    {
      title: 'Reliability',
      description: '24/7 uptime and consistent performance. Your AI receptionist works when you can\'t.',
      icon: '🛡️',
    },
    {
      title: 'Transparency',
      description: 'Clear pricing, honest communication, and no hidden fees. What you see is what you get.',
      icon: '🔍',
    },
  ]

  const team = [
    { name: 'Alex Chen', role: 'CEO & Founder', bio: '10+ years in AI automation' },
    { name: 'Sarah Martinez', role: 'Head of Product', bio: 'Former Google Product Manager' },
    { name: 'David Kim', role: 'CTO', bio: 'AI/ML expert with 15+ years experience' },
  ]

  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <Header />
      <div className="pt-20">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-br from-pink-50 to-yellow-50">
          <div className="container-custom max-w-4xl text-center">
            <motion.h1
              className="text-5xl md:text-6xl font-bold mb-6 text-gray-900"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              About Zyro Solutions
            </motion.h1>
            <motion.p
              className="text-xl text-gray-700 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              We're on a mission to help service businesses never miss another customer call. 
              Founded in 2023, Zyro Solutions combines cutting-edge AI technology with deep 
              understanding of service business needs.
            </motion.p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="section-padding bg-white" ref={ref}>
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-4xl font-bold mb-6 text-gray-900">Our Mission</h2>
                <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                  Every missed call is a missed opportunity. We believe that service businesses 
                  shouldn't lose revenue simply because they can't answer the phone 24/7.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Our AI receptionist technology ensures that every customer inquiry is handled 
                  professionally, instantly, and with the same care you'd provide yourself.
                </p>
              </motion.div>
              <motion.div
                className="card bg-gradient-to-br from-pink-50 to-yellow-50"
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="space-y-4">
                  <div className="text-4xl font-bold text-pink-600">500+</div>
                  <div className="text-gray-700">Businesses Served</div>
                  <div className="text-4xl font-bold text-pink-600 mt-8">2M+</div>
                  <div className="text-gray-700">Calls Handled</div>
                  <div className="text-4xl font-bold text-pink-600 mt-8">99.9%</div>
                  <div className="text-gray-700">Uptime</div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold mb-4 text-gray-900">Our Values</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                The principles that guide everything we do
              </p>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  className="card text-center"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="text-5xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{value.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold mb-4 text-gray-900">Our Team</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                The experts behind Zyro Solutions
              </p>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={index}
                  className="card text-center"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="w-24 h-24 rounded-full bg-gradient-primary mx-auto mb-4 flex items-center justify-center text-white text-3xl font-bold">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{member.name}</h3>
                  <p className="text-pink-600 font-medium mb-2">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-gradient-to-br from-pink-50 to-yellow-50">
          <div className="container-custom text-center">
            <motion.h2
              className="text-4xl font-bold mb-6 text-gray-900"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              Ready to work with us?
            </motion.h2>
            <motion.a
              href="/demo"
              className="btn-primary inline-block"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Get Started Today
            </motion.a>
          </div>
        </section>
      </div>
    </main>
  )
}

