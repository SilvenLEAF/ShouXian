import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { View } from 'react-native';
import AboutScreen from '../screens/AboutScreen';
import HomeScreen from '../screens/HomeScreen';


// const Drawer = createDrawerNavigator();
// const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
function RootDrawer() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home Page" component={HomeScreen}/>
      <Tab.Screen name="About Page" component={AboutScreen}/>
    </Tab.Navigator>
  )
}

export default RootDrawer