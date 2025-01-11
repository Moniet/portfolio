import { WithChildren } from "@/types/helpers/WithChildren"
import React from "react"

const CardHeader = ({
  children,
  className,
}: WithChildren<{ className?: string }>) => {
  return (
    <>
      <h2
        className={`text-2xl font-bold text-zinc-800 text-center capitalize tracking-wider ${className}`}
        style={{ fontKerning: "normal" }}
      >
        {children}
      </h2>
    </>
  )
}

export default CardHeader
