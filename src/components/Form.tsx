import React, { useState } from 'react'
import Input from './Input'
import Button from './Button'
import { useForm, Controller } from 'react-hook-form'
interface FormData {
  name: string
  email: string
}
interface FormProps {
  onSubmit: (data: FormData) => void
}
type Inputs = {
  email: string
  password: string
}
const Form: React.FC<FormProps> = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
  })

  const {
    handleSubmit,
    control,
    formState: { errors },
    watch,
  } = useForm<Inputs>()
  const submit = (data: Inputs) => console.log(data)
  return (
    <form onSubmit={handleSubmit(submit)}>
      <div className="mb-4">
        <Controller
          control={control}
          name="email"
          rules={{
            required: 'This field is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Invalid email address',
            },
          }}
          defaultValue=""
          render={({ field }) => (
            <Input
              label="email"
              placeholder="Please Enter your email"
              type="email"
              variant="static"
              name="email"
              error={errors?.email ? true : false}
              field={field}
              message={errors?.email?.message || ''}
            />
          )}
        />
      </div>
      <div className="mb-4">
        <Controller
          control={control}
          name="password"
          defaultValue=""
          rules={{
            required: 'This field is required',
          }}
          render={({ field }) => (
            <Input
              label="password"
              placeholder="Please Enter your password"
              type="password"
              variant="static"
              name="password"
              error={errors?.password ? true : false}
              field={field}
              message={errors?.password?.message || ''}
            />
          )}
        />
      </div>

      <Button label="Submit Form" type="submit" />
    </form>
  )
}

export default Form
