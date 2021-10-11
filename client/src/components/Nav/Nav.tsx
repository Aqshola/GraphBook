import { ReactElement, useRef, useState } from 'react'
import clsx from 'clsx'
import { Link } from 'react-router-dom'
import useOutsideAlerter from '../../hooks/useOutside'

interface Props {
  className?: string
}

export default function Nav({ ...props }: Props): ReactElement {
  const [displayLink, setdisplayLink] = useState<boolean>(false)
  const wrapperRef = useRef<HTMLDivElement>(null)
  useOutsideAlerter({
    ref: wrapperRef,
    action: () => setdisplayLink(false),
  })

  return (
    <nav
      ref={wrapperRef}
      className={clsx(
        'bg-purple-600 box-border transition-all h-auto max-w-screen-xs mx-auto md:max-w-screen-md',
        props.className
      )}
    >
      <div className="flex items-center p-2 box-border ">
        <div className="flex-grow text-left">
          <Link to="/">
            <h1 className="font-bold text-white w-max">GraphBook</h1>
          </Link>
        </div>

        <button onClick={() => setdisplayLink(!displayLink)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={clsx(
              'h-6 w-6 text-white stroke-current transition-transform transform',
              displayLink && ['rotate-90']
            )}
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

      <ul
        className={clsx(
          'transition-all px-2 bg-white border-2 border-purple-600 transform',
          displayLink && ['h-32 opacity-100 visible py-2'],
          !displayLink && ['h-0 overflow-hidden invisible opacity-0']
        )}
      >
        <Link to="/">
          <li className="hover:bg-purple-400 p-2 text-sm transition-all font-semibold rounded-sm cursor-pointer">
            Book List
          </li>
        </Link>
        <Link to="/author">
          <li className="hover:bg-purple-400 p-2 text-sm transition-all font-semibold rounded-sm cursor-pointer">
            Author List
          </li>
        </Link>
        <Link to="/genre">
          <li className="hover:bg-purple-400 p-2 text-sm transition-all font-semibold rounded-sm cursor-pointer">
            Genre List
          </li>
        </Link>
      </ul>
    </nav>
  )
}
