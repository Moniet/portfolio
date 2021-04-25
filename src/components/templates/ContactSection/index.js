/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled'
import { useState } from 'react'
import Text from '@/design-system/Text'
import PageWrapper from '@/design-system/PageWrapper'
import Grid from '@/library/Grid'
import Spacer from '@/library/Spacer'
const { default: TextInput } = require('@/design-system/TextInput')
const { default: Box } = require('@/library/Box')

const ContactSection = () => {
  const [formData, setFormData] = useState({})

  return (
    <div css={{ scrollSnapAlign: 'start' }}>
      <Box bg="bg" boxShadow="page" borderRadius="lg">
        <PageWrapper minHeight="fit-content">
          <Spacer pb="md" />
          <Text as="h1" fontSize="gigantic">
            Contact
          </Text>
          <Text>
            <strong>
              want to collaborate or just get in touch ? feel free to send me a
              message 😁{' '}
            </strong>
          </Text>
          <Spacer pb="sm" />
          <form
            onChange={(e) =>
              setFormData({ ...formData, [e.target.name]: e.target.value })
            }
          >
            <Grid
              gridTemplateColumns="repeat(auto-fill, min(100%, 300px))"
              gridTemplateRows="auto"
              gridGap="md"
              width="100%"
            >
              <TextInput
                isValid={!!formData.name}
                name="name"
                label="name"
                placeholder="e.g 'Com Truise'"
                error="please include your name"
              />
              <TextInput
                isValid={/\w+\@\w+\.\w+/.test(formData.email)}
                name="emails"
                label="email"
                error="please include your email"
                placeholder="sample@email.com"
              />
              <Grid gridColumn={['span 1', 'span 1', , 'span 2']}>
                <TextInput
                  type="textarea"
                  isValid={formData.message}
                  name="message"
                  label="message"
                  error="please type your message message"
                  placeholder={
                    "'we have an amazing idea and we think you're the right one to build it 😃'"
                  }
                />
              </Grid>
            </Grid>
          </form>
          <Spacer pb="md" />
        </PageWrapper>
      </Box>
    </div>
  )
}

export default ContactSection
