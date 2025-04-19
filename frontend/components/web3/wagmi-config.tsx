"use client"

import type React from "react"
import { createConfig, WagmiConfig as WagmiConfigProvider } from "wagmi"
import { getDefaultConfig } from "@rainbow-me/rainbowkit"
import { mainnet, sepolia } from "wagmi/chains"

// Set up wagmi config with a simpler approach
const config = createConfig(
  getDefaultConfig({
    appName: "GreenStamp",
    projectId: "your-project-id", // Replace with your WalletConnect project ID
    chains: [mainnet, sepolia],
  }),
)

export function WagmiConfig({ children }: { children: React.ReactNode }) {
  return <WagmiConfigProvider config={config}>{children}</WagmiConfigProvider>
}
