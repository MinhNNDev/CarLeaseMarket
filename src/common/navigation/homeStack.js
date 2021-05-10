import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import BaseTabs from './tabNavigation';

import AuthScreen from '../../screens/auth/login';
import LeaseScreen from '../../screens/leasecar';
import DetailsCarScreen from '../../screens/details';
import InvoiceSreen from '../../screens/invoice';
import ListPostScreen from '../../screens/listpost';
import PostCarScreen from '../../screens/postcar';
import NotifyScreen from '../../screens/notify';
import ExtendScreen from '../../screens/extend';
import UsersScreen from '../../screens/user';
import HistoryScreen from '../../screens/history';

import AboutSreen from '../../screens/options/AboutSreen';
import PrivacySceen from '../../screens/options/PrivacySceen';
import SettingScreen from '../../screens/options/SettingScreen';
import SupportScreen from '../../screens/options/SupportScreen';

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
        component={UsersScreen}
        options={{headerShown: false}}
      />
      <rootStack.Screen
        name="History"
        component={HistoryScreen}
        options={{headerShown: false}}
      />
      <rootStack.Screen
        name="About"
        component={AboutSreen}
        options={{headerShown: false}}
      />
      <rootStack.Screen
        name="Privacy"
        component={PrivacySceen}
        options={{headerShown: false}}
      />
      <rootStack.Screen
        name="Setting"
        component={SettingScreen}
        options={{headerShown: false}}
      />
      <rootStack.Screen
        name="Support"
        component={SupportScreen}
        options={{headerShown: false}}
      />
    </rootStack.Navigator>
  );
};

export default RootStackScreen;
