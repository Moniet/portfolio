import styled from '@emotion/styled'
import { layout, margin, marginTop, padding } from 'styled-system'
import Box from '../Box'

const MarginProvider = styled.div`
  & > * + * {
    ${margin};
    ${padding}
  }
  ${layout}
`

export default MarginProvider
