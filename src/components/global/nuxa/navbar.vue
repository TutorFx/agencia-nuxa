<template>
  <div>
    <div :class="{ 'absolute': useRoute().path === '/' }" class="h-32 grid top-0 right-0 left-0 z-10">
      <nuxa-container
        class="grid grid-cols-[1fr_max-content] lg:grid-cols-[max-content_1fr_max-content] items-center gap-6 text-content">
        <NuxtLink to="/" aria-label="Vá para a homepage da Nuxa">
          <Icon name="Logotype" height="70" width="160" />
        </NuxtLink>
        <div class="grid justify-center">
          <atoms-menu v-model="menuVisible" />
        </div>
        <nuxa-button version="outlined" class="hidden lg:block">faça um orcamento</nuxa-button>
      </nuxa-container>
      <teleport v-if="menuVisible" to="body">
        <div class="fixed inset-0 z-10 bg-background/90 backdrop-blur-sm grid grid-rows-[max-content_1fr] grid-cols-1">
          <div class="h-32 bg-background grid">
            <nuxa-container class="grid grid-cols-[1fr_max-content] items-center gap-6">
              <NuxtLink to="/" aria-label="Vá para a homepage da Nuxa">
                <Icon name="Logotype" height="70" width="160" />
              </NuxtLink>
              <atoms-menu v-model="menuVisible" />
            </nuxa-container>
          </div>
          <div class="flex items-center justify-center">
            <div class="grid items-center text-center gap-6">
              <nuxt-link v-for="(item, i) in useMenu()" :key="i" :to="item.to">
                <div class="text-content text-xl font-medium leading-tight">{{ item.title }}</div>
              </nuxt-link>
            </div>
          </div>
        </div>
      </teleport>
    </div>
    <div class="fixed top-0 left-0 right-0 z-20">
      <Transition enter-active-class="animate__animated animate__slideInDown"
        leave-active-class="animate__animated animate__slideOutUp">
        <div v-if="upperMove" class="h-32 shadow bg-background/70 backdrop-blur-lg grid">
          <nuxa-container
            class="grid grid-cols-[1fr_max-content] lg:grid-cols-[max-content_1fr_max-content] items-center gap-6 text-content">
            <NuxtLink to="/" aria-label="Vá para a homepage da Nuxa">
              <Icon name="Logotype" height="70" width="160" />
            </NuxtLink>
            <div class="grid justify-center">
              <atoms-menu v-model="menuVisible" />
            </div>
            <nuxa-button version="outlined" class="hidden lg:block">faça um orcamento</nuxa-button>
          </nuxa-container>
        </div>
      </Transition>
    </div>
  </div>
</template>

<script setup lang="ts">
import 'animate.css';
import { useScrollLock, useWindowScroll } from '@vueuse/core';

const el = ref();
onMounted(() => el.value = document.body);
const menuVisible = useScrollLock(el);
const upperMove = ref<null | boolean>(null)
const { x, y } = useWindowScroll()

watch(y, (newv, oldv) => upperMove.value = oldv > newv && y.value > 250)
</script>