import Flex from '@/library/Flex'
import MarginProvider from '@/library/MarginProvider'
import { useRouter } from 'next/router'
import Logo from '../Logo'
import NavLink from './NavLink'

const Nav = () => {
  const isHomePage = ({ page }) => !page
  const isWorkPage = ({ page }) => page === 'work'

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
        <NavLink href={'/'} scroll={false}>
          Home
        </NavLink>
        <NavLink href={'/work'}>Work</NavLink>
        <NavLink
          href="https://dev.to/moniet"
          active={isWorkPage}
          scroll={false}
        >
          Blogs
        </NavLink>
        <NavLink href={'/resume'}>Resume</NavLink>
      </MarginProvider>
    </Flex>
  )
}

export default Nav
