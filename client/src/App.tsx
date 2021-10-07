import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'

import './App.css'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route exact path="/author">
            <h1>Author</h1>
          </Route>
          <Route exact path="/author/:slug_author">
            <h1>Author Detail</h1>
          </Route>
          <Route exact path="/genre">
            <h1>Genre</h1>
          </Route>
          <Route exact path="/genre/:genre">
            <h1>Genre Detail</h1>
          </Route>
          <Route exact path="/genre/:genre">
            <h1>Genre Detail</h1>
          </Route>
          <Route exact path="/book">
            <h1>Book</h1>
          </Route>
          <Route exact path="/book/:slug_book">
            <h1>Book Detail</h1>
          </Route>
          <Route exact path="/input/book">
            <h1>Input Book</h1>
          </Route>
          <Route exact path="/input/author">
            <h1>Input Author</h1>
          </Route>
          <Route exact path="/input/genre">
            <h1>Input Genre</h1>
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
