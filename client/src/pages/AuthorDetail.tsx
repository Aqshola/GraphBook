import { useQuery } from '@apollo/client'
import { ReactElement } from 'react'
import { useParams } from 'react-router'

import { getAuthorSlug } from '../apollo/glQuery'
import CardBook from '../components/BookCard/BookCard'
import Loading from '../components/Utils/Loading'
import { author, book } from '../types/ApiTypes'

interface Response {
  authorSlug: author
}

type routeParams = {
  slug_author: string
}
export default function AuthorDetail(): ReactElement {
  const { slug_author } = useParams<routeParams>()

  const { data, loading } = useQuery<Response>(getAuthorSlug, {
    variables: {
      slug_author: slug_author,
    },
  })

  return (
    <>
      <h1 className="mt-2 text-2xl text-purple-600 font-semibold">
        Author Detail
      </h1>

      <Loading loading={loading} />
      {data && (
        <>
          <h2 className="mt-10">Biodata</h2>
          <div className="p-2 md:p-0  flex flex-col  text-left">
            <p className="font-medium capitalize">
              Name : {data?.authorSlug.name}
            </p>
            <p className="font-medium">Age : {data?.authorSlug.age}</p>
          </div>
          <h2 className="mt-3">Book List</h2>
          <div className="flex flex-col space-y-10  items-center  mx-auto px-5 w-screen max-w-screen-xs">
            {data?.authorSlug.books?.map((book: book) => (
              <CardBook
                key={book.id}
                title={book.title}
                genre={book.genre}
                className="w-full"
                slug={book.slug}
              />
            ))}
          </div>
        </>
      )}
    </>
  )
}
