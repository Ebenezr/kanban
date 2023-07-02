<<<<<<< HEAD
export const typeDefs = `#graphql
  # Type models
  type Card {
    id: ID!
    name: String!
    columnId:String!
  }

  type Column {
    id: ID!
    projectId:String!
    name: String!
    cards: [Card!]!
  }
scalar Date

  type Project {
    id: ID!
    name: String!
    columns: [Column!]!
    updatedAt: Date!
  }
  # Get Query
  type Query {
    getCards: [Card]
    getCard(id: ID!): Card
    getColumns: [Column]
    column(id: ID!): Column
    projects: [Project]
    project(id: ID!): Project
  }
  # Mutations
  type Mutation {
    # Create
    addProject(name: String): Project
    addColumn(name: String, projectId:String): Column
    addCard(name: String,columnId:String): Card
    # Destroy
    deleteCard(id: ID!): Card!
    clearColumnCards(columnId: String!): Column!
    deleteColumn(id: ID!): Column!
    deleteProject(id: ID!): Project!
    # Patch
    updateCard(id: ID!, title: String): Card
    updateColumn(id: ID!, name: String): Column
    updateProject(id: ID!, name: String): Project
  }
`;
=======
import { Project } from '@prisma/client';
export const typeDefs = `#graphql
  # type models
  type Card {
    id: ID!
    name: String!
    columnId:String!
  }

  type Column {
    id: ID!
    projectId:String!
    name: String!
    cards: [Card!]!
  }
scalar Date

  type Project {
    id: ID!
    name: String!
    columns: [Column!]!
    updatedAt: Date!
  }
  # Get Query
  type Query {
    getCards: [Card]
    getCard(id: ID!): Card
    getColumns: [Column]
    column(id: ID!): Column
    projects: [Project]
    project(id: ID!): Project
  }
  #   Mutations
  type Mutation {
    # create
    addProject(name: String): Project
    addColumn(name: String, projectId:String): Column
    addCard(name: String,columnId:String): Card
    # destroy
    deleteCard(id: ID!): Card!
    clearColumnCards(columnId: String!): Column!
    deleteColumn(id: ID!): Column!
    deleteProject(id: ID!): Project!
    # patch
    updateCard(id: ID!, title: String): Card
    updateColumn(id: ID!, name: String): Column
    updateProject(id: ID!, name: String): Project
  }
`;
>>>>>>> 6a838621c4e29462353a997aa677bb2c8f8973f1
