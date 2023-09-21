<template>
  <div v-if="content && !error && parsedMarkdown">
    <NuxaContainer>
      <ContentRenderer :value="parsedMarkdown" />
    </NuxaContainer>
  </div>
  <div v-else>
    <NuxaContainer>
      Conteúdo não encontrado
    </NuxaContainer>
  </div>
</template>

<script setup lang="ts">
// @ts-expect-error avoid lint error
import markdownParser from '@nuxt/content/transformers/markdown'

const route = useRoute()
const { data: content, error } = await useFetch<any>(`/api/v1/blog/${route.params.slug ?? ''}`)

const parsedMarkdown = content.value ? await markdownParser.parse('md', content.value.items.at(0).fields.body ?? '') : null


</script>