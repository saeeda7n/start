import { Label } from '@/components/ui/Label/Label'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Label> = {
  title: 'Label',
  component: Label,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    className: {
      control: 'text',
      description: 'Custom CSS classes for the label',
    },
    children: {
      control: 'text',
      description: 'Content of the label',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'Default Label',
  },
}

export const CustomClass: Story = {
  args: {
    children: 'Custom Styled Label',
    className: 'text-blue-500',
  },
}

export const DisabledLabel: Story = {
  args: {
    children: 'Disabled Label',
    className: 'peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
  },
}
