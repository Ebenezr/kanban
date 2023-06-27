import { gql } from '@apollo/client';
// Patch
export const UPDATE_PROJECT = `#graphql
  mutation UpdateProject($id: ID!, $name: String) {
    updateProject(id: $id, name: $name) {
      id
     name
    }
  }
`;
export const UPDATE_COLUMN = gql`
  mutation UpdateColumn($id: ID!, $name: String) {
    updateColumn(id: $id, name: $name) {
      id
      name
    }
  }
`;
export const UPDATE_CARD = `#graphql
  mutation UpdateNovel($id: ID!, $title: String, $columnId: String) {
    updateNovel(id: $id, title: $title, columnId: $columnId) {
      id
      image
      columnId
    }
  }
`;

// Create
export const ADD_PROJECT = gql`
  mutation Mutation($name: String) {
    addProject(name: $name) {
      name
    }
  }
`;
export const ADD_COLUMN = gql`
  mutation Mutation($projectId: String, $name: String) {
    addColumn(projectId: $projectId, name: $name) {
      name
      projectId
    }
  }
`;
export const ADD_CARD = gql`
  mutation Mutation($columnId: String, $name: String) {
    addCard(columnId: $columnId, name: $name) {
      name
      columnId
    }
  }
`;

// Destroy
export const DELETE_PROJECT = gql`
  mutation Mutation($id: ID!) {
    deleteProject(id: $id) {
      id
      name
    }
  }
`;
export const DELETE_COLUMN = gql`
  mutation Mutation($id: ID!) {
    deleteColumn(id: $id) {
      name
      projectId
    }
  }
`;
export const DELETE_CARD = `#graphql
  mutation Mutation($id: ID!) {
    deleteCard(id: $id) {
      id
      title
      columnId
    }
  }
`;

export const CLEAR_CARDS = gql`
  mutation Mutation($columnId: String!) {
    clearColumnCards(columnId: $columnId) {
      id
      name
    }
  }
`;
