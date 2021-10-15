import React, { ReactElement, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/Button/Button'
import InputBar from '../components/Input/InputBar'
import { List, ListContainer } from '../components/List/List.'
import clsx from 'clsx'
import { genre } from '../types/ApiTypes'
import { useQuery } from '@apollo/client'
import { getAllGenre } from '../apollo/glQuery'

interface Response {
  genres: genre[]
}

export default function Genre(): ReactElement {
  const { loading, error, data } = useQuery<Response>(getAllGenre)
  return (
    <>
      <h1 className="mt-2 text-2xl text-purple-600 font-semibold">
        Genre List
      </h1>

      <div className="mt-10  flex p-2 md:p-0">
        <InputBar placeholder="Add Genre" />
        <Button Btnsize="sm" className="text-xs ml-4">
          Add Genre
        </Button>
      </div>
      <ListContainer className="text-left mt-3 w-full p-2 md:p-0">
        {data?.genres.map((genre) => (
          <GenreListInteractive name={genre.name} key={genre.id} />
        ))}
      </ListContainer>
    </>
  )
}

interface genreList {
  name: string
}

const GenreListInteractive = ({ name }: genreList) => {
  const [editState, seteditState] = useState<boolean>(false)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (editState) {
      inputRef.current?.focus()
    }
  }, [editState])

  return (
    <List className="mb-5 flex items-center justify-between">
      {editState ? (
        <input
          ref={inputRef}
          defaultValue={'Action'}
          readOnly={!editState}
          className={clsx(
            'font-medium outline-none w-40',
            editState && ['border border-black']
          )}
          autoFocus={true}
        />
      ) : (
        <Link to="/genre/action">
          <p className="font-medium outline-none w-40">Action</p>
        </Link>
      )}

      <div className="space-x-2 ml-2">
        <Button
          Btnsize="sm"
          onClick={() => {
            if (editState) {
              //function save
            } else {
              //function edit
            }
            seteditState(!editState)
          }}
          className="text-xs"
        >
          {editState ? 'Save' : 'Edit'}
        </Button>
        <Button
          Btnsize="sm"
          variant="outline-primary"
          className="text-xs"
          onClick={() => {
            if (editState) {
              //function cancel
              seteditState(false)
            } else {
              //funciton delete
            }
          }}
        >
          {editState ? 'Cancel' : 'Delete'}
        </Button>
      </div>
    </List>
  )
}
