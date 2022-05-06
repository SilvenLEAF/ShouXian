// ___________________ root
import React, { useState } from 'react';
import { connect } from 'react-redux';

import { NavigationProp } from '@react-navigation/native';
import { View, StyleSheet, Vibration, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

// ___________________ ui
import Toast from 'react-native-toast-message';
import { Modal, Portal, Text, Provider, Switch, Button, Card, Title, TouchableRipple } from 'react-native-paper';

import { refineBtnColor } from '../../utils/helpers';
import rootStyles from '../../root/rootStyles';
// ___________________ store (redux + async)
import AsyncStore, { AsyncStoreKeyMap } from '../../utils/AsyncStore';

import { IRootState } from '../../store/store';
import { IAppSettingState } from '../../store/reducers/appSettingsReducer';

import appSettingsActions from '../../store/actions/appSettingsAction';
import userProgressActions from '../../store/actions/userProgressAction';
import rootVariables from '../../root/rootVariables';




interface propsInterface extends IAppSettingState {
  navigation: NavigationProp<any>,
  app: {
    updateThemeColor: typeof appSettingsActions.updateThemeColor,
    updateIsDarkTheme: typeof appSettingsActions.updateIsDarkTheme,
    updateIsVibrationOn: typeof appSettingsActions.updateIsVibrationOn,
    updateIsSoundOn: typeof appSettingsActions.updateIsSoundOn,
    resetDefault: typeof appSettingsActions.resetDefault,
  },
  progress: {
    updateRank: typeof userProgressActions.updateRank,
    updateLevel: typeof userProgressActions.updateLevel,
    updateXP: typeof userProgressActions.updateXP,
    resetDefault: typeof userProgressActions.resetDefault,
  },
}



function SettingScreen(props: propsInterface) {
  const [showResetDefaultAlert, setShowResetDefaultAlert] = useState(false);
  const [showResetProgressAlert, setShowResetProgressAlert] = useState(false);

  const goTo = (page: string) => {
    props.navigation.navigate(page);
  }

  const updateThemeColor = async (color: string) => {
    props.app.updateThemeColor(color);
    AsyncStore.upsertObjectData(AsyncStoreKeyMap.appSettings, { themeColor: color });
  }

  const updateIsDarkTheme = async () => {
    console.log({ PROPSisDarkTheme: props.isDarkTheme })
    props.app.updateIsDarkTheme(!props.isDarkTheme);
    AsyncStore.upsertObjectData(AsyncStoreKeyMap.appSettings, { isDarkTheme: !props.isDarkTheme });
  }

  const updateIsSoundOn = async () => {
    props.app.updateIsSoundOn(!props.isSoundOn);
    AsyncStore.upsertObjectData(AsyncStoreKeyMap.appSettings, { isSoundOn: !props.isSoundOn });
  }

  const updateIsVibrationOn = async () => {
    Vibration.vibrate();
    props.app.updateIsVibrationOn(!props.isVibrationOn);
    AsyncStore.upsertObjectData(AsyncStoreKeyMap.appSettings, { isVibrationOn: !props.isVibrationOn });
  }

  const handleResetDefault = () => {
    setShowResetDefaultAlert(false);

    props.app.resetDefault();
    AsyncStore.removeData(AsyncStoreKeyMap.appSettings);

    Toast.show({
      type: 'success',
      text1: 'Restore Default Successful',
      text2: 'Restore all default settings',
      topOffset: rootVariables.toastTopOffset,
    })
  }

  const handleResetProgress = () => {
    setShowResetProgressAlert(false);

    props.progress.resetDefault();
    AsyncStore.removeData(AsyncStoreKeyMap.userProgress);

    Toast.show({
      type: 'success',
      text1: 'Reset Progress Successful',
      text2: 'Reset all of your progress',
      topOffset: rootVariables.toastTopOffset,
    })
  }

  return (
    <Provider>
      <ScrollView contentContainerStyle={rootStyles.scrollContainer}>
        <Portal>
          <Modal visible={showResetDefaultAlert} onDismiss={() => setShowResetDefaultAlert(false)} contentContainerStyle={rootStyles.alertModal}>
            <Text style={rootStyles.alertModalTitle}>Restore Default</Text>
            <Text style={rootStyles.alertModalSubTitle}>Do you really want to restore everything to default?</Text>

            <View style={{ alignItems: 'center', flexDirection: 'row' }}>
              <Button style={{ ...rootStyles.alertModalBtn, backgroundColor: refineBtnColor(props.themeColor) }} uppercase={false} mode="contained" onPress={() => setShowResetDefaultAlert(false)}>
                No, Cancel
              </Button>
              <Button style={{ ...rootStyles.alertModalBtn }} uppercase={false} mode="contained" onPress={handleResetDefault}>
                Yes, Reset
              </Button>
            </View>
          </Modal>

          <Modal visible={showResetProgressAlert} onDismiss={() => setShowResetProgressAlert(false)} contentContainerStyle={rootStyles.alertModal}>
            <Text style={rootStyles.alertModalTitle}>Reset Progress</Text>
            <Text style={rootStyles.alertModalSubTitle}>Do you really want to reset your progress?</Text>

            <View style={{ alignItems: 'center', flexDirection: 'row' }}>
              <Button style={{ ...rootStyles.alertModalBtn, backgroundColor: refineBtnColor(props.themeColor) }} uppercase={false} mode="contained" onPress={() => setShowResetProgressAlert(false)}>
                No, Cancel
              </Button>
              <Button style={{ ...rootStyles.alertModalBtn }} uppercase={false} mode="contained" onPress={handleResetProgress}>
                Yes, Reset
              </Button>
            </View>
          </Modal>
        </Portal>

        <Card style={{ ...styles.settingCard, marginTop: 0 }}>
          <Title style={styles.settingCardTitle}>Theme Color</Title>
          <View style={styles.colorBtnsContainer}>
            {
              rootVariables.colorPalette.map((color, index) => (
                <TouchableOpacity key={index} style={{ ...styles.floatingColorBtn, backgroundColor: color, borderColor: props.themeColor }} onPress={() => updateThemeColor(color)}></TouchableOpacity>
              ))
            }
          </View>
        </Card>

        <Card style={styles.settingCard}>
          <Title style={styles.settingCardTitle}>Toggle</Title>
          <TouchableRipple onPress={updateIsDarkTheme}>
            <View style={rootStyles.switchBtnOrProfileInfoItem}>
              <Text style={{ color: rootVariables.fontColor }}>Dark Theme</Text>
              <Switch value={props.isDarkTheme} color={props.themeColor} />
            </View>
          </TouchableRipple>

          <TouchableRipple onPress={updateIsSoundOn}>
            <View style={rootStyles.switchBtnOrProfileInfoItem}>
              <Text style={{ color: rootVariables.fontColor }}>Sound</Text>
              <Switch value={props.isSoundOn} color={props.themeColor} />
            </View>
          </TouchableRipple>

          <TouchableRipple onPress={updateIsVibrationOn}>
            <View style={rootStyles.switchBtnOrProfileInfoItem}>
              <Text style={{ color: rootVariables.fontColor }}>Vibration</Text>
              <Switch value={props.isVibrationOn} color={props.themeColor} />
            </View>
          </TouchableRipple>
        </Card>


        <Card style={{ ...styles.settingCard, alignItems: 'center' }}>
          <Title style={styles.settingCardTitle}>Danger Zone</Title>
          <Button style={{ ...rootStyles.fixedWidthBtn, marginTop: 10, backgroundColor: refineBtnColor(props.themeColor) }} uppercase={false} mode="contained" onPress={() => setShowResetDefaultAlert(true)}>
            Restore Default
          </Button>
          <Button style={{ ...rootStyles.fixedWidthBtn, marginBottom: 20 }} uppercase={false} mode="contained" onPress={() => setShowResetProgressAlert(true)}>
            Reset Progress
          </Button>
        </Card>

      </ScrollView>
    </Provider>
  );
}


const styles = StyleSheet.create({
  settingCard: {
    marginTop: 30,
    width: 300,
    ...rootVariables.superShadow,
  },
  settingCardTitle: {
    textAlign: 'center',
    color: rootVariables.color.grayColor,
  },
  colorBtnsContainer: {
    marginBottom: 10,
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  floatingColorBtn: {
    margin: 10,
    borderRadius: 15,
    height: 30,
    width: 30,
    borderWidth: 0.5,
    ...rootVariables.superShadow,
  },
});

const mapStateToProps = (state: IRootState) => {
  return {
    ...state.app,
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    app: {
      updateThemeColor: (color: string) => dispatch(appSettingsActions.updateThemeColor(color)),
      updateIsDarkTheme: (isDarkTheme: boolean) => dispatch(appSettingsActions.updateIsDarkTheme(isDarkTheme)),
      updateIsVibrationOn: (isVibrationOn: boolean) => dispatch(appSettingsActions.updateIsVibrationOn(isVibrationOn)),
      updateIsSoundOn: (isSoundOn: boolean) => dispatch(appSettingsActions.updateIsSoundOn(isSoundOn)),
      resetDefault: () => dispatch(appSettingsActions.resetDefault()),
    },

    progress: {
      updateRank: (rank: string) => dispatch(userProgressActions.updateRank(rank)),
      updateLevel: (level: number) => dispatch(userProgressActions.updateLevel(level)),
      updateXP: (xp: number) => dispatch(userProgressActions.updateXP(xp)),
      resetDefault: () => dispatch(userProgressActions.resetDefault()),
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SettingScreen)
