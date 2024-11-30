import Paragraph from '@/components/ui/Paragraph/Paragraph'
import type { Meta, StoryObj } from '@storybook/react'

import LucideArrowLeft from '~icons/lucide/arrow-left'

const meta: Meta<typeof Paragraph> = {
  title: 'Paragraph',
  component: Paragraph,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    content: {
      control: 'text',
    },
    size: {
      control: 'select',
      options: [
        'title_lg_ds',
        'title_lg_mb',
        'title_md_ds',
        'title_md_mb',
        'title_sm_ds',
        'title_sm_mb',
        'body_lg_ds',
        'body_lg_mb',
        'body_sm_ds',
        'body_sm_mb',
        'button_lg',
        'button_sm',
        'label',
        'input_text',
        'caption',
      ],
    },
    textModel: {
      control: 'select',
      options: [
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
        'error',
        'info',
        'infoLight',
        'infoDark',
      ],
    },
    icon: {
      control: 'text',
    },
    dir: {
      control: 'select',
      options: ['ltr', 'rtl'],
    },
    className: {
      control: 'text',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    content: 'This is a paragraph.',
    size: 'size_body_lg',
    textModel: 'primary',
  },
}

export const WithIcon: Story = {
  args: {
    content: 'This is a paragraph with an icon.',
    size: 'size_body_lg',
    textModel: 'primary',
    icon: <LucideArrowLeft />,
  },
}

export const ErrorText: Story = {
  args: {
    content: 'This is an error paragraph.',
    size: 'size_body_lg',
    textModel: 'error',
  },
}
