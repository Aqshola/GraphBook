import React, { ReactElement } from 'react'

interface Props {}

export default function InputAuthor({}: Props): ReactElement {
  return (
    <div>
      <h1>Input Author</h1>
      <input type="text" />
      <input type="text" />
    </div>
  )
}
