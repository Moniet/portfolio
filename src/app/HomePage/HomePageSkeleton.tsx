import React, { useEffect, useRef, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

const HomePageSkeleton = () => {
  const [isMounted, setIsMounted] = useState(false)
  const [remove, setRemove] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    let anim = ref.current?.animate(
      [
        {
          opacity: 1,
        },
        {
          opacity: 0,
        },
      ],
      {
        duration: 250,
      }
    )

    if (anim) {
      anim.onfinish = () => {
        setRemove(true)
      }
    }
  }, [isMounted])

  if (remove) return null

  return (
    <div
      className="flex flex-row w-full min-h-screen h-full gap-4 relative z-1 flex-wrap p-4"
      ref={ref}
    >
      <div className="rounded-lg bg-zinc-900 flex-auto animate-pulse min-h-[500px] min-w-[300px] sm:min-w-[40%]" />
      <div className="rounded-lg bg-zinc-900 flex-auto animate-pulse min-h-[500px] min-w-[300px] sm:w-[50%] " />
      <div className="rounded-lg bg-zinc-900 flex-auto animate-pulse min-h-[500px] min-w-[300px] " />
      <div className="rounded-lg bg-zinc-900 flex-auto animate-pulse min-h-[500px] min-w-[300px] " />
    </div>
  )
}

export default HomePageSkeleton
