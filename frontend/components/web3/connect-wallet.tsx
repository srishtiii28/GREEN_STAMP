"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Wallet, ChevronDown, LogOut, Copy, CheckCircle } from "lucide-react"

// Simplified wallet connection component that doesn't rely on wagmi hooks
export function ConnectWallet() {
  const [isConnected, setIsConnected] = useState(false)
  const [address, setAddress] = useState<string | null>(null)
  const [copied, setCopied] = useState(false)

  const connectWallet = async () => {
    // Mock wallet connection for preview
    setAddress("0x71C7656EC7ab88b098defB751B7401B5f6d8976F")
    setIsConnected(true)
  }

  const disconnectWallet = () => {
    setAddress(null)
    setIsConnected(false)
  }

  const formatAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`
  }

  const copyAddress = () => {
    if (address) {
      navigator.clipboard.writeText(address)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  if (isConnected && address) {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            className="border-green-700 bg-green-950/50 text-green-400 hover:bg-green-900/50 hover:text-green-300"
          >
            <Wallet className="mr-2 h-4 w-4" />
            {formatAddress(address)}
            <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-56 glassmorphism border-green-900/50">
          <DropdownMenuLabel className="text-green-400">Connected Wallet</DropdownMenuLabel>
          <DropdownMenuSeparator className="bg-green-900/50" />
          <DropdownMenuItem className="flex cursor-pointer items-center justify-between" onClick={copyAddress}>
            <span className="font-mono text-sm">{formatAddress(address)}</span>
            {copied ? <CheckCircle className="h-4 w-4 text-green-400" /> : <Copy className="h-4 w-4" />}
          </DropdownMenuItem>
          <DropdownMenuItem
            className="flex cursor-pointer items-center text-red-400 hover:text-red-300"
            onClick={disconnectWallet}
          >
            <LogOut className="mr-2 h-4 w-4" />
            Disconnect
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    )
  }

  return (
    <Button className="bg-green-600 hover:bg-green-500 text-black font-medium" onClick={connectWallet}>
      <Wallet className="mr-2 h-4 w-4" />
      Connect Wallet
    </Button>
  )
}
