import { animate } from 'popmotion'
import { useEffect, useRef } from 'react'

const useScrollSnap = ({ container, animation: { duration = 1000 } }) => {
  const snapping = useRef(false)
  const getSnapping = () => snapping.current
  const setSnapping = (boolean) => (snapping.current = boolean)

  const animateScrollSnap = ({ from, to }) =>
    !getSnapping() &&
    animate({
      from,
      to,
      duration,
      onPlay: () => setSnapping(true),
      onUpdate: (scrollPos) => window?.scrollTo(0, scrollPos),
      onComplete: () => setSnapping(false),
    })

  useEffect(() => {
    const { top, bottom, height } = container.current.getBoundingClientRect()
    const elementCenter = bottom - Math.floor(height / 2)

    window.addEventListener('scroll', () => {
      const { scrollY } = window

      const shouldScrollToElementTop =
        scrollY > elementCenter && scrollY < bottom
      const shouldScrollToElementBottom =
        scrollY < elementCenter && scrollY > top

      if (shouldScrollToElementTop)
        animateScrollSnap({ from: scrollY, to: top })
      if (shouldScrollToElementBottom)
        animateScrollSnap({ from: scrollY, to: bottom })
    })
  }, [])
}

export default useScrollSnap
