import React, { ReactElement } from 'react'
import clsx from 'clsx'

interface Props extends React.HTMLProps<HTMLInputElement> {
  suggestData?: string[]
  suggestEvent?: (e?: any, data?: any) => void

  suggestView?: boolean
}

export default function InputBar({
  suggestData,
  suggestEvent,
  suggestView = false,
  className,
  ...props
}: Props): ReactElement {
  return (
    <div className="w-max border-purple-600  border p-2 text-purple-600 focus-within:ring-1 focus-within:ring-purple-600 rounded-md">
      <input
        {...props}
        className={clsx(
          'transition-all   focus:outline-none outline-none border-0',
          className
        )}
      />

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
