import React from 'react'
import { Provider } from 'react-native-paper'
import { NavigationContainer,useNavigation} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { theme } from './src/core/theme'
import { SimpleLineIcons } from '@expo/vector-icons'; 

import {
  LoginScreen,
  MyJob,
} from './src/screens'
function GoToButton({ screenName }) {
  const navigation = useNavigation();

  return (
<SimpleLineIcons name="logout" size={26} color="white"       onPress={() => navigation.navigate(screenName)}/>
  
  );
}

const Stack = createStackNavigator()

const App = () => {
  return (
    <Provider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="LoginScreen"
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
        >
         
          <Stack.Screen name="LoginScreen" component={LoginScreen}  />
          <Stack.Screen name="MyJob" component={MyJob} options={{headerRight: 
          ({navigation,route}) => (
            <GoToButton screenName="LoginScreen" />
    ),}} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

export default App
