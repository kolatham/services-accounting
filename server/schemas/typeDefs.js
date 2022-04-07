const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Services {
    _id: ID!
    description: String!
  }

  type User {
    _id: ID!
    services1: String!
    services2: String!
    services1_votes: Int
    services2_votes: Int
  }

  type Query {
    services: [Services]
    users(_id: String): [User]
  }

  type Mutation {
    createUser(services1: String!, services2: String!): User
    updateUser(services1: String!, services2: String!): User
    deleteUser(services1: String!, services2: String!): User
    createVote(_id: String!, techNum: Int!): User
  }
`;

module.exports = typeDefs;
