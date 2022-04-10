import {Text} from "react-native";
import React , {useState} from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import axios from "axios";
import { NetworkContext } from '../context/NetworkContext';
import { useNavigation } from '@react-navigation/native';
import SubmitButton from '../components/common/SubmitButton';
import CustomButton from '../components/common/CustomButton';
import { TextInput , ButtonContainer } from "react-native";
import * as ImagePicker from "expo-image-picker";
import Container from '../components/common/Container';

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
     isWorkingSun: worker.worker.worker.isWorkingSun,
     isWorkingMon: worker.worker.worker.isWorkingMon,
     isWorkingTues: worker.worker.worker.isWorkingTues,
     isWorkingWed: worker.worker.worker.isWorkingWed,
     isWorkingThur: worker.worker.worker.isWorkingThur,
     isWorkingFri: worker.worker.worker.isWorkingFri,
     isWorkingSat: worker.worker.worker.isWorkingSat,
     workerImg: worker.worker.worker.workerImg,
     
  });

    
  
  const onEditPress = () => { 
   axios.post(`https://myjobss.herokuapp.com/workers/update/${worker.worker.worker._id}`,user)
      .then(() => {  
        alert("Your Profile has been updated! ");
        navigation.navigate('Profile'); 
      })
      .catch((err) => alert("check your server"));
   
  };


  const uploadPic = async (data) => {
    //console.log(worker.worker.worker.workerImg)
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

     const profileImg = { workerImg: "" , email: "" , name: "" ,  id: "" , location: " " , phoneNumber: "" , 
     password: "" , companyName: "" ,isWorkingSun: "" , isWorkingMon: "" ,isWorkingTues: "" ,isWorkingThur: "" ,
     isWorkingSat: "" };
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
    
   

    await axios.post(`https://myjobss.herokuapp.com/workers/update/${worker.worker.worker._id}`, profileImg)

      .then((resp) => {
        alert("Profile picture has Updated ");
      })
      .catch((err) => alert("check your connection!"));
   
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
      
    </SafeAreaView>
    <Container style={{flexDirection: "row" ,marginTop: 30, marginLeft: 30,  justifyContent: 'center', height: 130}}>
      <SubmitButton  style={{width: 150 , left: -10}} secondary  title="Pick Profile picture" onPress={uploadPic} ></SubmitButton>
      <SubmitButton  style={{width: 150 , left: -5}} secondary title="Update" onPress={onEditPress} type="FORTH" ></SubmitButton>
      </Container>
    </>
  );
};

export default EditProfile;