import { gql } from '@apollo/client'

export const addGenreMutat = gql`
  mutation addGenreMutate($name: String!) {
    addGenre(name: $name) {
      status
      message
    }
  }
`
