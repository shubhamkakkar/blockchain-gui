import gql from "graphql-tag";

export const BLOCK = gql`
  query block($token: String!, $password: String!, $id: ID!){
      block(token: $token,password: $password, id: $id) {
        data
    }
  }
`;