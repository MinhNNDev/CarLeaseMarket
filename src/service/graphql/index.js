import {ApolloClient, InMemoryCache} from '@apollo/client';

export const client = new ApolloClient({
  uri: 'http://45.119.212.43:1337/graphql',
  cache: new InMemoryCache(),
});
