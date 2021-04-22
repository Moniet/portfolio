import styled from '@emotion/styled'
import {
  border,
  color,
  compose,
  layout,
  opacity,
  position,
  shadow,
  space,
  zIndex,
} from 'styled-system'
import shouldForwardProp from '@styled-system/should-forward-prop'

const boxStylesProps = compose(
  space,
  layout,
  border,
  color,
  position,
  opacity,
  shadow,
  zIndex
)

const Box = styled('div', {
  shouldForwardProp,
})(boxStylesProps)

export default Box
