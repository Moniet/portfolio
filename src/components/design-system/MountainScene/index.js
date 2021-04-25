/** @jsxImportSource @emotion/react */
import Flex from '@/library/Flex'
import ScrollSnap from '@/library/ScrollSnap'
import { css, keyframes } from '@emotion/react'
import styled from '@emotion/styled'
import { useRouter } from 'next/router'
import { animate } from 'popmotion'
import fadeIn from '../../../keyframes/fadeIn'
import Box from '../../library/Box'
import Button from '../Button'
import Greeting from './Greeting'
import MountainsSvg from './MountainsSvg'

const MountainScene = () => {
  const router = useRouter()

  return (
    <Box
      width="100%"
      height="100%"
      maxHeight="100%"
      bg="#FFE6EB"
      borderRadius="lg"
      maxHeight="100%"
      px="lg"
      position="relative"
      boxShadow="default"
      overflow="hidden"
    >
      <Box
        position="absolute"
        opacity="0"
        top="md"
        left="md"
        minWidth="325px"
        width="325px"
        css={css`
          animation: ${fadeIn} 2s ease 0.5s forwards;
        `}
      >
        <Greeting />
        <Box width="75%" m="auto">
          <Button
            mt="md"
            width="100%"
            onClick={() => {
              const scrollSnapContainer = document.getElementById(
                'scroll-snap-container'
              )

              scrollSnapContainer.style.scrollSnapType = 'none'

              animate({
                from: 0,
                to: window.innerHeight,
                duration: 800,
                onComplete: () => {
                  setTimeout(() => {
                    scrollSnapContainer.style.scrollSnapType = 'y mandatory'
                  }, 0)
                },
                onUpdate: (y) => scrollSnapContainer.scroll(0, y)
              })
            }}
          >
            my work 👇
          </Button>
        </Box>
      </Box>

      <MountainsSvg />
    </Box>
  )
}

export default MountainScene
