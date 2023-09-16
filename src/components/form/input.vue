<template>
  <div class="grid gap-1">
    <div class="relative">
      <input
        :id="COSTUM_ID"
        v-model="model"
        type="text"
        v-bind="attrs"
        class="peer block w-full rounded-lg border-2 border-gray-400 bg-inherit px-2.5 pb-2.5 pt-4 text-sm text-gray-300 outline-none focus:border-blue-600 focus:ring-0"
        :class="{ '!border-danger': error, '!text-danger': error }"
        placeholder=" "
      >
      <label
        :for="COSTUM_ID"
        :class="{ '!text-danger': error }"
        class="absolute left-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 cursor-text select-none bg-background px-2 text-sm text-white duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600"
      >
        {{ placeholder }} <span v-if="required" class="text-danger">*</span>
      </label>
    </div>
    <div v-if="error" class="text-danger">
      {{ errorMessage }}
    </div>
  </div>
</template>

<script lang="ts">
import { v4 as uuid } from 'uuid'
export default {
  inheritAttrs: false
}
</script>

<script setup lang="ts">
const COSTUM_ID = uuid()

const props = withDefaults(defineProps<{
  modelValue: string,
  error?: boolean,
  errorMessage?: string,
  type: string,
  placeholder: string,
  required?: boolean,
}>(), {
  error: false,
  placeholder: '',
  errorMessage: '',
  required: false
})

const emits = defineEmits<{
  'update:modelValue': [id: string],
}>()

const attrs = useAttrs()

const model = computed({
  get () {
    return props.modelValue
  },
  set (value) {
    emits('update:modelValue', value)
  }
})
</script>
