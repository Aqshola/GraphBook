import React, { ReactElement } from 'react'
import Button from '../components/Button/Button'
import InputBar from '../components/Input/InputBar'

interface Props {}

export default function InputBook({}: Props): ReactElement {
  return (
    <div>
      <h1 className="text-purple-600 text-xl font-bold my-5">Input Book</h1>

      <div className="flex flex-col space-y-5 p-2 md:p-0">
        <div className="flex flex-col justify-start">
          <label className="text-left">Title</label>
          <InputBar placeholder="Title" />
        </div>
        <div className="flex flex-col justify-start">
          <label className="text-left">Genre</label>
          <InputBar placeholder="Genre" />
          <div className="mt-1">
            <div className="bg-purple-600 text-white w-max flex justify-between items-center p-1">
              <p>Action</p>
              <button className="text-sm p-1  ml-3 font-bold">X</button>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-start">
          <label className="text-left">Author</label>
          <InputBar placeholder="Author" />
          <div className="mt-1">
            <div className="bg-purple-600 text-white w-max flex justify-between items-center p-1">
              <p>Aqshol Afid</p>
              <button className="text-sm p-1  ml-3 font-bold">X</button>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-start">
          <label className="text-left">Description</label>
          <textarea
            className="border border-purple-600 w-96"
            defaultValue={'Book Description'}
            rows={10}
          ></textarea>
        </div>
        <div className="flex p-2 space-x-2">
          <Button>Save</Button>
          <Button variant="outline-primary"> Cancel</Button>
        </div>
      </div>
    </div>
  )
}
