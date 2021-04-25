import Box from '../../library/Box'

const PageWrapper = (props) => (
  <Box
    py={['0', '5%', 'min(5%, 40px)']}
    px={['1rem', '2rem', 'min(10%, 100px)']}
    m="auto"
    maxWidth="1400px"
    minHeight="100vh"
    {...props}
  >
    {props.children}
  </Box>
)

export default PageWrapper
