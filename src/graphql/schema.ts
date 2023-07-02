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
