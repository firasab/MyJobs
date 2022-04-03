import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import { HOME_NAVIGATOR } from '../constants/routeNames';
import { WORKER_SCHEDULE } from '../constants/routeNames';
import { WORKER_IN_OUT } from '../constants/routeNames';
import { WORKER_HOUR_REPORT } from '../constants/routeNames';
import { SETTINGS } from '../constants/routeNames';

import HomeNavigator from './HomeNavigator';
import WorkerHoursReport from '../screens/WorkerHoursReport';
import WorkerSchedule from '../screens/WorkerSchedule';
import WorkerStartOrOutOfWork from '../screens/WorkerStartOrOutOfWork';
import Settings from '../screens/Settings';




const DrawerNavigator = () => {
    const Drawer = createDrawerNavigator();

    return (   
      <Drawer.Navigator screenOptions={{headerShown: true}}>
          <Drawer.Screen  name={HOME_NAVIGATOR} component={HomeNavigator}  /> 
          <Drawer.Screen name={WORKER_SCHEDULE} component={WorkerSchedule} />
          <Drawer.Screen name={WORKER_HOUR_REPORT} component={WorkerHoursReport} />
          <Drawer.Screen name={WORKER_IN_OUT} component={WorkerStartOrOutOfWork} />
          <Drawer.Screen name={SETTINGS} component={Settings} />
      </Drawer.Navigator>
      );
};

export default DrawerNavigator;