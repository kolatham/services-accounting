const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
  }

  type services {
    _id: ID!
    title : String!
    description: String!
    link: String!
    servicesLikes_votes: Int
    servicesDislikes_votes: Int
  }

  type Query {
    services: [Services]
    users(_id: String): [User]
  }

  type Mutation {
    createUser(username: String!): User
    updateUser(username: String!): User
    deleteUser(username: String!): User
    createVote(_id: String!, techNum: Int!): User
  }
`;

module.exports = typeDefs;
