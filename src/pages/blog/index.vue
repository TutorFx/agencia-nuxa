<template>
  <div>
    <section>
      <nuxa-container class="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_max-content]">
        <div />
        <div
          class="grid overflow-hidden max-lg:gap-6 lg:grid-cols-[1fr_min-content] lg:rounded-full lg:bg-background-400"
        >
          <input
            v-model="state"
            class="bg-background-400 px-9 py-6 text-white focus:outline-0"
            placeholder="Pesquise um projeto..."
            type="text"
            @keypress.enter="search = state"
          >
          <nuxa-button @click.prevent="search = state">
            Pesquisar
          </nuxa-button>
        </div>
      </nuxa-container>
    </section>
    <section>
      <nuxa-container class="py-24">
        <atoms-benefits v-model="search" />
      </nuxa-container>
    </section>
    <section data-scroll-section>
      <nuxa-container class="grid gap-6 py-12 lg:grid-cols-2">
        <div>
          <nuxa-title class="mb-6">
            Entre em contato
          </nuxa-title>
          <nuxa-paragraph>
            Preencha o formulário para que
            possamos<br>agendar um horário e conversar sobre o projeto
          </nuxa-paragraph>
        </div>
        <form-fields />
      </nuxa-container>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useRouteQuery } from '@vueuse/router'
const search = useRouteQuery<string>('search')
const state = ref(search.value ?? undefined)
</script>

<style></style>
