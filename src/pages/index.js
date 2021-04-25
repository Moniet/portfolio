/** @jsxImportSource @emotion/react */
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import LandingSection from '@/templates/LandingSection'
import MyWorkSection from '@/templates/MyWorkSection'
import ContactSection from '@/templates/ContactSection'

const LandingPage = ({ workThumbnails }) => {
  return (
    <div
      css={{
        scrollSnapType: 'y mandatory',
        maxHeight: '100vh',
        overflow: 'auto'
      }}
      id="scroll-snap-container"
    >
      <LandingSection />
      <MyWorkSection workThumbnails={workThumbnails} />
      <ContactSection />
    </div>
  )
}

export const getStaticProps = async (ctx) => {
  const mdxPath = path.join(process.cwd(), 'src/components/_work')
  const climbMdx = fs.readFileSync(`${mdxPath}/climb-credit.mdx`, 'utf-8')
  const mosgesagtMdx = fs.readFileSync(`${mdxPath}/monsgesagt.mdx`, 'utf-8')
  const { data: climbCreditData } = matter(climbMdx)
  const { data: monsgesagtData } = matter(mosgesagtMdx)

  return {
    props: {
      workThumbnails: [
        { ...climbCreditData, slug: 'climb-credit' },
        { ...monsgesagtData, slug: 'monsgesagt' }
      ]
    }
  }
}

export default LandingPage
