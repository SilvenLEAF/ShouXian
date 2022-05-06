import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createStackNavigator } from '@react-navigation/stack';

import DrawerContent from '../shared/DrawerContent';
import AboutStack from './stacks/AboutStack';
import RootTab from './RootTab';
import ContactStack from './stacks/ContactStack';
import AsyncStorageStack from './stacks/AsyncStorageStack';
import SettingStack from './stacks/SettingStack';


const Drawer = createDrawerNavigator();
// const Stack = createStackNavigator();
// const Tab = createBottomTabNavigator();

function RootDrawer() {
  return (
    <NavigationContainer>

      <Drawer.Navigator
        drawerContent={(props) => <DrawerContent {...props} />}
        screenOptions={{
          title: 'Root Drawer',
          headerShown: false,
        }}
      >
        <Drawer.Screen name="HomeTab" options={{ title: "Tab Navigation" }} component={RootTab} />
        <Drawer.Screen name="SettingStack" component={SettingStack} />
        <Drawer.Screen name="StorageStack" component={AsyncStorageStack} />
        <Drawer.Screen name="ContactStack" component={ContactStack} />
        <Drawer.Screen name="AboutStack" component={AboutStack} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default RootDrawer