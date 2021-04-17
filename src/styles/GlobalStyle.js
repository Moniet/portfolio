/** @jsxImportSource @emotion/react */
import { css, Global, useTheme } from '@emotion/react'
import { themeGet } from '@styled-system/theme-get'

const background = (props) => css`
  background: ${themeGet('colors.bg')(props)};
`

const GlobalStyle = () => {
  const theme = useTheme()

  return (
    <Global
      styles={css`
        @font-face {
          src: url('/fonts/Pacifico-Regular.ttf');
          font-family: 'Pacifico', cursive;
        }

        @font-face {
          src: url('/fonts/Karla-Bold.ttf') url('/fonts/Karla-Regular.ttf')
            url('/fonts/Karla-Italic.ttf');
          font-family: 'Karla', sans-serif;
        }

        html {
          font-size: 16px;
        }

        body {
          font-family: 'Karla', sans-serif;
          font-weight: 400;
          line-height: 1.75;
          background: ${theme.bg};
        }

        p {
          margin-bottom: 1rem;
        }

        h1,
        h2,
        h3,
        h4,
        h5 {
          margin: 3rem 0 1.38rem;
          font-family: 'Pacifico', sans-serif;
          font-weight: 400;
          line-height: 1.3;
        }

        h1 {
          margin-top: 0;
          font-size: 2.488rem;
        }

        h2 {
          font-size: 2.074rem;
        }

        h3 {
          font-size: 1.728rem;
        }

        h4 {
          font-size: 1.44rem;
        }

        h5 {
          font-size: 1.2rem;
        }

        small,
        .text_small {
          font-size: 0.833rem;
        }
      `}
    />
  )
}

export default GlobalStyle
