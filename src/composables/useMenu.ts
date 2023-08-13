import { RouteLocationRaw } from "../../.nuxt/vue-router"

export type MenuType = {
  title: string,
  to: RouteLocationRaw,
}[]

export const useMenu = () => {
  return [
    {
      title: 'Home',
      to: { name: 'index' }
    },
    {
      title: 'Experiencia',
      to: { name: 'resumo' }
    },
    {
      title: 'Benefícios',
      to: { name: 'projetos' }
    }
  ] as MenuType
}
