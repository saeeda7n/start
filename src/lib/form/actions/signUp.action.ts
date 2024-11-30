'use server'

import { type Localization, redirect } from '@/i18n/routing'
import { signInSchema } from '@/lib/form/validations/auth'
import { createSupabaseServer } from '@/lib/supabase/server'
import { type FormActionInterface } from '@/lib/typescript/interfaces/formAction'
import { getLocale } from 'next-intl/server'
import { headers } from 'next/headers'

export const signUpAction = async (
  pState: FormActionInterface,
  formData: FormData
): Promise<FormActionInterface> => {
  const supabase = await createSupabaseServer()
  const data = Object.fromEntries(formData)
  const parsed = signInSchema.safeParse(data)

  const fields: Record<string, string> = {}

  for (const key of Object.keys(formData)) {
    fields[key] = data[key].toString()
  }

  if (!parsed.success) {
    return {
      message: 'Invalid form data',
      status: 'fail',
      fields,
      issues: parsed.error.issues.map((issue) => issue.message),
    }
  }

  const origin = (await headers()).get('origin')
  const locale = (await getLocale()) as Localization
  const email = parsed.data.email
  const password = parsed.data.password

  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${origin}/${locale}/auth/callback`,
    },
  })

  if (error) {
    return {
      message: error.message,
      status: 'fail',
      fields,
    }
  }

  const {
    data: { user },
  } = await supabase.auth.getUser()

  const role = user?.user_metadata.access_level

  if (role === 'admin') {
    return redirect({ href: '/complete-registration', locale })
  } else {
    return redirect({ href: '/complete-registration', locale })
  }
}
