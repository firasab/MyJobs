import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { SETTINGS, WORKER_DETAIL, WORKER_HOUR_REPORT, WORKER_IN_OUT, WORKER_SCHEDULE, EDIT_PROFILE , CHANGE_PHONE_NUMBER } from '../constants/routeNames';
import WorkerDetail from '../screens/WorkerDetail';
import WorkerHoursReport from '../screens/WorkerHoursReport';
import WorkerSchedule from '../screens/WorkerSchedule';
import WorkerStartOrOutOfWork from '../screens/WorkerStartOrOutOfWork';
import Settings from '../screens/Settings';
import EditProfile from '../screens/EditProfile';
import ChangePhoneNumber from '../screens/ChangePhoneNumber';


const HomeNavigator = () => {
    const HomeStack = createStackNavigator();

    return (   
      <HomeStack.Navigator screenOptions={{headerShown: false}} initialRouteName={WORKER_DETAIL} >
          <HomeStack.Screen name={WORKER_DETAIL} component={WorkerDetail} /> 
          <HomeStack.Screen name={WORKER_HOUR_REPORT} component={WorkerHoursReport} /> 
          <HomeStack.Screen name={WORKER_SCHEDULE} component={WorkerSchedule} /> 
          <HomeStack.Screen name={WORKER_IN_OUT} component={WorkerStartOrOutOfWork} /> 
          <HomeStack.Screen name={SETTINGS} component={Settings} /> 
          <HomeStack.Screen name={EDIT_PROFILE} component={EditProfile} /> 
          <HomeStack.Screen name={CHANGE_PHONE_NUMBER} component={ChangePhoneNumber} /> 
      </HomeStack.Navigator>
      
      )
}

export default HomeNavigator;