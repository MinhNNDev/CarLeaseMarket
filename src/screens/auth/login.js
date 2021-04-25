import React, {useState} from 'react';
import {Text, View, SafeAreaView, TouchableOpacity, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {connect} from 'react-redux';
import {
  LoginAuthAction,
  RegisterAuthAction,
} from '../../common/redux/actions/AuthAction';

import {InputValue} from '../../common/components';

import {COLORS} from '../../utils/Theme';
import {styles} from './styles';

const Auth = props => {
  const {login, register} = props;
  const [loginState, setLoginState] = useState({});
  const [userState, setUserstate] = useState({});

  console.log(loginState);
  console.log(userState);
  const [errorHandler, setErrorHandler] = useState({
    hasError: false,
    message: '',
  });

  const [tab, setTab] = useState(0);

  const navigation = useNavigation();
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
              <InputValue
                onChangeText={phone =>
                  setLoginState({...loginState, ...{phone}})
                }
                title="Số điện thoại"
                icon="person"
              />
              <InputValue
                onChangeText={password =>
                  setLoginState({...loginState, ...{password}})
                }
                title="Mật khẩu"
                icon="lock-closed"
                isPassword
              />
              <TouchableOpacity
                onPress={() => login(loginState, navigation, setErrorHandler)}
                style={styles.btnLog}>
                <Text>ĐĂNG NHẬP</Text>
              </TouchableOpacity>
            </View>
          </>
        )}
        {tab === 1 && (
          <View style={styles.container}>
            <InputValue
              onChangeText={phone => setUserstate({...userState, ...{phone}})}
              title="Số điện thoại"
              icon="person"
            />
            <InputValue
              onChangeText={email => setUserstate({...userState, ...{email}})}
              title="Email"
              icon="mail"
            />
            <InputValue
              onChangeText={password =>
                setUserstate({...userState, ...{password}})
              }
              title="Mật khẩu"
              icon="lock-closed"
              isPassword
            />
            <View style={styles.policy}>
              <View style={styles.box} />
              <Text style={styles.policyText}>
                I have read and argee the{' '}
                <Text style={styles.policyTextColor}>Privacy Policy</Text>
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => register(userState, navigation, setErrorHandler)}
              style={styles.btnLog}>
              <Text>ĐĂNG KÝ</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};
const mapStateToProps = state => {
  return {
    user: state,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: (loginState, navigation, setErrorHandler) => {
      dispatch(LoginAuthAction(loginState, navigation, setErrorHandler));
    },
    register: (userState, navigation, setErrorHandler) => {
      dispatch(RegisterAuthAction(userState, navigation, setErrorHandler));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
