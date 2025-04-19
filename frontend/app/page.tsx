import { HeroSection } from "@/components/hero-section"
import { UploadSection } from "@/components/upload-section"
import { ScoreCardSection } from "@/components/scorecard-section"
import { SmartContractSection } from "@/components/smart-contract-section"
import { HistoryDashboard } from "@/components/history-dashboard"
import { MobileUploadButton } from "@/components/mobile-upload-button"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black to-green-950 text-white">
      <HeroSection />
      <UploadSection />
      <ScoreCardSection />
      <SmartContractSection />
      <HistoryDashboard />
      <MobileUploadButton />
    </main>
  )
}
