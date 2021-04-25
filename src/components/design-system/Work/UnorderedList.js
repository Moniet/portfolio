/** @jsxImportSource @emotion/react */
import { default as styled } from '@emotion/styled'
import Flex from '@/library/Flex'
import Spacer from '@/library/Spacer'
import Asterisk from '../../icons/asterisk.svg'
import Text from '../Text'

export const Ul = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
`

export const Li = ({ children }) => (
  <Flex alignItems="center">
    <Asterisk css={{ minWidth: '12px', maxWidth: '12px' }} />
    <Spacer pl="sm" />
    <Text variant="li" as="li">
      {children}
    </Text>
  </Flex>
)
