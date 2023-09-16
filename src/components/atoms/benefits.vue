<template>
  <div v-if="query" class="grid max-md:gap-24">
    <div v-for="(post, i) in query" :key="i">
      <nuxa-content :title="post.title ?? ''" :src="post.image" :reverted="i % 2 == 1 ? true : undefined">
        {{ post?.description.slice(0, 150) }}
        <template #action>
          <div>
            <nuxa-button version="outlined" class="max-sm:block" :to="post._path">
              Ver mais
            </nuxa-button>
          </div>
        </template>
      </nuxa-content>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { ParsedContent } from '@nuxt/content/dist/runtime/types'

interface ParsedBenefit extends ParsedContent {
  title: string,
  description: string,
  image: string,
  updatedAt: string,
}

const props = defineProps<{
  modelValue?: string,
}>()

const emits = defineEmits<(e: 'update:modelValue', value?: string) => void>()
const search = computed({
  get () {
    return props.modelValue
  },
  set (value) {
    emits('update:modelValue', value)
  }
})

const { data } = await useAsyncData('benefits', () => queryContent<ParsedBenefit>('/beneficios').find(), { immediate: true })

const query = computed(() => data.value?.filter((val) => {
  try {
    // eslint-disable-next-line
    new ServiceQueryPost(val.title, val.description, val.body, val.image)
  } catch (e) {
    // eslint-disable-next-line array-callback-return
    if (!(e instanceof Error)) return;
    console.log(`Unable to display ${val.title} becouse ${e.message}`)
    return false
  }
  if (!search.value) { return true }
  if (val.title?.toLowerCase().includes(search.value.toLowerCase())) { return true }
  if (val.description?.toLowerCase().includes(search.value.toLowerCase())) { return true }
  if (JSON.stringify(val.body.children).toLowerCase().includes(search.value.toLowerCase())) { return true }
  return false
}))
</script>
