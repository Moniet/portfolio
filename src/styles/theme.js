const colors = {
  primary: '#ff4880',
  secondary: '#655ccc',
  text: '#333333',
  danger: 'red',
  bg: '#fafafa',
  mute: '#666666'
}

const space = {
  xxs: '0.25rem',
  xs: '0.5rem',
  sm: '1rem',
  md: '2rem',
  lg: '4rem',
  xl: '8rem',
  xxl: '16rem'
}

const fontSizes = {
  xxs: '0.833rem',
  xs: '1rem',
  sm: '1.2rem',
  md: '1.44rem',
  lg: '1.728rem',
  xl: '2.074rem',
  xxl: '2.488rem',
  gigantic: '5.15rem'
}

const fonts = {
  header: 'Pacifico, cursive',
  body: "Karla, 'Helvetica', sans-serif"
}

const radii = {
  sm: '5px',
  md: '10px',
  lg: '20px'
}

const breakpoints = ['320px', '415px', '768px', '992px', '1200px']

const shadows = {
  default: `
    rgba(50, 50, 50, 0.05) 0px 2px 10px,
    rgba(50, 50, 50, 0.03) 0px 5px 20px,
    rgba(0, 0, 0, 0.03) 0px 10px 30px
  `,

  page: `
  rgba(50, 50, 50, 0.05) 0px -2px 5px,
  rgba(50, 50, 50, 0.15) 0px -10px 18px,
  rgba(50, 50, 50, 0.05) 0px -20px 40px
`
}

const letterSpacings = {
  sm: '1px',
  md: '2px',
  lg: '4px'
}

const lineHeights = {
  li: '3rem'
}

export default {
  colors,
  space,
  fontSizes,
  radii,
  breakpoints,
  shadows,
  fonts,
  lineHeights,
  letterSpacings
}
