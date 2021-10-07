import React, { ReactElement } from 'react'
import SearchBar from '../components/Input/SearchBar'
import Nav from '../components/Nav/Nav'
import CardBook from '../components/BookCard/BookCard'

interface Props {}

export default function Homepage({ ...props }: Props): ReactElement {
  return (
    <div className="w-screen min-h-screen max-w-screen-xs mx-auto border-0 md:border lg:border-2">
      <Nav />
      <div className="mt-3 flex  justify-center">
        <SearchBar placeholder="Search Book" className="w-64" />
      </div>
      <div className="flex flex-col space-y-10 items-center mt-5 w-full px-5">
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
