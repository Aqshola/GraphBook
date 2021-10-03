import React, { ReactElement, useState } from 'react'
import clsx from 'clsx'

interface Props extends React.HTMLProps<HTMLInputElement> {
  closeEvent?: (e?: any) => void
  searchEvent?: (e?: any) => void
  suggestView?: boolean
  suggestData?: string[]
  suggestEvent?: (e?: any, data?: any) => void
}

export default function SearchBar({
  searchEvent,
  closeEvent,
  suggestView,
  suggestData,
  suggestEvent,
  ...props
}: Props): ReactElement {
  return (
    <div
      className={clsx(
        ' transition-all  p-2  border-2  border-purple-600 rounded-lg w-max ',

        suggestView && ['space-y-5']
      )}
    >
      <div
        className={clsx(
          'flex items-center justify-between transition-all space-x-3'
        )}
      >
        <input
          type="text"
          className={clsx(
            'transition-all text-purple-600 visible w-56 p-2 focus:outline-none border-0 outline-none font-semibold'
          )}
          {...props}
        />
        <button
          onClick={(e) => {
            if (searchEvent) {
              searchEvent(e)
            }
          }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 4.125C21.0061 4.125 25.875 8.99391 25.875 15C25.875 17.5978 24.9641 19.9829 23.4443 21.8532L30.7955 29.2045C31.2348 29.6439 31.2348 30.3561 30.7955 30.7955C30.3962 31.1949 29.7711 31.2312 29.3307 30.9044L29.2045 30.7955L21.8532 23.4443C19.9829 24.9641 17.5978 25.875 15 25.875C8.99391 25.875 4.125 21.0061 4.125 15C4.125 8.99391 8.99391 4.125 15 4.125ZM15 6.375C10.2365 6.375 6.375 10.2365 6.375 15C6.375 19.7634 10.2365 23.625 15 23.625C19.7634 23.625 23.625 19.7634 23.625 15C23.625 10.2365 19.7634 6.375 15 6.375Z"
              fill="#212121"
            />
          </svg>
        </button>
      </div>

      <div
        className={clsx('flex flex-col w-full', !suggestView && ['hidden '])}
      >
        {suggestData?.map((data, i) => (
          <div
            role="button"
            className={clsx(
              'text-purple-600 p-2 font-medium hover:bg-purple-600 hover:text-white transition-all cursor-pointer'
            )}
            key={i}
            onClick={(e) => {
              if (suggestEvent) {
                suggestEvent(e, data)
              }
            }}
          >
            {data}
          </div>
        ))}
      </div>
    </div>
  )
}
