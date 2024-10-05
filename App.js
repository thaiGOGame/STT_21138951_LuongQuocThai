import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import firstscreen from './screens/FirstScreen';
import secondscreen from './screens/SecondScreen';
import thirdscreen from './screens/ThirdScreen';



const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer independent={true} >
      {/*Screen option showheader false */}
      <Stack.Navigator initialRouteName="First Screen" screenOptions={{headerShown:false}}>
        <Stack.Screen name="First Screen" component={firstscreen} />
        <Stack.Screen name="Second Screen" component={secondscreen} />
        <Stack.Screen name="Third Screen" component={thirdscreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}