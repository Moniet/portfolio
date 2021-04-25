import styled from '@emotion/styled'
import { themeGet } from '@styled-system/theme-get'

const Chip = styled.div`
  border-radius: ${themeGet('radii.lg')};
  background-color: ${themeGet('colors.primary')};
  /* border: solid 1px ${themeGet('colors.mute')}; */
  color: ${themeGet('colors.bg')};
  padding: ${themeGet('space.xs')} ${themeGet('space.sm')};
  text-align: center;
  font-size: 0.6rem;
  pointer-events: none;
  letter-spacing: ${themeGet('letterSpacings.sm')};
  text-transform: lowercase;
`

export default Chip
