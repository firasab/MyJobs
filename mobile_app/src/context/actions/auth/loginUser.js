import {
  LOGIN_LOADING
} from '../../../constants/actionTypes';


export default ({id, phoneNumber: phonenumber}) => (dispatch) => {
  
  dispatch({
    type: LOGIN_LOADING,
  });

};
