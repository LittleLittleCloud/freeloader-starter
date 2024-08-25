'use client'

import { SessionProvider } from "next-auth/react"
import AppBar from "./AppBar"

export default function ClientProvider({ children }: { children: React.ReactNode }) {
  return <SessionProvider>
    <AppBar title="My App" />
    {children}
  </SessionProvider>
}