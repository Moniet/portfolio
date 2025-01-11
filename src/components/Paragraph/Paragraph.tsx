import React from "react"
import { WithChildren } from "@/types/helpers/WithChildren"
import classnames from "classnames"

type Props = WithChildren<{
  className?: string
}>

const Paragraph = ({ className, children }: Props) => {
  return (
    <p
      className={classnames(
        "text-sm sm:text-md text-zinc-900 tracking-wider leading-7 ",
        className
      )}
    >
      {children}
    </p>
  )
}

export default Paragraph
