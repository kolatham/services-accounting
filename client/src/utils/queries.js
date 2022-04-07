import { gql } from '@apollo/client';

export const QUERY_SERVICES = gql`
  query  {
    services {
      _id
      description
    }
  }
`;

export const QUERY_SINGLE_USER = gql`
  query singleUser($_id: String) {
    singleUser(_id: $_id) {
      _id
      services1
      services2
      services1_votes
      services2_votes
    }
  }
`;

export const QUERY_USERS = gql`
  query users($_id: String) {
    users(_id: $_id) {
      _id
      services1
      services2
      services1_votes
      services2_votes
    }
  }
`;