import React, { ReactElement } from 'react'

interface Props {}

export default function InputBook({}: Props): ReactElement {
  return (
    <div>
      <h1>Input Book</h1>

      <input type="text" placeholder="Title" />
      <div>
        <p>Genre</p>
      </div>
      <input type="text" />
      <div>
        <p>Author</p>
      </div>
      <input type="Author" />
      <textarea name="" id="" cols={30} rows={10}>
        Book Description
      </textarea>
    </div>
  )
}
