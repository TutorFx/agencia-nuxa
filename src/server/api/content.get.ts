import { serverQueryContent } from '#content/server'

export default defineEventHandler(async (event) => {
  const docs = await serverQueryContent(event).find()
  return docs.map(doc => ({
    url: doc._path,
  }))
})