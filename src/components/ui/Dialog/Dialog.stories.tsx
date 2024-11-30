import { Button } from '@/components/ui/Button/Button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/Dialog/Dialog'
import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'

const meta: Meta<typeof Dialog> = {
  title: 'Dialog',
  component: Dialog,
  parameters: {
    layout: 'centered',
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
      <Dialog {...args} open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button variant="secondary">Open Dialog</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Dialog Title</DialogTitle>
            <DialogDescription>This is a description of the dialog content.</DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button onClick={() => setIsOpen(false)} variant="secondary">
              Close
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    )
  },
}

export const WithFooterActions: Story = {
  render: (args) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
      <Dialog {...args} open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button variant="secondary">Open Dialog with Actions</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Action Dialog</DialogTitle>
            <DialogDescription>
              This dialog includes custom actions in the footer.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button onClick={() => setIsOpen(false)} variant="secondary">
              Cancel
            </Button>
            <Button>Confirm</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    )
  },
}

export const NoFooter: Story = {
  render: (args) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
      <Dialog {...args} open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button variant="secondary">Open Dialog</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Simple Dialog</DialogTitle>
            <DialogDescription>This dialog has no footer actions.</DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    )
  },
}
