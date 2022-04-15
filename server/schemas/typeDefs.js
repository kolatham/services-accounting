const { gql } = require('apollo-server-express');

const typeDefs = gql`

type Auth {
  token: ID!
  user: User
}

  type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
    savedServices: []

  }

  type Services {
    _id: ID!
    title : String!
    description: String!
    link: String!
    servicesLikes_votes: Int
    servicesDislikes_votes: Int
  }

  type Query {
   me(id:ID!):User
   users: [user] 
  }

  type Mutation {
    createUser(email: String!, username: String!, password: String!): User
    updateUser(email: String!, username: String!, password: String!): User
    deleteUser(username: String!): User
    createVote(_id: String!, serviceNum: Int!): User
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
