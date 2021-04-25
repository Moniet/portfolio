import styled from '@emotion/styled'
import { themeGet } from '@styled-system/theme-get'
import { layout, margin } from 'styled-system'

const Button = styled.button`
  ${layout}
  ${margin}
  min-width: 150px;
  padding: ${themeGet('space.xs')};
  background: ${themeGet('colors.text')};
  color: ${themeGet('colors.bg')};
  border: none;
  border-radius: ${themeGet('radii.sm')};
  outline: none;
  cursor: pointer;
  font-size: ${themeGet('fontSizes.sm')};
  &:active {
    transform: scale(0.98);
    opacity: 0.95;
  }
  &:hover {
    background: ${themeGet('colors.secondary')};
  }

  transition: opacity 0.2s ease, transform 0.2s ease;
`
export default Button
