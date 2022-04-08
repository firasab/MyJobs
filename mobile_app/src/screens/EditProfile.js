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
import { StyleSheet } from "react-native-web";
import EditButton from "../components/common/EditButton";
import Custominput from "../components/common/Custominput";
import { SafeAreaView } from "react-native-safe-area-context";
import { useEffect } from "react";
import { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import axios from "axios";
import { NetworkContext } from '../context/NetworkContext';
import { useNavigation } from '@react-navigation/native';
import { useForm } from "react-hook-form";


const EditProfile = ({ route }) => {
    const worker = React.useContext(NetworkContext);
    const navigation = useNavigation();
    const [image, setImage] = useState("");

    const {
        control,
        handleSubmit,
        formState: { errors },
      } = useForm();

  

  const onEditPress = async (data) => {
    const user = {
      name: "",
      email: "",
      phoneNumber: "",
      id: "",
      companyName: "",
      location: "",
    };

    if (data.name == undefined) {
      user.name = worker.worker.worker.name;
    } else if (data.name != undefined) {
      user.name = data.name;
    }
    if (data.email == undefined) {
      user.email = worker.worker.worker.email;
    } else if (data.email != undefined) {
      user.email = data.email;
    }

    if (data.phoneNumber == undefined) {
      user.phoneNumber = worker.worker.worker.phoneNumber;
    } else if (data.phoneNumber != undefined) {
      user.phoneNumber = data.phoneNumber;
    }

    if (data.id == undefined) {
      user.id = worker.worker.worker.id;
    } else if (data.id != undefined) {
      user.id = data.id;
    }

    if (data.companyName == undefined) {
        user.companyName = worker.worker.worker.companyName;
      } else if (data.companyName != undefined) {
        user.companyName = data.companyName;
      }

    if (data.location == undefined) {
        user.location = worker.worker.worker.location;
      } else if (data.location != undefined) {
        user.location = data.location;
      }
    user._id = data._id;
    await axios

      .put("https://myjobss.herokuapp.com/workers/update", user)

      .then((resp) => {
        alert("Your Infomration has been changed ");
      })
      .catch((err) => alert("There is problem"));
   
  };
  
  return (
    <SafeAreaView style={Styles.root}>
       <Text style={Styles.title}>Name</Text>
      <Custominput placeholder={"Name"} control={control} name="name" />
      <Text style={Styles.title}>Email</Text>
      <Custominput placeholder={"Email"} control={control} name="email" />
      <Text style={Styles.title}>ID</Text>
      <Custominput placeholder={"ID"} control={control} name="id" />
      <Text style={Styles.title}>Location</Text>
      <Custominput placeholder={"Location"} control={control} name="location" />
      <Text style={Styles.title}>Company Name</Text>
      <Custominput placeholder={"Company Name"} control={control} name="companyName" />
      <Text style={Styles.title}>Phone Number</Text>
      <Custominput placeholder={"Phone Number"} control={control} name="phoneNumber" />

      <EditButton text="Edit your profile" onPress={handleSubmit(onEditPress)} type="FORTH" ></EditButton>
    </SafeAreaView>
  );
};
const Styles = StyleSheet.create({
  root: {
    alignItems: "center",
    padding: 20,
    backgroundColor: "#00BFFF",
    flex: 1,
    justifyContent: "center",
  },
  title1: {
    fontSize: 100,
    fontWeight: "bold",
    color: "#051c60",
    margin: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#051c60",
    margin: 10,
    marginTop: 100,
  },
  buttonStyle: {
    backgroundColor: "#307ecc",
    borderWidth: 0,
    color: "#FFFFFF",
    borderColor: "#307ecc",
    height: 40,
    alignItems: "center",
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 15,
  },
  buttonTextStyle: {
    color: "#FFFFFF",
    paddingVertical: 10,
    fontSize: 16,
  },
});

export default EditProfile;
