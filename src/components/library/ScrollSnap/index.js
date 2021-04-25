import { useRef, memo } from 'react'
import useScrollSnap from './useScrollSnap'

const ScrollSnap = ({ children, duration }) => {
  const container = useRef(null)

  useScrollSnap({
    container,
    animation: {
      duration,
    },
  })

  return <div ref={container}>{children}</div>
}

export default memo(ScrollSnap)
