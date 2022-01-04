import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialIcons,MaterialCommunityIcons } from '@expo/vector-icons';
import {Ionicons, AntDesign,FontAwesome } from '@expo/vector-icons'; 
import { NavigationContainer } from '@react-navigation/native';
import Profile from './Profile'
import About from './About'
import Reports from './Reports'
import Tasks from './Tasks'
const Tab = createMaterialBottomTabNavigator();
function MyTabs({navigation,toke}) {

  return (
		<Tab.Navigator
    
		initialRouteName="About"
        shifting={true}
        labeled={true}
        sceneAnimationEnabled={false}
        activeColor="white"
        inactiveColor="white"
        screenOptions={{
          headerTitleStyle: {
            fontWeight: 'bold',
            color: 'white',
          },
          headerLeft:null,
          headerStyle:{
            backgroundColor:'black',
          }
         // headerShown: false,
        }}
        barStyle={{ backgroundColor: 'black' }}
    >
	<Tab.Screen
	name="About"
  children={()=><About/>}

	options={{
	  tabBarLabel: 'Home',
	  tabBarIcon: ({ color }) => (
<AntDesign name="home" size={26} color="white" />    
	  ),
	}}
  />
			<Tab.Screen
        name="Profile"
        children={()=><Profile/>}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
			<MaterialIcons name="person-pin" size={28} color="white" />
          ),
        }}
      />
	  <Tab.Screen
        name="Reports"
        children={()=><Reports/>}

        options={{
          tabBarLabel: 'Reports',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bell" color={color} size={26} />
          ),
        }}
      />
	  <Tab.Screen
        name="Tasks"
        children={()=><Tasks/>}

        options={{
          tabBarLabel: 'Tasks',
          tabBarIcon: ({ color }) => (
            <FontAwesome name="calendar" size={24} color="white" />
          ),
        }}
      />
		</Tab.Navigator>
	);
}

const MyJob = ({route, navigation }) => {
 
  return (
   <NavigationContainer independent={true} >
      
    <MyTabs/>
  </NavigationContainer>
  )
}

export default MyJob


