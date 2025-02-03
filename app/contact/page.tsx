'use client'

import { motion } from 'framer-motion'
import { NavHeader } from '@/components/nav-header'
import { BackgroundWaves } from '@/components/background-waves'
import { fadeIn, staggerContainer } from '@/lib/motion'

export default function Contact() {
  return (
    <>
      <BackgroundWaves />
      <NavHeader />
      
      <main className="min-h-screen pt-32 px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="container mx-auto"
        >
          <motion.h1
            variants={fadeIn('up')}
            className="text-5xl md:text-6xl font-bold mb-12"
          >
            Let&apos;s Connect
          </motion.h1>
          
          <motion.div
            variants={fadeIn('up')}
            className="max-w-xl"
          >
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                ></textarea>
              </div>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3 px-6 bg-gradient-to-r from-purple-600 to-purple-400 rounded-lg font-medium"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      </main>
    </>
  )
}

