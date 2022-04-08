

import React from 'react';
import { Text } from 'react-native';
import Container from '../components/common/Container';
import { NetworkContext } from '../context/NetworkContext';

const WorkerHoursReport = ({route}) => {
    const worker = React.useContext(NetworkContext);
    
    
    return (
        <Container >
            <Text> Hi from WorkerDetail </Text>
            <Text>name:{worker.worker.worker.isWorkingSun}</Text>
        </Container>
        );
        
};

export default WorkerHoursReport;