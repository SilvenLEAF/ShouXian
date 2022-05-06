import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import DetailScreen from '../../screens/DetailScreen';
import ContactScreen from '../../screens/contact/ContactScreen';
import HamburgerHeader from '../../shared/HamburgerHeader';
import rootVariables from '../../root/rootVariables';


const Stack = createStackNavigator();

function ContactStack() {
  return (
    <Stack.Navigator screenOptions={{
      title: "ContactStack",
      headerMode: "screen",
      cardStyle: {
        backgroundColor: rootVariables.bodyBG,
      }
    }}>
      <Stack.Screen name="Contact" options={{
        header: ({ navigation }) => <HamburgerHeader navigation={navigation} title="Contact Page" />
      }} component={ContactScreen} />
      <Stack.Screen name="DetailScreen" options={{ title: "Contact Detail Page" }} component={DetailScreen} />
    </Stack.Navigator>
  )
}

export default ContactStack
