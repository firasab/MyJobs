import { Text,SafeAreaView,TextInput } from 'react-native'
import React from 'react'
import {useState} from 'react'
import axios from 'axios'
import SubmitButton from '../components/common/CustomButton'
import Container from '../components/common/Container';
import { NetworkContext } from '../context/NetworkContext';
import {useContext} from 'react';
import loginUser from '../context/actions/auth/loginUser';
import {GlobalContext} from '../context/Provider';
import loginFail from '../context/actions/auth/loginFail';


const Code = ({route}) => {
    const worker = React.useContext(NetworkContext);
    const [form, setForm] = useState({});
    const [vcode,setVcode] = useState("");
    const user = route.params;


    const {
      authDispatch,
     authState: {error, loading},
    } = useContext(GlobalContext);

//a method to verify the one time code 
    const onEditPress = async () => { 
      loginUser(form)(authDispatch);
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
           .catch((err) => alert("Verifcation code is not correct")), loginFail(form)(authDispatch)
    };

    const change = async ()=>{
       await axios.post(`https://myjobss.herokuapp.com/workers/update/${worker.worker.worker._id}`,user.worker)
       .then (() =>{
        alert("Your Phone Number has been changed");
       })
        .catch((err) => alert("check your server"));
          
        
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
        <SubmitButton  form={form}  error={error}  loading={loading} style={{width: 180 , left: -8}} primary title="Verify" onPress={onEditPress} type="FORTH" ></SubmitButton>
        </Container>
        
      </>
    );
}

export default Code