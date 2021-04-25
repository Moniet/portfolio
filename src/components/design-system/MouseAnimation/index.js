/** @jsxImportSource @emotion/react */
import Box from '@/library/Box'
import { css } from '@emotion/react'
import { useEffect, useRef } from 'react'
import Mouse from '../../icons/mouse.svg'

const MouseAnimation = () => {
  const mouse = useRef(null)

  useEffect(() => {}, [])

  return (
    <Box
      position="absolute"
      bottom="0"
      maxHeight="fit-content"
      height="fit-content"
      width="40px"
      left="calc(50% - 50px)"
    >
      <Mouse
        viewBox="0 0 100 188.708"
        css={{ width: '100%', height: '100%' }}
      />
    </Box>
  )
}

export default MouseAnimation
