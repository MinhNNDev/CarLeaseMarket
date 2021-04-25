import React from 'react';
import {View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {STYLE} from '../../utils/Theme';

import HomeStackScreen from './homeStack';

const AppContainer = () => {
  return (
    <NavigationContainer>
      <View style={STYLE.container}>
        <HomeStackScreen />
      </View>
    </NavigationContainer>
  );
};

export default AppContainer;
