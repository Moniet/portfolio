import { keyframes } from '@emotion/react'
import styled from '@emotion/styled'
import Box from '@/library/Box'
import { animate } from 'popmotion'
import { useEffect, useRef } from 'react'

// const writingAnimation = keyframes`
//   to {
//     stroke-dashoffset: 0px;
//     stroke: #fff;
//   }
// `

const fadeIn = keyframes`
  to {
    stroke: #fff;
    fill: #fff;
  }
`

const Path = styled.path`
  stroke-width: 15px;
  stroke-dasharray: 1150px;
  /* stroke-linecap: round; */
`

const Svg = styled.svg`
  width: 100%;
`

const writingAnimation = ({ element = {}, animationSettings = {} }) => {
  animate({
    to: [1150, 0],
    duration: 3000,
    type: 'spring',
    onUpdate: (strokeDashoffset) =>
      element.setAttribute('stroke-dashoffset', `${strokeDashoffset}px`),
    ...animationSettings,
  })

  animate({
    to: ['#000000', '#ffffff'],
    duration: 2000,
    onUpdate: (color) => {
      element.setAttribute('stroke', `${color}`)
    },
  })
}

const Logo = () => {
  const firstWord = useRef(null)
  const firstWordDot = useRef(null)
  const lastWord = useRef(null)

  useEffect(() => {
    writingAnimation({
      element: firstWord.current,
    })

    writingAnimation({
      element: lastWord.current,
      animationSettings: {
        elapsed: -2000,
      },
    })

    writingAnimation({
      element: firstWordDot.current,
      animationSettings: {
        elapsed: -1500,
        duration: 1000,
      },
    })
  }, [])

  return (
    <Box width={['200px', '275px', '300px', '300px', null, '375px']}>
      <Svg width="512.576" height="185" viewBox="0 0 512.576 185">
        <defs>
          <mask id="logo-mask">
            <g
              id="header_text_mask_first"
              transform="translate(145.114 71.417)"
            >
              <Path
                ref={firstWord}
                d="M251.877,33.243,249.292,68.86l19.744-35.617L265.49,68.86l21.92-35.617L282.6,65.829l14.256-5.343s8.02,9.376,14.784,5.343,18.481-23.294,8.517-24.676-19.307-5.022-19.2,4.672,0,14.661,0,14.661l17.269-12.731s4.389,9.649,10.311,5.066,10.892-19.579,10.892-19.579l-6.876,37.966s22.554-37.966,27.071-37.966-9.489,22.437-7.34,29.248c.378,1.2.754,2.869,2.033,3.339,4.179,1.6,13.9-5.343,13.9-5.343l9.753-27.244s-13.34,43.583,7.287,29.248c8.894-19.871,12.923-23.508,17.989-21.337s10.068,6.406-7.733,15.142,14,13.477,20.863,0,0-8.539,0-8.539,15.942-38.792,23.98-37.438-8.5,27.119-12.978,30.835,18.985-2.19,18.985-2.19-32.466,9.654-22.644,21.524,18.554-7.665,18.554-7.665"
                transform="translate(-244.36 -8.682)"
              />
              <Path
                ref={firstWordDot}
                d="M367.511,28.252c-3.489-3.184,7.988-21.687,17.341-2.422-1.031,5.467-3.592,7.363-6.845,7.487C374.29,33.478,369.552,30.114,367.511,28.252Z"
                transform="translate(-237.532 -9.81)"
              />
            </g>
            <g id="header_text_mask">
              <Path
                ref={lastWord}
                id="header_text_mask_last"
                data-name="header text mask last"
                d="M452.392,62.349s11.936-22.945,12.05-22.212,13.643,19.869,8.32,24.01-17.385,1.6-21.947,0,28.407,8.728,31.9,2.688,9.41-28.018,16.585-26.7,10.457,5.919,4.449,16.8-15.1,9.894-15.1,9.894,8.014-6.676,19.843,0,11.285-7.881,11.285-7.881l16-23.805s-20.9,35.389-4.431,33.705c15.1-1.544,19.242-28.716,19.242-28.716s-.471-3.621,0,3.558-8.9,23.825,1.883,25.158,28.677-24.627,21.79-28.716-18.362-5.123-9.712,9.071S577.812,52.2,577.812,52.2h7.815l8.278-32.5S600.4,6.482,606.851,5.919s13.236-1.7-12.945,31.491c-7.672,7.036-12.19,28.2-8.278,29.425S605.161,42.29,609.551,42.29s-6.361,24.544-6.361,24.544S614.174,70.7,620.1,64.147s9.529-29,9.529-29l-5.865,38.58S653.846,26.335,650.006,43.7s-6.591,25.158-6.591,25.158,11.5,2.27,15.069-4.707,1.587-23.692,15.139-21.857c10.021,5.081,2.126,12.9-8.511,17.106s10.18,16.236,20.111,4.75,9.438-21.857,9.438-21.857-13.628,22.947,0,24.544,17.405-26.7,17.405-26.7-5.168,54.551-26.843,64.507C663.6,93.548,700.105,80.07,700.105,80.07l37.487-25.535"
                transform="translate(-87.521 60.822)"
                fill="none"
                stroke="#000"
              />
            </g>
          </mask>
        </defs>
        <g
          id="header_text"
          data-name="header text"
          transform="translate(-142 -8)"
          mask="url(#logo-mask)"
        >
          <text
            id="moniet_sawhney"
            data-name="moniet sawhney"
            transform="translate(142 132)"
            fill="#333"
            fontSize="102"
            fontFamily="Pacifico-Bold, Pacifico"
            fontWeight="700"
          >
            <tspan x="0" y="0">
              moniet sawhney
            </tspan>
          </text>
        </g>
      </Svg>
    </Box>
  )
}

export default Logo
