import { gql } from '@apollo/client';
// Patch
export const UPDATE_PROJECT = gql`
  mutation UpdateProject($id: ID!, $name: String) {
    updateProject(id: $id, name: $name) {
      id
      name
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

// Destroy
export const DELETE_PROJECT = gql`
  mutation Mutation($id: ID!) {
    deleteProject(id: $id) {
      id
      name
    }
  }
`;
