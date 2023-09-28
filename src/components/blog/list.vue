<template>
  <div v-if="content && !error" class="grid gap-6 md:grid-cols-3">
    <nuxt-link v-for="(post, i) in content.items" :key="i"
      class="grid grid-rows-[max-content_1fr] overflow-hidden rounded-lg" :to="`/blog/${post.fields.path ?? ''}`">
      <!-- eslint-disable-next-line tailwindcss/classnames-order -->
      <div class="aspect-video isloading grid items-center justify-center overflow-hidden">
        <nuxt-img :src="'https:' + post.fields.thumb?.fields.file.url" alt="" fit="cover" width="425" height="240" />
      </div>
      <div class="bg-background-600 p-6">
        {{ post.fields.title }}
      </div>
    </nuxt-link>
  </div>
  <div v-else class="grid gap-6 md:grid-cols-3">
    <div v-for="i in 5" :key="i">
      <div class="isloading grid aspect-video items-center justify-center overflow-hidden">
      </div>
      <div class="bg-background-600 p-6">
        <div class="grid gap-3">
          <div class="isloading h-2 w-16"></div>
          <div class="isloading h-2 w-10"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { data: content, error } = useFetch<any>('/api/v1/blog')
</script>