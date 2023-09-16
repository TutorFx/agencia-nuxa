<script lang="ts" setup>
defineProps<{
  icon: string,
  url: string
}>()
</script>

<template>
  <nuxt-link :to="url">
    <div class="rounded-xl bg-background-400 p-2 px-3">
      <Icon :name="icon" />
    </div>
  </nuxt-link>
</template>
