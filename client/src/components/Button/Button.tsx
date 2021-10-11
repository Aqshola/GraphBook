import React from 'react'
import clsx from 'clsx'

interface BtnProps extends React.HTMLProps<HTMLButtonElement> {
  Btnsize?: 'lg' | 'md' | 'sm'
  variant?:
    | 'primary'
    | 'secondary'
    | 'outline-primary'
    | 'outline-secondary'
    | 'base'
}

export default function Button({
  Btnsize = 'md',
  variant = 'primary',
  className,
  type,
  ...props
}: BtnProps) {
  return (
    <button
      className={clsx(
        'rounded hover:bg-opacity-60 transition-all  font-medium',
        className,
        Btnsize === 'sm' && ['px-3 py-1.5'],
        Btnsize === 'md' && ['px-5 py-2.5 '],
        Btnsize === 'lg' && ['py-3 px-8'],
        variant === 'primary' && ['bg-purple-600 text-gray-100 shadow-md'],
        variant === 'secondary' && ['bg-gray-100 text-purple-600 shadow-md'],
        variant === 'outline-primary' && [
          'bg-transparent text-purple-600 border-purple-600  border',
        ],
        variant === 'outline-secondary' && [
          'bg-transparent text-gray-100 border-gray-100',
        ],
        variant === 'base' && ['border-black text-black font-normal']
      )}
      type="button"
      {...props}
    >
      {props.children}
    </button>
  )
}
