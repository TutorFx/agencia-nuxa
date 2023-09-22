<template>
  <div>
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
