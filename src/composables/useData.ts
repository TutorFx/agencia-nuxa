import type { ICard } from '../types'

const aboutlives = [
  {
    icon: 'estrategia.png',
    title: 'Estratégias Valiosas',
    content: /* html */`Vou revelar dicas valiosas para <b><i>tomar decisões inteligentes</i></b> com seu dinheiro, 
    aproveitar as melhores oportunidades e minimizar riscos.`
  },
  {
    icon: 'cerebro.png',
    title: 'Mentalidade de Sucesso',
    content: /* html */'Acredito que o sucesso financeiro começa na mente. Vou te mostrar como desenvolver uma <b><i>mentalidade de sucesso</i></b>, superar crenças limitantes e alinhar seus pensamentos com a prosperidade.'
  },
  {
    icon: 'live.png',
    title: 'Entradas ao Vivo',
    content: /* html */'Vou compartilhar minhas estratégias, para você pode <b><i>lucrar comigo na mesma hora em Opções Binárias e Forex</i></b>, te ajudando a aproveitar as melhores oportunidades de lucro.'
  },
  {
    icon: 'comunidades.png',
    title: 'Comunidade Engajada',
    content: /* html */'Valorizo a <b><i>conexão com a comunidade</i></b> e estarei presente para responder suas perguntas, compartilhar experiências e criar um ambiente colaborativo de aprendizado.'
  }
] as ICard[]

export const useData = () => {
  return {
    aboutlives
  }
}
