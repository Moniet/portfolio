"use client"

/* eslint-disable @next/next/no-img-element */

import { CardContainer } from "@/components/Card"
import Paragraph from "@/components/Paragraph"
import { motion } from "motion/react"
import { IconType } from "react-icons"
import {
  BiLogoJavascript,
  BiLogoReact,
  BiPhoneCall,
  BiSolidPhoneCall,
} from "react-icons/bi"
import classnames from "classnames"
import Image from "next/image"
import { FaArrowCircleDown } from "react-icons/fa"

const Avatar = () => {
  return (
    <motion.div layout>
      <motion.div
        className="rounded-full overflow-visible bg-yellow-500 aspect-square w-28 h-28 flex items-center justify-center border border-zinc-500 shadow-inner "
        initial={{ scale: 0.8 }}
        animate={{ scale: 1, transition: { duration: 0.5, delay: 1 } }}
      >
        <Image
          width={300}
          height={300}
          src={"/avatar.png"}
          alt="Profile Picture"
          className="rounded-full h-[115%] object-cover mt-1 -translate-y-[8.4%] drop-shadow-lg"
        />
      </motion.div>
    </motion.div>
  )
}

const InlineIcon = ({
  Icon,
  className = "",
}: {
  Icon: IconType
  className?: string
}) => (
  <span className="inline-block items-baseline">
    <Icon
      size={18}
      className={classnames("inline-block text-blue-500", className)}
      style={{ verticalAlign: "text-top" }}
    />
  </span>
)

const AboutMeSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className="flex-[1] "
    >
      <CardContainer className="w-full h-full flex-col flex-auto py-8 items-center justify-center ">
        <div className="flex flex-col gap-4 items-center justify-center">
          <div className="flex flex-col w-full gap-8 max-h-fit items-center justify-center">
            <motion.div
              initial={{
                opacity: 0,
                height: "0px",
                y: -20,
                filter: "blur(10px)",
              }}
              animate={{
                height: "85px",
                y: 0,
                opacity: 1,
                filter: "blur(0px)",
              }}
              transition={{
                type: "spring",
                duration: 2,
                delay: 0.3,
              }}
            >
              <Avatar />
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
          >
            <Paragraph className="mt-8 font-light text-center italic w-auto m-auto mb-8 ">
              <span className="text-2xl inline-block mb-4 italic font-medium ml-4 ">
                Hey there{" "}
              </span>
              <motion.span
                style={{ display: "inline-block" }}
                animate={{ rotate: ["0", "45deg", "20deg", "45deg", "0"] }}
                transition={{
                  repeat: Infinity,
                  repeatDelay: 4,
                  delay: 4,
                }}
                className="text-2xl ml-4"
              >
                👋
              </motion.span>{" "}
              <br />
              I&#39;m a full-stack developer with expertise in{" "}
              <InlineIcon Icon={BiLogoReact} /> <b className="">React</b>{" "}
              {/* <wbr /> */}
              and a deep passion for the{" "}
              <InlineIcon
                Icon={BiLogoJavascript}
                className="text-yellow-500"
              />{" "}
              JavaScript ecosystem. With extensive experience in{" "}
              <b className="">web & mobile app development,</b> I&#39;m a
              stickler for clean code, performance, and best practices.
            </Paragraph>
          </motion.div>
          <div className="flex gap-2">
            <motion.a
              href="/Moniet_CV_Full_Stack.pdf"
              aria-label="Download Resume"
              download
              className="px-5 py-2 flex-1 rounded text-sm text-zinc-900 bg-blue-400 flex items-center hover:bg-blue-500 transition-colors duration-300 border border-black border-b-2"
            >
              <span className="inline-block mr-2 -mb-[1px] pointer-events-none">
                <FaArrowCircleDown size={12} />
              </span>
              Resume
            </motion.a>
            <a
              href={`mailto:hello@moniet.dev?subject='We are looking to hire you'&body='Hi Moniet,We would love to hire you for our project. It is an {mvp/landing page/etc.} and expected timeline is about {X}weeks. We would be delighted to continue the discussion and see how you can help with our vision. Best,{Your Name}`}
              aria-label="Download Resume"
              className="px-5 py-2 rounded flex-1 text-sm text-zinc-900 bg-yellow-400 border border-zinc-900 border-b-2 flex items-center hover:bg-yellow-500 transition-colors duration-300"
            >
              <span className="inline-block mr-2 -mb-[1px] pointer-events-none">
                <BiSolidPhoneCall size={12} />
              </span>
              Hire Me
            </a>
          </div>
        </div>
      </CardContainer>
    </motion.div>
  )
}

export default AboutMeSection
