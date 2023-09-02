<template>
  <div class="grid gap-12 mb-12 lg:grid-cols-2 lg:gap-24 lg:mb-24">
    <div v-if="src" class="aspect-square isloading min-w-xl isloading overflow-hidden rounded-2xl md:rounded-tl-[240px] md:rounded-tr-[100px] md:rounded-bl-[100px] md:rounded-br-[240px]">
      <nuxt-img fit="cover" class="w-full h-full" width="500" height="500" :src="src"></nuxt-img>
    </div>
    <div class="grid items-center">
      <div>
        <div class="grid gap-3">
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