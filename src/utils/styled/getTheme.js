const getNestedThemeValue = (keys) => (theme) =>
  keys?.reduce((themeObj = {}, key) => {
    if (typeof themeObj === 'string') return themeObj
    return themeObj[key]
  }, theme)

const getFallbackValues = ([themePrimary, themeFallback]) => ({ theme }) => {
  const themePrimaryKeys = themePrimary?.split('.')
  const themePrimaryValue = getNestedThemeValue(themePrimaryKeys)(theme)

  const themeFallbackKeys = themeFallback?.split('.')
  const themeFallbackValue =
    themeFallbackKeys ?? getNestedThemeValue(themeFallbackKeys)(theme)

  return [themePrimaryValue, themeFallbackValue]
}

const getTheme = (propToAccess, themeValues = []) => (props) => {
  const { theme } = props
  const [themePrimary, themeFallback] = themeValues

  const themeKeys = propToAccess.split('.')
  const fallbacksExist = themePrimary && themeFallback

  if (themeKeys.length === 1 && fallbacksExist) {
    const propExists = props[propToAccess]
    const firstOption = getFallbackValues([themePrimary])(theme)[0]
    const secondOption = getFallbackValues([null, themeFallback])(theme)[1]
    if (propExists) return firstOption
    else return secondOption
  }

  const obtainedThemeValue = getNestedThemeValue(themeKeys)(theme)
  if (obtainedThemeValue && !fallbacksExist) return obtainedThemeValue
  if (!obtainedThemeValue && fallbacksExist)
    return getFallbackValues([themePrimary, themeFallback])[0]
}

export default getTheme
