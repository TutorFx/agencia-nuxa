<template>
  <component class="select-none" :class="style.outside" :is="to ? NuxtLink : 'div'" :to="to">
    <div class="select-none" :class="style.inside">
      <slot />
    </div>
  </component>
</template>

<script setup lang="ts">
import { NuxtLinkProps } from '#app';

type Style = 'primary' | 'secondary'

const NuxtLink = resolveComponent('NuxtLink')
const props = defineProps<{ to?: NuxtLinkProps | string, version?: Style }>()
const style = computed(() => {
  switch (props.version) {
    case 'secondary':
      return {
        outside: 'h-20 px-[76px] py-[25px] shadow active:bg-zinc-800 border border-white active:border-transparent justify-center items-center gap-2.5 inline-flex',
        inside: 'text-center text-white text-xl font-light leading-[30px]'
      }
    default: { // 'primary'
      return {
        outside: 'h-20 px-[76px] py-[25px] shadow active:bg-zinc-900 bg-zinc-800 border-white justify-center items-center gap-2.5 inline-flex',
        inside: 'text-center text-white text-xl font-light leading-[30px]'
      }
    }
  }
})

</script>