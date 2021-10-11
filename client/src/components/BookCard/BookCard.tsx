import React, { ReactElement } from 'react'
import Button from '../Button/Button'
import clsx from 'clsx'
import { Link, useHistory } from 'react-router-dom'

interface Props {
  title: string
  genre: string[]
  className?: string
}

export default function BookCard({ className, ...props }: Props): ReactElement {
  const history = useHistory()
  return (
    <div
      className={clsx(
        'w-64 shadow-lg p-4 rounded-md space-y-5  border-purple-600',
        className
      )}
    >
      <Link to="/book/book-of-wandering">
        <h1 className="font-semibold text-xl space-y-5 text-purple-600 w-max text-center">
          A Book of Wandering{' '}
        </h1>
      </Link>
      <div className="flex space-x-2">
        {props.genre.map((genre, idx) => (
          <Button
            onClick={() => {
              history.push('/genre/action')
            }}
            key={idx}
            role="link"
            Btnsize="sm"
            variant="outline-primary"
            className="text-sm hover:bg-purple-600 hover:text-white hover:bg-opacity-100"
          >
            {genre}
          </Button>
        ))}
      </div>
    </div>
  )
}
