import { useQuery } from '@apollo/client'
import { ReactElement } from 'react'
import { Link } from 'react-router-dom'
import { getAllAuthor } from '../apollo/glQuery'
import { List, ListContainer } from '../components/List/List.'
import Loading from '../components/Utils/Loading'
import { author } from '../types/ApiTypes'

interface Response {
  authors: author[]
}

export default function Author(): ReactElement {
  const { loading, data } = useQuery<Response>(getAllAuthor)

  return (
    <>
      <h1 className="mt-2 text-2xl text-purple-600 font-semibold">
        Author List
      </h1>
      <Loading loading={loading} />

      <ListContainer className="text-left mt-10 w-full p-2 md:p-0">
        {data?.authors.map((author) => (
          <Link to={`author/${author.slug}`} key={author.id}>
            <List className="mb-5 capitalize">{author.name}</List>
          </Link>
        ))}
      </ListContainer>
    </>
  )
}
