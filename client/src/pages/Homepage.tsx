import React, { ReactElement } from 'react'
import SearchBar from '../components/Input/SearchBar'
import CardBook from '../components/BookCard/BookCard'
import { gql, useQuery } from '@apollo/client'

interface Props {}

export default function Homepage({ ...props }: Props): ReactElement {
  const getBookQuery = gql`
    {
      books {
        title
        genre {
          name
        }
      }
    }
  `
  const { loading, error, data } = useQuery(getBookQuery)
  console.log(data)
  console.log(loading)
  console.log(error)

  return (
    <div className="min-h-screen ">
      <div className="mt-3 flex  justify-center ">
        <SearchBar placeholder="Search Book" className="w-64" />
      </div>
      <div className="flex flex-col space-y-10 py-5 items-center mt-5 mx-auto px-5 w-screen max-w-screen-xs">
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
    </div>
  )
}
