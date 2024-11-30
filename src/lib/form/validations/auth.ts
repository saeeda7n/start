import { z } from 'zod'

export const signInSchema = z.object({
  email: z.string().email({ message: 'invalid_email' }),
  password: z
    .string()
    .min(6, { message: 'password_len' })
    .regex(/[a-z]/, { message: 'password_lowercase' })
    .regex(/[A-Z]/, { message: 'password_uppercase' })
    .regex(/[0-9]/, { message: 'password_digits' })
    .regex(/[\W_]/, { message: 'password_symbol' }),
})

