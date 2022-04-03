import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  LOGIN_FAIL,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
} from '../../../constants/actionTypes';
import axiosInstance from '../../../helpers/axiosInstance';

export default ({id, phoneNumber: phonenumber}) => (dispatch) => {
  
  dispatch({
    type: LOGIN_LOADING,
  });
  axiosInstance
    .post('auth/login', {
      phonenumber,
      id,
    })
    .then((res) => {
        // console.log('54',54);
      AsyncStorage.setItem('token', res.data.token);
      AsyncStorage.setItem('worker', JSON.stringify(res.data.worker));
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: LOGIN_FAIL,
        payload: err.response
          ? err.response.data
          : {error: 'Something went wrong, try agin'},
      });
    });
};
