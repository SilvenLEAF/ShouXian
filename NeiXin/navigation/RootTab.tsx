/* ------------------------------
.            ICONS
------------------------------ */
import IconMCI from 'react-native-vector-icons/MaterialCommunityIcons';
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5';
/* ------------------------------
------------------------------ */


import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

// __________store (redux + async)
import { connect } from 'react-redux';
import AsyncStore from '../utils/AsyncStore';

import { IRootState } from '../store/store';
import { IAppSettingState } from '../store/reducers/appSettingsReducer';
import { updateIsDarkTheme, updateIsSoundOn, updateIsVibrationOn, updateThemeColor } from '../store/actions/appSettingsAction';

import rootVariables from '../root/rootVariables';

// __________screens and/or stacks
import HomeStack from './stacks/HomeStack';
import AboutStack from './stacks/AboutStack';

interface propsInterface extends IAppSettingState {
  updateThemeColor: typeof updateThemeColor,
  updateIsDarkTheme: typeof updateIsDarkTheme,
  updateIsVibrationOn: typeof updateIsVibrationOn,
  updateIsSoundOn: typeof updateIsSoundOn,
}

const Tab = createBottomTabNavigator();

function CustomTabBarButton(props: any) {
  const { children, onPress } = props;
  return (
    <TouchableOpacity onPress={onPress}
      style={{
        top: -30,
        height: 70,
        width: 70,
        borderRadius: 35,
        backgroundColor: props.themeColor,
        justifyContent: 'center',
        alignItems: 'center',
        ...styles.shadow,
      }}
    >
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        {children}
      </View>
    </TouchableOpacity>
  )
}

function RootTab(props: propsInterface) {
  return (
    <Tab.Navigator
      screenOptions={{
        title: "Root tab",
        headerShown: false,
        tabBarShowLabel: false,

        tabBarStyle: {
          position: 'absolute',
          bottom: 15,
          left: 10,
          right: 10,
          backgroundColor: rootVariables.bottomTabBG,
          borderRadius: 15,
          height: 70,
          ...styles.shadow,
        },

      }}
    >
      {/* <Tab.Screen name="HomeStack" component={HomeStack}
        options={{
          title: "HomeStack",
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <IconMCI
                name="home"
                color={focused ? props.themeColor : rootVariables.fontColor}
                size={27}
              />
              <Text style={{ color: focused ? props.themeColor : rootVariables.fontColor, fontSize: 12 }}>
                HOME
              </Text>
            </View>
          )
        }}
      /> */}
      <Tab.Screen name="HomeStack" component={HomeStack}
        options={{
          title: "DictionaryStack",
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <IconFontAwesome5
                name="book-dead"
                color={focused ? props.themeColor : rootVariables.fontColor}
                size={27}
              />
              <Text style={{ color: focused ? props.themeColor : rootVariables.fontColor, fontSize: 12 }}>
                Dictionary
              </Text>
            </View>
          )
        }}
      />

      <Tab.Screen name="CardGridStack" component={AboutStack}
        options={{
          title: "CardGridStack",
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <IconMCI
                name="cards"
                color={focused ? props.themeColor : rootVariables.fontColor}
                size={27}
              />
              <Text style={{ color: focused ? props.themeColor : rootVariables.fontColor, fontSize: 12 }}>
                Cards
              </Text>
            </View>
          )
        }}
      />

      <Tab.Screen name="ActionStack" component={HomeStack}
        options={{
          title: "ActionStack",
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <IconFontAwesome5
                name="skull"
                color={focused ? props.themeColor : rootVariables.fontColor}
                size={30}
                style={{ color: '#f4f4f4' }}
              />
            </View>
          ),

          tabBarButton: (thisProps) => <CustomTabBarButton {...thisProps} themeColor={props.themeColor} />
        }}
      />

      <Tab.Screen name="SettingStack" component={AboutStack}
        options={{
          title: "SettingStack",
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <IconMCI
                name="cog"
                color={focused ? props.themeColor : rootVariables.fontColor}
                size={27}
              />
              <Text style={{ color: focused ? props.themeColor : rootVariables.fontColor, fontSize: 12 }}>
                Settings
              </Text>
            </View>
          )
        }}
      />
      
      <Tab.Screen name="ProfileStack" component={HomeStack}
        options={{
          title: "ProfileStack",
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <IconFontAwesome5
                name="user-astronaut"
                color={focused ? props.themeColor : rootVariables.fontColor}
                size={27}
              />
              <Text style={{ color: focused ? props.themeColor : rootVariables.fontColor, fontSize: 12 }}>
                Profile
              </Text>
            </View>
          )
        }}
      />

    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#7f5df0',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5
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


export default connect(mapStateToProps, mapDispatchToProps)(RootTab)
