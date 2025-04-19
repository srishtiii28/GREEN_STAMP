"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, ExternalLink } from "lucide-react"
import { useState, useEffect } from "react"

export function SmartContractSection() {
  const [isConnected, setIsConnected] = useState(false)

  // Check if wallet is connected (simplified for preview)
  useEffect(() => {
    // Mock wallet connection check
    const checkWalletConnection = () => {
      // For demo purposes, we'll check localStorage
      const connected = localStorage.getItem("walletConnected") === "true"
      setIsConnected(connected)
    }

    checkWalletConnection()

    // Set up event listener for wallet connection changes
    window.addEventListener("storage", checkWalletConnection)

    return () => {
      window.removeEventListener("storage", checkWalletConnection)
    }
  }, [])

  return (
    <section className="py-20 px-4 bg-black/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Smart Contract Verification
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-green-300 text-lg max-w-2xl mx-auto"
          >
            Immutable blockchain verification of your ESG data
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card className="glassmorphism h-full">
              <CardHeader>
                <CardTitle className="text-2xl text-green-400">Contract Status</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex items-center gap-3 bg-green-950/50 p-4 rounded-lg">
                    <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse-slow"></div>
                    <div>
                      <p className="font-medium text-green-300">Verified on EduChain Testnet</p>
                      <p className="text-sm text-gray-400">Transaction confirmed: 12 blocks</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Contract Address</span>
                      <span className="font-mono text-sm text-green-300">0x71C...F9E2</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Network</span>
                      <span>EduChain Testnet</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Block Number</span>
                      <span>8,421,956</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Gas Used</span>
                      <span>124,532</span>
                    </div>
                  </div>

                  <div className="pt-2">
                    <Button className="w-full bg-green-700 hover:bg-green-600 text-white flex items-center justify-center gap-2">
                      <ExternalLink size={16} />
                      <span>View on Blockchain Explorer</span>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="glassmorphism h-full">
              <CardHeader>
                <CardTitle className="text-2xl text-green-400">Verification Details</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-2">
                      <CheckCircle size={20} className="text-green-400 mt-1 shrink-0" />
                      <div>
                        <p className="font-medium">ESG Report Hash</p>
                        <p className="text-sm text-gray-400">Report hash verified and stored on-chain</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle size={20} className="text-green-400 mt-1 shrink-0" />
                      <div>
                        <p className="font-medium">AI Analysis Results</p>
                        <p className="text-sm text-gray-400">Analysis results stored immutably</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle size={20} className="text-green-400 mt-1 shrink-0" />
                      <div>
                        <p className="font-medium">Timestamp Verification</p>
                        <p className="text-sm text-gray-400">Report timestamp verified by blockchain</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-green-950/50 p-4 rounded-lg">
                    <p className="text-sm text-gray-300">
                      {isConnected
                        ? "Your wallet is connected. You can verify ownership of this ESG report."
                        : "Connect your wallet to verify ownership of this ESG report."}
                    </p>
                  </div>

                  <div className="pt-2">
                    <Button className="w-full bg-green-700 hover:bg-green-600 text-white" disabled={!isConnected}>
                      Verify Ownership
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
