"use client"

import Card, { CardContainer } from "@/components/Card"
import Paragraph from "@/components/Paragraph"
import { AnimatePresence, motion } from "motion/react"
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
import Testimonials from "@/components/Testimonials"
import { ReactLenis } from "lenis/react"

export default function Home() {
  return (
    <ReactLenis root>
      <main>
        <AnimatePresence>
          <HomePageSkeleton />
        </AnimatePresence>
        <div className="flex min-h-screen w-full justify-start px-4 gap-6 flex-wrap mx-auto z-1">
          <div className="flex max-md:flex-col gap-6">
            <AboutMeSection />
            <MyStackSection />
          </div>
          <WorkExperienceSection />
          <MyWorkSection />
          <Testimonials />
        </div>

        <CircleCursor bgColor="rgba(0, 0, 255, 0.789)" delay={0.4} />
      </main>
    </ReactLenis>
  )
}
