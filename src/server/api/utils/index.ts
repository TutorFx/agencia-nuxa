import { z } from 'zod'

export const FormSchema = () => z.object({
  nomeEmpresa: z.string().nonempty('Campo obrigatório'),
  nomeResponsavel: z.string().nonempty('Campo obrigatório'),
  email: z.string().email('Campo obrigatório').nonempty('Campo obrigatório'),
  celular: z.string().nonempty('Campo obrigatório').min(14, 'Número de telefone inválido').max(20, 'Número de telefone inválido'),
  // Accept
  faturamento: z.string(),
  funcionarios: z.string(),
  message: z.string(),
  cargo: z.string()
})

export const FormDefaults = () => ({
  nomeEmpresa: '',
  nomeResponsavel: '',
  cargo: '',
  email: '',
  celular: '',
  funcionarios: '',
  faturamento: '',
  message: ''
})

const schema = FormSchema()

export type IFormData = z.infer<typeof schema>;
