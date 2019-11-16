import gql from "graphql-tag";

export const BLOCKS_QUERY = gql`
  query blocks($token: String!) {
    blocks(token: $token) {
      _id
      index
      timestamp
      data
      prevHash
      hash
      password
    }
  }
`;
