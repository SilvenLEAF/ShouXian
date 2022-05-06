import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import AboutScreen from '../screens/about/AboutScreen';
import ActionScreen from '../screens/action/ActionScreen';
import HomeScreen from '../screens/home/HomeScreen';
import DrawerContent from '../shared/DrawerContent';
import HomeStack from './stacks/HomeStack';
import AboutStack from './stacks/AboutStack';
import RootTab from './RootTab';
import ContactStack from './stacks/ContactStack';
import AsyncStorageStack from './stacks/AsyncStorageStack';



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
      <Drawer.Screen name="StorageStack" component={AsyncStorageStack}/>
      <Drawer.Screen name="ContactStack" component={ContactStack}/>
      <Drawer.Screen name="AboutStack" component={AboutStack}/>
    </Drawer.Navigator>
  )
}

export default RootDrawer