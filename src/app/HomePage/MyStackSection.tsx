import { CardContainer, CardHeader } from "@/components/Card"
import React from "react"
import { motion } from "motion/react"
import { RiBearSmileLine } from "react-icons/ri"
import {
  BiCode,
  BiCodeAlt,
  BiLogoFigma,
  BiLogoNodejs,
  BiLogoReact,
  BiLogoRedux,
  BiLogoTailwindCss,
  BiLogoTypescript,
} from "react-icons/bi"
import {
  SiCypress,
  SiPostgresql,
  SiStorybook,
  SiTestinglibrary,
} from "react-icons/si"
import { FaCodeBranch, FaFileCode, FaFire, FaLaptopCode } from "react-icons/fa"

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
    color: "blue",
    Icon: BiLogoFigma,
  },
  {
    label: "React Native",
    color: "deepskyblue",
    Icon: BiLogoReact,
  },
  {
    label: "Node.js",
    color: "green",
    Icon: BiLogoNodejs,
  },
  {
    label: "Hono.js",
    color: "tomato",
    Icon: FaFire,
  },
  {
    label: "Postgres",
    color: "#c00000",
    Icon: SiPostgresql,
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
  {
    label: "Zustand | State Library",
    color: "violet",
    Icon: RiBearSmileLine,
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
      className="px-4 py-3 rounded-md items-center  justify-center gap-1 bg-zinc-100 text-zinc-700 font-medium inline-flex flex-1 border-b-2  border-zinc-200"
    >
      <Icon className="size-[30px] min-w-[30px]" style={{ color }} />
      <span className="text-xs tracking-widest whitespace-nowrap">{label}</span>
    </motion.li>
  )
}

const MyStackSection = () => {
  return (
    <div className="flex flex-col flex-1 gap-5">
      <CardContainer className="flex">
        <CardHeader className="m-auto flex items-center justify-center gap-3 py-2 rounded-xl w-fit text-center mx-auto text-zinc-900 text-xl font-medium">
          <span className="text-zinc-900">
            <BiCodeAlt size={25} />
          </span>
          <span className="text-zinc-900 drop-shadow-lg">my tech stack</span>
        </CardHeader>
      </CardContainer>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="flex-1"
      >
        <CardContainer className="min-w-fit w-full flex-col flex-auto items-center justify-center h-full min-h-full max-h-fit">
          <div
            style={{ filter: "drop-shadow(1px 2px rgba(0,0,0,0))" }}
            className="w-full"
          ></div>
          <ul className="flex gap-2 flex-wrap h-full max-w-lg justify-center">
            {stackList.map((data, i) => (
              <StackItem {...data} key={i} delay={1 + i / 10} />
            ))}
          </ul>
        </CardContainer>
      </motion.div>
    </div>
  )
}

export default MyStackSection
