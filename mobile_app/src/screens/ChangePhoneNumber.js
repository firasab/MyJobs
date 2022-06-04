import {Text} from "react-native";
import React from "react";
import axios from "axios";
import { NetworkContext } from '../context/NetworkContext';
import {StyleSheet} from "react-native";
import { TextInput ,Alert  } from "react-native";
import Container from '../components/common/Container';


const ChangePhoneNumber = ({ route }) => {
    const worker = React.useContext(NetworkContext);

    return (
        <>
        <Container >

            <Text style={styles.title2}>Dear {worker.worker.worker.name}:</Text> 
            <Text style={styles.title2}>Your current Phone Number: <Text style={styles.subTitle}> {worker.worker.worker.phoneNumber}</Text> </Text>
            <Text style={styles.title3}>New Phone Number:</Text>
            <TextInput  style={{backgroundColor: "white", top : 20, width: "50%", height: 30, borderRadius: 5, paddingHorizontal: 1, marginVertical: 10 , alignItems: 'center'}}
            placeholder={"New Phone Number"} name="New Phone Number" />

        </Container>  
           
               
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
