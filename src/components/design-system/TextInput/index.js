/** @jsxImportSource @emotion/react */
import Spacer from '@/library/Spacer'
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { themeGet } from '@styled-system/theme-get'
import { useState } from 'react'

const textAreaStyles = css`
  height: 300px;
  max-height: 300px;
  width: 100%;
`

const Input = styled.input`
  border-radius: ${themeGet('radii.sm')};
  border: solid 1px ${themeGet('colors.text')};
  outline: none;
  padding: ${themeGet('space.sm')} ${themeGet('space.md')};
  width: 100%;

  &:focus {
    border: solid 1px ${themeGet('colors.primary')};
  }

  &::placeholder {
    color: ${themeGet('colors.mute')};
  }
`

const Error = styled.span`
  color: ${themeGet('colors.danger')};
`

const LabelSpan = styled.span`
  font-weight: bold;
  font-size: ${themeGet.toString('fontSizes.lg')};
`

const TextInput = ({
  onChange = () => {},
  type = 'text',
  error = '',
  isValid,
  label = '',
  name = '',
  placeholder = ''
}) => {
  const [blurred, setBlurred] = useState(false)
  const textarea = type === 'textarea'

  return (
    <label htmlFor={name}>
      <LabelSpan>{label}</LabelSpan>
      <Spacer pb="xs" />
      <Input
        css={textarea ? textAreaStyles : {}}
        as={textarea ? 'textarea' : 'input'}
        id={name}
        type={type}
        onChange={(e) => onChange(e)}
        onBlur={() => setBlurred(true)}
        onFocus={() => isValid && setBlurred(false)}
        placeholder={placeholder}
        name={name}
      />
      {blurred && !isValid && <Error>{error}</Error>}
    </label>
  )
}

export default TextInput
