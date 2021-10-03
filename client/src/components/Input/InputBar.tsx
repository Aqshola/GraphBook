import React, { ReactElement } from 'react'
import clsx from 'clsx'

interface Props extends React.HTMLProps<HTMLInputElement> {}

export default function InputBar({ ...props }: Props): ReactElement {
  return (
    <input
      {...props}
      className={clsx(
        'transition-all border-purple-600  border p-2 text-purple-600 rounded-md focus:outline-none focus:ring-1 focus:ring-purple-600'
      )}
    />
  )
}
