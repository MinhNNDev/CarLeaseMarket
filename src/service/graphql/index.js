import {ApolloClient, InMemoryCache} from '@apollo/client';

const defaultOptions = {
  watchQuery: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'ignore',
  },
  query: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'all',
  },
}

export const client = new ApolloClient({
  uri: 'http://45.119.212.43:1337/graphql',
  cache: new InMemoryCache(),
  defaultOptions: defaultOptions,
});
