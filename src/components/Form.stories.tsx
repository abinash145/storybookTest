import type { Meta, StoryObj } from '@storybook/react'
import { within, userEvent } from '@storybook/testing-library'
import Form from './Form'

const meta: Meta<typeof Form> = {
  title: 'component/Form',
  component: Form,
  tags: ['autodocs'],
}
export default meta
type Story = StoryObj<typeof Form>

export const formSubmit: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const emailInput = canvas.getByLabelText('email', {
      selector: 'input',
    })
    const loginButton = await canvas.getByRole('button', {
      name: /Log in/i,
    })
    await userEvent.click(loginButton)
  },
}
