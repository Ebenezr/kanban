import { gql } from '@apollo/client';
export const GET_PROJECTS = gql`
  query Project {
    projects {
      id
      name
      updatedAt
    }
  }
`;

export const GET_PROJECT = gql`
  query Project($id: ID!) {
    project(id: $id) {
      columns {
        id
        name

        cards {
          id
          name
        }
      }
      id
      name
    }
  }
`;

export const GET_COLUMN = gql`
  query Column($id: ID!) {
    column(id: $id) {
      id
      name
      projectId
      cards {
        id
        name
      }
    }
  }
`;
