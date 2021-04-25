const getProp = (propKey, propFallback) => (props) =>
  props[propKey] || propFallback

export default getProp
