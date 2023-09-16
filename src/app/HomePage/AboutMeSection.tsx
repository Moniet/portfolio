"use client"

/* eslint-disable @next/next/no-img-element */

import { CardContainer } from "@/components/Card"
import Paragraph from "@/components/Paragraph"
import { motion } from "framer-motion"
import { IconType } from "react-icons"
import { BiLogoJavascript, BiLogoReact } from "react-icons/bi"
import classnames from "classnames"
import Image from "next/image"
import { FaArrowDown } from "react-icons/fa"

const Avatar = () => {
  return (
    <motion.div layout>
      <div className="rounded-full overflow-hidden bg-yellow-500 aspect-square w-28 h-28 shadow-inner flex items-center justify-center">
        <Image
          width={300}
          height={300}
          src={"/avatar.png"}
          alt="Profile Picture"
          className="rounded-full h-full h-full object-cover mt-1"
        />
      </div>
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
      className="flex-auto"
    >
      <CardContainer className="w-full h-full flex-col flex-auto min-w-ft p-4 sm:p8 items-center justify-center text-gray-300">
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
            <Paragraph className="mt-8 font-light max-w-prose text-center italic mt-0 w-auto sm:w-4/6 m-auto mb-8">
              <span className="text-2xl inline-block mb-4 italic font-medium ml-4">
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
              <InlineIcon Icon={BiLogoReact} /> React development <wbr />
              and a high passion for the{" "}
              <InlineIcon
                Icon={BiLogoJavascript}
                className="text-yellow-500"
              />{" "}
              JavaScript ecosystem. I&#39;m a stickler for clean code,
              performance, and strive for best practices.
            </Paragraph>
          </motion.div>
          <motion.a
            href="/Moniet_CV_Full_Stack.pdf"
            aria-label="Download Resume"
            download
            className="px-3 py-2 rounded text-sm text-gray-300 bg-neutral-800 flex items-center hover:bg-blue-800 transition-colors duration-300"
          >
            <span className="inline-block mr-2 -mb-[1px] pointer-events-none">
              <FaArrowDown size={12} />
            </span>
            Download Resume
          </motion.a>
        </div>
      </CardContainer>
    </motion.div>
  )
}

export default AboutMeSection
