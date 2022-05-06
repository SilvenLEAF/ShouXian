import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import rootVariables from '../../root/rootVariables';
import HamburgerHeader from '../../shared/HamburgerHeader';
import ProfileScreen from '../../screens/profile/ProfileScreen';
import UpdateProfile from '../../screens/profile/UpdateProfile';


const Stack = createStackNavigator();



function ProfileStack() {
  return (
    <Stack.Navigator screenOptions={{
      title: "Profile Stack",
      headerMode: "screen",
      cardStyle: {
        backgroundColor: rootVariables.bodyBG,
      }
    }}>
      <Stack.Screen name="ProfileScreen" options={{
        title: "Profile Page",
        header: ({ navigation }) => <HamburgerHeader navigation={navigation} title="Profile Page" />
      }} component={ProfileScreen} />
      <Stack.Screen options={{ title: 'Update Profile' }} name="UpdateProfileScreen" component={UpdateProfile} />
    </Stack.Navigator>
  )
}

export default ProfileStack
