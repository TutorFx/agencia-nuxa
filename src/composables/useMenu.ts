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
      title: 'Benefícios',
      to: { name: 'beneficios' }
    }
  ] as MenuType
}

export const useFooterMenu = () => {
  return [
    [...useMenu()],
    [...useMenu()],
    [...useMenu()],
  ] as MenuType[]
}
