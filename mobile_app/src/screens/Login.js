import React, {useState} from 'react';
import {useContext} from 'react';
import LoginComponent from '../components/Login';
import loginUser from '../context/actions/auth/loginUser';
import {GlobalContext} from '../context/Provider';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import loginFail from '../context/actions/auth/loginFail';
import Message from '../components/common/Message';


const Login = () => {
  const [form, setForm] = useState({});
  const navigation = useNavigation();
  
  const worker = {
    phoneNumber:"",
    password:"",

  }
   const {
     authDispatch,
    authState: {error, loading},
   } = useContext(GlobalContext);

   //check if fields are empty
  const onSubmit = async () => {
    if (!form.phoneNumber || !form.password) {
      alert("please fill the required fields!")      
    }

//to check if the worker in the database
    if (form.phoneNumber && form.password) {
      loginUser(form)(authDispatch);
      worker.phoneNumber = form.phoneNumber;
      worker.password = form.password;
      

      await axios
      .post("https://myjobss.herokuapp.com/workers/auth/login", worker)
      
      .then((res) => {
        navigation.navigate('Home' , { worker : res.data });      
      }) .catch((err) =>   alert("Username or password is incorrect")), loginFail(form)(authDispatch) 
    
    }};

  const onChange = ({name, value}) => {
    setForm({...form, [name]: value});
  };

  //design of login page
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
