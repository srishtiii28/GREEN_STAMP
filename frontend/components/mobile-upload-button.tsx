"use client"

import { useState, useEffect } from "react"
import { Upload } from "lucide-react"
import { Button } from "@/components/ui/button"

export function MobileUploadButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const uploadSection = document.getElementById("upload-section")
      if (uploadSection) {
        const rect = uploadSection.getBoundingClientRect()
        // Show FAB when scrolled past the upload section
        setIsVisible(rect.bottom < 0)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToUpload = () => {
    const uploadSection = document.getElementById("upload-section")
    if (uploadSection) {
      uploadSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-6 right-6 md:hidden z-50 fadeIn">
      <Button
        size="icon"
        className="w-14 h-14 rounded-full bg-green-500 hover:bg-green-400 text-black shadow-lg neon-glow"
        onClick={scrollToUpload}
      >
        <Upload size={24} />
      </Button>
    </div>
  )
}
