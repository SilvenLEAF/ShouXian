import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import AboutScreen from '../../screens/about/AboutScreen';
import HamburgerHeader from '../../shared/HamburgerHeader';
import DetailScreen from '../../screens/DetailScreen';

import rootVariables from '../../root/rootVariables';



const Stack = createStackNavigator();

function AboutStack() {
  return (
    <Stack.Navigator screenOptions={{
      title: "AboutStack",
      headerMode: "screen",
      cardStyle: {
        backgroundColor: rootVariables.bodyBG,
      }
    }}>
      <Stack.Screen name="AboutScreen" options={{
        header: ({ navigation }) => <HamburgerHeader navigation={navigation} title="About Page" />
      }} component={AboutScreen} />
      <Stack.Screen name="DetailScreen" options={{ title: "About Detail Page" }} component={DetailScreen} />
    </Stack.Navigator>
  )
}

export default AboutStack
