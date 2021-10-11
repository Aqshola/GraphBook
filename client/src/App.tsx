import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Homepage from './pages/Homepage'
import Author from './pages/Author'
import Genre from './pages/Genre'

import './App.css'
import Nav from './components/Nav/Nav'
import Fab from './components/Button/Fab'
import InputAuthor from './pages/InputAuthor'
import InputBook from './pages/InputBook'
import GenreDetail from './pages/GenreDetail'
import AuthorDetail from './pages/AuthorDetail'

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <div className="w-screen box-border max-w-screen-xs relative mx-auto">
          <Fab />
          <Switch>
            <Route exact path="/">
              <Homepage />
            </Route>
            <Route exact path="/author">
              <Author />
            </Route>
            <Route exact path="/author/:slug_author">
              <AuthorDetail />
            </Route>
            <Route exact path="/genre">
              <Genre />
            </Route>
            <Route exact path="/genre/:genre">
              <GenreDetail />
            </Route>
            <Route exact path="/book">
              <h1>Book</h1>
            </Route>
            <Route exact path="/book/:slug_book">
              <h1>Book Detail</h1>
            </Route>
            <Route exact path="/input/book">
              <InputBook />
            </Route>
            <Route exact path="/input/author">
              <InputAuthor />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  )
}

export default App
