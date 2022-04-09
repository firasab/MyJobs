import React from 'react';

import { useNavigation } from '@react-navigation/native';

  import SubmitButton from '../components/common/SubmitButton';



const Settings = ({route}) => {
    const navigation = useNavigation();
  

    const goToEdit = () => {
      alert("Your Profile has been Loged out! ");
        navigation.navigate('Login' ); 
      };

    return (
        <>  
             <SubmitButton  primary   title="LogOut" onPress={goToEdit}/ >
           </>
        
        );
        
};


export default Settings;