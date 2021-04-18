import { ThemeProvider, useTheme } from '@emotion/react'
import styled from '@emotion/styled'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { typography } from 'styled-system'
import themeGet from '@styled-system/theme-get'
import Box from '../../lib/Box'

const A = styled(Box)`
  ${typography}
  position: relative;
  text-decoration: none;
  text-transform: lowercase;
  letter-spacing: 1px;
  overflow: hidden;
  transition: opacity 0.2s ease, transform 0.2s ease, color 0.2s ease;
  color: ${(props) =>
    props.active
      ? themeGet('colors.primary')(props)
      : themeGet('colors.text')(props)};

  &:before {
    content: '';
    position: absolute;
    opacity: ${({ active }) => (active ? 1 : 0)};
    bottom: -0.25rem;
    left: 1px;
    width: 25px;
    height: 4px;
    background: ${themeGet('colors.primary')};
    border-radius: 20px;
    transform: ${({ active }) =>
      active ? 'translate(0)' : 'translate(-20px)'};
  }

  &:hover {
    color: ${themeGet('colors.primary')};
  }

  &::visited {
    color: ${themeGet('colors.text')};
  }
`

const NavLink = (props) => {
  const { children, href } = props
  const { pathname, query } = useRouter()
  const linkIsActive = pathname.includes(href)

  return (
    <Link href={href} {...props} fontSize="md">
      <A
        as="a"
        active={linkIsActive}
        {...props}
        fontSize={['xxs', '', 'xs', 'xs', 'sm', 'md']}
      >
        {children}
      </A>
    </Link>
  )
}

export default NavLink
