import {Text} from "react-native";
import React , {useState} from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import axios from "axios";
import { NetworkContext } from '../context/NetworkContext';
import { useNavigation } from '@react-navigation/native';
import SubmitButton from '../components/common/SubmitButton';
import { TextInput } from "react-native";
import Container from '../components/common/Container';

const ChangePhoneNumber = ({ route }) => {
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

  const onVerifyPress = () => { 
      alert("We will call you now to make sure its your phone Number!")
   };


 
  
  return (
  <>
    <Text style={{left: 70 , fontSize: 20, top: 50}}>Change phone Number request!</Text>

    <SafeAreaView >
      <Text style={{left: 100 , top: 50}} >Current Phone Number</Text>
      <TextInput style={{backgroundColor: "white",top: 50 , width: "50%", height: 30, borderRadius: 5, paddingHorizontal: 1, marginVertical: 10 , alignItems: 'center', left: 100}}
       value={user.phoneNumber} name="name" /> 
    </SafeAreaView>

    <SafeAreaView >
      <Text style={{left: 100 , top: 50}} >New Phone Number</Text>
      <TextInput style={{backgroundColor: "white",top: 50 , width: "50%", height: 30, borderRadius: 5, paddingHorizontal: 1, marginVertical: 10 , alignItems: 'center', left: 100}}
       placeholder={"Enter Your new phone number"}  onChangeText={(text) => { setUser({ ...user, phoneNumber:text }) }}  name="name" /> 
        <SubmitButton  style={{width: 150 , left: 130}} secondary title="Verify phonNumber" onPress={onVerifyPress} type="FORTH" ></SubmitButton>
    </SafeAreaView>

      <Container style={{flexDirection: "row" ,marginTop: 80, marginLeft: 20,  justifyContent: 'center', height: 120}}>
      <SubmitButton  style={{width: 150 , left: -5}} secondary title="Update" onPress={onEditPress} type="FORTH" ></SubmitButton>
      </Container>

 </>
  );
};

export default ChangePhoneNumber;