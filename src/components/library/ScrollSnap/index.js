import { useEffect, useRef } from 'react'
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

export default ScrollSnap
