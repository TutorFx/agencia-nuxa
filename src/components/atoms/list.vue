<template>
  <div class="relative overflow-hidden">
    <!-- grid gap-x-12 gap-y-24 md:grid-cols-2 lg:grid-cols-3 -->
    <nuxa-container class="!overflow-visible">
      <Swiper :modules="[Autoplay, Mousewheel]" :autoplay="{ delay: 5000 }" spaceBetween="40" :mousewheel="{ releaseOnEdges: true }"
        class="!overflow-visible" :breakpoints="BREAKPOINTS">
        <SwiperSlide v-for="(item, i) in items" :key="i">
          <div class="grid gap-3">
            <nuxa-title class="">{{ i }}</nuxa-title>
            <nuxa-paragraph class="">{{ item }}</nuxa-paragraph>
          </div>
        </SwiperSlide>
      </Swiper>
    </nuxa-container>
  </div>
</template>

<script setup lang="ts">
import * as data from '@/assets/json/principes.json'
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Virtual, Autoplay, Mousewheel } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
// @ts-ignore
const items = data.default as Object<string, string>
const BREAKPOINTS = {
  '640': {
    spaceBetween: 40,
  },
  '768': {
    slidesPerView: 2,
    spaceBetween: 40,
  },
  '1024': {
    slidesPerView: 3,
    spaceBetween: 50,
  },
  '1920': {
    slidesPerView: 3,
    spaceBetween: 50,
  },
}
</script>