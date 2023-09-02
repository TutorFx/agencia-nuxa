<template>
  <nuxa-container class="grid min-h-full py-12 items-start">
    <div class="grid gap-12">
      <ContentRenderer v-if="data" :value="data" class="min-h-full"></ContentRenderer>
      <nuxa-title v-else class="min-h-full grid items-center justify-center">
        Conteúdo não encontrado
      </nuxa-title>
    </div>
  </nuxa-container>
</template>

<script setup lang="ts">
const { path } = useRoute()
const data = await queryContent().where({ _path: path }).findOne()
</script>