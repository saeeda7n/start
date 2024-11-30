import { Input } from '@/components/ui/Input/Input'
import type { Meta, StoryObj } from '@storybook/react'
import { FormProvider, useForm } from 'react-hook-form'

const meta: Meta<typeof Input> = {
  title: 'Input',
  component: Input,
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
      <Input {...args} />
    </FormWrapper>
  ),
  args: {
    type: 'text',
    placeholder: 'Enter your text',
  },
}

export const Disabled: Story = {
  render: (args) => (
    <FormWrapper>
      <Input {...args} />
    </FormWrapper>
  ),
  args: {
    type: 'text',
    placeholder: 'Disabled input',
    disabled: true,
  },
}

export const Error: Story = {
  render: (args) => (
    <FormWrapper>
      <Input {...args} />
    </FormWrapper>
  ),
  args: {
    type: 'text',
    placeholder: 'Input with error',
    className: 'border-error',
  },
}
