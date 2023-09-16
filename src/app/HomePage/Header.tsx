/* eslint-disable react/display-name */
import React, { ComponentType, ReactElement, createElement } from "react"

const createHeader = (headerType: string, headerStyles: string) => {
  return ({ className }: { className?: string }) => {
    return createElement(headerType, {
      className: `text-gray-300 font-bold tracking-widest ${className} ${headerStyles}`,
    })
  }
}

const H1 = createHeader("h1", "text-5xl")
const H2 = createHeader("h2", "text-5xl")
const H3 = createHeader("h3", "text-2xl")

const headers = {
  h1: H1,
  h2: H2,
  h3: H3,
}

type Props = {
  variant: keyof typeof headers
  className?: string
}

const Header = ({ variant = "h2", ...rest }: Props) => {
  const Component = headers[variant]
  return <Component {...rest} />
}

export default Header
