import { gql } from '@apollo/client'

export const addGenreMutat = gql`
  mutation addGenreMutate($name: String!) {
    addGenre(name: $name) {
      status
      message
    }
  }
`

export const deleteGenreMutat = gql`
  mutation DeleteGenreMutation($deleteGenreId: ID!) {
    deleteGenre(id: $deleteGenreId) {
      status
      message
    }
  }
`

export const updateGenreMutat = gql`
  mutation UpdateGenreMutation($updateGenreId: String!, $name: String!) {
    updateGenre(id: $updateGenreId, name: $name) {
      status
      message
    }
  }
`
