import "./globals.css"
import { Poppins } from "next/font/google"
import type React from "react"
import Navbar from "./components/navbar"
import { AuthProvider } from "./context/auth-context"

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600", "700"] })

export const metadata = {
  title: "SproutCircle Day Care",
  description: "Nurturing growth and learning in a circle of care",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-gradient-to-b from-green-50 to-green-100 min-h-screen`}>
        <AuthProvider>
          <Navbar />
          <main className="pt-16 bg-[url('/leaves-pattern.png')] bg-repeat">{children}</main>
        </AuthProvider>
      </body>
    </html>
  )
}



import './globals.css'