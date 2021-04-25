import styled from '@emotion/styled'
import Link from 'next/link'
import { useRouter } from 'next/router'
import themeGet from '@styled-system/theme-get'
import Text from '../Text'
import { useEffect, useState } from 'react'

const A = styled(Text)`
  position: relative;
  text-decoration: none;
  text-transform: lowercase;
  letter-spacing: ${themeGet('letterSpacings.sm')};
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
    transition: opacity 0.2s ease, transform 0.2s ease, color 0.2s ease;
  }

  &:hover {
    color: ${themeGet('colors.primary')};
  }

  &::visited {
    color: ${themeGet('colors.text')};
  }
`

const NavLink = (props) => {
  const { children, href, isActive } = props
  const {
    pathname,
    query: { page },
    isReady
  } = useRouter()
  const isActiveDefault =
    (pathname.includes(href) && href !== '/') ||
    (pathname === '/' && href === '/')

  return (
    <Link href={href} scroll={false} passHref>
      <A
        {...props}
        as="a"
        active={isActive ?? isActiveDefault}
        fontSize={['xxs', '', 'xs', 'xs', 'sm', 'md']}
      >
        {children}
      </A>
    </Link>
  )
}

export default NavLink
