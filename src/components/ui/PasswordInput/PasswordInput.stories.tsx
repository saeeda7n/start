import { PasswordInput } from '@/components/ui/PasswordInput/PasswordInput'
import type { Meta, StoryObj } from '@storybook/react'
import { FormProvider, useForm } from 'react-hook-form'

const meta: Meta<typeof PasswordInput> = {
  title: 'PasswordInput',
  component: PasswordInput,
  parameters: {
    layout: 'centered',
  },
}

export default meta
type Story = StoryObj<typeof meta>

const FormWrapper = ({ children }: { children: React.ReactNode }) => {
  const methods = useForm()
  return <FormProvider {...methods}>{children}</FormProvider>
}

export const Default: Story = {
  render: (args) => (
    <FormWrapper>
      <PasswordInput {...args} />
    </FormWrapper>
  ),
  args: {
    placeholder: 'Enter your password',
  },
}

export const Disabled: Story = {
  render: (args) => (
    <FormWrapper>
      <PasswordInput {...args} />
    </FormWrapper>
  ),
  args: {
    placeholder: 'Password input disabled',
    disabled: true,
  },
}

export const Error: Story = {
  render: (args) => (
    <FormWrapper>
      <PasswordInput {...args} className="border-error" />
    </FormWrapper>
  ),
  args: {
    placeholder: 'Enter your password',
  },
}
