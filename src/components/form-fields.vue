<template>
  <div class="grid gap-3">
    <label class="grid">
      <span class="text-stone-300 mb-1 relative"><span v-if="nomeError && isTouched" class="bg-danger px-1 rounded-md absolute right-6 shadow-lg">{{
        nomeError }}</span></span>
      <input v-model="state.nome" placeholder="Nome" type="text" class="bg-background-300 text-white px-9 py-6">
    </label>
    <label class="grid">
      <span class="text-stone-300 mb-1 relative"><span v-if="emailError && isTouched" class="bg-danger px-1 rounded-md absolute right-6 shadow-lg"> <Icon name="mdi:warning" />{{
        emailError }}</span></span>
      <input v-model="state.email" placeholder="Email" type="text" class="bg-background-300 text-white px-9 py-6">
    </label>
    <label class="grid">
      <span class="text-stone-300 mb-1 relative"><span v-if="celularError && isTouched"
          class="bg-danger px-1 rounded-md absolute right-6 shadow-lg">{{ celularError }}</span></span>
      <input v-maska placeholder="Whatsapp" data-maska="['(##) ####-####', '(##) # ####-####']" v-model="state.celular" type="text"
        class="bg-background-300 text-white px-9 py-6">
    </label>
    <label class="grid">
      <span class="text-stone-300 mb-1 relative"></span>
      <textarea v-model="state.mensage" placeholder="Mensagem" type="text"
        class="bg-background-300 text-white px-9 py-6"></textarea>
    </label>
    <div class="pt-6">
      <nuxa-button version="secondary" @click.prevent="trigger"
        type="submit"> Enviar
      </nuxa-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { FetchError } from 'ofetch'
import { ZodError } from 'zod'
import { useToast } from 'vue-toastification'



const schema = FormSchema();

const default_value = { email: '', nome: '', celular: '', mensage: '' }

const state = ref({ ...default_value })
const isTouched = ref(false)

const result = computed(() => schema.safeParse(state.value));
const errors = computed(() => result.value.success ? {} : result.value.error.format());

const getErrors = (field: string) => {
  //@ts-ignore
  return errors.value?.[field]?._errors?.at(0)
}

const nomeError = computed(() => getErrors('nome'))
const emailError = computed(() => getErrors('email'))
const celularError = computed(() => getErrors('celular'))

const trigger = async () => {
  isTouched.value = true;
  try {
    schema.parse(state.value)
    await $fetch('/api/v1/send', { body: state.value, method: 'POST' })
    const toast = useToast();
    toast.success('Obrigado por inscrever-se')
    state.value = { ...default_value };
    isTouched.value = false;
  } catch (e) {
    if (e instanceof ZodError) {
      console.error('Invalid Form Data')
      const toast = useToast();
      toast.error('Dados inválidos')
    };
    if (e instanceof FetchError) {
      console.error('Server Error')
      const toast = useToast();
      toast.error('Ocorreu um erro ao enviar dados')
    };
  }
}
</script>