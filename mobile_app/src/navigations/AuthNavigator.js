import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { LOGIN } from '../constants/routeNames';
import Login from '../screens/Login';



const AuthNavigator = () => {
    const AuthStack = createStackNavigator();

    return (   
      <AuthStack.Navigator screenOptions={{headerShown: false}}>
          <AuthStack.Screen name={LOGIN} component={Login} /> 
      </AuthStack.Navigator>)
}

export default AuthNavigator;