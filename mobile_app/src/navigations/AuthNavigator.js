import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { LOGIN } from '../constants/routeNames';
import Login from '../screens/Login';
import WorkerDetail from '../screens/WorkerDetail';


const AuthNavigator = () => {
    const AuthStack = createStackNavigator();

    return (   
      <AuthStack.Navigator screenOptions={{headerShown: false}}>
          <AuthStack.Screen name={LOGIN} component={Login} /> 
          <AuthStack.Screen name="WorkerDetail" component={WorkerDetail} /> 
      </AuthStack.Navigator>)
}

export default AuthNavigator;