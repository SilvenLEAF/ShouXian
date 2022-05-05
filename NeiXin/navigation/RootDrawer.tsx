import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { View } from 'react-native';
import AboutScreen from '../screens/AboutScreen';
import HomeScreen from '../screens/HomeScreen';


// const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
function RootDrawer() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home Page" component={HomeScreen}/>
      <Stack.Screen name="About Page" component={AboutScreen}/>
    </Stack.Navigator>
  )
}

export default RootDrawer