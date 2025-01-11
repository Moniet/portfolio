"use client"

import { WithChildren } from "@/types/helpers/WithChildren"
import { MotionProps, motion } from "motion/react"
import classnames from "classnames"

type Props = WithChildren<
  {
    className?: string
    neoBrutalBorders?: boolean
  } & MotionProps
>

const CardContainer = ({
  children,
  className = "",
  neoBrutalBorders = true,
  ...rest
}: Props) => {
  return (
    <motion.div
      className={classnames(
        `outline-1 outline bg-zinc-50
         outline-zinc-200 p-6 rounded-md  flex transition-shadow duration-500`,
        neoBrutalBorders ? "text-zinc-200 [box-shadow:5px_5px_0px]" : "",
        className
      )}
      {...rest}
    >
      {children}
    </motion.div>
  )
}

export default CardContainer
