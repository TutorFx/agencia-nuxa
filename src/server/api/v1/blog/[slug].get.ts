import { z } from 'zod'
import { createContent } from "@/contentful"

export default defineEventHandler(async (event) => {
  const slug = event.context.params?.slug as string;
  console.log(slug)
  z.string().parse(slug)
  const client = createContent()
  const response = await client.getEntries({
    content_type: 'blog',
    'fields.path[match]': decodeURI(slug),
    include: 1,
  })
  return response
})
