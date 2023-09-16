<template>
  <div class="mb-12 grid gap-12 lg:mb-24 lg:grid-cols-2 lg:gap-24">
    <div v-if="src" class="isloading aspect-square overflow-hidden rounded-2xl md:rounded-bl-[100px] md:rounded-br-[240px] md:rounded-tl-[240px] md:rounded-tr-[100px]">
      <nuxt-img fit="cover" class="h-full w-full" width="500" height="500" :src="src" />
    </div>
    <div class="grid items-center">
      <div>
        <div class="prose prose-h1:text-white prose-h2:text-white prose-p:text-xl prose-p:leading-9 prose-a:font-extrabold prose-a:text-content prose-a:decoration-transparent">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  src: string,
}>(), {})
</script>
