import fs from 'fs'
import path from 'path'
import mdxComponents from '@/design-system/Work/mdxComponents'
import { workPaths } from '@/utils/getWorkMDX'
import renderToString from 'next-mdx-remote/render-to-string'
import Work from '@/design-system/Work'
import hydrate from 'next-mdx-remote/hydrate'
import matter from 'gray-matter'

const WorkPage = ({ source, metadata, slug }) => {
  const content = hydrate(source, { components: mdxComponents })

  return (
    <Work metadata={metadata} slug={slug} open={true}>
      {content}
    </Work>
  )
}

export const getStaticProps = async (ctx) => {
  const { slug } = ctx.params

  const mdxPath = path.join(process.cwd(), 'src/components/_work')
  const mdxData = fs.readFileSync(`${mdxPath}/${slug}.mdx`, 'utf-8')
  const { data, content } = matter(mdxData)
  const mdxSource = await renderToString(content, {
    components: mdxComponents
  })

  return {
    props: {
      source: mdxSource,
      metadata: data,
      slug
    }
  }
}

export const getStaticPaths = () => {
  return {
    paths: workPaths.map(({ link }) => ({
      params: {
        slug: link.replace('/', '')
      }
    })),
    fallback: false
  }
}

export default WorkPage
