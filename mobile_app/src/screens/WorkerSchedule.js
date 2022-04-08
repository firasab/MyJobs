import React from 'react';
import { Text } from 'react-native';
import Container from '../components/common/Container';
import { NetworkContext } from '../context/NetworkContext';

const WorkerSchedule = ({route}) => {
    const worker = React.useContext(NetworkContext);
    
    
    return (
        <Container >
            <Text> Here is your Scheulde for this week </Text>
            <Text>Sunday:{worker.worker.worker.isWorkingSun}</Text>
            <Text>Monday:{worker.worker.worker.isWorkingMon}</Text>
            <Text>Tuesday:{worker.worker.worker.isWorkingTues}</Text>
            <Text>Wednesday:{worker.worker.worker.isWorkingWed}</Text>
            <Text>Thurday:{worker.worker.worker.isWorkingThur}</Text>
            <Text>Friday:{worker.worker.worker.isWorkingFri}</Text>
            <Text>Saturday:{worker.worker.worker.isWorkingSat}</Text>
            
        </Container>
        );
        
};

export default WorkerSchedule;