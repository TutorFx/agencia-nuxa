<template>
  <nuxa-container class="min-h-full py-32">
    <form-fields />
  </nuxa-container>
</template>

<script setup lang="ts">
  defineOgImage({
    component: 'OGImageBlog',
    title: 'Entre em Contato',
    description: 'Entre em contato com nossa equipe',
  })
  useHead({
    title: 'Entre em Contato',
  })
  useSchemaOrg([
    defineArticle({
      headline: 'Entre em contato com nossa equipe',
      description: `
      Estamos aqui para transformar sua visão em realidade! Preencha o formulário abaixo para nos contar mais sobre o seu projeto,
      ideias ou dúvidas. Nossa equipe dedicada está ansiosa para ouvir você e responder prontamente. Juntos, podemos criar algo incrível na web.
      `,
    })
  ])
</script>