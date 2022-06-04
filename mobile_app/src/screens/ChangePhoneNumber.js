import {Text} from "react-native";
import React , {useState} from "react";
import axios from "axios";
import { NetworkContext } from '../context/NetworkContext';
import {StyleSheet} from "react-native";
import { TextInput ,Alert  } from "react-native";
import Container from '../components/common/Container';
import SubmitButton from '../components/common/CustomButton';

const ChangePhoneNumber = ({ route }) => {
    const worker = React.useContext(NetworkContext);
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

   const onEditPress = () => { 
    axios.post(`https://myjobss.herokuapp.com/workers/update/${worker.worker.worker._id}`,user)
       .then(() => {  
        navigation.navigate('Login');
         Alert.alert(
           "Your Profile has been updated!",
           "please, Login to see the changes!",
         );
       })
       .catch((err) => alert("check your server"));
   };
 
     
   

    return (
        <>
        <Container >

            <Text style={styles.title2}>Dear {worker.worker.worker.name}:</Text> 
            <Text style={styles.title2}>Your current Phone Number: <Text style={styles.subTitle}> {worker.worker.worker.phoneNumber}</Text> </Text>
            <Text style={styles.title3}>New Phone Number:</Text>
            <TextInput  style={{backgroundColor: "white", top : 20, width: "50%", height: 30, borderRadius: 5, paddingHorizontal: 1, marginVertical: 10 , alignItems: 'center'}}
            placeholder={"New Phone Number"} value={user.phoneNumber} onChangeText={(text) => { setUser({ ...user, phoneNumber:text }) }}  name="name"/>

       

        </Container>  
        <SubmitButton  style={{width: 180 , left: 100}} primary title="Update" onPress={onEditPress} type="FORTH" ></SubmitButton>
           
               
       </>
        
        );
        
};





const styles = StyleSheet.create({
    title3: {
      fontSize: 20,
      textAlign: 'left',
      paddingTop: 1,
      fontWeight: '500',
      marginTop: 50,
      
    },
    subTitle: {
        fontSize: 17,
        textAlign: 'center',
        paddingVertical: 20,
        fontWeight: '500',
        color: "#4361ee",
      },
      title2: {
        fontSize: 20,
        textAlign: 'left',
        paddingTop: 1,
        fontWeight: '500',
        marginTop: 30,
      
      },
 
  
    
  });
export default ChangePhoneNumber;
