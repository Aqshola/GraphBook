import React, { ReactElement } from 'react'
import SearchBar from '../components/Input/SearchBar'
import CardBook from '../components/BookCard/BookCard'
import { useQuery } from '@apollo/client'
import { getAllBook } from '../apollo/glQuery'
import { book } from '../types/ApiTypes'

type Response = {
  books: book[]
}

export default function Homepage(): ReactElement {
  const { loading, error, data } = useQuery<Response>(getAllBook)

  return (
    <div className="min-h-screen ">
      <div className="mt-3 flex  justify-center ">
        <SearchBar placeholder="Search Book" className="w-64" />
      </div>
      <div className="flex flex-col space-y-10 py-5 items-center mt-5 mx-auto px-5 w-screen max-w-screen-xs">
        {loading && (
          <h1 className="text-lg text-purple-600 font-medium">
            Loading Book...
          </h1>
        )}

        {data &&
          !loading &&
          data.books.map((book: book) => (
            <CardBook
              key={book.id}
              title={book.title}
              genre={book.genre.map((name) => name)}
              className="w-full"
            />
          ))}
      </div>
    </div>
  )
}
