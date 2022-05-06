/* ------------------------------
.            ICONS
------------------------------ */
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconF5 from 'react-native-vector-icons/FontAwesome5';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconFeather from 'react-native-vector-icons/Feather';
/* ------------------------------
------------------------------ */


import React from 'react';
import { View, StyleSheet, Linking } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { Avatar, Title, Caption, Drawer, Text, TouchableRipple, Switch, Paragraph } from 'react-native-paper';

import rootVariables from '../root/rootVariables';
// ___________________ store (redux + async)
import { connect } from 'react-redux';
import AsyncStore, { AsyncStoreKeyMap } from '../utils/AsyncStore';

import { IRootState } from '../store/store';
import { IAppSettingState } from '../store/reducers/appSettingsReducer';

import appSettingsActions from '../store/actions/appSettingsAction';
import { IUserProgressState } from '../store/reducers/userProgressReducer';



interface IProp extends IAppSettingState, IUserProgressState {
  navigation: any,
  app: {
    updateIsDarkTheme: typeof appSettingsActions.updateIsDarkTheme,
  }
}

function DrawerContent(props: IProp) {

  const toggleTheme = async () => {
    props.app.updateIsDarkTheme(!props.isDarkTheme);
    AsyncStore.upsertObjectData(AsyncStoreKeyMap.appSettings, { isDarkTheme: !props.isDarkTheme });
  }

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection} >
            <View>
              <Avatar.Image
                source={rootVariables.assets.developerImage}
                size={90}
                style={styles.profileImage}
              />
              <View style={{ marginLeft: 15, flexDirection: 'column' }}>
                <Title style={styles.title}>ShouXian APP</Title>
                <Caption style={styles.caption}>By @SilvenLEAF</Caption>
              </View>
            </View>

            <View style={styles.row}>
              {/* XP and Rank Section */}
              {/* <View style={styles.section}>
                <Paragraph style={[styles.paragraph, styles.section]}>XP</Paragraph>
                <Caption style={styles.caption}>2700</Caption>
              </View>
              <View style={styles.section}>
                <Paragraph style={[styles.paragraph, styles.section]}>Level</Paragraph>
                <Caption style={styles.caption}>7</Caption>
              </View>
              <View style={styles.section}>
                <Paragraph style={[styles.paragraph, styles.section]}>Rank</Paragraph>
                <Caption style={styles.caption}>Gold</Caption>
              </View> */}
            </View>
          </View>

          <Drawer.Section>
            <DrawerItem
              icon={({ color, size, focused }) => (
                <IconF5
                  name="heart-broken"
                  color={rootVariables.fontColor}
                  size={size}
                />

              )}
              onPress={() => { props.navigation.navigate("HomeTab") }}
              label="Main APP"
              labelStyle={{
                color: rootVariables.fontColor
              }}
            />
            <DrawerItem
              icon={({ color, size, focused }) => (
                <Icon
                  name="cog-outline"
                  color={rootVariables.fontColor}
                  size={size}
                />

              )}
              onPress={() => { props.navigation.navigate("SettingStack") }}
              label="Settings"
              labelStyle={{
                color: rootVariables.fontColor
              }}
            />

            <DrawerItem
              icon={({ color, size, focused }) => (
                <Icon
                  name="database-marker"
                  color={rootVariables.fontColor}
                  size={size}
                />

              )}
              onPress={() => { props.navigation.navigate("StorageStack") }}
              label="Async Storage"
              labelStyle={{
                color: rootVariables.fontColor
              }}
            />


            <DrawerItem
              icon={({ color, size, focused }) => (
                <IconEntypo
                  name="info-with-circle"
                  color={rootVariables.fontColor}
                  size={size}
                />

              )}
              onPress={() => { props.navigation.navigate("AboutStack") }}
              label="About"
              labelStyle={{
                color: rootVariables.fontColor
              }}
            />

            <DrawerItem
              icon={({ color, size, focused }) => (
                <IconAntDesign
                  name="form"
                  color={rootVariables.fontColor}
                  size={size}
                />

              )}
              onPress={() => { props.navigation.navigate("ContactStack") }}
              label="Contact Us"
              labelStyle={{
                color: rootVariables.fontColor
              }}
            />

          </Drawer.Section>

          <Drawer.Section title="Preferences">
            <TouchableRipple onPress={() => toggleTheme()}>
              <View style={styles.preference}>
                <Text style={{ color: rootVariables.fontColor }}>Dark Theme</Text>
                <Switch value={props.isDarkTheme} color={props.themeColor} />
              </View>
            </TouchableRipple>
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>

      <Drawer.Section style={styles.bottomDrawerSection}>
        {/* <DrawerItem
          icon={({ color, size, focused }) => (
            <Icon
              name="exit-to-app"
              color={rootVariables.fontColor}
              size={size}
            />

          )}
          onPress={() => { }}

          label="Sign out"
          labelStyle={{
            color: rootVariables.fontColor
          }}
        /> */}
        <DrawerItem
          icon={({ color, size, focused }) => (
            <IconFeather
              name="external-link"
              color={rootVariables.fontColor}
              size={size}
            />

          )}
          onPress={() => { Linking.openURL("https://SilvenLEAF.github.io/") }}
          label="Know SilvenLEAF"
          labelStyle={{
            color: rootVariables.fontColor
          }}
        />
      </Drawer.Section>

    </View>
  )
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },

  profileImage: {
    marginTop: 10,
    marginLeft: 23,
  }
})

const mapStateToProps = (state: IRootState) => {
  return {
    ...state.app,
    ...state.progress,
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    app: {
      updateIsDarkTheme: (isDarkTheme: boolean) => dispatch(appSettingsActions.updateIsDarkTheme(isDarkTheme)),
    },
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(DrawerContent);
