import { Checkbox } from '@/components/ui/Checkbox/Checkbox'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Checkbox> = {
  title: 'Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  args: {
    'aria-label': 'Checkbox',
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Checked: Story = {
  args: {
    checked: true,
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
}

export const CheckedDisabled: Story = {
  args: {
    checked: true,
    disabled: true,
  },
}
