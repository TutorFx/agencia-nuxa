export default defineEventHandler(async () => {
  const [
    content
  ] = await Promise.all([
    $fetch<{url: string, createdAt: string }[]>('/api/content')
  ])
  return [...content].map((p) => {
    return { loc: p.url, lastmod: p.createdAt }
  })
})
