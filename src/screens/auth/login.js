import React, {useState} from 'react';
import {Text, View, SafeAreaView, TouchableOpacity, Image} from 'react-native';

import {InputValue} from '../../common/components';

import {COLORS} from '../../utils/Theme';
import {styles} from './styles';

const Auth = () => {
  const [tab, setTab] = useState(0);
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        LEASE CAR - {tab === 0 ? 'Đăng nhập' : 'Đăng ký'}
      </Text>
      <View style={styles.listTab}>
        <TouchableOpacity
          onPress={() => setTab(0)}
          style={[
            styles.button,
            tab === 0 && {borderBottomColor: COLORS.primary},
          ]}>
          <Text
            style={[styles.buttonText, tab === 0 && {color: COLORS.primary}]}>
            ĐĂNG NHẬP
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setTab(1)}
          style={[
            styles.button,
            tab === 1 && {borderBottomColor: COLORS.primary},
          ]}>
          <Text
            style={[styles.buttonText, tab === 1 && {color: COLORS.primary}]}>
            ĐĂNG KÝ
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.wrapper}>
        {tab === 0 && (
          <>
            <View style={styles.container}>
              <Image
                source={require('../../assets/img/logo.png')}
                style={styles.logo}
              />
              <InputValue title="Số điện thoại" icon="person" />
              <InputValue title="Mật khẩu" icon="lock-closed" isPassword />
              <TouchableOpacity style={styles.btnLog}>
                <Text>ĐĂNG NHẬP</Text>
              </TouchableOpacity>
            </View>
          </>
        )}
        {tab === 1 && (
          <View style={styles.container}>
            <InputValue title="Số điện thoại" icon="person" />
            <InputValue title="Email" icon="mail" />
            <InputValue title="Mật khẩu" icon="lock-closed" isPassword />
            <View style={styles.policy}>
              <View style={styles.box} />
              <Text style={styles.policyText}>
                I have read and argee the{' '}
                <Text style={styles.policyTextColor}>Privacy Policy</Text>
              </Text>
            </View>
            <TouchableOpacity style={styles.btnLog}>
              <Text>ĐĂNG KÝ</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};
export default Auth;
