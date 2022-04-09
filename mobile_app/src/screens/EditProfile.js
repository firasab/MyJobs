import {Text} from "react-native";
import React , {useState} from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import axios from "axios";
import { NetworkContext } from '../context/NetworkContext';
import { useNavigation } from '@react-navigation/native';
import SubmitButton from '../components/common/SubmitButton';
import { TextInput } from "react-native";


const EditProfile = ({ route }) => {
    const worker = React.useContext(NetworkContext);
    const navigation = useNavigation();
    const [user, setUser] = useState({
     name:worker.worker.worker.name,
     id: worker.worker.worker.id,
     location: worker.worker.worker.location,
     phoneNumber:worker.worker.worker.phoneNumber,
     password:worker.worker.worker.password,
     email: worker.worker.worker.email,
     companyName: worker.worker.worker.companyName,
     workerImg: worker.worker.worker.workerImg,
  });

    
  
  const onEditPress = () => { 
   axios.put(`https://myjobss.herokuapp.com/workers/update/${worker.worker.worker._id}`,user)
      .then(() => {  
        alert("Your Profile has been updated! ");
        navigation.navigate('Profile'); 
      })
      .catch((err) => alert("check your server"));
   
  };
  

  
  return (
  <>
    <Text style={{left: 70 , fontSize: 20}}>Edit your information please!</Text>
    <SafeAreaView >
      <Text style={{left: 100}} >Name</Text>
      <TextInput style={{backgroundColor: "white", width: "50%", height: 30, borderRadius: 5, paddingHorizontal: 1, marginVertical: 10 , alignItems: 'center', left: 100}}
       placeholder={"Enter Your name"} value={user.name} onChangeText={(text) => { setUser({ ...user, name:text }) }}  name="name" />

      <Text style={{left: 100}}>Email</Text>
      <TextInput style={{backgroundColor: "white", width: "50%", height: 30, borderRadius: 5, paddingHorizontal: 1, marginVertical: 10 , alignItems: 'center', left: 100}}
       placeholder={"Enter Your Email"} value={user.email} onChangeText={(text) => { setUser({ ...user, email:text }) }} name="email" />

      <Text style={{left: 100}}>Location</Text>
      <TextInput  style={{backgroundColor: "white", width: "50%", height: 30, borderRadius: 5, paddingHorizontal: 1, marginVertical: 10 , alignItems: 'center', left: 100}}
       placeh older={"Enter Your Location"} value={user.location} onChangeText={(text) => { setUser({ ...user, location:text }) }} name="location" />

      <Text style={{left: 100}}>Company Name</Text>
      <TextInput style={{backgroundColor: "white", width: "50%", height: 30, borderRadius: 5, paddingHorizontal: 1, marginVertical: 10 , alignItems: 'center', left: 100}} 
      placeholder={"Enter Your Company Name"}  value={user.companyName} onChangeText={(text) => { setUser({ ...user, companyName:text }) }}  name="companyName" />

      <Text style={{left: 100}}>Phone Number</Text>
      <TextInput style={{backgroundColor: "white", width: "50%", height: 30, borderRadius: 5, paddingHorizontal: 1, marginVertical: 10 , alignItems: 'center', left: 100}} 
      placeholder={"Enter Your Phone Number"} value={user.phoneNumber} onChangeText={(text) => { setUser({ ...user, phoneNumber:text }) }} name="phoneNumber" /> 

      <Text style={{left: 100}}>App Password</Text>
      <TextInput style={{backgroundColor: "white", width: "50%", height: 30, borderRadius: 5, paddingHorizontal: 1, marginVertical: 10 , alignItems: 'center', left: 100}} 
      placeholder={"Enter Your Password"} value={user.password} onChangeText={(text) => { setUser({ ...user, password:text }) }} name="phoneNumber" /> 

      <SubmitButton style={{top: -50}} primary title="Update" onPress={onEditPress} type="FORTH" ></SubmitButton>
      
    </SafeAreaView>
    </>
  );
};

export default EditProfile;


