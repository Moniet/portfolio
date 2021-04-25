/** @jsxImportSource @emotion/react */
import MountainScene from '@/design-system/MountainScene'
import Nav from '@/design-system/Nav'
import PageWrapper from '@/design-system/PageWrapper'
import Spacer from '@/library/Spacer'

const LandingSection = () => (
  <div css={{ scrollSnapAlign: 'start' }}>
    <PageWrapper>
      <Nav />
      <Spacer pb="md" />
      <MountainScene />
    </PageWrapper>
  </div>
)

export default LandingSection
