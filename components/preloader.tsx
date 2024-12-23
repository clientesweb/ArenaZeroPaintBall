'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { militaryFont } from '../utils/fonts'

export function Preloader() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000) // 3 seconds for demo
  }, [])

  if (!loading) return null

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 2.5 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#006400]"
    >
      <div className="relative w-32 h-32">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1.2, 1] }}
          transition={{ duration: 1.5, times: [0, 0.8, 1] }}
          className="absolute inset-0 border-4 border-white rounded-full"
        />
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="w-4 h-4 bg-white rounded-full" />
        </motion.div>
      </div>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        className={`${militaryFont.className} absolute bottom-10 text-white text-xl`}
      >
        Arena Zero Paintball
      </motion.p>
    </motion.div>
  )
}

