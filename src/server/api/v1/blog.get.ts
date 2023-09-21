import { createContent } from "@/contentful"

export default defineEventHandler(async (event) => {
  const query = getQuery<{ page?: number }>(event)
  const client = createContent()
  const getPage = () => {
    if (!query.page) return 0;
    return query.page * 20
  }
  const response = await client.getEntries({ 
    content_type: 'blog', 
    skip: getPage(), 
    limit: 20, 
    // @ts-expect-error - Select got an type error.
    select: 'fields.thumb, fields.title, fields.path' 
  })
  return response
})
