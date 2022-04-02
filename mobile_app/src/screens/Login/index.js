import React, {useState} from 'react';
import {useContext} from 'react';
import LoginComponent from '../../components/Login';
import loginUser from '../../context/actions/auth/loginUser';
import {GlobalContext} from '../../context/Provider';
import axios from 'axios';
import { navigate } from '../../navigations/SideMenu/RootNavigator';
import WorkerDetail from '../WorkerDetail';

const Login = () => {
  const [form, setForm] = useState({});
  const user = {
    phoneNumber:"",
    password:""
  }
  const {
    authDispatch,
    authState: {error, loading},
  } = useContext(GlobalContext);

  const onSubmit = async () => {
    if (form.phoneNumber && form.password) {
      user.phoneNumber = form.phoneNumber;
      user.password = form.password;
     
      await axios

      .post("https://myjobss.herokuapp.com/workers/auth/login", user)

      .then((res) => {
       ///////////////navigation 
       //navigate(WorkerDetail);
       alert("welcome to your acount!")
       
      })
      .catch((err) => alert("Username or password is incorrect"));

      // console.log('44',44);
      // loginUser(form)(authDispatch);
      // console.log('444',444);
    }
  };

  const onChange = ({name, value}) => {
    setForm({...form, [name]: value});
  };

  return (
    <LoginComponent
      onSubmit={onSubmit}
      onChange={onChange}
      form={form}
      error={error}
      loading={loading}
     
    />
  );
};

export default Login;
