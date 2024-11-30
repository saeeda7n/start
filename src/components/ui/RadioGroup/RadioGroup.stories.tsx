import { RadioGroup, RadioGroupItem } from '@/components/ui/RadioGroup/RadioGroup'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof RadioGroup> = {
  title: 'RadioGroup',
  component: RadioGroup,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    className: {
      control: 'text',
    },
    defaultValue: {
      control: 'text',
      description: 'Default selected value in the RadioGroup',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the entire RadioGroup',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <RadioGroup {...args}>
      <RadioGroupItem value="option1" />
      <RadioGroupItem value="option2" />
      <RadioGroupItem value="option3" />
    </RadioGroup>
  ),
  args: {
    defaultValue: 'option1',
  },
}

export const WithLabels: Story = {
  render: (args) => (
    <RadioGroup {...args}>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="option1" />
        <label>Option 1</label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="option2" />
        <label>Option 2</label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="option3" />
        <label>Option 3</label>
      </div>
    </RadioGroup>
  ),
  args: {
    defaultValue: 'option1',
  },
}

export const Disabled: Story = {
  render: (args) => (
    <RadioGroup {...args} disabled>
      <RadioGroupItem value="option1" />
      <RadioGroupItem value="option2" />
      <RadioGroupItem value="option3" />
    </RadioGroup>
  ),
  args: {
    defaultValue: 'option1',
    disabled: true,
  },
}
