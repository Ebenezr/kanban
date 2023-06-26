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

export const GET_PROJECT = `#graphql
  query Project($id: ID!) {
    project(id: $id) {
      columns {
        id
        name

        cards{
            id
            title
        }
      }
      id
      name
    }
  }
`;
