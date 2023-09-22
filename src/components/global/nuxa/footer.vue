<template>
  <div class="">
    <nuxa-container class="mt-32 grid gap-6 py-12 md:gap-12">
      <div class="grid gap-6 max-sm:text-center md:grid-cols-3">
        <div>
          <div class="grid gap-6 max-md:text-center">
            <Icon name="Logotype" class="h-16 w-48 text-content max-md:mx-auto" />
            <div>
              Na Agência Nuxa, estamos apaixonados por transformar ideias em realidade. Somos uma equipe de
              especialistas em desenvolvimento web e design, prontos para criar soluções digitais que se destacam.
              Trabalhamos
              incansavelmente para tornar a web um lugar mais bonito e funcional. Junte-se a nós nessa jornada digital:
            </div>
            <div class="grid items-center max-md:justify-center">
              <div>
                <div class="grid gap-6 md:gap-3">
                  <div class="grid grid-flow-col justify-start gap-3 max-sm:text-center">
                    <link-social icon="cib:instagram" url="https://www.instagram.com/" />
                    <link-social icon="mingcute:meta-fill" url="https://www.meta.com/" />
                    <link-social icon="cib:github" url="https://www.github.com/" />
                    <link-social icon="cib:youtube" url="https://www.youtube.com/" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="grid grid-cols-1 gap-x-2 gap-y-8 text-start md:col-span-2 md:grid-cols-2">
          <div v-for="(menu, i) in footer" :key="i" class="grid gap-1">
            <div>
              <div class="grid gap-6 md:gap-3">
                <div>
                  <span class="text-background-50">
                    {{ i }}
                  </span>
                </div>
                <div v-for="(link, x) in menu" :key="`${x}-${i}`">
                  <nuxt-link :to="link.to" :aria-label="`Vá para ${link.title}`">
                    {{ link.title }}
                  </nuxt-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="1" viewBox="0 0 1270 1" fill="none">
        <path d="M0.5 0.5H1269.5" stroke="url(#paint0_linear_1038_5054)" />
        <defs>
          <linearGradient
            id="paint0_linear_1038_5054"
            x1="1269.5"
            y1="0.502382"
            x2="0.5"
            y2="0.480001"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#343045" />
            <stop offset="0.348958" stop-color="#C0B7E8" />
            <stop offset="0.6875" stop-color="#8176AF" />
            <stop offset="1" stop-color="#343045" />
          </linearGradient>
        </defs>
      </svg>
      <div class="grid justify-center max-sm:text-center">
        <span>
          2023 © Agência Nuxa - All Rights Reserved
        </span>
      </div>
    </nuxa-container>
  </div>
</template>

<script setup lang="ts">
const { data: footer } = await useAsyncData('menu', () => useFooterMenu(), { immediate: true })
</script>
