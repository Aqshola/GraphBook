import React, { useState } from 'react'

import './App.css'

import SearchBar from './components/Input/SearchBar'

function App() {
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

    if (valueSearch.trim() === "") {
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
    <div className="App">
      <div className="max-w-screen-sm mx-auto mt-10 flex justify-center">
        <SearchBar
          placeholder="Searchbar Demo"
          onChange={onChange}
          value={valueSearch}
          suggestData={suggestArray}
          suggestView={suggestView}
          suggestEvent={suggestEvent}
        />
      </div>
    </div>
  )
}

export default App
