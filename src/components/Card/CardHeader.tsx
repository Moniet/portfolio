import { WithChildren } from "@/types/helpers/WithChildren"
import React from "react"

const CardHeader = ({ children }: WithChildren<{}>) => {
  return (
    <>
      <h2 className="text-xl text-gray-300 tracking-widest text-center my-8 uppercase">
        {children}
      </h2>
    </>
  )
}

export default CardHeader
