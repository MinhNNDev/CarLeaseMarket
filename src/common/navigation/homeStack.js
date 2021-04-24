import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import BaseTabs from './tabNavigation';

import AuthScreen from '../../screens/auth/login';
import LeaseScreen from '../../screens/leasecar/index';
import DetailsCarScreen from '../../screens/details/index';
import InvoiceSreen from '../../screens/invoice/index';
import ListPostScreen from '../../screens/listpost/index';
import PostCarScreen from '../../screens/postcar/index';
import NotifyScreen from '../../screens/notify/index';
import ExtendScreen from '../../screens/extend/index';
import UsersSreens from '../../screens/user/index';

const rootStack = createStackNavigator();

const RootStackScreen = () => {
  return (
    <rootStack.Navigator initialRouteName="Home">
      <rootStack.Screen
        name="Auth"
        component={AuthScreen}
        options={{headerShown: false}}
      />
      <rootStack.Screen
        name="Home"
        component={BaseTabs}
        options={{headerShown: false}}
      />
      <rootStack.Screen
        name="Lease"
        component={LeaseScreen}
        options={{headerShown: false}}
      />
      <rootStack.Screen
        name="Details"
        component={DetailsCarScreen}
        options={{headerShown: false}}
      />
      <rootStack.Screen
        name="Invoice"
        component={InvoiceSreen}
        options={{headerShown: false}}
      />
      <rootStack.Screen
        name="ListPost"
        component={ListPostScreen}
        options={{headerShown: false}}
      />
      <rootStack.Screen
        name="PostCar"
        component={PostCarScreen}
        options={{headerShown: false}}
      />
      <rootStack.Screen
        name="Notify"
        component={NotifyScreen}
        options={{headerShown: false}}
      />
      <rootStack.Screen
        name="Extend"
        component={ExtendScreen}
        options={{headerShown: false}}
      />
      <rootStack.Screen
        name="Users"
        component={UsersSreens}
        options={{headerShown: false}}
      />
    </rootStack.Navigator>
  );
};

export default RootStackScreen;
