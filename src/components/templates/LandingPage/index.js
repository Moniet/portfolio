import MountainScene from '../../design-system/MountainScene'
import Nav from '../../design-system/Nav'
import PageWrapper from '../../design-system/PageWrapper'
import Box from '../../lib/Box'
import Spacer from '../../lib/Spacer'

const LandingPage = () => {
  return (
    <>
      <Box position="fixed" top="0" left="0">
        <PageWrapper>
          <Nav />
          <Spacer pb="md" />
          <MountainScene />
        </PageWrapper>
      </Box>
      <PageWrapper
        mt="100vh"
        bg="#f9f9f9"
        borderRadiusTopLeft="lg"
      ></PageWrapper>
    </>
  )
}

export default LandingPage
