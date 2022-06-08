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
//import {DevSettings} from 'react-native';

const EditProfile = ({ route }) => {
    const worker = React.useContext(NetworkContext);
    const navigation = useNavigation();
    
    //the worker information
    const [user, setUser] = useState({
     name:worker.worker.worker.name,
     id: worker.worker.worker.id,
     location: worker.worker.worker.location,
     phoneNumber:worker.worker.worker.phoneNumber,
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
  const onEditPress = () => { 
   axios.post(`https://myjobss.herokuapp.com/workers/update/${worker.worker.worker._id}`,user)
      .then(() => {  
       // DevSettings.reload()
       navigation.navigate('Login');
        Alert.alert(
          "Your Profile has been updated!",
          "please, Login to see the changes!",
        );
      })
      .catch((err) => alert("check your server"));
  };


  const uploadPic = async (data) => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
      base64: true,
    });
    
    if (result.cancelled) {
      //alert("Please pick a picture otherwise your profile pic will be deleted! ");
      //if the user cancel the pic selector  
    }

   const pico = "data:image/png;base64," + result.base64;
     const profileImg = {
        workerImg: "" ,
        email: "" ,
        name: "" , 
        id: "" ,
        location: " " ,
        phoneNumber: "" , 
        password: "" ,
        companyName: "" ,
        isWorkingSun: "" , 
        isWorkingMon: "" ,
        isWorkingTues: "" ,
        isWorkingThur: "" ,
        isWorkingSat: "",
        isWorkingFri: "",
        isWorkingWed: "",

        timeWorkingSun: "",
        timeWorkingMon: "",
        timeWorkingTues: "",
        timeWorkingThur: "",
        timeWorkingWed: "",
        timeWorkingFri: "",
        timeWorkingSat: "",
       };

     profileImg.workerImg = pico;
     profileImg.email = worker.worker.worker.email;
     profileImg.name = worker.worker.worker.name,
     profileImg.id = worker.worker.worker.id,
     profileImg.location = worker.worker.worker.location,
     profileImg.phoneNumber = worker.worker.worker.phoneNumber,
     profileImg.password = worker.worker.worker.password,
     profileImg.companyName = worker.worker.worker.companyName,
     profileImg.isWorkingSun = worker.worker.worker.isWorkingSun,
     profileImg.isWorkingMon = worker.worker.worker.isWorkingMon,
     profileImg.isWorkingTues = worker.worker.worker.isWorkingTues,
     profileImg.isWorkingWed = worker.worker.worker.isWorkingWed,
     profileImg.isWorkingThur = worker.worker.worker.isWorkingThur,
     profileImg.isWorkingFri = worker.worker.worker.isWorkingFri,
     profileImg.isWorkingSat = worker.worker.worker.isWorkingSat,

     profileImg.timeWorkingSun = worker.worker.worker.timeWorkingSun,
     profileImg.timeWorkingMon = worker.worker.worker.timeWorkingMon,
     profileImg.timeWorkingTues = worker.worker.worker.timeWorkingTues,
     profileImg.timeWorkingWed = worker.worker.worker.timeWorkingWed,
     profileImg.timeWorkingThur = worker.worker.worker.timeWorkingThur,
     profileImg.timeWorkingFri = worker.worker.worker.timeWorkingFri,
     profileImg.timeWorkingSat = worker.worker.worker.timeWorkingSat,
    
    await axios.post(`https://myjobss.herokuapp.com/workers/update/${worker.worker.worker._id}`, profileImg)
      .then((resp) => {
        //DevSettings.reload()
        navigation.navigate('Login');
        Alert.alert(
          "Profile picture has been Updated!",
          "please, Login again to see the changes! ",
        );
      })
      .catch((err) => alert("check your connection!"));
  };

    


  //the design of the  edit worker information page
  return (
  <>
    <Text style={{left: 70 , fontSize: 20 , top : 20}}>Change your information please!</Text>
    <SafeAreaView >
      
      <Text style={{left: 100, top : 20}} >Full Name</Text>
      <TextInput style={{backgroundColor: "white", top : 20, width: "50%", height: 30, borderRadius: 5, paddingHorizontal: 1, marginVertical: 10 , alignItems: 'center', left: 100}}
       placeholder={"Enter Your name"} value={user.name} onChangeText={(text) => { setUser({ ...user, name:text }) }}  name="name" />

      <Text style={{left: 100, top : 20}}>Email</Text>
      <TextInput style={{backgroundColor: "white", top : 20, width: "50%", height: 30, borderRadius: 5, paddingHorizontal: 1, marginVertical: 10 , alignItems: 'center', left: 100}}
       placeholder={"Enter Your Email"} value={user.email} onChangeText={(text) => { setUser({ ...user, email:text }) }} name="email" />

      <Text style={{left: 100, top : 20}}>Address</Text>
      <TextInput  style={{backgroundColor: "white", top : 20, width: "50%", height: 30, borderRadius: 5, paddingHorizontal: 1, marginVertical: 10 , alignItems: 'center', left: 100}}
       placeholder={"Enter Your Address"}  value={user.location} onChangeText={(text) => { setUser({ ...user, location:text }) }} name="location" />

      <Text style={{left: 100, top : 20}}>Company Name</Text>
      <TextInput style={{backgroundColor: "white", top : 20, width: "50%", height: 30, borderRadius: 5, paddingHorizontal: 1, marginVertical: 10 , alignItems: 'center', left: 100}} 
      placeholder={"Enter Your Company Name"}  value={user.companyName} onChangeText={(text) => { setUser({ ...user, companyName:text }) }}  name="companyName" />

      
      <Text style={{left: 100, top : 20}}>App Password</Text>
      <TextInput style={{backgroundColor: "white", top : 20, width: "50%", height: 30, borderRadius: 5, paddingHorizontal: 1, marginVertical: 10 , alignItems: 'center', left: 100}} 
      placeholder={"Enter Your Password"} value={user.password} onChangeText={(text) => { setUser({ ...user, password:text }) }} name="phoneNumber" /> 
      
    </SafeAreaView>
    <Container style={{flexDirection: "row" , marginLeft: 30,  justifyContent: 'center' ,paddingHorizontal: 4, marginVertical: 40,  borderRadius: 500,  alignItems: 'center', justifyContent: 'space-evenly'}}>
      <SubmitButton  style={{width: 180 , left: -10 }} primary  title="Change Profile picture" onPress={uploadPic} ></SubmitButton>
      <SubmitButton  style={{width: 180 , left: -8}} primary title="Update" onPress={onEditPress} type="FORTH" ></SubmitButton>
      </Container>
      
    </>
  );
};

export default EditProfile;