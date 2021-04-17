import styled from '@emotion/styled'
import { themeGet } from '@styled-system/theme-get'
import { margin } from 'styled-system'
import Flex from '../../lib/Flex'
import Grid from '../../lib/Grid'
import MarginProvider from '../../lib/MarginProvider'
import Logo from '../Logo'
import NavLink from './NavLink'

const Nav = () => {
  return (
    <Flex
      as="nav"
      alignItems="center"
      justifyContent="space-between"
      width="100%"
      height="75px"
    >
      <Logo />
      <MarginProvider ml={['0', '0', 'xs', 'sm', , 'md']}>
        <NavLink href={'/'}>Home</NavLink>
        <NavLink href={'#my-work'} passHref>
          Work
        </NavLink>
        <NavLink href={'/resume'}>Resume</NavLink>
        <NavLink href={'#contact-work'} passHref>
          Contact
        </NavLink>
      </MarginProvider>
    </Flex>
  )
}

export default Nav
