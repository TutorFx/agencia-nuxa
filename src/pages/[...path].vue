<template>
  <nuxa-container class="grid min-h-full items-start py-12">
    <div class="grid gap-12">
      <ContentRenderer v-if="data" :value="data" class="min-h-full" />
      <nuxa-title v-else class="grid min-h-full items-center justify-center">
        Conteúdo não encontrado
      </nuxa-title>
    </div>
  </nuxa-container>
</template>

<script setup lang="ts">
const { path } = useRoute()
const data = await queryContent().where({ _path: path }).findOne()
</script>
