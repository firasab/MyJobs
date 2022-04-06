import React, {useContext} from 'react';
import DrawerNavigator from './DrawerNavigator';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './AuthNavigator';
import { GlobalContext } from '../context/Provider';




const AppNavContainer = () => {
  

    // const {
    //   authState :{isLoggedIn},
    //  } = useContext(GlobalContext);

   

   // console.log('isLoggedIn :>>', isLoggedIn);

    return (   
      <NavigationContainer>
        <AuthNavigator/>  
      </NavigationContainer>
      )
      
     
}

export default AppNavContainer;