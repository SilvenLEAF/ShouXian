import { NavigationProp } from '@react-navigation/native';
import React from 'react';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { Text, View, TouchableOpacity } from 'react-native';

import rootStyles from '../../root/rootStyles';
// __________redux stuff
import { connect } from 'react-redux';
import { IRootState } from '../../store/store';

import { IAppSettingState } from '../../store/reducers/appSettingsReducer';
import { IUserProgressState } from '../../store/reducers/userProgressReducer';
import { IUserProfileState } from '../../store/reducers/userProfileReducer';

import userProgressActions from '../../store/actions/userProgressAction';
import { Button } from 'react-native-paper';
import rootVariables from '../../root/rootVariables';



interface IProp extends IAppSettingState, IUserProgressState, IUserProfileState {
  navigation: DrawerNavigationProp<any>,

  progress: {
    updateRank: typeof userProgressActions.updateRank,
    updateLevel: typeof userProgressActions.updateLevel,
    updateXP: typeof userProgressActions.updateXP,
    resetDefault: typeof userProgressActions.resetDefault,
  },
}

function HomeScreen(props: IProp) {
  const { navigation } = props;

  const goTo = () => {
    navigation.navigate('About Page')
  }
  return (
    <View style={{ ...rootStyles.container, ...rootStyles.centered }}>
      <TouchableOpacity onPress={goTo}>
        <Text>有一个梦有一个灵魂有一个心</Text>
        <View style={{justifyContent: 'center', flexDirection: 'row', }}>

          <Button color={props.themeColor} mode="outlined" uppercase={false}
            style={{ ...rootStyles.btn, width: 100, margin: 5 }}
            onPress={() => props.navigation.navigate('Home Page')}
          >
            Home
          </Button>
          <Button color={rootVariables.color.greenColor} mode="outlined" uppercase={false}
            style={{ ...rootStyles.btn, width: 100, margin: 5 }}
            onPress={() => props.navigation.navigate('About Page')}
          >
            About
          </Button>
        </View>
      </TouchableOpacity>
    </View>
  )
};

const mapStateToProps = (state: IRootState) => {
  return {
    ...state.app,
    ...state.user,
    ...state.progress,
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    progress: {
      updateRank: (rank: string) => dispatch(userProgressActions.updateRank(rank)),
      updateLevel: (level: number) => dispatch(userProgressActions.updateLevel(level)),
      updateXP: (xp: number) => dispatch(userProgressActions.updateXP(xp)),
      resetDefault: () => dispatch(userProgressActions.resetDefault()),
    },
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);