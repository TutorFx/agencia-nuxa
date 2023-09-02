<template>
  <div class="rounded-xl overflow-hidden relative group border border-transparent hover:border-nuxa-300/10 hover:shadow-xl transition-all duration-500">
    <div class="absolute -z-10 pointer-events-none transition-opacity duration-500"
      :style="{ top: `${mouseWithExtractor.y}px`, left: `${mouseWithExtractor.x}px`, opacity: isHovered && !isButtonHovered ? 1 : 0}">
      <div class="w-24 h-24 bg-nuxa rounded-full relative -translate-x-[50%] -translate-y-[50%]"  />
    </div>
    <div class="grid justify-center bg-background-400/20 backdrop-blur-[80px] py-8 px-12 gap-6" ref="cardEl">
      <div v-if="src" class="p-2 rounded-full bg-background-500 pointer-events-none">
        <div class="aspect-square overflow-hidden h-48 w-48 rounded-full">
          <nuxt-img :src="src" fit="cover" width="192" height="192" />
        </div>
      </div>
      <div class="font-bold text-lg text-center pointer-events-none">
        <slot name="head" />
      </div>
      <div class="border-b border-content/20 pointer-events-none" />
      <div class="text-center pointer-events-none">
        <slot name="body" />
      </div>
      <div ref="buttonEl" class="grid">
        <slot name="action" />
      </div>
    </div>
  </div>
</template>


<script setup lang="ts">
import { UseMouseEventExtractor, useElementHover, useMouse } from '@vueuse/core';
const cardEl = ref(null)
const buttonEl = ref(null)
const isHovered = useElementHover(cardEl, { })
const isButtonHovered = useElementHover(buttonEl, { })
const extractor: UseMouseEventExtractor = event => {
  if (event.target === cardEl.value) return (
    event instanceof Touch
      ? null
      : [event.offsetX, event.offsetY]
  )
}
const mouseWithExtractor = reactive(useMouse({ target: cardEl, type: extractor }))

withDefaults(defineProps<{
  src: string,
}>(), {})
</script>