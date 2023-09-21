<template>
  <div>
    <section>
      <nuxa-container class="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_max-content]">
        <div />
        <div
          class="grid overflow-hidden max-lg:gap-6 lg:grid-cols-[1fr_min-content] lg:rounded-full lg:bg-background-400"
        >
          <input
            v-model="state"
            class="bg-background-400 px-9 py-6 text-white focus:outline-0"
            placeholder="Pesquise um projeto..."
            type="text"
            @keypress.enter="search = state"
          >
          <nuxa-button @click.prevent="search = state">
            Pesquisar
          </nuxa-button>
        </div>
      </nuxa-container>
    </section>
    <section>
      <nuxa-container class="py-24">
        <blog-list />
      </nuxa-container>
    </section>
    <section data-scroll-section>
      <nuxa-container> 
        <form-fields />
      </nuxa-container>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useRouteQuery } from '@vueuse/router'
const search = useRouteQuery<string>('search')
const state = ref(search.value ?? undefined)

defineOgImage({
  component: 'OGImageBlog',
  title: 'Blog',
  description: 'Explore Nosso Blog e Fique Por Dentro de Nossas Dicas',
})
useHead({
  title: 'Blog',
})
useSchemaOrg([
  defineArticle({
    headline: 'Conecte-se Com a Inovação: Explore Nosso Blog e Fique Por Dentro de Nossas Dicas',
    description: `
      Em nosso blog, nos esforçamos para fornecer aos nossos leitores as informações 
      mais recentes e relevantes no campo do desenvolvimento. Sabemos que a inovação 
      é a chave para o sucesso em qualquer indústria, e é por isso que nos dedicamos 
      a explorar novas ideias e compartilhá-las com você.
    `,
  })
])
</script>
