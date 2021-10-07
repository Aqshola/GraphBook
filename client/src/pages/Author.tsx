import React, { ReactElement } from 'react'
import { Link } from 'react-router-dom'

interface Props {}

export default function Author({}: Props): ReactElement {
  return (
    <>
      <h1 className="mt-2 text-2xl text-purple-600 font-semibold">
        Author List
      </h1>

      <ul className="list-disc list-inside text-left mt-3">
        <Link to="author/aqshol-afid">
          <li className="font-medium cursor-pointer  hover:text-purple-600">
            Aqshol Afid
          </li>
        </Link>

        <Link to="author/james-bond">
          <li className="font-medium cursor-pointer  hover:text-purple-600">
            James Bond
          </li>
        </Link>
      </ul>
    </>
  )
}
