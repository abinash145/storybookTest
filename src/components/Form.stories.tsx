import type { Meta, StoryObj } from '@storybook/react'
import { within, userEvent } from '@storybook/testing-library'
import Form from './Form'

const meta: Meta<typeof Form> = {
  title: 'component/Form',
  component: Form,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Another description, overriding the comments',
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Form>
export const EmptyForm: Story = {}
export const FilledForm: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const emailInput = canvas.getByLabelText('email', {
      selector: 'input',
    })
    const passwordInput = canvas.getByLabelText('password', {
      selector: 'input',
    })
    const loginButton = await canvas.getByRole('button')
    await userEvent.click(loginButton)
  },
  parameters: {
    docs: {
      description: {
        story: 'Another description on the story, overriding the comments',
      },
    },
  },
}
