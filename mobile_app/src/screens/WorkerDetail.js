import React from 'react';
import { Text } from 'react-native';
import Container from '../components/common/Container';
import { NetworkContext } from '../context/NetworkContext';
import {
    StyleSheet,
    SafeAreaView,
    Image,
    TouchableOpacity,
  } from "react-native";

const WorkerDetail = ({route}) => {
    const worker = React.useContext(NetworkContext);
    console.log(worker.worker.worker.id)

   
    
    return (
        <Container >
            <Text> Hi from WorkerDetail </Text>
            <Text>name:{worker.worker.worker.name}</Text>
            
        </Container>
        );
        
};

export default WorkerDetail;