interface InputProps {
  label: string
  placeholder: string
  type: 'number' | 'file' | 'text'
  error: boolean
  variant: 'static' | 'standard' | 'outlined'
  outerContainerClassName?: string
  labelClassName?: string
  inputClassName?: string
}

const Input = ({
  type = 'text',
  placeholder,
  label,
  error = false,
  variant = 'outlined',
  outerContainerClassName,
  labelClassName,
  inputClassName,
}: InputProps) => {
  return (
    <div
      className={`flex flex-col w-full ${
        outerContainerClassName ? `${outerContainerClassName}` : ''
      }`}
    >
      <label
        className={`p-4 text-black border  ${
          labelClassName ? `${labelClassName}` : ''
        }`}
      >
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className={[
          `p-4 min-w-[200px] text-black  focus:border-blue-900 border-2 outline-none border-transparent  rounded-xl ${
            error ? 'border-red-400' : ''
          } ${
            variant === 'outlined'
              ? `border-green-400 ${
                  error ? 'border-red-400' : 'border-green-400 '
                }`
              : variant === 'standard'
              ? `border-b-2 border-l-0 border-t-0 border-r-0 ${
                  error ? 'border-red-400' : 'border-green-400 '
                }`
              : ''
          }`,
          `${inputClassName ? `${inputClassName}` : ''}`,
        ].join(' ')}
      />
    </div>
  )
}

export default Input
