<template>
  <div v-if="content && !error" class="grid gap-6 md:grid-cols-3">
    <nuxt-link v-for="(post, i) in content.items" :key="i" class="grid grid-rows-[max-content_1fr] overflow-hidden rounded-lg" :to="`/blog/${post.fields.path ?? ''}`">
      <!-- eslint-disable-next-line tailwindcss/classnames-order -->
      <div class="aspect-video isloading grid items-center justify-center overflow-hidden">
        <nuxt-img :src="'https:'+post.fields.thumb?.fields.file.url" alt="" fit="cover" width="425" height="240" />
      </div>
      <div class="bg-background-600 p-6">
        {{ post.fields.title }}
      </div>
    </nuxt-link>
  </div>
</template>

<script setup lang="ts">
const { data: content, error } = useFetch<any>('/api/v1/blog')
</script>