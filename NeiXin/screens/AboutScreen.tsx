import { DrawerNavigationProp } from '@react-navigation/drawer';
import React from 'react';
import { Text, View } from 'react-native';
import { Button } from 'react-native-paper';
import { connect } from 'react-redux';
import rootStyles from '../root/rootStyles';
import { IAppSettingState } from '../store/reducers/appSettingsReducer';
import { IUserProfileState } from '../store/reducers/userProfileReducer';
import { IUserProgressState } from '../store/reducers/userProgressReducer';
import { IRootState } from '../store/store';

interface IProp extends IAppSettingState, IUserProgressState, IUserProfileState{
  navigation: DrawerNavigationProp<any>
}

function AboutScreen(props: IProp) {
  
  const goTo = () => {
    props.navigation.navigate('DetailScreen')
  }
  return (
    <View style={{  ...rootStyles.container, ...rootStyles.centered }}>
      <Text>I am {props.username}, {props.fancyTitle}</Text>
      <Text>Developed by SilvenLEAF, Software Engineer @ X0PA AI</Text>
      <Button mode="contained" onPress={goTo}>Details</Button>
    </View>
  )
};

const mapStateToProps = (state: IRootState) => {
  return {
    ...state.app,
    ...state.progress,
    ...state.profile,
  }
}

export default connect(mapStateToProps)(AboutScreen);