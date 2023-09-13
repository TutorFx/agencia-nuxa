<template>
  <div class="grid gap-1">
    <div class="relative">
      <select :id="COSTUM_ID" v-model="model" v-bind="attrs"
        class="bg-inherit block px-2 pb-2.5 pr-6 pt-4 text-sm text-gray-300 rounded-lg border-2 border-gray-400 focus:ring-0 focus:border-blue-600 outline-none w-full peer"
        :class="{ '!border-danger': error }">
        <option class="bg-background text-gray-300 py-6" :class="{ '!text-danger': error }" disabled selected value="">Selecione</option>
        <option class="bg-background text-white py-6" :class="{ '!text-danger': error }" v-for="option in options" :value="option.value">{{ option.title }}</option>
      </select>
      <label :for="COSTUM_ID"
        :class="{ '!text-danger': error }"
        class="absolute text-sm text-white duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-background px-2 left-1 peer-focus:text-blue-600">
        {{ placeholder }} <span v-if="required" class="text-danger">*</span>
      </label>
    </div>
    <div v-if="error" class="text-danger">
      {{ errorMessage }}
    </div>
  </div>
</template>

<script lang="ts">
export default {
  inheritAttrs: false
}
</script>

<script setup lang="ts">
import { v4 as uuid } from 'uuid';

const COSTUM_ID = uuid()

const props = withDefaults(defineProps<{
  modelValue: string,
  error?: boolean,
  errorMessage?: string,
  options: { value: string, title: string }[],
  type: string,
  placeholder: string,
  required?: boolean,
}>(), {
  error: false,
  placeholder: '',
  errorMessage: '',
  required: false
});

const emits = defineEmits<{
  'update:modelValue': [id: string],
}>()

const attrs = useAttrs()

const model = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emits('update:modelValue', value)
  }
})
</script>