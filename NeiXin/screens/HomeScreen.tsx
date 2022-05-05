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
  const goTo = () => {
    navigation.navigate('About Page')
  }
  return (
    <View style={{ ...rootStyles.container, ...rootStyles.centered }}>
      <TouchableOpacity onPress={goTo}>
        <Text>欢迎光临</Text>
      </TouchableOpacity>
    </View>
  )
};

export default HomeScreen;