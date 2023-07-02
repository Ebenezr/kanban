import { gql } from '@apollo/client';

export const UPDATE_CARD = gql`
  mutation UpdateNovel($id: ID!, $title: String, $columnId: String) {
    updateNovel(id: $id, title: $title, columnId: $columnId) {
      id
      image
      columnId
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

export const DELETE_CARD = gql`
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
