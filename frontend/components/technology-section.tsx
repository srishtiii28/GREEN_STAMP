"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Brain, Database, Lock } from "lucide-react"

export function TechnologySection() {
  const technologies = [
    {
      icon: Brain,
      title: "AI Analysis",
      description:
        "Our advanced AI models analyze ESG reports to extract key metrics, identify trends, and provide actionable insights with high accuracy.",
      color: "from-green-500/20 to-green-700/20",
    },
    {
      icon: Database,
      title: "IPFS Storage",
      description:
        "Reports are stored on the InterPlanetary File System (IPFS), ensuring immutable, decentralized storage that can't be tampered with.",
      color: "from-blue-500/20 to-blue-700/20",
    },
    {
      icon: Lock,
      title: "Blockchain Verification",
      description:
        "Every analysis is verified and recorded on the EduChain blockchain, creating a transparent and auditable trail of ESG data.",
      color: "from-purple-500/20 to-purple-700/20",
    },
  ]

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
            How GreenStamp Works
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-green-300 text-lg max-w-2xl mx-auto"
          >
            Leveraging cutting-edge technology to revolutionize ESG reporting
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="glassmorphism h-full">
                <CardContent className="p-6">
                  <div className="mb-6">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${tech.color} p-4 mb-4`}>
                      <tech.icon className="w-full h-full text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{tech.title}</h3>
                    <p className="text-gray-400">{tech.description}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <Card className="glassmorphism overflow-hidden">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 md:grid-cols-3">
                <div className="p-6 md:col-span-2 flex flex-col justify-center">
                  <h3 className="text-2xl font-semibold mb-4">The GreenStamp Process</h3>
                  <ol className="space-y-4">
                    <li className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-green-900 flex items-center justify-center text-green-400 font-bold mr-3 shrink-0 mt-0.5">
                        1
                      </div>
                      <div>
                        <p className="font-medium">Upload your ESG report</p>
                        <p className="text-gray-400 text-sm">Securely upload your PDF report to our platform</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-green-900 flex items-center justify-center text-green-400 font-bold mr-3 shrink-0 mt-0.5">
                        2
                      </div>
                      <div>
                        <p className="font-medium">AI-powered analysis</p>
                        <p className="text-gray-400 text-sm">
                          Our AI extracts and analyzes key ESG metrics and performance indicators
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-green-900 flex items-center justify-center text-green-400 font-bold mr-3 shrink-0 mt-0.5">
                        3
                      </div>
                      <div>
                        <p className="font-medium">Decentralized storage</p>
                        <p className="text-gray-400 text-sm">
                          Your report is stored on IPFS with a unique hash identifier
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-green-900 flex items-center justify-center text-green-400 font-bold mr-3 shrink-0 mt-0.5">
                        4
                      </div>
                      <div>
                        <p className="font-medium">Blockchain verification</p>
                        <p className="text-gray-400 text-sm">
                          Analysis results are recorded on the blockchain for transparency
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-green-900 flex items-center justify-center text-green-400 font-bold mr-3 shrink-0 mt-0.5">
                        5
                      </div>
                      <div>
                        <p className="font-medium">Access comprehensive insights</p>
                        <p className="text-gray-400 text-sm">View your ESG scorecard and actionable recommendations</p>
                      </div>
                    </li>
                  </ol>
                </div>
                <div className="bg-gradient-to-br from-green-900/50 to-green-700/30 p-6 flex items-center justify-center">
                  <div className="relative w-full max-w-xs aspect-square">
                    <div className="absolute inset-0 rounded-full border-4 border-green-500/30 animate-spin-slow"></div>
                    <div
                      className="absolute inset-8 rounded-full border-4 border-green-400/40 animate-spin-slow"
                      style={{ animationDirection: "reverse" }}
                    ></div>
                    <div className="absolute inset-16 rounded-full border-4 border-green-300/50 animate-spin-slow"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-4xl font-bold text-green-400 neon-text">100%</div>
                        <div className="text-sm text-green-300">Transparent</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
