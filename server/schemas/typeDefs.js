const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
    savedServices: [serviceSchema]

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
    createUser(email: String!, username: String!, password: String!): User
    updateUser(email: String!, username: String!, password: String!, savedServices:): User
    deleteUser(username: String!): User
    createVote(_id: String!, serviceNum: Int!): User
  }
`;

module.exports = typeDefs;
