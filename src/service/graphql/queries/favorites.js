import {gql} from '@apollo/client';

export const GET_FAVORITES = gql`
  query GetFavorites {
    rentals {
      id
      user
      car
    }
  }
`;
