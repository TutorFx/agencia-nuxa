<template>
  <div class="grid grid-cols-1 lg:grid-cols-2 justify-center gap-12 group max-w-5xl mx-auto">
    <div class="relative transition-all hover:ease-in-expo ease-out-expo duration-300"
      :class="{ 'group-hover:rotate-3': reverted, 'group-hover:-rotate-3': !reverted }">

      <div
        class="isloading aspect-square min-w-full overflow-hidden rounded-2xl md:rounded-tl-[240px] md:rounded-tr-[100px] md:rounded-bl-[100px] md:rounded-br-[240px] shadow">
        <nuxt-img lazy height="540" :alt="alt ?? title" width="540" class="w-full h-full" :src="src" />
      </div>

    </div>
    <div class="grid items-center" :class="{ 'lg:-order-1': reverted }">
      <div>
        <div class="grid gap-6">
          <div class="max-md:text-center">
            <nuxa-title>{{ title }}</nuxa-title>
          </div>
          <div class="text-white text-base font-normal max-md:text-center">
            <slot />
          </div>
          <slot name="action" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  src?: string,
  title: string,
  reverted?: boolean,
  alt?: string
}>(), { src: 'https://via.placeholder.com/540x540', reverted: false })
</script>