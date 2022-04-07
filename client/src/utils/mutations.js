import { gql } from '@apollo/client';

export const CREATE_USER = gql`
  mutation createUser($services1: String!, $services2: String!) {
    createUser(services1: $services1, services2: $services2) {
      _id
      services1
      services2
    }
  }
`;

export const UPDATE_USER = gql`
  mutation updateUser($services1: String!, $services2: String!) {
    updateUser(services1: $services1, services2: $services2) {
      _id
      services1
      services2
    }
  }
`;

export const DELETE_USER = gql`
  mutation deleteUser($services1: String!, $services2: String!) {
    deleteUser(services1: $services1, services2: $services2) {
      _id
      services1
      services2
    }
  }
`;

export const CREATE_VOTE = gql`
  mutation createVote($_id: String!, $techNum: Int!) {
    createVote(_id: $_id, techNum: $techNum) {
      _id
      services1
      services2
      services1_votes
      services2_votes
    }
  }
`;
