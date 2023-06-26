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
export const UPDATE_COLUMN = `#graphql
  mutation UpdateColumn($id: ID!, $name: String,$projectId: String) {
    updateColumn(id: $id, name: $name,projectId: $projectId) {
      id
      name
      projectId
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
export const ADD_COLUMN = `#graphql
  mutation Mutation($projectId: ID!, $name: String) {
    addColumn(projectId: $projectId, name: $name) {
      id
      name
      projectId
    }
  }
`;
export const ADD_CARD = `#graphql
  mutation Mutation($columnId: ID!, $title: String) {
    addAuthor(novelId: $columnId, title: $title) {
      id
      title
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
export const DELETE_COLUMN = `#graphql
  mutation Mutation($id: ID!) {
    deleteColumn(id: $id) {
      id
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
