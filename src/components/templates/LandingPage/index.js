import { animate } from 'popmotion'
import MountainScene from '../../design-system/MountainScene'
import Nav from '../../design-system/Nav'
import PageWrapper from '../../design-system/PageWrapper'
import Box from '../../library/Box'
import ScrollSnap from '../../library/ScrollSnap'
import Spacer from '../../library/Spacer'

const LandingPage = () => (
  <>
    <Box position="fixed" top="0" left="0">
      <PageWrapper>
        <Nav />
        <Spacer pb="md" />
        <MountainScene />
      </PageWrapper>
    </Box>
    <ScrollSnap>
      <Box height="100vh" />
    </ScrollSnap>
    <div>
      <PageWrapper
        bg="#f9f9f9"
        borderRadius="lg"
        boxShadow="page"
        maxWidth="100%"
        height="200vh"
      >
        <h1 id="my-work">my work</h1>
      </PageWrapper>
    </div>
  </>
)

export default LandingPage
