<template>
  <div class="rounded-3xl relative overflow-hidden">
    <div class="aspect-square md:aspect-video bg-fixed bg-cover translate-z-20" :style="backgroundStyles"></div>
  </div>
</template>

<script setup lang="ts">

const img = useImage()
const backgroundStyles = computed(() => {
  const imgUrl = img('/assets/images/computer.jpg', { sizes: 'xs:600px sm:650px md:1024px lg:100vw xl:100vw' })
  return { backgroundImage: `url('${imgUrl}')` }
})
</script>