"use client"

import type React from "react"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { Upload, FileText, Check, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { analyzeReport } from "@/lib/api"

export function UploadSection() {
  const [isDragging, setIsDragging] = useState(false)
  const [file, setFile] = useState<File | null>(null)
  const [isUploading, setIsUploading] = useState(false)
  const [isUploaded, setIsUploaded] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = () => {
    setIsDragging(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0])
    }
  }

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0])
    }
  }

  const handleFile = (file: File) => {
    if (file.type === "application/pdf") {
      setFile(file)
      analyzeReportFile(file)
    } else {
      alert("Please upload a PDF file")
    }
  }

  const analyzeReportFile = async (file: File) => {
    try {
      setIsUploading(true)
      setIsUploaded(false)

      console.log('Starting analysis for file:', file.name)
      const result = await analyzeReport(file)
      console.log('Analysis completed successfully:', result)
      
      // Here you can handle the result and update the UI accordingly
      // For example, you might want to show the scores or redirect to a results page
      
      setIsUploading(false)
      setIsUploaded(true)
    } catch (error: unknown) {
      console.error('Error analyzing report:', error)
      const errorMessage = error instanceof Error ? error.message : 'Please try again.'
      alert(`Error: ${errorMessage}`)
      setIsUploading(false)
    }
  }

  const triggerFileInput = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click()
    }
  }

  return (
    <section id="upload-section" className="min-h-screen flex items-center justify-center px-4 py-20 mt-16">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full max-w-4xl"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Upload Your ESG Report</h2>
          <p className="text-green-300 text-lg max-w-2xl mx-auto">
            Our AI will analyze your ESG report, generate a comprehensive scorecard, and securely store it on the
            blockchain.
          </p>
        </div>

        <Card className={`glassmorphism overflow-hidden ${isDragging ? "neon-glow" : ""}`}>
          <CardContent className="p-0">
            <div
              className="relative h-64 md:h-80 flex flex-col items-center justify-center p-6 text-center"
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
            >
              {!file && !isUploading && !isUploaded ? (
                <>
                  <div className="mb-4">
                    <Upload size={48} className="text-green-400 mx-auto" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Drag & Drop Your PDF Here</h3>
                  <p className="text-gray-400 mb-4">or</p>
                  <Button className="bg-green-600 hover:bg-green-500 text-black font-medium" onClick={triggerFileInput}>
                    Browse Files
                  </Button>
                  <input
                    ref={fileInputRef}
                    id="file-upload"
                    type="file"
                    accept=".pdf"
                    className="hidden"
                    onChange={handleFileInput}
                  />
                  <p className="text-gray-400 mt-4 text-sm">Supported format: PDF</p>
                </>
              ) : isUploading ? (
                <div className="flex flex-col items-center">
                  <Loader2 size={48} className="text-green-400 animate-spin mb-4" />
                  <h3 className="text-xl font-semibold">Uploading...</h3>
                  <div className="w-64 h-2 bg-gray-700 rounded-full mt-4 overflow-hidden">
                    <motion.div
                      className="h-full bg-green-400"
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 2 }}
                    />
                  </div>
                </div>
              ) : isUploaded ? (
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mb-4">
                    <Check size={32} className="text-green-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Upload Complete!</h3>
                  <p className="text-gray-400 mb-4">
                    {file?.name} ({Math.round((file?.size || 0) / 1024)} KB)
                  </p>
                  <div className="flex gap-4">
                    <Button
                      variant="outline"
                      className="border-green-600 text-green-400 hover:bg-green-600/20"
                      onClick={() => {
                        setFile(null)
                        setIsUploaded(false)
                      }}
                    >
                      Upload Another
                    </Button>
                    <Button className="bg-green-600 hover:bg-green-500 text-black">View Analysis</Button>
                  </div>
                </div>
              ) : (
                <div className="flex items-center">
                  <FileText size={32} className="text-green-400 mr-4" />
                  <div>
                    <p className="font-medium">{file?.name}</p>
                    <p className="text-gray-400 text-sm">{Math.round((file?.size || 0) / 1024)} KB</p>
                  </div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  )
}
