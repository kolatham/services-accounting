import { gql } from '@apollo/client';

export const QUERY_SERVICES = gql`
  query  {
    services {
      _id
      image
      title : String!
      description
      link
      servicesLikes_votes
      servicesDislikes_votes
    }
  }
`;

export const QUERY_SINGLE_USER = gql`
  query singleUser($_id: String) {
    singleUser(_id: $_id) {
      _id
      username
      savedServices
     
    }
  }
`;

export const QUERY_USERS = gql`
  query users($_id: String) {
    users(_id: $_id) {
      _id
      username
      savedServices
    }
  }
`;