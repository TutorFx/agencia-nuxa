<template>
  <div class="relative overflow-hidden rounded-3xl">
    <div class="translate-z-20 aspect-square bg-cover bg-fixed md:aspect-video" :style="backgroundStyles" />
  </div>
</template>

<script setup lang="ts">

const img = useImage()
const backgroundStyles = computed(() => {
  const imgUrl = img('/assets/images/computer.jpg', { sizes: 'xs:600px sm:650px md:1024px lg:100vw xl:100vw' })
  return { backgroundImage: `url('${imgUrl}')` }
})
</script>
