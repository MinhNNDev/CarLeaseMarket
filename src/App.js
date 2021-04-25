/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import 'react-native-gesture-handler';
import AppContainer from './common/navigation/index';
import {ApolloProvider} from '@apollo/client';
import {Provider} from 'react-redux';
import store from './common/redux/store';

import {client} from './service/graphql';

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </ApolloProvider>
  );
};

export default App;
