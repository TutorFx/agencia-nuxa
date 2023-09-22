export default defineNuxtPlugin(() => {
  const route = useRoute()

  if(process.client) {
    onMounted(() => {
      const analytics = new Analytics();
      analytics.viewPage()
    })
    watch(() => route.fullPath, () => {
      const analytics = new Analytics();
      analytics.viewPage()
    })
  }
})