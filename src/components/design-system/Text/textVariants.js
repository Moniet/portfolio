import { variant } from 'styled-system'

const p = {
  fontSize: ['sm', 'sm', , 'md']
}

const li = {
  fontSize: p.fontSize
}

const h4 = {
  fontSize: p.fontSize,
  fontWeight: 'bold',
  fontFamily: 'body'
}

const variants = variant({
  variants: {
    p,
    h4,
    li
  }
})

export default variants
