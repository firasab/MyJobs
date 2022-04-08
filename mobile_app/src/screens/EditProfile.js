import React from 'react';
import { Text, View } from 'react-native';
import Container from '../components/common/Container';
import CustomButton from '../components/common/CustomButton';
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

        <CustomButton  secondary   title="Back" onPress={backToProfile}/ >
        </>
        );
};

export default EditProfile;