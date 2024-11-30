import Paragraph from '@/components/ui/Paragraph/Paragraph'
import { type Meta, type StoryObj } from '@storybook/react'
import { Accordion, AccordionContent, AccordionItem } from './Accordion'

const meta: Meta<typeof Accordion> = {
  title: 'Accordion',
  component: Accordion,
  parameters: {
    layout: 'centered',
  },
  args: {
    type: 'single',
    collapsible: true,
  },
}

export default meta
type Story = StoryObj<typeof Accordion>

export const Default: Story = {
  render: (args) => (
    <Accordion className="min-w-96" {...args}>
      <AccordionItem value="item-1">
        <AccordionContent>
          <Paragraph content="This is the content of the first accordion item." />
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-2">
        <AccordionContent>
          <Paragraph content="This is the content of the second accordion item." />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
}
