import React, { ReactElement } from 'react'
import Button from '../components/Button/Button'
import InputBar from '../components/Input/InputBar'

interface Props {}

export default function InputAuthor({}: Props): ReactElement {
  return (
    <div className="p-2 md:p-0">
      <h1 className="text-purple-600 text-xl font-bold my-5">Input Author</h1>
      <div className="space-y-3">
        <InputBar placeholder="Name" className="w-full" />
        <InputBar placeholder="Age" />
      </div>
      <div className="flex space-x-4 mt-3">
        <Button Btnsize="sm">Save</Button>
        <Button Btnsize="sm" variant="outline-primary">
          Cancel
        </Button>
      </div>
    </div>
  )
}
