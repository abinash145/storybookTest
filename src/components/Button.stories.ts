import type { Meta, StoryObj } from '@storybook/react'
import Button from './Button'
const meta: Meta<typeof Button> = {
  title: 'component/Button',
  component: Button,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  //   parameters: {
  //     // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
  //     layout: 'fullscreen',
  //   },
}
export default meta
type Story = StoryObj<typeof Button>

export const primary: Story = {
  args: {
    label: 'sdfdsf',
    className: {
      control: {
        type: 'select',
        options: ['', 'bg-red-500', 'bg-green-500', 'bg-yellow-500'],
      },
    },
  },
}
