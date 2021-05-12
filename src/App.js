/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import 'react-native-gesture-handler';
import {Alert} from 'react-native';
import AppContainer from './common/navigation/index';
import {ApolloProvider} from '@apollo/client';
import {Provider} from 'react-redux';
import store from './common/redux/store';
import Toast from 'react-native-toast-message';

import {client} from './service/graphql';

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <AppContainer />
        <Toast ref={ref => Toast.setRef(ref)} />
      </Provider>
    </ApolloProvider>
  );
};

export default App;
