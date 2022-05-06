import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import rootVariables from '../../root/rootVariables';
import HamburgerHeader from '../../shared/HamburgerHeader';

import HomeScreen from '../../screens/home/HomeScreen';
import DetailScreen from '../../screens/DetailScreen';



const Stack = createStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{
      title: "HomeStack",
      headerMode: "screen",
      cardStyle: {
        backgroundColor: rootVariables.bodyBG,
      }
    }}>
      <Stack.Screen name="HomeScreen" options={{
        header: ({ navigation }) => <HamburgerHeader navigation={navigation} title="Home Page" />
      }} component={HomeScreen} />
      <Stack.Screen name="DetailScreen" options={{title: "Home Detail Screen"}} component={DetailScreen} />
    </Stack.Navigator>
  )
}

export default HomeStack
