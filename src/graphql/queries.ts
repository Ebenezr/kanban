export const GET_PROJECTS = `#graphql
  query Project {
    projects {
      id
      name
      columns {
        id
        name
        cards{
            id
            title
        }
      }
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
