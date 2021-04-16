import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import HomeStackScreen from './tabNavigation';

const AppContainer = () => {
  return (
    <NavigationContainer>
      <HomeStackScreen />
    </NavigationContainer>
  );
};

export default AppContainer;