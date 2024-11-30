import { Textarea } from '@/components/ui/Textarea/Textarea'
import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'

const meta: Meta<typeof Textarea> = {
  title: 'Textarea',
  component: Textarea,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    placeholder: {
      control: 'text',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the textarea',
    },
    className: {
      control: 'text',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => {
    const [value, setValue] = useState('')

    return <Textarea {...args} value={value} onChange={(e) => setValue(e.target.value)} />
  },
  args: {
    placeholder: 'Enter your text here...',
  },
}

export const Disabled: Story = {
  render: (args) => <Textarea {...args} disabled />,
  args: {
    placeholder: 'Textarea is disabled...',
    disabled: true,
  },
}

export const WithInitialValue: Story = {
  render: (args) => {
    const [value, setValue] = useState('This is the initial text.')

    return <Textarea {...args} value={value} onChange={(e) => setValue(e.target.value)} />
  },
  args: {
    placeholder: 'Enter your text here...',
  },
}
