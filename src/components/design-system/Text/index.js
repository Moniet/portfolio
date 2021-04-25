import styled from '@emotion/styled'
import shouldForwardProp from '@styled-system/should-forward-prop'
import { system, typography } from 'styled-system'
import variants from './textVariants'

const defaultStyle = {
  color: 'text'
}

const textTransform = system({
  textTransform: true
})

const Text = styled('p', {
  shouldForwardProp
})(defaultStyle, typography, textTransform, variants)

export default Text
