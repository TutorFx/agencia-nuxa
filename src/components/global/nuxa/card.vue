<template>
  <div
    class="group relative overflow-hidden rounded-xl border border-transparent transition-all duration-500 hover:border-nuxa-300/10 hover:shadow-xl"
  >
    <div
      class="pointer-events-none absolute -z-10 transition-opacity duration-500"
      :style="{ top: `${mouseWithExtractor.y}px`, left: `${mouseWithExtractor.x}px`, opacity: isHovered && !isButtonHovered ? 1 : 0 }"
    >
      <div class="relative h-24 w-24 translate-x-[-50%] translate-y-[-50%] rounded-full bg-nuxa" />
    </div>
    <div
      ref="cardEl"
      class="grid h-full items-start justify-center gap-6 bg-background-400/20 px-12 py-8 backdrop-blur-[80px]"
    >
      <div v-if="src" class="pointer-events-none rounded-full bg-background-500 p-2">
        <div class="aspect-square h-48 w-48 overflow-hidden rounded-full">
          <nuxt-img :src="src" fit="cover" width="192" height="192" />
        </div>
      </div>
      <div class="pointer-events-none grow text-center text-lg font-bold">
        <slot name="head" />
      </div>
      <div class="pointer-events-none border-b border-content/20" />
      <div class="pointer-events-none text-center">
        <slot name="body" />
      </div>
      <div ref="buttonEl" class="grid">
        <slot name="action" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { UseMouseEventExtractor } from '@vueuse/core'
import { useElementHover, useMouse } from '@vueuse/core'
const cardEl = ref(null)
const buttonEl = ref(null)
const isHovered = useElementHover(cardEl, {})
const isButtonHovered = useElementHover(buttonEl, {})
const extractor: UseMouseEventExtractor = (event) => {
  if (event.target === cardEl.value) {
    return (
      event instanceof Touch
        ? null
        : [event.offsetX, event.offsetY]
    )
  }
}
const mouseWithExtractor = reactive(useMouse({ target: cardEl, type: extractor }))

withDefaults(defineProps<{
  src: string,
}>(), {})
</script>
