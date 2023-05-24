interface ButtonProps {
  label: string
  onClick?: () => void
  className?: '' | 'bg-red-500' | 'bg-green-500' | 'bg-yellow-500'
}
const Button = (props: ButtonProps) => {
  return (
    <button
      type="button"
      className={[
        'p-4 text-red-400 border border-red-400 ',
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
