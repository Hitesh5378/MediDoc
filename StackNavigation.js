// In App.js in a new project

import * as React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from './src/screens/Splash';
import Home from './src/screens/Home';
import BookAppointment from './src/screens/BookAppointment';
import Success from './src/screens/Success';
import Pending from './src/screens/Pending';
import CallAmb from './src/screens/CallAmb';
import Completed from './src/screens/Completed';
import Payment from "./src/screens/Payment";


const Stack = createNativeStackNavigator();

function StackNavigation() {
  return (

    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Slash" component={Splash} options={{headerShown:false}}/>
      <Stack.Screen name="Home" component={Home} options={{headerShown:false}}/>
      <Stack.Screen name="BookAppointment" component={BookAppointment} options={{headerShown:false}}/>
      <Stack.Screen name="Success" component={Success} options={{headerShown:false}}/>
      <Stack.Screen name="Pending" component={Pending} options={{headerShown:false}}/>
      <Stack.Screen name="CallAmb" component={CallAmb} options={{headerShown:false}}/>
      <Stack.Screen name="Completed" component={Completed} options={{headerShown:false}}/>
      <Stack.Screen name="Payment" component={Payment} />
       
      </Stack.Navigator>
    </NavigationContainer>
   
  );
}

export default StackNavigation;
