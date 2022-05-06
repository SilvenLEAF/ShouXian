import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import rootVariables from '../../root/rootVariables';
import HamburgerHeader from '../../shared/HamburgerHeader';

import SettingScreen from '../../screens/setting/SettingScreen';
import DetailScreen from '../../screens/DetailScreen';



const Stack = createStackNavigator();

function SettingStack() {
  return (
    <Stack.Navigator screenOptions={{
      title: "SettingStack",
      headerMode: "screen",
      cardStyle: {
        backgroundColor: rootVariables.bodyBG,
      }
    }}>
      <Stack.Screen name="SettingScreen" options={{
        header: ({ navigation }) => <HamburgerHeader navigation={navigation} title="Settings Page" />
      }} component={SettingScreen} />
      <Stack.Screen name="DetailScreen" options={{title: "Settings Detail Screen"}} component={DetailScreen} />
    </Stack.Navigator>
  )
}

export default SettingStack
