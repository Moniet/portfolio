import * as React from "react"
import { createPortal } from "react-dom"
import { motion, useMotionValue } from "motion/react"

const useMousePosition = () => {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const [isHovering, setIsHovering] = React.useState("")

  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)

      const t = (e.target as HTMLDivElement).nodeName

      if (["A", "BUTTON", "IMG"].includes(t)) {
        setIsHovering(t)
      } else if (isHovering) {
        setIsHovering("")
      }
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [isHovering])

  return [mouseX, mouseY, isHovering]
}

type Props = {
  delay: number
  hideDefaultCursor: boolean
  size: number
  hoverScale: number
  bgColor: string
  borderColor: string
  opacity: number
  opacityOnHover: number
  borderWidth: number
  text?: string
}

const CircleCursor = ({
  delay = 0.3,
  size = 25,
  opacity = 1,
  opacityOnHover = 0.5,
  borderColor = "transparent",
  borderWidth = 0,
  hoverScale = 3,
  bgColor = "deepskyblue",
  hideDefaultCursor = false,
}: Partial<Props>) => {
  const [mouseX, mouseY, isHovering] = useMousePosition()
  const [cont, setCont] = React.useState<HTMLDivElement>()
  const isServer = !!globalThis.window

  React.useEffect(() => {
    const container = document.createElement("div")
    container.setAttribute("data-type", "fc-cursor")
    document.body.appendChild(container)
    setCont(container)

    if (hideDefaultCursor) {
      document.body.style.cursor = "none"
    }

    return () => {
      document.body.removeChild(container)
    }
  }, [isServer])

  if (!cont) return null

  return createPortal(
    <>
      <motion.div
        className="fixed top-0 left-0 z-cursor pointer-events-none w-fit h-fit min-w-[20px] min-h-[20px] origin-center ease-out "
        style={
          {
            // filter: "subtract(100%)",
            x: mouseX,
            y: mouseY,
            scale: isHovering ? hoverScale : 1,
            transitionDuration: `${delay}s`,
            transformOrigin: "center center",
            opacity: isHovering ? opacityOnHover : opacity,
          } as any
        }
      >
        <div className="w-max h-max -translate-x-2/4 -translate-y-2/4 pointer-events-none">
          <motion.div
            className="pointer-events-none rounded-full backdrop-invert"
            style={
              {
                x: 0,
                y: 0, //
                "--color": bgColor,
                width: size + "px",
                height: size + "px",
                "border-color": borderColor,
                "border-width": borderWidth + "px",
                backgroundColor: bgColor,
              } as any
            }
          />
        </div>
      </motion.div>
    </>,
    cont
  )
}

export default CircleCursor
