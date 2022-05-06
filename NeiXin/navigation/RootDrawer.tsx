import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import AboutScreen from '../screens/AboutScreen';
import ActionScreen from '../screens/ActionScreen';
import HomeScreen from '../screens/HomeScreen';



const Drawer = createDrawerNavigator();
// const Stack = createStackNavigator();
// const Tab = createBottomTabNavigator();

function RootDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home Page" component={HomeScreen}/>
      <Drawer.Screen name="Action Page" component={ActionScreen}/>
      <Drawer.Screen name="About Page" component={AboutScreen}/>
    </Drawer.Navigator>
  )
}

export default RootDrawer