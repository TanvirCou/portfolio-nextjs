'use client'
import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function Loading() {
  return (
    <main className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
     
      
      <section className="flex-grow flex items-center justify-center relative overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/assets/grid.svg')] opacity-5 dark:opacity-10"></div>
          <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-blue-500/10 to-purple-500/10 dark:from-blue-500/20 dark:to-purple-500/20 blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tr from-purple-500/10 to-indigo-500/10 dark:from-purple-500/20 dark:to-indigo-500/20 blur-3xl"></div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 container mx-auto px-4 py-[250px]">
          <div className="max-w-2xl mx-auto text-center">
            {/* Loading Animation */}
            <div className="relative mb-8">
              {/* Outer rotating circle */}
              <motion.div
                className="absolute top-1/2 left-1/2 w-24 h-24 border-4 border-t-blue-500 border-r-purple-500 border-b-indigo-500 border-l-transparent rounded-full"
                animate={{ rotate: 360 }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{ translateX: '-50%', translateY: '-50%' }}
              />
              
              {/* Inner rotating circle */}
              <motion.div
                className="absolute top-1/2 left-1/2 w-16 h-16 border-4 border-t-transparent border-r-blue-500 border-b-purple-500 border-l-indigo-500 rounded-full"
                animate={{ rotate: -360 }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{ translateX: '-50%', translateY: '-50%' }}
              />
              
              {/* Center dot */}
              <motion.div
                className="absolute top-1/2 left-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut"
                }}
                style={{ translateX: '-50%', translateY: '-50%' }}
              />
            </div>

           
          </div>
        </div>

        {/* Background Animation */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10">
          <motion.div
            className="w-[800px] h-[800px] rounded-full border-2 border-blue-200/20 dark:border-blue-700/20"
            animate={{
              rotate: 360,
              scale: [1, 1.1, 1],
            }}
            transition={{
              rotate: {
                duration: 30,
                repeat: Infinity,
                ease: "linear"
              },
              scale: {
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }
            }}
          />
        </div>
      </section>
      
      <Footer />
    </main>
  )
}