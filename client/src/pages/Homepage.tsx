import React, { ReactElement } from 'react'
import SearchBar from '../components/Input/SearchBar'
import CardBook from '../components/BookCard/BookCard'
import { useQuery } from '@apollo/client'
import { getAllBook } from '../apollo/glQuery'
import { book } from '../types/ApiTypes'
import Loading from '../components/Utils/Loading'

type Response = {
  books: book[]
}

export default function Homepage(): ReactElement {
  const { loading, data } = useQuery<Response>(getAllBook)

  return (
    <div className="min-h-screen ">
      <div className="mt-3 flex  justify-center ">
        <SearchBar placeholder="Search Book" className="w-64" />
      </div>
      <div className="flex flex-col space-y-10 py-5 items-center mt-5 mx-auto px-5 w-screen max-w-screen-xs">
        <Loading loading={loading} />

        {data &&
          !loading &&
          data.books.map((book: book) => (
            <CardBook
              slug={book.slug}
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
