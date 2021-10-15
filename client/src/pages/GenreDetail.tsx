import React, { ReactElement } from 'react'
import CardBook from '../components/BookCard/BookCard'

interface Props {}

export default function GenreDetail({}: Props): ReactElement {
  return (
    <div>
      <h1 className="mt-2 text-2xl text-purple-600 font-semibold">
        Genre Action
      </h1>
      <div className="flex flex-col space-y-10 py-5 items-center mt-5 mx-auto px-5 w-screen max-w-screen-xs">
        <CardBook
          title="The book of Wanderer"
          genre={[
            {
              id: '1',
              name: 'Action',
            },
            {
              id: '2',
              name: 'Drama',
            },
          ]}
          className="w-full"
        />
        <CardBook
          title="The book of Wanderer"
          genre={[
            {
              id: '1',
              name: 'Action',
            },
            {
              id: '2',
              name: 'Drama',
            },
          ]}
          className="w-full"
        />
        <CardBook
          title="The book of Wanderer"
          genre={[
            {
              id: '1',
              name: 'Action',
            },
            {
              id: '2',
              name: 'Drama',
            },
          ]}
          className="w-full"
        />
      </div>
    </div>
  )
}
