import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import { View } from 'react-native';
import AboutScreen from '../screens/AboutScreen';
import HomeScreen from '../screens/HomeScreen';


const Drawer = createDrawerNavigator();
function RootDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home Page" component={HomeScreen}/>
      <Drawer.Screen name="About Page" component={AboutScreen}/>
    </Drawer.Navigator>
  )
}

export default RootDrawer