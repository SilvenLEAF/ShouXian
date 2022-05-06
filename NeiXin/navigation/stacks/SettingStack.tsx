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
      title: "Settings Stack",
      headerMode: "screen",
      cardStyle: {
        backgroundColor: rootVariables.bodyBG,
      }
    }}>
      <Stack.Screen name="SettingSreen" options={{
        title: "Settings Stack",
        header: ({ navigation }) => <HamburgerHeader navigation={navigation} title="Settings Page" />
      }} component={SettingScreen} />
      <Stack.Screen name="DetailScreen" component={DetailScreen} />
    </Stack.Navigator>
  )
}

export default SettingStack
