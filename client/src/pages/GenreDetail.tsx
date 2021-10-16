import { useQuery } from '@apollo/client'
import React, { ReactElement } from 'react'
import { getGenreName } from '../apollo/glQuery'
import CardBook from '../components/BookCard/BookCard'
import Loading from '../components/Utils/Loading'
import { book, genreDetail } from '../types/ApiTypes'

interface Response {
  genreName: genreDetail
}
export default function GenreDetail(): ReactElement {
  const { loading, data, error } = useQuery<Response>(getGenreName, {
    variables: {
      name: 'action',
    },
  })

  return (
    <div>
      <h1 className="mt-2 text-2xl text-purple-600 font-semibold capitalize">
        Genre {data?.genreName.name}
      </h1>

      <Loading loading={loading} />
      <div className="flex flex-col space-y-10 py-5 items-center mt-5 mx-auto px-5 w-screen max-w-screen-xs">
        {data?.genreName.books.map((book: book) => (
          <CardBook
            key={book.id}
            title={book.title}
            genre={book.genre}
            slug={book.slug}
            className="w-full"
          />
        ))}
      </div>
    </div>
  )
}
