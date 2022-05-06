import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import React from 'react';
import { Button, Text, View, StyleSheet } from "react-native";
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler';

import rootVariables from '../root/rootVariables';
// __________store (redux + async)
import { connect } from 'react-redux';
import AsyncStore from '../utils/AsyncStore';

import { IRootState } from '../store/store';
import { IAppSettingState } from '../store/reducers/appSettingsReducer';
import { updateIsDarkTheme, updateIsSoundOn, updateIsVibrationOn, updateThemeColor } from '../store/actions/appSettingsAction';

interface propsInterface extends IAppSettingState {
  title: string,
  navigation: any,
  updateThemeColor: typeof updateThemeColor,
  updateIsDarkTheme: typeof updateIsDarkTheme,
  updateIsVibrationOn: typeof updateIsVibrationOn,
  updateIsSoundOn: typeof updateIsSoundOn,
}


function HamburgerHeader(props: propsInterface) {


  return (
    <View style={{...styles.container}}>
      <TouchableWithoutFeedback onPress={() => props.navigation.toggleDrawer()} style={styles.hamBtn} >
        <Icon
          name="hamburger"
          color={props.themeColor}
          size={25}
        />
      </TouchableWithoutFeedback>
      <Text style={styles.pageTitle}>{props.title}</Text>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 60,
    backgroundColor: rootVariables.navBG,
    position: 'relative',
  },
  pageTitle: {
    fontWeight: '900',
    fontSize: 25,
    marginRight: 20,
  },
  hamBtn: {
    marginLeft: 50,
  }
})

const mapStateToProps = (state: IRootState) => {
  return {
    ...state.app,
  }
}
const mapDispatchToProps = {
  updateThemeColor,
  updateIsDarkTheme,
  updateIsVibrationOn,
  updateIsSoundOn,
}

export default connect(mapStateToProps, mapDispatchToProps)(HamburgerHeader);