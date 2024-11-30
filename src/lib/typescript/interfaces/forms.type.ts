import type { z } from 'zod'
import type { signInSchema } from '@/lib/form/validations/auth'

export type SignInFormProps = z.infer<typeof signInSchema>
