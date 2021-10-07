import React, { ReactElement } from 'react'
import SearchBar from '../components/Input/SearchBar'
import Nav from '../components/Nav/Nav'
import CardBook from '../components/BookCard/BookCard'

interface Props {}

export default function Homepage({ ...props }: Props): ReactElement {
  return (
    <div className="min-h-screen  border-0 md:border lg:border-2">
      <Nav />
      <div className="mt-3 flex  justify-center">
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
