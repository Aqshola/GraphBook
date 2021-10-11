import React, { ReactElement } from 'react'
import clsx from 'clsx'

interface ListContainerProps extends React.HTMLProps<HTMLUListElement> {}

interface ListProps extends React.HTMLProps<HTMLLIElement> {}

export function ListContainer({
  children,
  className,
  ...props
}: ListContainerProps): ReactElement {
  return (
    <ul className={className} {...props}>
      {children}
    </ul>
  )
}

export function List({ className, children, ...props }: ListProps) {
  return (
    <li
      className={clsx(
        'transition font-medium cursor-pointer  text-purple-600 p-2 shadow rounded',
        className
      )}
      {...props}
    >
      {children}
    </li>
  )
}
