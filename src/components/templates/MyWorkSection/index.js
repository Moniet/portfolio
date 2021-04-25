/** @jsxImportSource @emotion/react */
import PageWrapper from '@/design-system/PageWrapper'
import Work from '@/design-system/Work'
import Text from '@/design-system/Text'
import Grid from '@/library/Grid'

const MyWorkSection = ({ workThumbnails = [] }) => {
  return (
    <div css={{ scrollSnapAlign: 'start' }}>
      <PageWrapper
        bg="#f9f9f9"
        borderRadius="lg"
        boxShadow="page"
        maxWidth="100%"
        minHeight="fit-content"
      >
        <Text as="h1" fontSize="gigantic" color="text">
          my work
        </Text>

        {workThumbnails.map((metadata) => (
          <>
            <Work open={false} metadata={metadata} slug={metadata.slug} />
            {/* <Spacer pb="lg" /> */}
          </>
        ))}
      </PageWrapper>
    </div>
  )
}

export default MyWorkSection
