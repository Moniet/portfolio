/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled'
import { useEffect, useRef, useState } from 'react'
import { animate } from 'popmotion'

const Svg = styled.svg`
  height: 100%;
  width: 100%;
  min-width: 100%;

  text {
    pointer-events: none;
  }
`

const Greeting = () => {
  const handEmoji = useRef(null)
  const animationRunning = useRef(true)
  const setAnimationRunning = (bool) => (animationRunning.current = bool)

  const rotateHand = (degs) => handEmoji.current?.setAttribute('rotate', degs)
  const animateHand = (rotate) =>
    !animationRunning.current &&
    animate({
      to: [0, 15, -15, 10, 0],
      duration: 500,
      onUpdate: rotateHand,
      onPlay: () => setAnimationRunning(true),
      onComplete: () => setAnimationRunning(false),
    })

  useEffect(() => {
    setTimeout(() => {
      setAnimationRunning(false)
      animateHand()
    }, 1500)
  }, [])

  return (
    <Svg width="438.643" height="344.3" viewBox="0 0 438.643 344.3">
      <g id="intro" transform="translate(10.023 -167.029)">
        <path
          id="intro_text_bg"
          data-name="intro-text-bg"
          d="M252.053-56.565c30.082,7.668,46.6,47.778,67.833,87.593,21.529,39.815,47.483,79.63,47.188,118.855-.59,39.225-27.428,78.155-64.883,90.542-37.75,12.387-85.823-1.475-124.753,4.719-38.635,6.488-68.422,33.032-101.159,38.045-33.032,5.309-69.012-11.207-98.5-37.455s-52.5-62.524-46.3-96.145c5.9-33.326,40.994-64,61.049-99.095,20.055-34.8,25.069-73.731,46.6-85.233,21.235-11.8,58.985,3.834,99.39-.59S222.266-64.528,252.053-56.565Z"
          transform="translate(60.544 226.131)"
          fill="#fff"
          stroke="#333"
          strokeWidth="2"
          onMouseOver={() => animateHand()}
        />
        <g data-name="intro text" transform="translate(29.31 258.999)">
          <text
            transform="translate(143 33)"
            fill="#333"
            fontSize="33"
            fontFamily="Karla-Regular, Karla"
          >
            <tspan x="-93.439" y="0" space="preserve">
              hey there{' '}
            </tspan>
            <tspan
              y="0"
              fontFamily="AppleColorEmoji, Apple Color Emoji"
              ref={handEmoji}
            >
              👋
            </tspan>
          </text>
          <text
            transform="translate(49 66)"
            fill="#333"
            fontSize="33"
            fontFamily="Karla-Regular, Karla"
          >
            <tspan x="0" y="30">
              i’m moniet sawhney
            </tspan>
            <tspan x="0" y="68">
              and i 😍 developing{' '}
            </tspan>
            <tspan x="0" y="106">
              beautiful UIs
            </tspan>
          </text>
        </g>
      </g>
    </Svg>
  )
}

export default Greeting
