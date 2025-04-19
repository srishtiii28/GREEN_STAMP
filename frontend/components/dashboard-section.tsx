"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { FileText, Calendar, BarChart, ArrowRight } from "lucide-react"

export function DashboardSection() {
  const reports = [
    {
      id: 1,
      title: "Annual Sustainability Report 2023",
      date: "Mar 15, 2023",
      score: 78,
      type: "Annual Report",
      icon: FileText,
    },
    {
      id: 2,
      title: "Q2 Environmental Impact Assessment",
      date: "Jun 30, 2023",
      score: 82,
      type: "Quarterly Report",
      icon: Calendar,
    },
    {
      id: 3,
      title: "Carbon Footprint Analysis",
      date: "Sep 12, 2023",
      score: 75,
      type: "Special Report",
      icon: BarChart,
    },
    {
      id: 4,
      title: "Supply Chain ESG Evaluation",
      date: "Nov 05, 2023",
      score: 71,
      type: "Special Report",
      icon: BarChart,
    },
  ]

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
            ESG History Dashboard
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-green-300 text-lg max-w-2xl mx-auto"
          >
            Track your ESG performance over time with our comprehensive dashboard
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reports.map((report, index) => (
            <motion.div
              key={report.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="glassmorphism h-full card-hover">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-full bg-green-900/50 flex items-center justify-center">
                      <report.icon size={20} className="text-green-400" />
                    </div>
                    <div className="flex items-center">
                      <span className="text-xl font-bold text-green-400">{report.score}</span>
                      <span className="text-gray-400 text-sm ml-1">/100</span>
                    </div>
                  </div>

                  <h3 className="font-semibold mb-1 line-clamp-2">{report.title}</h3>

                  <div className="flex justify-between text-sm text-gray-400 mb-4">
                    <span>{report.type}</span>
                    <span>{report.date}</span>
                  </div>

                  <div className="flex items-center text-green-400 text-sm font-medium mt-auto group cursor-pointer">
                    <span>View Details</span>
                    <ArrowRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="inline-block bg-green-900/30 px-4 py-2 rounded-full text-green-300 text-sm">
            <span className="mr-2">+</span> 12 more reports in your archive
          </div>
        </motion.div>
      </div>
    </section>
  )
}
