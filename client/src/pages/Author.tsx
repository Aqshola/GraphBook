import React, { ReactElement } from 'react'
import { Link } from 'react-router-dom'
import { List, ListContainer } from '../components/List/List.'

interface Props {}

export default function Author({}: Props): ReactElement {
  return (
    <>
      <h1 className="mt-2 text-2xl text-purple-600 font-semibold">
        Author List
      </h1>

      <ListContainer className="text-left mt-10 w-full p-2 md:p-0">
        <Link to="author/aqshol-afid">
          <List className="mb-5 ">Aqshol Afid</List>
        </Link>
        <Link to="author/james-bond">
          <List>James Bond</List>
        </Link>
      </ListContainer>
    </>
  )
}
