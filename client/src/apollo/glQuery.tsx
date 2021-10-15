import { gql } from '@apollo/client'

export const getAllBook = gql`
  query getAllBook {
    books {
      id
      title
      genre {
        id
        name
      }
    }
  }
`

export const getAllAuthor = gql`
  query getAllAuthor {
    authors {
      id
      name
    }
  }
`

export const getAllGenre = gql`
  query getAllGenre {
    genres {
      id
      name
    }
  }
`
