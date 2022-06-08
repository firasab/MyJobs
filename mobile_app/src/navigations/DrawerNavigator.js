import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import { HOME_NAVIGATOR } from '../constants/routeNames';
import { WORKER_SCHEDULE } from '../constants/routeNames';
import { WORKER_IN_OUT } from '../constants/routeNames';
import { WORKER_HOUR_REPORT } from '../constants/routeNames';
import {  CHANGE_PHONE_NUMBER } from '../constants/routeNames';
import HomeNavigator from './HomeNavigator';
import WorkerHoursReport from '../screens/WorkerHoursReport';
import WorkerSchedule from '../screens/WorkerSchedule';
import WorkerStartOrOutOfWork from '../screens/WorkerStartOrOutOfWork';
import ChangePhoneNumber from '../screens/ChangePhoneNumber';
import { NetworkContext } from "../context/NetworkContext";








const DrawerNavigator = ({route}) => {
    const Drawer = createDrawerNavigator();

    return (   
        <NetworkContext.Provider value={route.params}>
        <Drawer.Navigator  screenOptions={{headerShown: true}}>
          <Drawer.Screen  name={HOME_NAVIGATOR} component={HomeNavigator}  /> 
          <Drawer.Screen name={WORKER_SCHEDULE} component={WorkerSchedule} />
          <Drawer.Screen name={WORKER_IN_OUT} component={WorkerStartOrOutOfWork} />
          <Drawer.Screen name={WORKER_HOUR_REPORT} component={WorkerHoursReport} />
          <Drawer.Screen name={CHANGE_PHONE_NUMBER} component={ChangePhoneNumber} />
         
         
        </Drawer.Navigator>
        </NetworkContext.Provider>
     
      );
};

export default DrawerNavigator;