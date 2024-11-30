import { Button } from '@/components/ui/Button/Button'
import type { Meta, StoryObj } from '@storybook/react'
import LucideArrowLeft from '~icons/lucide/arrow-left'

const meta = {
  title: 'Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },

  args: { variant: 'default', children: 'children' },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}

export const Secondary: Story = { args: { variant: 'secondary' } }
export const Ghost: Story = { args: { variant: 'ghost' } }

export const Function: Story = { args: { variant: 'link' } }
export const WithIcon: Story = {
  args: {
    variant: 'secondary',
    children: <LucideArrowLeft />,
  },
}
