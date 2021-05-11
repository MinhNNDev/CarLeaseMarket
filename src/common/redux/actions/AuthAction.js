import axios from 'axios';

axios.defaults.baseURL = 'http://45.119.212.43:1337';

const AuthActionType = {
  REGISTER_SUCCESS: 'REGISTER_SUCCESS',
  REGISTER_FAIL: 'REGISTER_FAIL',
  LOGOUT_SUCCESS: 'LOGOUT_SUCCESS',
  LOGOUT_FAIL: 'LOGOUT_FAIL',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_FAIL: 'LOGIN_FAIL',
};

const RegisterAuthAction = (userState, navigation, setErrorHandler) => {
  return async dispatch => {
    try {
      console.log(userState);
      const data_form = {
        username: userState.phone,
        email: userState.email,
        password: userState.password,
      };
      const res = await axios.post('/auth/local/register', {
        username: userState.phone,
        email: userState.email,
        password: userState.password,
      });
      const {data} = res;
      dispatch({type: AuthActionType.REGISTER_SUCCESS, payload: data});
      navigation.navigate('Home');
    } catch (error) {
      if (error.response) {
        dispatch({
          type: AuthActionType.REGISTER_FAIL,
          payload: error.response.data.message,
        });
        setErrorHandler({
          hasError: true,
          message: error.response.data.message,
        });
      }
    }
  };
};

const LoginAuthAction = (loginState, navigation, setErrorHandler) => {
  return async dispatch => {
    try {
      const data_form = {
        identifier: loginState.phone,
        password: loginState.password,
      };
      const res = await axios.post('/auth/local', data_form);
      const {data} = res;
      dispatch({type: AuthActionType.LOGIN_SUCCESS, payload: data});
      navigation.navigate('Home');
    } catch (error) {
      let messageError = 'Tài khoản hoặc mật khẩu không chính xác !!!';
      if (error.response) {
        // let messageError = error.response.data.data[0].messages[0].message;
        dispatch({
          type: AuthActionType.LOGIN_FAIL,
          payload: messageError,
        });
      }
      setErrorHandler({hasError: true, message: messageError});
    }
  };
};

const LogOutAuthAction = navigation => {
  return async dispatch => {
    dispatch({
      type: AuthActionType.LOGOUT_SUCCESS,
    });
    navigation.navigate('Auth');
  };
};

export {RegisterAuthAction, AuthActionType, LogOutAuthAction, LoginAuthAction};
