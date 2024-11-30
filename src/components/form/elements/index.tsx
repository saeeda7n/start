import withFormState from '@/lib/hocs/withFormState'
import { SelectTrigger as SelectTriggerOriginal } from '@/components/common/select'
import { default as InputOriginal } from '@/components/common/Input'

export const SelectTrigger = withFormState(SelectTriggerOriginal)
export const Input = withFormState(InputOriginal)
