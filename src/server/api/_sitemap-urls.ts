export default defineEventHandler(async () => {
  const [
    content,
    blog
  ] = await Promise.all([
    $fetch<{url: string, createdAt: string }[]>('/api/content'),
    $fetch<{url: string, createdAt: string, updatedAt: string}[]>('/api/blog'),
  ])
  return [...content, ...blog].map((p) => {
    return { loc: p.url, lastmod: p.createdAt }
  })
})
