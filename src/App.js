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

import {fcmService} from './service/notification/FCMservice';
import {localNotificationService} from './service/notification/LocalNotificationService';

import {client} from './service/graphql';

const App = () => {
  useEffect(() => {
    //=========React-Native_Firebase_FCM==============/
    fcmService.registerAppWithFCM();
    fcmService.register(onRegister, onNotification, onOpenNotification);
    localNotificationService.configure(onOpenNotification);

    function onRegister(token) {
      console.log('[App] onRegister: ', token);
    }

    function onNotification(notify) {
      console.log('[App] onNotification: ', notify);
      const options = {
        soundName: 'default',
        playSound: true, //,
        // largeIcon: 'ic_launcher', // add icon large for Android (Link: app/src/main/mipmap)
        // smallIcon: 'ic_launcher' // add icon small for Android (Link: app/src/main/mipmap)
      };
      localNotificationService.showNotification(
        0,
        notify.title,
        notify.body,
        notify,
        options,
      );
    }

    function onOpenNotification(notify) {
      console.log('[App] onOpenNotification: ', notify);
      Alert.alert(notify.title, 'Open Notification: ' + notify.body);
    }

    return () => {
      console.log('[App] unRegister');
      fcmService.unRegister();
      localNotificationService.unregister();
    };
  }, []);

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
