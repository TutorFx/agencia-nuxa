<template>
  <div>
    <div class="min-h-[100dvh] max-w-[1460px] mx-auto grid items-start grid-rows-[max-content_1fr_max-content] grid-cols-1 relative">
      <nuxa-navbar class="relative" />
      <slot />
      <nuxa-footer />
    </div>
  </div>
</template>