'use server'

import { signInSchema } from '@/lib/form/validations/auth'
import { createSupabaseServer } from '@/lib/supabase/server'
import type { SignInFormProps } from '@/lib/typescript/interfaces/forms.type'

export const signInAction = async (formData: SignInFormProps) => {
  const supabase = await createSupabaseServer()
  const parsed = signInSchema.safeParse(formData)

  if (!parsed.success) {
    return {
      message: 'Invalid form data',
      status: 'fail',
      issues: parsed.error.issues.map((issue) => issue.message),
    }
  }

  const { error } = await supabase.auth.signInWithPassword(parsed.data)

  if (error) {
    return {
      message: error.message,
      status: 'fail',
    }
  }

  const {
    data: { user },
  } = await supabase.auth.getUser()

  const profile = (await supabase.from('profiles').select().eq('user_id', user!.id).single()).data
  if (profile?.profile_image_url)
    profile.profile_image_url =
      (
        await supabase.storage
          .from(process.env.NEXT_PUBLIC_PROFILE_STORAGE!)
          .createSignedUrl(profile.profile_image_url, 86400 * 4)
      ).data?.signedUrl || null

  return {
    message: 'success',
    status: 'success',
    data: {
      user,
      profile,
    },
  }
}
