import { withNextRouter } from 'storybook-addon-next-router'
import theme from '../src/styles/theme'
import GlobalStyle from '../src/styles/GlobalStyle'
import Reset from '../src/styles/Reset'
import { ThemeProvider } from '@emotion/react'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <Reset />
      <GlobalStyle />
      <Story />
    </ThemeProvider>
  ),
  withNextRouter({}),
]
