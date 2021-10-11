import React, { ReactElement } from 'react'
import CardBook from '../components/BookCard/BookCard'
interface Props {}

export default function AuthorDetail({}: Props): ReactElement {
  return (
    <>
      <h1 className="mt-2 text-2xl text-purple-600 font-semibold">
        Author Detail
      </h1>
      <h2 className="mt-10">Biodata</h2>
      <div className="p-2 md:p-0  flex flex-col  text-left">
        <p className="font-medium">Name : Aqshol Afid</p>
        <p className="font-medium">Age : 18</p>
      </div>
      <h2 className="mt-3">Book List</h2>
      <div className="flex flex-col space-y-10  items-center  mx-auto px-5 w-screen max-w-screen-xs">
        <CardBook
          title="The book of Wanderer"
          genre={['Adventure', 'Drama']}
          className="w-full"
        />
        <CardBook
          title="The book of Wanderer"
          genre={['Adventure', 'Drama']}
          className="w-full"
        />
        <CardBook
          title="The book of Wanderer"
          genre={['Adventure', 'Drama']}
          className="w-full"
        />
      </div>
    </>
  )
}
