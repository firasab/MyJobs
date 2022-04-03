import React, {useState} from 'react';
import {useContext} from 'react';
import LoginComponent from '../components/Login';
//import loginUser from '../context/actions/auth/loginUser';
//import {GlobalContext} from '../context/Provider';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';


const Login = () => {
  const [form, setForm] = useState({});
  const navigation = useNavigation();
  
  const user = {
    phoneNumber:"",
    password:""
  }
  // const {
  //   authDispatch,
  //   authState: {error, loading},
  // } = useContext(GlobalContext);

  const onSubmit = async () => {
    if (form.phoneNumber && form.password) {
      user.phoneNumber = form.phoneNumber;
      user.password = form.password;

      await axios
      .post("https://myjobss.herokuapp.com/workers/auth/login", user)
     

      .then((res) => {
        //alert("welcome to your acount!")
        //navigation.navigate(HOME_NAVIGATOR);
        navigation.navigate('Home'); 
        //navigation.navigate('aa'); 
        
        
      }) .catch((err) => alert("Username or password is incorrect")); }};

  const onChange = ({name, value}) => {
    setForm({...form, [name]: value});
  };

  return (
    <LoginComponent
      onSubmit={onSubmit}
      onChange={onChange}
      form={form}
      //error={error}
      //loading={loading}
     
    />
  );
};

export default Login;
