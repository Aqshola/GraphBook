import React, { ReactElement } from 'react'

interface Props {}

export default function Nav({ ...props }: Props): ReactElement {
  return (
    <nav className="w-full">
      <div className="flex items-center">
        <h1 className="flex-grow">GraphBook</h1>

        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
      <div>
        <ul>
          <li>Book List</li>
          <li>Author List</li>
          <li>Genre List</li>
        </ul>
      </div>
    </nav>
  )
}
