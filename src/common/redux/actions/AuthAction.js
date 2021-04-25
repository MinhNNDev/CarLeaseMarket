import axios from 'axios';

axios.defaults.baseURL = 'http://45.119.212.43:1337/auth/local';

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
      const res = await axios.post('/register', userState);
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
      const res = await axios.post('/login', loginState);
      const {data} = res;
      dispatch({type: AuthActionType.LOGIN_SUCCESS, payload: data});
      navigation.navigate('Home');
    } catch (error) {
      if (error.response) {
        dispatch({
          type: AuthActionType.LOGIN_FAIL,
          payload: error.response.data.message,
        });
      }
      setErrorHandler({hasError: true, message: error.response.data.message});
    }
  };
};

const LogOutAuthAction = navigation => {
  return async dispatch => {
    try {
      const res = await axios.get('/logout');
      const {data} = res;
      dispatch({
        type: AuthActionType.LOGOUT_SUCCESS,
        payload: data.message,
      });
      navigation.navigate('Auth');
    } catch (error) {
      if (error.response) {
        dispatch({
          type: AuthActionType.LOGOUT_FAIL,
          payload: error.response.data.message,
        });
      }
    }
  };
};

export {RegisterAuthAction, AuthActionType, LogOutAuthAction, LoginAuthAction};
