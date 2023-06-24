export const typeDefs = `#graphql
  # type models
  type Card {
    id: ID
    title: String
  }

  type Column {
    id: ID!
    name: String!
    cards: [Card!]!
  }

  type Project {
    id: ID!
    name: String!
    columns: [Column!]!
  }
  # Get Query
  type Query {
    getCards: [Card]
    getCard(title: String!): Card!
    getColumns: [Column]
    getColumn(name: String): Column!
    projects: [Project]
    project(id: ID!): Project
  }
  #   Mutations
  type Mutation {
    # create
    addProject(name: String!): Project
    addColumn(name: String): Column
    addCard(title: String): Card
    # destroy
    deleteCard(id: ID!): Boolean!
    deleteColumn(id: ID!): Boolean!
    deleteProject(id: ID!): Boolean!
    # patch
    updateCard(id: ID!, title: String): Card
    updateColumn(id: ID!, name: String): Column
    updateProject(id: ID!, name: String): Project
  }
`;