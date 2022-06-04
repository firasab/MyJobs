import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { LOGIN } from '../constants/routeNames';
import Login from '../screens/Login';
import { HOME_NAVIGATOR } from '../constants/routeNames';
import DrawerNavigator from './DrawerNavigator';





const AuthNavigator = () => {
    const AuthStack = createStackNavigator();
    //if the worker not loged in we have login page if he is loged in we have DrawerNav
    return (   
      <AuthStack.Navigator screenOptions={{headerShown: false}}>
          <AuthStack.Screen name={LOGIN} component={Login} />
          <AuthStack.Screen  name={HOME_NAVIGATOR} component={DrawerNavigator}  /> 
         
           
      </AuthStack.Navigator>)
}

export default AuthNavigator;