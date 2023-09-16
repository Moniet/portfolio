"use client"

import Card, { CardContainer } from "@/components/Card"
import Paragraph from "@/components/Paragraph"
import { AnimatePresence, motion } from "framer-motion"
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
import HomePageSkeleton from "./HomePage/HomePageSkeleton"

export default function Home() {
  return (
    <main>
      <AnimatePresence>
        <HomePageSkeleton />
      </AnimatePresence>
      <div className="flex min-h-screen w-full justify-start px-4 bg-black gap-4 flex-wrap mx-auto z-1">
        <AboutMeSection />
        <MyStackSection />
        <WorkExperienceSection />
        <MyWorkSection />
      </div>

      <CircleCursor bgColor="#fff" delay={0.4} />
    </main>
  )
}
