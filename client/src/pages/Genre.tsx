import React, { ReactElement, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/Button/Button'
import InputBar from '../components/Input/InputBar'
import { List, ListContainer } from '../components/List/List.'
import clsx from 'clsx'
import { genre } from '../types/ApiTypes'
import { useMutation, useQuery } from '@apollo/client'
import { getAllGenre } from '../apollo/glQuery'
import Loading from '../components/Utils/Loading'
import {
  addGenreMutat,
  deleteGenreMutat,
  updateGenreMutat,
} from '../apollo/glMutate'

interface Response {
  genres: genre[]
}

export default function Genre(): ReactElement {
  const { data, loading } = useQuery<Response>(getAllGenre)
  const [inputVal, setinputVal] = useState<string>('')
  const [addGenre, { loading: MutateLoading }] = useMutation(addGenreMutat, {
    refetchQueries: [
      {
        query: getAllGenre,
      },
    ],
  })

  const _handleChange = (e: any) => {
    setinputVal(e.target.value)
  }

  const _submitGenre = () => {
    addGenre({
      variables: {
        name: inputVal,
      },
    })
    setinputVal('')
  }
  return (
    <>
      <h1 className="mt-2 text-2xl text-purple-600 font-semibold">
        Genre List
      </h1>

      <form
        className="mt-10  flex p-2 md:p-0"
        onSubmit={(e) => {
          e.preventDefault()
          _submitGenre()
        }}
      >
        <InputBar
          placeholder="Add Genre"
          onChange={_handleChange}
          value={inputVal}
        />
        <Button Btnsize="sm" className="text-xs ml-4" type="submit">
          Add Genre
        </Button>
      </form>

      <Loading loading={loading || MutateLoading} />
      <ListContainer className="text-left mt-3 w-full p-2 md:p-0 mb-36">
        {data?.genres.map((genre) => (
          <GenreListInteractive
            name={genre.name}
            key={genre.id}
            id={genre.id}
          />
        ))}
      </ListContainer>
    </>
  )
}

interface genreList {
  name: string
  id?: string
}

const GenreListInteractive = ({ name, id }: genreList) => {
  const [editState, seteditState] = useState<boolean>(false)
  const [inputVal, setinputVal] = useState<string>('')
  const inputRef = useRef<HTMLInputElement>(null)

  const [deleteGenre] = useMutation(deleteGenreMutat, {
    refetchQueries: [
      {
        query: getAllGenre,
      },
    ],
  })

  const [updateGenre] = useMutation(updateGenreMutat, {
    refetchQueries: [
      {
        query: getAllGenre,
      },
    ],
  })

  const _handleUpdateBtn = () => {
    updateGenre({
      variables: {
        updateGenreId: id,
        name: inputVal,
      },
    })

    seteditState(false)
  }

  const _handleDeleteBtn = () => {
    deleteGenre({
      variables: {
        deleteGenreId: id?.toString(),
      },
    })
  }

  useEffect(() => {
    if (editState) {
      inputRef.current?.focus()
    }
  }, [editState])

  return (
    <List className="mb-5">
      <form
        className="flex items-center justify-between"
        onSubmit={(e) => {
          e.preventDefault()
          _handleUpdateBtn()
        }}
      >
        {editState ? (
          <input
            onChange={(e) => {
              setinputVal(e.target.value)
            }}
            ref={inputRef}
            defaultValue={name}
            readOnly={!editState}
            className={clsx(
              'font-medium outline-none w-40',
              editState && ['border border-black']
            )}
            autoFocus={true}
          />
        ) : (
          <Link to="/genre/action">
            <p className="font-medium outline-none w-40 capitalize">{name}</p>
          </Link>
        )}

        <div className="space-x-2 ml-2">
          <Button
            Btnsize="sm"
            type="submit"
            onClick={() => {
              if (editState) {
                _handleUpdateBtn()
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
            type="button"
            onClick={() => {
              if (editState) {
                //function cancel
                seteditState(false)
              } else {
                _handleDeleteBtn()
              }
            }}
          >
            {editState ? 'Cancel' : 'Delete'}
          </Button>
        </div>
      </form>
    </List>
  )
}
