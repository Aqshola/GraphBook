import React, { ReactElement, useRef, useState } from 'react'
import clsx from 'clsx'
import { Link } from 'react-router-dom'
import useOutsideAlerter from '../../hooks/useOutside'

export default function Fab(): ReactElement {
  const [viewMenu, setviewMenu] = useState<boolean>(false)
  const ref = useRef<HTMLUListElement>(null)
  useOutsideAlerter({
    ref: ref,
    action: () => setviewMenu(false),
  })

  return (
    <div className="fixed bottom-10 right-5 md:right-56 lg:right-96">
      <ul
        ref={ref}
        className={clsx(
          'transition-all bg-white text-left shadow-md transform mb-5',
          viewMenu && ['opacity-100 translate-y-0 visible'],
          !viewMenu && ['opacity-0 translate-y-20 invisible']
        )}
      >
        <Link to="/input/book">
          <li className="transition-all text-sm text-purple-600 hover:text-white hover:bg-purple-600 p-2">
            Input Book
          </li>
        </Link>
        <Link to="/input/author">
          <li className="text-sm text-purple-600 hover:text-white hover:bg-purple-600 p-2">
            Input Author
          </li>
        </Link>
      </ul>

      <button
        className="p-2 bg-purple-600 rounded-full shadow-md"
        onClick={() => setviewMenu(!viewMenu)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-white stroke-current"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      </button>
    </div>
  )
}
