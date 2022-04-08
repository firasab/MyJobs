// import React from 'react';
// import { Text} from 'react-native';
// import Container from '../components/common/Container';
// import SubmitButton from '../components/common/SubmitButton';
// import { NetworkContext } from '../context/NetworkContext';
// import { useNavigation } from '@react-navigation/native';


// const EditProfile = () => {
//     const worker = React.useContext(NetworkContext);
//     const navigation = useNavigation();
    

//     const backToProfile = () => {
        
//         navigation.navigate('Profile', { worker : worker }); 
//       };
//     return (<>
//         <Container>
//             <Text> Hi from EditProfile </Text>
//         </Container>

       
//         <SubmitButton  primary   title="Submit" onPress={backToProfile}/ >
//         </>
//         );
// };



// export default EditProfile;

import {Text} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import axios from "axios";
import { NetworkContext } from '../context/NetworkContext';
import { useNavigation } from '@react-navigation/native';
import SubmitButton from '../components/common/SubmitButton';
import { StyleSheet, TextInput } from "react-native";


const EditProfile = ({ route }) => {
    const worker = React.useContext(NetworkContext);
    const navigation = useNavigation();

     

  const onEditPress = async (worker) => {

    await axios
    .post(`https://myjobss.herokuapp.com/workers/update/${worker.worker.worker._id}`, worker)
    
    .then(() => {
        alert("Ypur Profile has been updated! ");
        navigation.navigate('Profile'); 
      })
      .catch((err) => alert("check your server"));
   
  };
  
  return (
  <>
    <Text style={{left: 70 , fontSize: 20}}>Edit your information please!</Text>
    <SafeAreaView >
        <Text style={{left: 100}} >Name</Text>
      <TextInput style={{backgroundColor: "white", width: "50%", height: 30, borderRadius: 5, paddingHorizontal: 1, marginVertical: 10 , alignItems: 'center', left: 100}} placeholder={"Enter Your name"} value={worker.worker.worker.name} name="name" />
      <Text style={{left: 100}}>Email</Text>
      <TextInput style={{backgroundColor: "white", width: "50%", height: 30, borderRadius: 5, paddingHorizontal: 1, marginVertical: 10 , alignItems: 'center', left: 100}} placeholder={"Enter Your Email"} value={worker.worker.worker.email} name="email" />
      <Text style={{backgroundColor: "white", width: "50%", height: 30, borderRadius: 5, paddingHorizontal: 1, marginVertical: 10 , alignItems: 'center', left: 100}}>ID</Text>
      <TextInput  style={{backgroundColor: "white", width: "50%", height: 30, borderRadius: 5, paddingHorizontal: 1, marginVertical: 10 , alignItems: 'center', left: 100}} placeholder={"Enter Your ID"}  value={worker.worker.worker.id} name="id" />
      <Text style={{left: 100}}>Location</Text>
      <TextInput  style={{backgroundColor: "white", width: "50%", height: 30, borderRadius: 5, paddingHorizontal: 1, marginVertical: 10 , alignItems: 'center', left: 100}} placeholder={"Enter Your Location"}  value={worker.worker.worker.location} name="location" />
      <Text style={{left: 100}}>Company Name</Text>
      <TextInput style={{backgroundColor: "white", width: "50%", height: 30, borderRadius: 5, paddingHorizontal: 1, marginVertical: 10 , alignItems: 'center', left: 100}} placeholder={"Enter Your Company Name"}  value={worker.worker.worker.companyName}  name="companyName" />
      <Text style={{left: 100}}>Phone Number</Text>
      <TextInput style={{backgroundColor: "white", width: "50%", height: 30, borderRadius: 5, paddingHorizontal: 1, marginVertical: 10 , alignItems: 'center', left: 100}} placeholder={"Enter Your Phone Number"} value={worker.worker.worker.phoneNumber} name="phoneNumber" /> 

      <SubmitButton primary title="Update" onPress={onEditPress} type="FORTH" ></SubmitButton>
      
    </SafeAreaView>
    </>
  );
};

export default EditProfile;


