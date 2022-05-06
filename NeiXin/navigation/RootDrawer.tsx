import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import AboutScreen from '../screens/AboutScreen';
import ActionScreen from '../screens/ActionScreen';
import HomeScreen from '../screens/HomeScreen';
import DrawerContent from '../shared/DrawerContent';
import HomeStack from './stacks/HomeStack';
import AboutStack from './stacks/AboutStack';
import RootTab from './RootTab';



const Drawer = createDrawerNavigator();
// const Stack = createStackNavigator();
// const Tab = createBottomTabNavigator();

function RootDrawer() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <DrawerContent {...props} />}
      screenOptions={{
        title: 'Root Drawer',
        headerShown: false,
      }}
    >
      <Drawer.Screen name="HomeTab" options={{ title: "Tab Navigation" }} component={RootTab} />
      <Drawer.Screen name="SettingStack" component={HomeStack}/>
      <Drawer.Screen name="StorageStack" component={AboutStack}/>
      <Drawer.Screen name="ContactStack" component={HomeStack}/>
      <Drawer.Screen name="AboutStack" component={AboutStack}/>
    </Drawer.Navigator>
  )
}

export default RootDrawer