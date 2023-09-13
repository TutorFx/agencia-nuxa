<template>
  <div class="grid gap-1">
    <div class="relative">
      <textarea type="text" :id="COSTUM_ID" v-model="model" v-bind="attrs"
        class="bg-inherit block px-2.5 pb-2.5 pt-4 text-sm text-gray-300 rounded-lg border-2 border-gray-400 focus:ring-0 focus:border-blue-600 outline-none peer w-full"
        :class="{ '!border-danger': error, '!text-danger': error }"
        placeholder=" " />
      <label :for="COSTUM_ID"
        :class="{ '!text-danger': error }"
        class="absolute text-sm text-white duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-background px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 select-none cursor-text">
        {{ placeholder }}  <span v-if="required" class="text-danger">*</span>
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