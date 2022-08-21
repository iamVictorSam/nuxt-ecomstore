import { gql } from "@apollo/client/core"

export const GET_CHARC = gql`
query  {
    characters {
      results {
        id
        name
        status
      }
    }
  }
`

