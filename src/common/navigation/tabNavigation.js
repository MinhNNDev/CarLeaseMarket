import React from 'react';
import {View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeScreen from '../../screens/home/index';
import LeaseCarScreen from '../../screens/leasecar/index';
import ListPostScreen from '../../screens/listpost/index';
import NotifyScreen from '../../screens/notify/index';
import ExtendScreen from '../../screens/extend/index';

import {COLORS, STYLE} from '../../utils/Theme';

const Tab = createBottomTabNavigator();

const TabsNavigation = () => {
  return (
    <View style={STYLE.container}>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Trang chủ') {
              iconName = focused ? 'home' : 'home';
            } else if (route.name === 'Thuê xe') {
              iconName = focused ? 'car' : 'car';
            } else if (route.name === 'Đăng xe') {
              iconName = focused ? 'plus' : 'plus';
            } else if (route.name === 'Thông báo') {
              iconName = focused ? 'bell' : 'bell';
            } else if (route.name === 'Menu') {
              iconName = focused ? 'menu' : 'menu';
            }
            return <MaterialIcons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: COLORS.primary,
          inactiveTintColor: 'gray',
        }}>
        <Tab.Screen name="Trang chủ" component={HomeScreen} />
        <Tab.Screen name="Thuê xe" component={LeaseCarScreen} />
        <Tab.Screen name="Đăng xe" component={ListPostScreen} />
        <Tab.Screen name="Thông báo" component={NotifyScreen} />
        <Tab.Screen name="Menu" component={ExtendScreen} />
      </Tab.Navigator>
    </View>
  );
};

export default TabsNavigation;
