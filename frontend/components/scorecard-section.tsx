"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import { Copy, CheckCircle, AlertCircle, Info } from "lucide-react"

export function ScoreCardSection() {
  const [timestamp, setTimestamp] = useState('')

  useEffect(() => {
    setTimestamp(new Date().toLocaleString())
  }, [])
  const [copied, setCopied] = useState(false)

  const copyHash = () => {
    navigator.clipboard.writeText("QmX7bVbcD2X5Y6Z8a9W0V1U2X3Y4Z5a6B7C8D9E0F1G2")
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            AI ESG Scorecard
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-green-300 text-lg max-w-2xl mx-auto"
          >
            Real-time analysis of your ESG report with blockchain verification
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <Card className="glassmorphism h-full">
              <CardHeader>
                <CardTitle className="text-2xl text-green-400">ESG Performance Score</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="relative">
                    <svg width="180" height="180" viewBox="0 0 100 100">
                      <circle cx="50" cy="50" r="45" fill="none" stroke="#1e3a2e" strokeWidth="10" />
                      <motion.circle
                        className="progress-ring-circle"
                        cx="50"
                        cy="50"
                        r="45"
                        fill="none"
                        stroke="#16A15E"
                        strokeWidth="10"
                        strokeDasharray="282.7"
                        initial={{ strokeDashoffset: 282.7 }}
                        whileInView={{ strokeDashoffset: 282.7 * (1 - 0.78) }}
                        transition={{ duration: 1.5, delay: 0.5 }}
                        viewport={{ once: true }}
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-4xl font-bold text-green-400 neon-text">78</span>
                    </div>
                  </div>

                  <div className="flex-1 space-y-4">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="font-medium">Environmental</span>
                        <span className="text-green-400">82/100</span>
                      </div>
                      <div className="w-full bg-green-950 rounded-full h-2.5">
                        <motion.div
                          className="bg-green-500 h-2.5 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: "82%" }}
                          transition={{ duration: 1, delay: 0.2 }}
                          viewport={{ once: true }}
                        />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="font-medium">Social</span>
                        <span className="text-green-400">75/100</span>
                      </div>
                      <div className="w-full bg-green-950 rounded-full h-2.5">
                        <motion.div
                          className="bg-green-500 h-2.5 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: "75%" }}
                          transition={{ duration: 1, delay: 0.4 }}
                          viewport={{ once: true }}
                        />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="font-medium">Governance</span>
                        <span className="text-green-400">77/100</span>
                      </div>
                      <div className="w-full bg-green-950 rounded-full h-2.5">
                        <motion.div
                          className="bg-green-500 h-2.5 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: "77%" }}
                          transition={{ duration: 1, delay: 0.6 }}
                          viewport={{ once: true }}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 space-y-4">
                  <h3 className="text-xl font-semibold">Key Insights</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle size={20} className="text-green-400 mt-1 shrink-0" />
                      <span>Carbon emissions reduced by 15% compared to previous year</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle size={20} className="text-green-400 mt-1 shrink-0" />
                      <span>Diversity and inclusion metrics exceed industry average by 12%</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertCircle size={20} className="text-amber-400 mt-1 shrink-0" />
                      <span>Supply chain transparency needs improvement</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Info size={20} className="text-blue-400 mt-1 shrink-0" />
                      <span>Board independence meets all regulatory requirements</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <Card className="glassmorphism">
              <CardHeader>
                <CardTitle className="text-xl text-green-400">IPFS Storage</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium text-gray-400 mb-1">IPFS Hash</h4>
                    <div className="flex items-center">
                      <div className="bg-green-950 p-2 rounded text-xs md:text-sm font-mono text-green-300 overflow-hidden overflow-ellipsis flex-1">
                        QmX7bVbcD2X5Y6Z8a9W0V1U2X3Y4Z5a6B7C8D9E0F1G2
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="ml-2 text-green-400 hover:text-green-300 hover:bg-green-950"
                        onClick={copyHash}
                      >
                        {copied ? <CheckCircle size={18} /> : <Copy size={18} />}
                      </Button>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium text-gray-400 mb-1">Timestamp</h4>
                    <div className="bg-green-950 p-2 rounded">
                      <div className="text-green-300 text-sm">{timestamp}</div>
                    </div>
                  </div>

                  <Button className="w-full bg-green-800 hover:bg-green-700 text-white">View on IPFS Gateway</Button>
                </div>
              </CardContent>
            </Card>

            <Card className="glassmorphism">
              <CardHeader>
                <CardTitle className="text-xl text-green-400">AI Analysis Details</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Model</span>
                    <span>GreenGPT v2.1</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Analysis Time</span>
                    <span>3.2 seconds</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Data Points</span>
                    <span>1,245</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Confidence</span>
                    <span className="text-green-400">High (94%)</span>
                  </div>

                  <Button
                    variant="outline"
                    className="w-full mt-2 border-green-700 text-green-400 hover:bg-green-900/50"
                  >
                    Download Full Report
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
