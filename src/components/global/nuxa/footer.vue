<template>
  <div class="">
    <nuxa-container class="mt-32 py-12 grid gap-8">

      <div class="grid md:grid-cols-5 gap-3">
        <nuxt-link to="/">
          <Icon name="Logo" size="128" class="grayscale hover:grayscale-0" />
        </nuxt-link>
        <div v-for="(menu, i) in useFooterMenu()" class="grid gap-1 items-center" :key="i">
          <div>
            <div class="grid gap-3">
              <div v-for="(link, x) in menu" :key="`${x}-${i}`">
                <nuxt-link :to="link.to">{{ link.title }}</nuxt-link>
              </div>
            </div>
          </div>
        </div>
        <div class="grid items-center gap-3">
          <div>
            Social
          </div>
          <div class="grid grid-flow-col">
            <Icon name="cib:instagram"></Icon>
            <Icon name="cib:facebook"></Icon>
            <Icon name="cib:github"></Icon>
            <Icon name="cib:youtube"></Icon>
          </div>
        </div>
      </div>

      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="1" viewBox="0 0 1270 1" fill="none">
        <path d="M0.5 0.5H1269.5" stroke="url(#paint0_linear_1038_5054)" />
        <defs>
          <linearGradient id="paint0_linear_1038_5054" x1="1269.5" y1="0.502382" x2="0.5" y2="0.480001"
            gradientUnits="userSpaceOnUse">
            <stop stop-color="#343045" />
            <stop offset="0.348958" stop-color="#C0B7E8" />
            <stop offset="0.6875" stop-color="#8176AF" />
            <stop offset="1" stop-color="#343045" />
          </linearGradient>
        </defs>
      </svg>
      <div class="grid justify-center">
        <span>
          2023 © Agência Nuxa - All Rights Reserved
        </span>
      </div>
    </nuxa-container>
  </div>
</template>