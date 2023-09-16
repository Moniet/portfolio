"use client"

import Card, { CardContainer } from "@/components/Card"
import Paragraph from "@/components/Paragraph"
import { motion } from "framer-motion"
import { ReactElement } from "react"
import { IconType } from "react-icons"
import { BiLogoJavascript, BiLogoReact } from "react-icons/bi"
import classnames from "classnames"
import AboutMeSection from "./HomePage/AboutMeSection"
import MyStackSection from "./HomePage/MyStackSection"
import WorkExperienceSection from "./HomePage/WorkExperienceSection"
import MyWorkSection from "./HomePage/MyWorkSection"
import Head from "next/head"
import CircleCursor from "@/components/CustomCursor"

export default function Home() {
  return (
    <main>
      <div className="flex min-h-screen w-full justify-start p-4 bg-black gap-4 flex-wrap mx-auto">
        <AboutMeSection />
        <MyStackSection />
        <WorkExperienceSection />
        <MyWorkSection />
      </div>

      <CircleCursor bgColor="#fff" delay={0.4} />
    </main>
  )
}
