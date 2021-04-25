import { animate } from 'popmotion'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import useScrollStopped from 'src/hooks/useScrollStopped'

// TODO
// RESIZE EVENT HANDLER

const useScrollSnap = ({ container, animation: { duration = 1000 } }) => {
  const snapping = useRef(null)
  const getSnapping = () => snapping.current
  const setSnapping = (bool) => (snapping.current = bool)

  const getDimensions = useCallback(() => {
    const { top, height } = container.current?.getBoundingClientRect() || {}
    const { scrollY } = global.window || {}
    const yPos = Math.round(scrollY)
    const containerTop = Math.abs(top + yPos) // calculating top & bottom positions (useful if user reloads page already scrolled)
    const containerBottom = containerTop + height
    const containerCenter = containerBottom - Math.floor(height / 2)

    return {
      containerCenter,
      containerTop,
      containerBottom,
      height,
    }
  }, [])

  const animateScrollSnap = ({ from, to }) =>
    animate({
      from,
      to,
      duration,
      onPlay: () => setSnapping(true),
      onUpdate: (scrollPos) => window?.scroll(0, scrollPos),
      onComplete: () => setSnapping(false),
    })

  const onScrollStop = useCallback(() => {
    const { containerCenter, containerTop, containerBottom } = getDimensions()

    const yPos = global.window?.scrollY

    const shouldScrollToElementTop =
      yPos > containerCenter && yPos < containerBottom && !getSnapping()
    const shouldScrollToElementBottom =
      yPos < containerCenter && yPos > containerTop && !getSnapping()

    if (shouldScrollToElementTop) {
      console.log('scrolling top', getSnapping())
      animateScrollSnap({ from: yPos, to: containerTop })
    }
    if (shouldScrollToElementBottom) {
      console.log('scrolling bottom', getSnapping())
      animateScrollSnap({ from: yPos, to: containerBottom })
    }
  }, [])

  useScrollStopped({ onScrollStop, track: snapping })
}

export default useScrollSnap
