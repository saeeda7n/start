import * as React from 'react'
import { useFormField } from '@/components/ui/Form'

interface SupportedFormInput {}

const withFormState = <P extends object>(
  Component: React.FC<P & { color: 'error' | 'default' | string | null | undefined }>
): React.FC<P & SupportedFormInput> => {
  return function WithFormState({ ...props }: SupportedFormInput) {
    const { error } = useFormField()
    return <Component color={error ? 'error' : 'default'} {...(props as P)} />
  }
}

export default withFormState
