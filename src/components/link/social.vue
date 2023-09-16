<script lang="ts" setup>
defineProps<{
  icon: string,
  url: string
}>()
</script>

<template>
  <nuxt-link :to="url">
    <div class="p-2 px-3 bg-background-400 rounded-xl">
      <Icon :name="icon"></Icon>
    </div>
  </nuxt-link>
</template>