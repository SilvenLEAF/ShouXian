/* ------------------------------
.            ICONS
------------------------------ */
import IconAntDesign from 'react-native-vector-icons/AntDesign';
/* ------------------------------
------------------------------ */

import React, { useEffect, useState } from 'react';
import { NavigationProp } from '@react-navigation/native';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Avatar, Button, Card, Switch, Title, TouchableRipple } from 'react-native-paper';

import { randomNumber } from '../../utils/helpers';
import rootVariables from '../../root/rootVariables';
import rootStyles from '../../root/rootStyles';
// ___________________ store (redux + async)
import { connect } from 'react-redux';
import { IRootState } from '../../store/store';
import { IAppSettingState } from '../../store/reducers/appSettingsReducer';
import { IUserProgressState } from '../../store/reducers/userProgressReducer';
import { IUserProfileState } from '../../store/reducers/userProfileReducer';

interface propsInterface extends IAppSettingState, IUserProfileState, IUserProgressState {
  navigation: NavigationProp<any>,
}



function ProfileScreen(props: propsInterface) {
  const goTo = (page: string) => {
    props.navigation.navigate(page);
  }
  // const [userAvatars, setUserAvatars] = useState(usera)
  const [avatar, setAvatar] = useState(rootVariables.assets.avatars.male);

  useEffect(() => {
    setAvatar(rootVariables.assets.avatars[props.gender]);
  }, [props.gender])

  const getRandomAvatar = () => {
    const genderArr: ('female'|'male')[] = ['female', 'male'];
    const avIndex = genderArr[randomNumber(2)]
    const newAvatar = rootVariables.assets.avatars[avIndex];
    setAvatar(newAvatar);
  }
  return (
    <View style={rootStyles.container}>
      <View style={styles.profileAvatarCard}>
        <TouchableOpacity onPress={getRandomAvatar}>
          <Avatar.Image
            source={avatar}
            size={90}
            style={{ backgroundColor: rootVariables.bodyBG, borderColor: props.themeColor, borderWidth: 0.15 }}
          />
        </TouchableOpacity>
        <View style={{ marginLeft: 20 }}>
          <Title style={{ ...styles.profileAvatarCardTitle, color: props.themeColor }}>{props.username}</Title>
          <Text style={styles.profileAvatarCardSubTitle}>{props.fancyTitle}</Text>
        </View>

      </View>

      <Button style={rootStyles.btn} color={props.themeColor} mode="contained" onPress={() => goTo("UpdateProfileScreen")}>
        <IconAntDesign
          name="form"
          color="#fff"
          size={19}
        /> Edit Profile
      </Button>

      <Card style={styles.profileInfoCard}>
        {
          [
            { prop: 'Rank', value: props.rank },
            { prop: 'XP', value: props.xp },
            { prop: 'Level', value: props.level },
            { prop: 'Age', value: props.age },
            { prop: 'Gender', value: props.gender },
            { prop: 'Country', value: props.country },
          ].map((item, index) => (
            <TouchableRipple key={index} onPress={() => { }}>
              <View style={rootStyles.switchBtnOrProfileInfoItem}>
                <Text style={{ color: rootVariables.fontColor }}>{item.prop}</Text>
                <Text style={{ color: rootVariables.fontColor }}>{item.value}</Text>
              </View>
            </TouchableRipple>
          ))
        }
      </Card>

    </View >
  );
}


const styles = StyleSheet.create({
  profileAvatarCardTitle: {
    fontSize: 20,
  },
  profileAvatarCardSubTitle: {
    color: rootVariables.color.grayColor,
  },
  profileAvatarCard: {
    margin: 20,
    width: 300,
    height: 150,
    backgroundColor: rootVariables.bodyBG,
    borderRadius: 20,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    ...rootVariables.extremeShadow,
  },
  profileInfoCard: {
    margin: 20,
    width: 300,
    height: 250,
    backgroundColor: rootVariables.bodyBG,
    borderRadius: 20,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    ...rootVariables.superShadow,
  },
})


const mapStateToProps = (state: IRootState) => {
  return {
    ...state.app,
    ...state.progress,
    ...state.user,
  }
}


export default connect(mapStateToProps)(ProfileScreen)
