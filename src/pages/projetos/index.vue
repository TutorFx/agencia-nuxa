<template>
  <div>
    <section class="py-12">
      <nuxa-container class="grid lg:grid-cols-2 gap-6">
        <nuxa-title>
          Projetos.
        </nuxa-title>
        <div class="grid lg:grid-cols-[1fr_min-content] max-lg:gap-6">
          <input v-model="state" @keypress.enter="search = state" class="bg-background-400 text-white px-9 py-6 focus:outline-0" placeholder="Pesquise um projeto..."
            type="text">
          <nuxa-button @click.prevent="search = state">
            Pesquisar
          </nuxa-button>
        </div>
      </nuxa-container>
    </section>
    <section>
      <nuxa-container class="py-12">
        <atoms-projects v-model="search" />
      </nuxa-container>
    </section>
    <section data-scroll-section>
      <nuxa-container class="grid lg:grid-cols-2 gap-6 py-12">
        <div>
          <nuxa-title class="mb-6">Entre em contato</nuxa-title>
          <nuxa-paragraph>
            Preencha o formulário para que
            possamos<br />agendar um horário e conversar sobre o projeto
          </nuxa-paragraph>
        </div>
        <form-fields />
      </nuxa-container>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useRouteQuery } from '@vueuse/router'
const search = useRouteQuery('search')
const state = ref(search.value)
</script>

<style></style>