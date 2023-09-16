<template>
  <div>
    <div class="relative mx-auto grid min-h-[100dvh] max-w-[1460px] grid-cols-1 grid-rows-[max-content_1fr_max-content] items-start">
      <nuxa-navbar class="relative" />
      <slot />
      <nuxa-footer />
    </div>
  </div>
</template>
