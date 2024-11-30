import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/Tabs/Tabs'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Tabs> = {
  title: 'Tabs',
  component: Tabs,
  parameters: {
    layout: 'centered',
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Tabs {...args} defaultValue="tab1">
      <TabsList>
        <TabsTrigger value="tab1">Tab 1</TabsTrigger>
        <TabsTrigger value="tab2">Tab 2</TabsTrigger>
        <TabsTrigger value="tab3">Tab 3</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">Content for Tab 1</TabsContent>
      <TabsContent value="tab2">Content for Tab 2</TabsContent>
      <TabsContent value="tab3">Content for Tab 3</TabsContent>
    </Tabs>
  ),
}

export const WithCustomStyles: Story = {
  render: (args) => (
    <Tabs {...args} defaultValue="tab1">
      <TabsList className="rounded-full bg-gray-300 p-1">
        <TabsTrigger value="tab1" className="p-2 text-blue-500">
          Tab 1
        </TabsTrigger>
        <TabsTrigger value="tab2" className="p-2 text-green-500">
          Tab 2
        </TabsTrigger>
        <TabsTrigger value="tab3" className="p-2 text-red-500">
          Tab 3
        </TabsTrigger>
      </TabsList>
      <TabsContent value="tab1" className="bg-blue-50 p-4">
        Content for Tab 1
      </TabsContent>
      <TabsContent value="tab2" className="bg-green-50 p-4">
        Content for Tab 2
      </TabsContent>
      <TabsContent value="tab3" className="bg-red-50 p-4">
        Content for Tab 3
      </TabsContent>
    </Tabs>
  ),
}

export const DisabledTab: Story = {
  render: (args) => (
    <Tabs {...args} defaultValue="tab1">
      <TabsList>
        <TabsTrigger value="tab1">Tab 1</TabsTrigger>
        <TabsTrigger value="tab2" disabled>
          Tab 2 (Disabled)
        </TabsTrigger>
        <TabsTrigger value="tab3">Tab 3</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">Content for Tab 1</TabsContent>
      <TabsContent value="tab2">Content for Tab 2</TabsContent>
      <TabsContent value="tab3">Content for Tab 3</TabsContent>
    </Tabs>
  ),
}
