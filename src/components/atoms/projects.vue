<template>
  <div>
    <nuxt-link v-for="(post, i) in query" :key="i" class="grid md:grid-cols-2 gap-6" :to="{path: `/projetos${post._path}`}">
      <div class="aspect-video isloading overflow-hidden object-cover rounded-2xl flex items-center">
        <nuxt-img class="min-w-full min-h-full" :src="post?.image" />
      </div>
      <div class="grid items-center">
        <div class="grid gap-3 max-w-md">
          <nuxa-title>
            {{ post?.title }}
          </nuxa-title>
          <nuxa-paragraph>
            {{ post?.description }}
          </nuxa-paragraph>
          <p class="text-sm font-thin">
            {{ (post?.body?.children?.at(0)?.children?.at(0)?.value).slice(0,150) }}
          </p>
        </div>
      </div>
    </nuxt-link>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  modelValue: string,
}>();

const emits = defineEmits<(e: 'update:modelValue', value: string) => void>()
const search = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emits('update:modelValue', value)
  }
})

const { data, refresh } = await useAsyncData('list', () => queryContent('/').find(), { immediate: true })

const query = computed(() => data.value?.filter((val, index) => {
  if (!search.value) return true;
  if (val.title?.toLowerCase().includes(search.value.toLowerCase())) return true;
  if (val.description?.toLowerCase().includes(search.value.toLowerCase())) return true;
  if (JSON.stringify(val.body.children).toLowerCase().includes(search.value.toLowerCase())) return true;
  return false;
}))
</script>