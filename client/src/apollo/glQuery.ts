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
      slug
    }
  }
`

export const getAllAuthor = gql`
  query getAllAuthor {
    authors {
      id
      name
      slug
    }
  }
`

export const getAllGenre = gql`
  query getAllGenre {
    genres {
      id
      name
      slug
    }
  }
`

export const getAuthorSlug = gql`
  query getAuthorSlug($slug_author: String) {
    authorSlug(slug: $slug_author) {
      age
      id
      name
      books {
        id
        title
        slug
        genre {
          name
          id
        }
      }
    }
  }
`
export const getGenreName = gql`
  query getGenreName($name: String) {
    genreName(name: $name) {
      id
      name
      books {
        id
        title
        genre {
          id
          name
        }
        slug
      }
    }
  }
`

export const getBookSlug = gql`
  query getBookSlug($slug: String) {
    bookSlug(slug: $slug) {
      id
      title
      slug
      desc
      genre {
        id
        name
      }
      author {
        id
        name
        slug
      }
    }
  }
`
