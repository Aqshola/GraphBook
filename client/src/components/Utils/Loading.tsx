import React, { ReactElement } from 'react'

interface Props {
  loading: boolean
}

export default function Loading({ loading }: Props): ReactElement {
  return (
    <>
      {loading && (
        <h1 className="text-center text-lg text-purple-600 font-medium">
          Loading Book...
        </h1>
      )}
    </>
  )
}
