import React, {useState} from 'react';
import { Text } from 'react-native';
import Container from '../components/common/Container';
import { NetworkContext } from '../context/NetworkContext';
import { useNavigation } from '@react-navigation/native';
import {
    StyleSheet,
    Image,
  } from "react-native";
  import SubmitButton from '../components/common/SubmitButton';
  import {DevSettings} from 'react-native';



const WorkerDetail = ({route}) => {
    const worker = React.useContext(NetworkContext);
    const navigation = useNavigation();


  

      const goToEdit = () => {
        navigation.navigate('Edit' , { worker : worker }); 
        };

      



      const goToLogOut = () => {
        alert("Your Profile has been Loged out! ");

        DevSettings.reload()
         
      }

   
      let profilePic = worker.worker.worker.workerImg;
    return (
        <>
        <Container >
             <Text style={styles.title1}> {worker.worker.worker.name}'s Profile</Text>
            <Image
            height={70}
            width={70}
            source={{ uri: profilePic }}
            style={styles.profileImage}
            />
            <Text style={styles.title2}> Name: <Text style={styles.subTitle}> {worker.worker.worker.name}</Text> </Text>
            <Text style={styles.title2}> ID: <Text style={styles.subTitle}> {worker.worker.worker.id}</Text> </Text>
            <Text style={styles.title2}> Email: <Text style={styles.subTitle}> {worker.worker.worker.email}</Text> </Text>     
            <Text style={styles.title2}> Working at: <Text style={styles.subTitle}> {worker.worker.worker.companyName}</Text> </Text>
            <Text style={styles.title2}> Address: <Text style={styles.subTitle}> {worker.worker.worker.location}</Text> </Text>
            <Text style={styles.title2}> Phone Number: <Text style={styles.subTitle}> {worker.worker.worker.phoneNumber}</Text> </Text>
            
        </Container>  
           

             <Container style={{flexDirection: "row" , marginLeft: 30,  justifyContent: 'center', paddingHorizontal: 4, marginVertical: -50,  borderRadius: 500,  alignItems: 'center', justifyContent: 'space-evenly'}}>
             <SubmitButton  style={{width: 100 , left: -5}} danger title="LogOut" onPress={goToLogOut} type="FORTH" ></SubmitButton>
             <SubmitButton  primary style={{width: 100 , left: -10}}   title="Edit Profile" onPress={goToEdit} />
            
             </Container>
               
           </>
        
        );
        
};

const styles = StyleSheet.create({
    title1: {
      fontSize: 30,
      textAlign: 'center',
      paddingTop: 1,
      fontWeight: '500',
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
      },
      profileImage: {
        height: 200,
        width: 200,
        alignSelf: 'center',
        marginTop: 10,
        borderRadius: 80,
      },
  
    
  });

export default WorkerDetail;