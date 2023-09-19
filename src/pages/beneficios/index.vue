<template>
  <div>
    <section>
      <nuxa-container class="py-24">
        <atoms-benefits />
      </nuxa-container>
      <nuxa-marqee />
    </section>
  </div>
</template>

<script setup lang="ts">
defineOgImage({
  component: 'OGImageBlog',
  title: 'Nossos Serviços',
  description: 'Transformando Visões em Realidade: Nossos Serviços de Agência de Desenvolvimento',
})
useHead({
  title: 'Nossos Serviços',
})
useSchemaOrg([
  defineArticle({
    headline: 'Transformando Visões em Realidade: Nossos Serviços de Agência de Desenvolvimento',
    description: `
    A Agência Nuxa é uma empresa especializada em desenvolvimento web, que oferece soluções criativas e inovadoras para os seus clientes. 
    No nosso blog, você encontra dicas, tutoriais, novidades e tendências sobre o mundo digital, além de conhecer os nossos projetos e 
    cases de sucesso. Acompanhe o nosso conteúdo e descubra como a Agência Nuxa pode ajudar o seu negócio a crescer na internet.
      `,
  })
])
</script>