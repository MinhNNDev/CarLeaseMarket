/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import 'react-native-gesture-handler';
import {View} from 'react-native';
import AppContainer from './common/navigation/index';
import {ApolloProvider} from '@apollo/client';

import {client} from './service/graphql';
import {STYLE} from './utils/Theme';

const App = () => {
  return (
    <ApolloProvider client={client}>
      <View style={STYLE.container}>
        <AppContainer />
      </View>
    </ApolloProvider>
  );
};

export default App;
