import LargeHeading from '@/components/ui/LargeHeading/LargeHeading'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof LargeHeading> = {
  title: 'LargeHeading',
  component: LargeHeading,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    as: {
      control: 'text',
      description: 'Tag for the heading (h1, h2, h3, etc.)',
    },
    content: {
      control: 'text',
      description: 'Content of the heading',
    },
    variant: {
      control: 'select',
      options: [
        'default',
        'primary',
        'primary50',
        'primary100',
        'primary200',
        'primary300',
        'primary400',
        'primary500',
        'primary600',
        'primary700',
        'primary800',
        'primary900',
        'gray50',
        'gray100',
        'gray200',
        'gray300',
        'gray400',
        'gray500',
        'gray600',
        'gray700',
        'gray800',
        'gray900',
        'secondary',
        'secondary50',
        'secondary100',
        'secondary200',
        'secondary300',
        'secondary400',
        'secondary500',
        'secondary600',
        'secondary700',
        'secondary800',
        'secondary900',
      ],
      description: 'Color variant for the heading',
    },
    className: {
      control: 'text',
      description: 'Custom CSS classes for the heading',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    as: 'h1',
    content: 'This is a Large Heading',
    variant: 'default',
  },
}

export const Primary: Story = {
  args: {
    as: 'h1',
    content: 'Primary Heading',
    variant: 'primary',
  },
}

export const Gray700: Story = {
  args: {
    as: 'h2',
    content: 'Gray700 Heading',
    variant: 'gray700',
  },
}
