"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ConnectWallet } from "@/components/web3/connect-wallet"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/80 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-400 to-green-700 flex items-center justify-center mr-2">
              <span className="text-black font-bold text-sm">GS</span>
            </div>
            <span className="text-white font-bold text-xl">
              Green<span className="text-green-400">Stamp</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#about" className="text-gray-300 hover:text-green-400 transition-colors text-sm font-medium">
              About
            </Link>
            <Link
              href="#dashboard"
              className="text-gray-300 hover:text-green-400 transition-colors text-sm font-medium"
            >
              Dashboard
            </Link>
            <Link href="#docs" className="text-gray-300 hover:text-green-400 transition-colors text-sm font-medium">
              Docs
            </Link>
          </nav>

          {/* Connect Wallet Button */}
          <div className="hidden md:block">
            <ConnectWallet />
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link
              href="#about"
              className="text-gray-300 hover:text-green-400 transition-colors py-2 text-sm font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="#dashboard"
              className="text-gray-300 hover:text-green-400 transition-colors py-2 text-sm font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Dashboard
            </Link>
            <Link
              href="#docs"
              className="text-gray-300 hover:text-green-400 transition-colors py-2 text-sm font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Docs
            </Link>
            <div className="pt-2">
              <ConnectWallet />
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
