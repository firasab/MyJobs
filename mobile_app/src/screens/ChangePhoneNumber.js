import {Text} from "react-native";
import React , {useState} from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import axios from "axios";
import { NetworkContext } from '../context/NetworkContext';
import { useNavigation } from '@react-navigation/native';
import SubmitButton from '../components/common/CustomButton';
import { TextInput ,Alert  } from "react-native";
import * as ImagePicker from "expo-image-picker";
import Container from '../components/common/Container';
//import auth from '@react-native-firebase/auth';

const ChangePhoneNumber = ({ route }) => {
    const worker = React.useContext(NetworkContext);
    const navigation = useNavigation();
    
    //the worker information
    const [user, setUser] = useState({
     name:worker.worker.worker.name,
     id: worker.worker.worker.id,
     location: worker.worker.worker.location,
     phoneNumber:"",
     password:worker.worker.worker.password,
     email: worker.worker.worker.email,
     companyName: worker.worker.worker.companyName,
     isWorkingSun: worker.worker.worker.isWorkingSun,
     isWorkingMon: worker.worker.worker.isWorkingMon,
     isWorkingTues: worker.worker.worker.isWorkingTues,
     isWorkingWed: worker.worker.worker.isWorkingWed,
     isWorkingThur: worker.worker.worker.isWorkingThur,
     isWorkingFri: worker.worker.worker.isWorkingFri,
     isWorkingSat: worker.worker.worker.isWorkingSat,
     workerImg: worker.worker.worker.workerImg,

     timeWorkingSun:  worker.worker.worker.timeWorkingSun,
     timeWorkingMon:  worker.worker.worker.timeWorkingMon,
     timeWorkingTues:  worker.worker.worker.timeWorkingTues,
     timeWorkingThur:  worker.worker.worker.timeWorkingThur,
     timeWorkingWed:  worker.worker.worker.timeWorkingWed,
     timeWorkingFri: worker.worker.worker.timeWorkingFri,
     timeWorkingSat:  worker.worker.worker.timeWorkingSat,
     
  });

    
  //post method to change worker details
  const onEditPress = async() => { 
   
   await axios.get(`https://myjobss.herokuapp.com/ChangeN?phoneNumber=${user.phoneNumber}`)
      .then(() => {  
    alert("Verifaction code has been sent");
    navigation.navigate('code' , { worker : user });  
      })
      .catch((err) => alert("Enter your phone number in this format :+9725********"));
  };





  //the design of the  edit worker information page
  return (
  <>
    <Text style={{left: 50 , fontSize: 20 , top : 20}}>Phone Number Change application!</Text>
    <SafeAreaView >

      <Text style={{left: 100, top : 20}}>Your current Phone Number:</Text>
      <TextInput style={{backgroundColor: "white",color:'black', top : 20, width: "50%", height: 30, borderRadius: 5, paddingHorizontal: 1, marginVertical: 10 , alignItems: 'center', left: 100}} 
      placeholder={"Enter Your Phone Number"} editable = {false}   value={worker.worker.worker.phoneNumber} name="phoneNumber" />

      

      <Text style={{left: 100, top : 20}}>Enter your new phone Number:</Text>
      <TextInput style={{backgroundColor: "white", top : 20, width: "50%", height: 30, borderRadius: 5, paddingHorizontal: 1, marginVertical: 10 , alignItems: 'center', left: 100}} 
      placeholder={"+9725********"}  value={user.phoneNumber} onChangeText={(text) => { setUser({ ...user, phoneNumber:text }) }}  name="phoneNumber" />

    </SafeAreaView>

    <Container style={{flexDirection: "row" , marginLeft: 30,  justifyContent: 'center' ,paddingHorizontal: 4, marginVertical: -20,  borderRadius: 500,  alignItems: 'center', justifyContent: 'space-evenly'}}>
      <SubmitButton  style={{width: 180 , left: -8}} primary title="Change" onPress={onEditPress} type="FORTH" ></SubmitButton>
      </Container>
      
    </>
  );
};

export default ChangePhoneNumber;