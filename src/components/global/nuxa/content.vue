<template>
  <div class="group grid grid-cols-1 justify-center gap-12 lg:grid-cols-12">
    <div
      class="relative transition-all duration-300 ease-out-expo hover:ease-in-expo lg:col-span-6 xl:col-span-5"
      :class="{ 'group-hover:rotate-3': reverted, 'group-hover:-rotate-3': !reverted }"
    >
      <div
        class="isloading aspect-square min-w-full overflow-hidden rounded-2xl shadow md:rounded-bl-[100px] md:rounded-br-[240px] md:rounded-tl-[240px] md:rounded-tr-[100px]"
      >
        <nuxt-img
          lazy
          height="540"
          :alt="alt ?? title"
          width="540"
          class="h-full w-full"
          :src="src"
        />
      </div>
    </div>
    <div class="grid items-center lg:col-span-6 xl:col-span-7" :class="{ 'lg:-order-1': reverted}">
      <div>
        <div class="grid gap-6">
          <div class="max-md:text-center">
            <nuxa-title>{{ title }}</nuxa-title>
          </div>
          <div class="text-base font-normal text-white max-md:text-center">
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
