import React, { ReactElement } from 'react'
import SearchBar from '../components/Input/SearchBar'
import Nav from '../components/Nav/Nav'

interface Props {}

export default function Homepage({ ...props }: Props): ReactElement {
  return (
    <div className="w-screen max-w-screen-sm mx-auto">
      <Nav />
      <SearchBar placeholder="Search Book" />
    </div>
  )
}
