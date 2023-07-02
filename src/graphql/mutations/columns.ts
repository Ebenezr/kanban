import { gql } from '@apollo/client';

export const DELETE_COLUMN = gql`
  mutation Mutation($id: ID!) {
    deleteColumn(id: $id) {
      name
      projectId
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

export const UPDATE_COLUMN = gql`
  mutation UpdateColumn($id: ID!, $name: String) {
    updateColumn(id: $id, name: $name) {
      id
      name
    }
  }
`;
