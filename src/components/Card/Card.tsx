"use client"

import { WithChildren } from "@/types/helpers/WithChildren"
import { motion } from "motion/react"
import { ReactNode, useEffect, useRef, useState } from "react"

type Props = WithChildren<{}>

const Card = ({ children }: Props) => {
  const [isOpen, setIsOpen] = useState(false)
  const [showGhost, setShowGhost] = useState(false)
  const [onCloseStart, setOnCloseStart] = useState(false)
  const [width, setWidth] = useState("")
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const getAndSetWidth: FrameRequestCallback = () => {
      const { width } = ref.current?.getBoundingClientRect() || {}
      width && setWidth(width + "px")
    }

    let timer: NodeJS.Timeout | null = null

    window.addEventListener("resize", () => {
      if (timer) clearTimeout(timer)
      timer = setTimeout(() => {
        requestAnimationFrame(getAndSetWidth)
      }, 100)
    })

    getAndSetWidth(0)
  }, [])

  return (
    <>
      <div>
        <motion.div
          ref={ref}
          onClick={() => {
            setIsOpen(!isOpen)
            if (isOpen) setShowGhost(true)
            else setOnCloseStart(true)
          }}
          onAnimationComplete={() => {
            if (!isOpen) {
              setShowGhost(false)
              setOnCloseStart(false)
            }
          }}
          transition={{
            damping: 30,
            stiffness: 300,
            type: "spring",
          }}
          animate={{
            position: isOpen ? "fixed" : "relative",
            top: isOpen ? "1rem" : 0,
            left: isOpen ? "1rem" : 0,
            width: isOpen ? "calc(100vw - 2rem)" : "100%",
            height: isOpen ? "calc(100vh - 2rem)" : "100%",
            zIndex: isOpen ? 1000 : 1,
            // maxWidth: showGhost ? width : "none",
          }}
          initial={false}
          className="border-1 border-neutral-800 outline-2 outline outline-neutral-900 p-4 rounded-md bg-zinc-800 w-full h-full"
        >
          {children}
        </motion.div>
      </div>
      {isOpen && <div style={{ width }} />}
    </>
  )
}

export default Card
