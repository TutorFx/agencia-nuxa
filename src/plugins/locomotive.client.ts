import { Scroller } from '@/libs/scroller';
const scroller = new Scroller
export default defineNuxtPlugin({
  name: 'Locomotive',
  async setup(nuxtApp) {
    return {
      provide: {
        scroller
      }
    }
  },
})
