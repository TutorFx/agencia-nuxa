export default defineEventHandler(async () => {
  const [
    content,
  ] = await Promise.all([
    $fetch('/api/content'),
  ])
  return [...content].map((p) => {
    return { loc: p.url, lastmod: p.updatedAt }
  })
})