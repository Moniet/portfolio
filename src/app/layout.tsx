import Nav from "@/components/Nav/Nav"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Head from "next/head"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Moniet Sawhney : Full-stack JavaScript Developer",
  description:
    "Moniet Sawhney is a highly experienced full-stack developer with an experitise in building React and Node.js applications",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black`}>
        <Nav />
        <div className="mx-auto w-full max-w-[1600px] pb-[80px] z-1 relative">
          {children}
        </div>
      </body>
    </html>
  )
}
