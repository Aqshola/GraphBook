// YourComponent.stories.ts | YourComponent.stories.tsx

import React, { ComponentProps, useState } from 'react'

import { Story, Meta } from '@storybook/react'
import InputBar from './InputBar'

//👇 This default export determines where your story goes in the story list
export default {
  title: 'InputBar',
  component: InputBar,
} as Meta

//👇 We create a “template” of how args map to rendering
export const InputDemo = () => {
  const defaultSuggest = ['foo lalaaa', 'bar lalala', 'foo fighter', 'lalatina']
  const [valueSearch, setvalueSearch] = useState('')
  const [suggestArray, setsuggestArray] = useState<string[]>(defaultSuggest)
  const [suggestView, setsuggestView] = useState(false)

  const onChange = (e: any) => {
    setvalueSearch(e.target.value)

    if (e.target.value.length >= 3) {
      setsuggestArray(suggestArray.filter((e) => e.includes(valueSearch)))
      setsuggestView(true)

      console.log('lala', suggestView, suggestArray)
    }

    if (e.target.value.length < 3) {
      setsuggestView(false)
      setsuggestArray(defaultSuggest)
    }

    if (valueSearch.trim() === '') {
      setsuggestView(false)
      setsuggestArray(defaultSuggest)
    }
  }

  const suggestEvent = (event: any, data: any) => {
    setvalueSearch(data)
    setsuggestView(false)
    setsuggestArray(defaultSuggest)
  }

  return (
    <InputBar
      placeholder="Input Demo"
      onChange={onChange}
      value={valueSearch}
      suggestData={suggestArray}
      suggestView={suggestView}
      suggestEvent={suggestEvent}
    />
  )
}
