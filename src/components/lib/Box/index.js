import styled from '@emotion/styled'
import {
  border,
  color,
  layout,
  opacity,
  position,
  shadow,
  space,
  zIndex,
} from 'styled-system'
import shouldForwardProp from '@styled-system/should-forward-prop'

const Box = styled('div', {
  shouldForwardProp,
})(space, layout, border, color, position, opacity, shadow, zIndex)

export default Box
