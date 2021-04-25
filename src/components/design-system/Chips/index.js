import styled from '@emotion/styled'
import { themeGet } from '@styled-system/theme-get'
import Chip from './Chip'

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;

  & > * {
    margin-right: ${themeGet('space.sm')};
    margin-bottom: ${themeGet('space.sm')};
  }
`

const Chips = ({ chips = [] }) => (
  <Container>
    {chips.map((chip, i) => (
      <Chip key={i}>{chip}</Chip>
    ))}
  </Container>
)

export default Chips
