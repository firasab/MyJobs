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
    

  

 
  
  return (
  <>
    <Text style={{left: 70 , fontSize: 20, top: 50}}>Change phone Number request!</Text>
 </>
  );
};

export default ChangePhoneNumber;
