<template>
  <component class="select-none" :class="style.outside" :is="to ? NuxtLink : 'div'" :to="to">
    <div class="select-none" :class="style.inside">
      <slot />
    </div>
  </component>
</template>

<script setup lang="ts">
import { NuxtLinkProps } from '#app';

type Style = 'primary' | 'secondary' | 'outlined'

const NuxtLink = resolveComponent('NuxtLink')
const props = defineProps<{ to?: NuxtLinkProps | string, version?: Style }>()

const primaryStyles = {
  outside: 'px-[38px] py-[16px] shadow active:bg-nuxa-700 hover:bg-nuxa-400 rounded-full bg-nuxa-500 border-white justify-center items-center gap-2.5 inline-flex',
  inside: 'text-center text-white text-md font-medium uppercase'
}
const secondaryStyles = {
  outside: 'h-20 px-[76px] py-[25px] shadow active:bg-zinc-800 border border-white active:border-transparent justify-center items-center gap-2.5 inline-flex',
  inside: 'text-center text-white text-xl font-light leading-[30px]'
}
const outlinedStyles = {
  outside: 'px-[38px] py-[16px] shadow rounded-full border border-white justify-center items-center gap-2.5 inline-flex',
  inside: 'text-center text-white text-md font-medium uppercase'
}

const style = computed(() => {
  switch (props.version) {
    case 'outlined':
      return outlinedStyles;
    case 'secondary':
      return secondaryStyles;
    default: {
      return primaryStyles;
    }
  }
})

</script>