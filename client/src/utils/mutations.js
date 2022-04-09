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
  mutation updateUser($email: String!, $username: String!, $password2: String!, $savedServices: [serviceSchema]) {
    updateUser(services1: $email: String!, $username: String!, $password2: String!, $savedServices: [serviceSchema]) {
      _id
      username
      email
      password
      savedServices
    }
  }
`;

export const DELETE_USER = gql`
  mutation deleteUser($email: String!, $username: String!, $password2: String!, $savedServices: [serviceSchema]) {
    deleteUser($email: String!, $username: String!, $password2: String!, $savedServices: [serviceSchema]) {
      _id
      username
      email
      password
      savedServices
    }
  }
`;

export const CREATE_VOTE = gql`
  mutation createVote($_id: String!, $serviceNum: Int!) {
    createVote(_id: $_id, serviceNum: $serviceNum) {
      _id
      title
      description
      servicesLikes_votes
      servicesDislikes_votes
    }
  }
`;
