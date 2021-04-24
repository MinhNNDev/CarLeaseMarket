import {gql} from '@apollo/client';

export const GET_CAR = gql`
  query GetListCars {
    cars {
      id
      title
      description
      price
      year
      gear
      fuel
      fuelCapacity
      seats
      classification
      brand {
        id
        name
      }
      images {
        url
      }
      createdAt
      updatedAt
    }
  }
`;

export const GET_BRAND = gql`
  query GetListBrands {
    brands {
      id
      name
    }
  }
`;
