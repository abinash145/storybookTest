interface ButtonProps {
  label: string
  onClick?: () => void
  className?: '' | 'bg-red-500' | 'bg-green-500' | 'bg-yellow-500'
  type?: 'submit' | 'reset' | 'button' | undefined
}
const Button = (props: ButtonProps) => {
  return (
    <button
      type={props.type}
      className={[
        'p-4 text-red-400 border border-red-400 rounded min-w-[200px]',
        props.className,
      ].join(' ')}
      onClick={props.onClick}
      {...props}
    >
      {props.label}
    </button>
  )
}
export default Button
