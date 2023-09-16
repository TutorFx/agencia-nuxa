<template>
  <div class="grid lg:grid-cols-2 gap-24">
    <div>
      <div class="grid gap-3">
        <nuxa-title class="max-w-md">
          ENTRE EM CONTATO COM NOSSA EQUIPE
        </nuxa-title>
        <p>
          Estamos aqui para transformar sua visão em realidade! Preencha o formulário abaixo para nos contar mais sobre o
          seu
          projeto, ideias ou dúvidas. Nossa equipe dedicada está ansiosa para ouvir você e responder prontamente. Juntos,
          podemos criar algo incrível na web.
        </p>
      </div>
    </div>
    <div class="grid gap-3">
      <div>
        <h2 class="text-lg font-semibold">Com quem estamos falando?</h2>
      </div>
      <form-input v-model="state.nomeEmpresa" :error="nomeEmpresaError && isTouched" :error-message="nomeEmpresaError"
        placeholder="Empresa" required type="text" />
      <div class="grid gap-3 grid-flow-col">
        <div>
          <form-input v-model="state.nomeResponsavel" :error="nomeResponsavelError && isTouched"
            :error-message="nomeResponsavelError" placeholder="Responsável" required type="text" />
        </div>
        <div>
          <form-input v-model="state.cargo" placeholder="Cargo" type="text" />
        </div>
      </div>
      <form-input v-model="state.email" :error="emailError && isTouched" :error-message="nomeEmpresaError"
        placeholder="Email" required type="text" />
      <form-input v-model="state.celular" :error="celularError && isTouched" :error-message="celularError" type="text"
        v-maska placeholder="Whatsapp" :data-maska="usePhoneDataMask" required />
      <form-select v-model="state.funcionarios" :options="funcionarios"
        placeholder="Número de funcionarios da sua empresa" type="text" />
      <form-select v-model="state.faturamento" :options="faturamento"
        placeholder="Qual o faturamento da sua empresa?" type="text" />
      <form-textarea v-model="state.message" placeholder="Mensagem" type="text" />
      <div class="pt-6">
        <nuxa-button version="primary" @click.prevent="trigger" type="submit"> Enviar
        </nuxa-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { FetchError } from 'ofetch'
import { ZodError } from 'zod'
import { FormDefaults } from '~/server/api/utils';

const funcionarios = [
  { value: '>10', title: 'Até 10 funcionários' },
  { value: '>100', title: 'Até 100 funcionários' },
  { value: '>500', title: 'Até 500 funcionários' },
  { value: '>1000', title: 'Até 1000 funcionários' },
  { value: '1000>', title: 'Mais de 1000 funcionários' },
]

const faturamento = [
  { value: '>50k', title: 'Menos de R$ 50.000,00' },
  { value: '50k>200k', title: 'Entre R$ 50.000,00 e R$ 200.000,00' },
  { value: '200k>500k', title: 'Entre R$ 200.000,00 e R$ 500.000,00' },
  { value: '500k>1kk', title: 'Entre R$ 500.000,00 e R$ 1.000.000,00' },
  { value: '1kk>', title: 'Acima de R$ 1.000.000,00' },
]

const schema = FormSchema();
const default_value = FormDefaults();


const state = ref({ ...default_value })
const isTouched = ref(false)

const result = computed(() => schema.safeParse(state.value));
const errors = computed(() => result.value.success ? {} : result.value.error.format());

const getErrors = (field: string) => {
  //@ts-ignore
  return errors.value?.[field]?._errors?.at(0)
}

const nomeEmpresaError = computed(() => getErrors('nomeEmpresa'))
const nomeResponsavelError = computed(() => getErrors('nomeResponsavel'))
const emailError = computed(() => getErrors('email'))
const celularError = computed(() => getErrors('celular'))

const trigger = async () => {
  isTouched.value = true;
  try {
    schema.parse(state.value)
    await $fetch('/api/v1/send-form', { body: state.value, method: 'POST' })
    //const toast = useToast();
    //toast.success('Obrigado por inscrever-se')
    state.value = { ...default_value };
    isTouched.value = false;
  } catch (e) {
    if (e instanceof ZodError) {
      console.error('Invalid Form Data')
      //const toast = useToast();
      //toast.error('Dados inválidos')
    };
    if (e instanceof FetchError) {
      console.error('Server Error')
      //const toast = useToast();
      //toast.error('Ocorreu um erro ao enviar dados')
    };
  }
}
</script>