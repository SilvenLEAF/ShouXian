import { NavigationProp } from '@react-navigation/native';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import React from 'react';
import { Text, View } from 'react-native';
import rootStyles from '../root/rootStyles';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface IProp {
  navigation: DrawerNavigationProp<any>,
}
function HomeScreen({ navigation }: IProp) {
  const openDrawer = () => {
    navigation.openDrawer()
  }
  return (
    <View style={{ ...rootStyles.container, ...rootStyles.centered }}>
      <TouchableOpacity style={{backgroundColor: 'blue'}} onPress={openDrawer}>
        <Text>欢迎光临</Text>
      </TouchableOpacity>
    </View>
  )
};

export default HomeScreen;