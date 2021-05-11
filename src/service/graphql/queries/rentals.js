import {gql} from '@apollo/client';

export const GET_HISTORY = gql`
  query GetRentals {
    rentals {
      startDate
      endDate
      remarks
      car {
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
      customer {
        id
        username
        email
        phone
        fullname
      }
    }
  }
`;
