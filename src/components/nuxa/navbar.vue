<template>
  <div>
    <div :class="{ 'absolute': useRoute().path === '/' }" class="h-32 grid top-0 right-0 left-0">
      <nuxa-container class="grid grid-cols-[1fr_max-content] items-center gap-6">
        <Icon name="Logotype" height="40" width="160" />
        <atoms-menu v-model="menuVisible" />
      </nuxa-container>
      <teleport v-if="menuVisible" to="body">
        <div class="fixed inset-0 z-10 bg-white/90 backdrop-blur-sm grid grid-rows-[max-content_1fr] grid-cols-1">
          <div class="h-32 bg-white grid">
            <nuxa-container class="grid grid-cols-[1fr_max-content] items-center gap-6">
              <Icon name="Logotype" height="40" width="160" />
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
    <div class="fixed top-0 left-0 right-0">
      <Transition enter-active-class="animate__animated animate__slideInDown"
        leave-active-class="animate__animated animate__slideOutUp">
        <div v-if="upperMove" class="h-32 shadow bg-white/70 backdrop-blur-lg grid">
          <nuxa-container class="grid grid-cols-[1fr_max-content] items-center gap-6">
            <Icon name="Logotype" height="40" width="160" />
            <atoms-menu v-model="menuVisible" />
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