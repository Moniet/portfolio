import Nav from "@/components/Nav/Nav"
import "./globals.css"
import { Karla } from "next/font/google"
import type { Metadata } from "next/types"

const inter = Karla({ subsets: ["latin"] })

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
      <body className={`${inter.className}  text-zinc-800 bg-[#fff]`}>
        <div className="mx-auto w-full max-w-[900px] pb-[80px]">
          <Nav />
          <div className="w-full h-full z-5 relative block">{children}</div>
        </div>
      </body>
    </html>
  )
}
