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

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import BookDetail from './pages/BookDetail'

function App() {
  const client = new ApolloClient({
    uri: 'http://localhost:5000/graphql',
    cache: new InMemoryCache(),
  })

  return (
    <div className="App">
      <ApolloProvider client={client}>
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
              <Route exact path="/book/:slug_book">
                <BookDetail />
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
      </ApolloProvider>
    </div>
  )
}

export default App
