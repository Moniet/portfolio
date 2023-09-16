import { CardContainer, CardHeader } from "@/components/Card"
import React from "react"
import { motion } from "framer-motion"
import {
  BiHeart,
  BiLogoFigma,
  BiLogoNodejs,
  BiLogoPostgresql,
  BiLogoReact,
  BiLogoRedux,
  BiLogoTailwindCss,
  BiLogoTypescript,
  BiSolidHeart,
  BiTestTube,
} from "react-icons/bi"
import {
  SiCypress,
  SiExpress,
  SiMysql,
  SiStorybook,
  SiTestinglibrary,
} from "react-icons/si"

const stackList = [
  {
    label: "TypeScript",
    color: "deepskyblue",
    Icon: BiLogoTypescript,
  },
  {
    label: "React",
    color: "blue",
    Icon: BiLogoReact,
  },
  {
    label: "Redux",
    color: "purple",
    Icon: BiLogoRedux,
  },
  {
    label: "Tailwind",
    color: "skyblue",
    Icon: BiLogoTailwindCss,
  },
  {
    label: "Storybook",
    color: "hotpink",
    Icon: SiStorybook,
  },
  {
    label: "Figma",
    color: "white",
    Icon: BiLogoFigma,
  },
  {
    label: "React Native",
    color: "deepskyblue",
    Icon: BiLogoReact,
  },
  {
    label: "Node.js",
    color: "yellow",
    Icon: BiLogoNodejs,
  },
  {
    label: "Express.js",
    color: "white",
    Icon: SiExpress,
  },
  {
    label: "MySQL",
    color: "#ddcc14",
    Icon: SiMysql,
  },
  {
    label: "Cypress",
    color: "#14dd89",
    Icon: SiCypress,
  },
  {
    label: "React Testing Library",
    color: "red",
    Icon: SiTestinglibrary,
  },
]

type StackProps = (typeof stackList)[0] & { delay: number }

const StackItem = ({ Icon, color, label, delay }: StackProps) => {
  return (
    <motion.li
      initial={{
        opacity: 0,
        y: -5,
        filter: "blur(10px)",
      }}
      animate={{
        opacity: 1,
        filter: "blur(0px)",
        y: 0,
      }}
      transition={{
        delay,
        duration: 0.5,
      }}
      className="flex px-3 py-2 rounded-md items-center justify-center gap-2 outline-1  outline  outline-zinc-800 text-slate-200 inline-block flex-auto h-fit w-fit max-h-fit"
    >
      <Icon size={25} style={{ color }} />
      <span className="text-xs font-light tracking-widest">{label}</span>
    </motion.li>
  )
}

const MyStackSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
      className="flex-1 min-w-fit"
    >
      <CardContainer className="min-w-fit w-full flex-col flex-auto items-center justify-start gap-8 h-full max-h-fit">
        <div>
          <CardHeader>Technology I use</CardHeader>
        </div>
        <ul className="flex gap-2 flex-wrap max-w-lg">
          {stackList.map((data, i) => (
            <StackItem {...data} key={i} delay={1 + i / 10} />
          ))}
        </ul>
      </CardContainer>
    </motion.div>
  )
}

export default MyStackSection
