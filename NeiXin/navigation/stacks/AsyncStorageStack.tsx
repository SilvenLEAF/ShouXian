import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import rootVariables from '../../root/rootVariables';

import AsyncStorageScreen from '../../screens/storage/AsyncStorageScreen';
import HamburgerHeader from '../../shared/HamburgerHeader';
import DetailScreen from '../../screens/DetailScreen';




const Stack = createStackNavigator();

function AsyncStorageStack() {
  return (
    <Stack.Navigator screenOptions={{
      title: "StorageStack",
      headerMode: "screen",
      cardStyle: {
        backgroundColor: rootVariables.bodyBG,
      }
    }}>
      <Stack.Screen name="AsyncStorageScreen" options={{
        header: ({ navigation }) => <HamburgerHeader navigation={navigation} title="Storage Page" />
      }} component={AsyncStorageScreen} />
      <Stack.Screen name="DetailScreen" options={{ title: "Storage Detail Page" }} component={DetailScreen} />
    </Stack.Navigator>
  )
}

export default AsyncStorageStack
