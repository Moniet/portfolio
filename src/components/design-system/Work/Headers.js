import styled from '@emotion/styled'
import { themeGet } from '@styled-system/theme-get'
import Text from '../Text'

const H1 = styled.h1`
  font-family: 'Karla', 'Helvetica', sans-serif;
  font-weight: 400;
  font-size: ${themeGet('fontSizes.xl')};
  text-transform: lowercase;
  margin-bottom: ${themeGet('space.sm')};
`

const H2 = styled.h2`
  font-family: 'Karla', 'Helvetica', sans-serif;
  font-weight: 600;
  font-size: ${themeGet('fontSizes.xl')};
`

const H3 = styled.h3`
  font-family: 'Karla', 'Helvetica', sans-serif;
  font-weight: 600;
  font-size: ${themeGet('fontSizes.lg')};
`

const H4 = ({ children }) => (
  <Text variant="h4" as="h4" textTransform="lowercase">
    {children}
  </Text>
)

export default {
  H1,
  H2,
  H3,
  H4
}
