interface InputProps {
  label: string
  message?: string
  name?: string
  defaultValue?: string
  placeholder: string
  type?: 'number' | 'file' | 'text' | 'email' | 'password'
  error: boolean
  variant: 'static' | 'standard' | 'outlined'
  outerContainerClassName?: string
  labelClassName?: string
  inputClassName?: string
  field?: any
}
interface BorderStyle {
  static: string
  standard: string
  outlined: string
}
const Input = ({
  type = 'text',
  placeholder,
  defaultValue,
  label,
  error = false,
  variant = 'outlined',
  outerContainerClassName,
  labelClassName,
  inputClassName,
  name,
  field,
  message,
}: InputProps) => {
  const inputBorderStyle: BorderStyle = {
    static: `border-green-400 ${
      error ? 'border-red-400' : 'border-green-400 '
    }`,
    standard: `border-b-2 border-l-0 border-t-0 border-r-0 ${
      error ? 'border-red-400' : 'border-green-400 '
    }`,
    outlined: `${error ? 'border-red-400' : 'border-none'}`,
  }

  return (
    <div
      className={`flex flex-col w-full ${
        outerContainerClassName ? `${outerContainerClassName}` : ''
      }`}
    >
      <label
        className={`p-4 text-black border mb-2  ${
          labelClassName ? `${labelClassName}` : ''
        }`}
        htmlFor={label}
      >
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        id={label}
        defaultValue={defaultValue || ''}
        {...field}
        className={[
          `p-4 min-w-[200px] text-black  focus:border-blue-900 border-2 outline-none   rounded-xl ${
            error ? 'border-red-400' : ''
          }`,
          ,
          `${inputBorderStyle[variant]}`,
          inputClassName ? `${inputClassName}` : '',
        ].join(' ')}
      />
      {message && <p className="text-red-500 ml-2">{message}</p>}
    </div>
  )
}

export default Input
