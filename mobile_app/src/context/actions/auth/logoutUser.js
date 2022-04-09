import {
    LOGOUT_USER
  } from '../../../constants/actionTypes';
  
  
  export default ({id, phoneNumber: phonenumber}) => (dispatch) => {
    
    dispatch({
      type: LOGOUT_USER,
    });
  
  };
  