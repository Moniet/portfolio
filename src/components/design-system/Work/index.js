import styled from '@emotion/styled'
import { MDXProvider } from '@mdx-js/react'
import { themeGet } from '@styled-system/theme-get'
import Link from 'next/link'
import Box from '../../library/Box'
import Chips from '../Chips'
import Nav from '../Nav'
import PageWrapper from '../PageWrapper'
import Headers from './Headers'
import Img from './Img'
import mdxComponents from './mdxComponents'

const Container = styled.div`
  scroll-snap-align: start;
  background: ${themeGet('colors.bg')};
`

const A = styled.a`
  text-decoration: none;
  color: inherit;
`

const Work = ({ children, metadata: meta = {}, slug, open = false }) => {
  if (!open)
    return (
      <Container>
        <Link href={`/work/${slug}`} passHref>
          <A>
            <Img src={meta.banner} />
            <Headers.H1>{meta.title}</Headers.H1>
          </A>
        </Link>
        <Box width={[1, 1, , , 0.6]}>
          <Chips chips={meta.tags.split(',')} />
        </Box>
      </Container>
    )

  return (
    <MDXProvider components={mdxComponents}>
      <PageWrapper bg="bg">
        <Nav />
        <Img src={meta.banner} />
        <Headers.H1>{meta.title}</Headers.H1>

        <Box width={[1, 1, , , 0.6]}>
          <Chips chips={meta.tags.split(',')} />
          {open && <Box>{children}</Box>}
        </Box>
      </PageWrapper>
    </MDXProvider>
  )
}

export default Work
