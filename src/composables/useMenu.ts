import type { RouteLocationRaw } from '../../.nuxt/vue-router'

export type MenuType = {
  title: string,
  to: RouteLocationRaw,
}

interface MenuTypeObject<T> {
  [key: string]: T[];
}

export const useMenu = () => {
  return [
    {
      title: 'Home',
      to: { name: 'index' }
    },
    {
      title: 'Benefícios',
      to: { name: 'beneficios' }
    },
    {
      title: 'Blog',
      to: { name: 'blog' }
    }
  ] as MenuType[]
}

const getDocumentos = async () => {
  const data = await queryContent('/documento').find()
  return data.map(documento => ({ to: documento._path, title: documento.title }))
}

const getBlogPosts = async () => {
  const data = await $fetch<any>('/api/v1/blog')
  return data.items?.map((item: {fields:{ path: string, title: string }}) => {
    return ({ to: `/blog/${item.fields.path}`, title: item.fields.title })
  })
}

const getBeneficios = async () => {
  const data = await queryContent('/beneficios').find()
  return data.map(documento => ({ to: documento._path, title: documento.title }))
}

export const useFooterMenu = async () => {
  const [documentos, blogposts, beneficios] = await Promise.all([getDocumentos(), getBlogPosts(), getBeneficios()])
  return {
    Links: [...useMenu()],
    Blog: [...blogposts],
    Documentos: [...documentos],
    Benefícios: [...beneficios]
  } as MenuTypeObject<MenuType>
}
