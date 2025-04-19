"use client"

import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  const scrollToUpload = () => {
    const uploadSection = document.getElementById("upload-section")
    if (uploadSection) {
      uploadSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative h-screen flex flex-col items-center justify-center px-4 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="animated-globe" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-green-950/80" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="z-10 text-center max-w-4xl"
      >
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold mb-6 tracking-tight"
        >
          <span className="text-white">Green</span>
          <span className="text-green-400 neon-text">Stamp</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-xl md:text-3xl text-green-100 mb-10"
        >
          Verify. Analyze. Decentralize ESG Data.
        </motion.p>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8, duration: 0.8 }}>
          <Button
            size="lg"
            className="bg-green-500 hover:bg-green-400 text-black font-semibold px-8 py-6 rounded-full neumorphic"
            onClick={scrollToUpload}
          >
            Upload ESG Report
          </Button>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 z-10"
      >
        <Button variant="ghost" size="icon" className="text-green-400 animate-bounce-slow" onClick={scrollToUpload}>
          <ChevronDown size={32} />
        </Button>
      </motion.div>
    </section>
  )
}
