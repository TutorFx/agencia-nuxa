<script setup lang="ts">
const props = defineProps<{
  modelValue: boolean,
}>()

const emits = defineEmits<(e: 'update:modelValue', value: boolean) => void>()
const menuVisible = computed({
  get () {
    return props.modelValue
  },
  set (value) {
    emits('update:modelValue', value)
  }
})

watch(() => useRoute().path, () => {
  menuVisible.value = false
})
</script>

<template>
  <div>
    <!-- eslint-disable -->
    <div class="links hidden gap-6 md:flex">
    <!-- eslint-disable -->
      <nuxt-link v-for="(item, i) in useMenu()" :key="i" :aria-label="`Vá para a página ${item.title}`" :to="item.to">
        <div class="text-xl font-medium leading-tight text-content">
          {{ item.title }}
        </div>
      </nuxt-link>
    </div>
    <button :alt="`${!menuVisible ? 'Abrir' : 'Fechar'} menu`" class="flex md:hidden" @click.prevent="menuVisible = !menuVisible">
      <Icon v-if="!menuVisible" name="line-md:menu" class="text-content" size="48" />
      <Icon v-else name="line-md:close-small" class="text-content" size="48" />
    </button>
  </div>
</template>

<style lang="scss" scoped>
a {
  &::after {
    content: ' ';
    transition: width 200ms;
    @apply bg-nuxa w-0 h-1 block duration-300 mt-1;
  }
}

.links {
  .router-link-exact-active {
    &::after {
      @apply w-[50%] h-1;
    }
  }
}
</style>
