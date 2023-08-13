<script setup lang="ts">
const props = defineProps<{
  modelValue: boolean,
}>();

const emits = defineEmits<(e: 'update:modelValue', value: boolean) => void>()
const menuVisible = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emits('update:modelValue', value)
  }
})

watch(() => useRoute().path, () => {
  menuVisible.value = false;
});
</script>

<template>
  <div>
    <div class="hidden md:flex gap-6 links">
      <nuxt-link v-for="(item, i) in useMenu()" :key="i" :to="item.to">
        <div class="text-content text-xl font-medium leading-tight">{{ item.title }}</div>
      </nuxt-link>
    </div>
    <button class="md:hidden flex" @click.prevent="menuVisible = !menuVisible">
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