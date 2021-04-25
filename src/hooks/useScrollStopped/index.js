import { useCallback, useEffect, useMemo, useState } from 'react'

const useScrollStopped = ({
  debounceDuration = 100,
  onScrollStop = () => {},
  track = false,
}) => {
  let time = null
  let currentPos = null

  const scrollingFn = async (ev) => {
    time = new Date().getTime()
    currentPos = window.scrollY
  }

  useEffect(() => {
    const fireOnScrollStop = () => {
      const timeNow = new Date().getTime()
      const timeElapsed = timeNow - time

      if (timeElapsed < 100 && currentPos === window.scrollY) onScrollStop()

      requestAnimationFrame(fireOnScrollStop)
    }

    fireOnScrollStop()

    window.addEventListener('scroll', scrollingFn, true)

    return () => {
      window.removeEventListener('scroll', scrollingFn, true)
    }
  }, [])
}

export default useScrollStopped
