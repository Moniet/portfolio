function importAll(r) {
  return r.keys().map((fileName) => ({
    link: fileName.substring(2).replace(/\.mdx$/, ''),
    module: r(fileName)
  }))
}

export const workPaths = importAll(
  require.context('../components/_work/', true, /\.mdx$/)
)
