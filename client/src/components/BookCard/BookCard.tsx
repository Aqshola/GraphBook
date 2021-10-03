import React, { ReactElement } from 'react'
import Button from '../Button/Button'

interface Props {
  title: string
  genre: string[]
}

export default function BookCard({ ...props }: Props): ReactElement {
  return (
    <div className="w-64 shadow-lg p-4 rounded-md space-y-5  border-purple-600">
      <h1 className="font-semibold text-xl space-y-5 text-purple-600">
        A Book of Wandering{' '}
      </h1>
      <div className="flex space-x-2">
        <Button
          role="link"
          Btnsize="sm"
          variant="outline-primary"
          className="text-sm hover:bg-purple-600 hover:text-white hover:bg-opacity-100"
        >
          Action
        </Button>
      </div>
    </div>
  )
}
