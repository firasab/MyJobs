import React from 'react';
import { Text} from 'react-native';
import Container from '../components/common/Container';
import SubmitButton from '../components/common/SubmitButton';
import { NetworkContext } from '../context/NetworkContext';
import { useNavigation } from '@react-navigation/native';


const EditProfile = () => {
    const worker = React.useContext(NetworkContext);
    const navigation = useNavigation();

    const backToProfile = () => {
        
        navigation.navigate('Profile', { worker : worker }); 
      };
    return (<>
        <Container>
            <Text> Hi from EditProfile </Text>
        </Container>

       
        <SubmitButton  primary   title="Submit" onPress={backToProfile}/ >
        </>
        );
};



export default EditProfile;