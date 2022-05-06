import React from 'react';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { Text, View, TouchableOpacity } from 'react-native';

import rootStyles from '../../root/rootStyles';
// __________redux stuff
import { connect } from 'react-redux';
import { IRootState } from '../../store/store';
import { IAppSettingState } from '../../store/reducers/appSettingsReducer';
import { Button } from 'react-native-paper';



interface IProp extends IAppSettingState {
  navigation: DrawerNavigationProp<any>,
}

function HomeScreen(props: IProp) {
  const { navigation } = props;

  const goTo = () => {
    navigation.navigate('DetailScreen')
  }
  return (
    <View style={{ ...rootStyles.container, ...rootStyles.centered }}>
      <Text style={{ textAlign: 'center' }}>欢迎光临</Text>
      <Button mode="contained" onPress={goTo}>Details</Button>
    </View>
  )
};

const mapStateToProps = (state: IRootState) => {
  return {
    ...state.app,
  }
}

export default connect(mapStateToProps)(HomeScreen);