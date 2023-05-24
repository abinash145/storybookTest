import type { Meta, StoryObj } from '@storybook/react'
import Input from './Input'
const meta: Meta<typeof Input> = {
  title: 'component/Input',
  component: Input,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  //   parameters: {
  //     // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
  //     layout: 'fullscreen',
  //   },
}
export default meta
type Story = StoryObj<typeof Input>

export const primary: Story = {
  args: {
    label: 'This is for lable',
    placeholder: 'This is for input placeholder',
  },
}

export const seconday = (): JSX.Element => {
  return (
    <Input
      label="Secondary"
      placeholder="This is placeholder"
      type="text"
      variant="outlined"
      error={false}
    />
  )
}

export const ExampleStory: Story = {
  render: (args) => {
    const {
      label,
      placeholder,
      type,
      variant,
      error,
      outerContainerClassName,
    } = args
    //👇 Assigns the function result to a variable

    return (
      <Input
        label={label}
        placeholder={placeholder}
        type={type}
        variant={variant}
        error={error}
        outerContainerClassName={outerContainerClassName}
      />
    )
  },
  args: {
    label: 'Secondary',
    placeholder: 'This is placeholder',
    type: 'text',
    variant: 'outlined',
    error: false,
    outerContainerClassName: 'max-w-[500px] overflow-hidden',
  },
}
