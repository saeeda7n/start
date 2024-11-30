import { Switch } from '@/components/ui/Switch/Switch'
import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'

const meta: Meta<typeof Switch> = {
  title: 'Switch',
  component: Switch,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    className: {
      control: 'text',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the switch',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => {
    const [checked, setChecked] = useState(false)

    return <Switch {...args} checked={checked} onCheckedChange={(value) => setChecked(value)} />
  },
  args: {},
}

export const Disabled: Story = {
  render: (args) => {
    const [checked, setChecked] = useState(false)

    return (
      <Switch {...args} checked={checked} onCheckedChange={(value) => setChecked(value)} disabled />
    )
  },
  args: {
    disabled: true,
  },
}

export const WithLabels: Story = {
  render: (args) => {
    const [checked, setChecked] = useState(false)

    return (
      <div className="flex items-center gap-2">
        <label>{checked ? 'On' : 'Off'}</label>
        <Switch {...args} checked={checked} onCheckedChange={(value) => setChecked(value)} />
      </div>
    )
  },
  args: {},
}
