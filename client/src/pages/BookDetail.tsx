import { useQuery } from '@apollo/client'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import { getBookSlug } from '../apollo/glQuery'
import Button from '../components/Button/Button'
import Loading from '../components/Utils/Loading'
import { author, book, genre } from '../types/ApiTypes'

interface Response {
  bookSlug: book
}

type route = {
  slug_book: string
}
export default function BookDetail() {
  const { slug_book } = useParams<route>()
  const { loading, data } = useQuery<Response>(getBookSlug, {
    variables: {
      slug: slug_book,
    },
  })

  return (
    <div>
      <h1 className="text-purple-600 text-2xl font-semibold text-center mt-10">
        {data?.bookSlug.title}
      </h1>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-24 w-24 mx-auto mt-5 stroke-current text-purple-600"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1}
          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
        />
      </svg>
      <Loading loading={loading} />
      <div className="p-2 flex flex-col space-y-5">
        <div>
          <h2 className="text-left font-medium">Genre</h2>

          <div className="mt-1 flex">
            {data?.bookSlug.genre.map((gen: genre) => (
              <Link to={`/genre/${gen.name}`} key={gen.id}>
                <Button
                  className="capitalize text-sm"
                  variant="outline-primary"
                  Btnsize="sm"
                >
                  {gen.name}
                </Button>
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-left font-medium">Author</h2>
          <div className="mt-1 flex">
            {data?.bookSlug.author?.map((aut: author) => (
              <Link to={`/author/${aut.slug}`} key={aut.id}>
                <Button
                  className="capitalize text-sm"
                  variant="outline-primary"
                  Btnsize="sm"
                >
                  {aut.slug}
                </Button>
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-left font-medium">Description</h2>
          <p className="text-left mt-1">{data?.bookSlug.desc}</p>
        </div>
      </div>
      <div className="p-2 mt-10 flex justify-start">
        <Button Btnsize="sm">Update Data</Button>
      </div>
    </div>
  )
}
