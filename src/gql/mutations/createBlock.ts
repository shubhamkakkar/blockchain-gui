import gql from 'graphql-tag';


export const CREATE_BLOCK = gql`
    mutation createBlock($data:String!, $token:String!, $privateKey: String!){
        createBlock(data: $data, token:$token, privateKey: $privateKey){
            _id,
            index,
            timestamp,
            data,
            prevHash,
            hash,
            password
        }
    }
`;
