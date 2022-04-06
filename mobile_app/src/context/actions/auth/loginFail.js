import {
  LOGIN_FAIL
} from '../../../constants/actionTypes';


export default ({id, phoneNumber: phonenumber}) => (dispatch) => {
  
  dispatch({
    type: LOGIN_FAIL,
  });

};
