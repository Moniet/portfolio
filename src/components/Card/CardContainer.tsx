"use client"

import { WithChildren } from "@/types/helpers/WithChildren"
import { MotionProps, motion } from "framer-motion"

type Props = WithChildren<
  {
    className?: string
  } & MotionProps
>

const CardContainer = ({ children, className = "", ...rest }: Props) => {
  return (
    <motion.div
      className={`border-1 border-zinc-900 outline-1 outline outline-zinc-800 p-6 rounded-[20px] bg-[#111] flex ${className} hover:shadow-lg`}
      {...rest}
    >
      {children}
    </motion.div>
  )
}

export default CardContainer
