import { View, Text,SafeAreaView,TextInput } from 'react-native'
import React from 'react'
import {useState} from 'react'
import axios from 'axios'
import SubmitButton from '../components/common/CustomButton'
import Container from '../components/common/Container';
import { NetworkContext } from '../context/NetworkContext';

const code = ({route}) => {
    const worker = React.useContext(NetworkContext);

    const [vcode,setVcode] = useState("");
    const user = route.params;
    const onEditPress = async () => { 
        await axios.get(`https://myjobss.herokuapp.com/verifyN?phoneNumber=${user.worker.phoneNumber}&code=${vcode}`)
           .then((resp) => {  
               console.log(resp.data.valid);
               if(resp.data.valid=true){
              change();

               }
        else{
            alert("Verifcation code is not correct");
        }
           })
           .catch((err) => alert("Verifcation code is not correct"));
    };

    const change = async ()=>{
       await axios.post(`https://myjobss.herokuapp.com/workers/update/${worker.worker.worker._id}`,user.worker)
        .catch((err) => alert("check your server"));
        alert("Your Phone Number has been changed");
        
    }
   
   //the design of the  edit worker information page
   return (
    <>
      <Text style={{left: 100 , fontSize: 20 , top : 20}}>Enter Verifaction Code</Text>
      <SafeAreaView >
        
      
        <TextInput style={{backgroundColor: "white", top : 20, width: "50%", height: 30, borderRadius: 5, paddingHorizontal: 1, marginVertical: 10 , alignItems: 'center', left: 100}} 
        placeholder={"enter the 6-digits Code "}   onChangeText={(text) => { setVcode(text) }}  name="phoneNumber" />
  
      </SafeAreaView>
  
      <Container style={{flexDirection: "row" , marginLeft: 30,  justifyContent: 'center' ,paddingHorizontal: 4, marginVertical: -20,  borderRadius: 500,  alignItems: 'center', justifyContent: 'space-evenly'}}>
        <SubmitButton  style={{width: 180 , left: -8}} primary title="Verify" onPress={onEditPress} type="FORTH" ></SubmitButton>
        </Container>
        
      </>
    );
}

export default code