import { createContent } from "@/contentful"

export default defineEventHandler(async () => {
  const client = createContent()
  const response = await client.getEntries({
    content_type: 'blog',
    limit: 20,
    // @ts-expect-error - Select got an type error.
    select: 'fields.path, sys.updatedAt, sys.createdAt'
  })
  return response.items.map(item => {
    console.log(item)
    return ({
      url: `/blog/${item.fields.path}`,
      updatedAt: item.sys.updatedAt,
      createdAt: item.sys.createdAt,
    })
  })
})
