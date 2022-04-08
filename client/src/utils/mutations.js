import { gql } from '@apollo/client';

export const CREATE_USER = gql`
  mutation createUser($email: String!, $username: String!, $password2: String!) {
    createUser($email: String!, $username: String!, $password2: String!) {
      _id
      username
      email
      password
    }
  }
`;

export const UPDATE_USER = gql`
  mutation updateUser($email: String!, $username: String!, $password2: String!) {
    updateUser(services1: $email: String!, $username: String!, $password2: String!) {
      _id
      username
      email
      password
      savedServices
    }
  }
`;

export const DELETE_USER = gql`
  mutation deleteUser($services1: String!, $services2: String!) {
    deleteUser(services1: $services1, services2: $services2) {
      _id
      username
      email
      password
      savedServices
    }
  }
`;

export const CREATE_VOTE = gql`
  mutation createVote($_id: String!, $techNum: Int!) {
    createVote(_id: $_id, techNum: $techNum) {
      _id
      title
      description
      servicesLikes_votes
      servicesDislikes_votes
    }
  }
`;
