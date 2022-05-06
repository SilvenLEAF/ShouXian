import React from 'react';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { Text, View, TouchableOpacity } from 'react-native';

import rootStyles from '../root/rootStyles';
// __________redux stuff
import { connect } from 'react-redux';
import { IRootState } from '../store/store';
import { IAppSettingState } from '../store/reducers/appSettingsReducer';



interface IProp extends IAppSettingState {
  navigation: DrawerNavigationProp<any>,
}

function DetailScreen(props: IProp) {
  const { navigation } = props;

  const goTo = () => {
    navigation.navigate('Home Page')
  }
  return (
    <View style={{ ...rootStyles.container, ...rootStyles.centered }}>
      <TouchableOpacity onPress={goTo}>
        <Text>...Details...</Text>
      </TouchableOpacity>
    </View>
  )
};

const mapStateToProps = (state: IRootState) => {
  return {
    ...state.app,
  }
}

export default connect(mapStateToProps)(DetailScreen);