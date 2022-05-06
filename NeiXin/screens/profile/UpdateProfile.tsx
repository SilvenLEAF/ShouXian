import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableWithoutFeedback, Keyboard, ScrollView } from 'react-native'

import { NavigationProp } from '@react-navigation/native';
import { connect } from 'react-redux';

import IconF5 from 'react-native-vector-icons/FontAwesome5';
import IconMI from 'react-native-vector-icons/MaterialIcons';
import IconEntypo from 'react-native-vector-icons/Entypo';

// ___________________ store (redux + async)
import AsyncStore, { AsyncStoreKeyMap } from '../../utils/AsyncStore';

import { IRootState } from '../../store/store';
import { IAppSettingState } from '../../store/reducers/appSettingsReducer';

import userProgressActions from '../../store/actions/userProgressAction';
import { Modal, Portal, Button, Provider, RadioButton, TextInput } from 'react-native-paper';
import { IUserProfileState, IUserProfileUpdatePayload } from '../../store/reducers/userProfileReducer';
import userProfileActions from '../../store/actions/userProfileAction';
import Toast from 'react-native-toast-message';

import { refineBtnColor, removeNullProps } from '../../utils/helpers';
import rootVariables from '../../root/rootVariables';
import rootStyles from '../../root/rootStyles';


interface propsInterface extends IAppSettingState, IUserProfileState {
  navigation: NavigationProp<any>,
  progress: {
    updateRank: typeof userProgressActions.updateRank,
    updateLevel: typeof userProgressActions.updateLevel,
    updateXP: typeof userProgressActions.updateXP,
    resetDefault: typeof userProgressActions.resetDefault,
  },
  user: {
    updateProfile: typeof userProfileActions.updateProfile,
    resetDefault: typeof userProfileActions.resetDefault,
  }
}




function UpdateProfileScreen(props: propsInterface) {
  const [showResetDefaultAlert, setShowResetDefaultAlert] = useState(false);


  const [username, setUsername] = useState('');
  const [fancyTitle, setFancyTitle] = useState('');
  const [gender, setGender] = useState<'male' | 'female'>(props.gender);
  const [age, setAge] = useState('');
  const [country, setCountry] = useState('');

  const goTo = (page: string) => {
    props.navigation.navigate(page);
  }

  const clearForm = () => {
    setUsername('');
    setFancyTitle('');
    setAge('');
    setCountry('');
    Keyboard.dismiss();

    Toast.show({
      type: 'success',
      text1: 'Form cleared',
      text2: 'Form is cleared. Nothing is saved',
      topOffset: rootVariables.toastTopOffset,
    })
  }
  const handleSubmit = async () => {
    console.log({ username, age, country })
    const ageRefined = Number(age);


    if (age && isNaN(ageRefined)) {
      Toast.show({
        type: 'error',
        text1: 'Invalid age',
        text2: 'Age must be a number',
        topOffset: rootVariables.toastTopOffset,
      })
    }
    else if (age && ageRefined < 1) {
      Toast.show({
        type: 'error',
        text1: 'Invalid age',
        text2: 'Age must be greater than 0',
        topOffset: rootVariables.toastTopOffset,
      })
    }
    else {
      const obj: any = removeNullProps({ username, fancyTitle, age: ageRefined || null, country, gender });
      console.log({ obj });
      props.user.updateProfile(obj);

      clearForm();

      AsyncStore.upsertObjectData(AsyncStoreKeyMap.userProfile, { ...obj })

      Toast.show({
        type: 'success',
        text1: 'Profile updated successfully',
        text2: 'Your profile is updated',
        topOffset: rootVariables.toastTopOffset,
      });

      goTo('ProfileScreen');
    }
  }

  const handleResetDefault = async () => {
    props.user.resetDefault();
    AsyncStore.removeData(AsyncStoreKeyMap.userProfile);

    Toast.show({
      type: 'success',
      text1: 'Reset to Default Profile',
      text2: 'Successfully reset to default profile',
      topOffset: rootVariables.toastTopOffset,
    });

    goTo('ProfileScreen');
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <Provider>
        <ScrollView contentContainerStyle={{...rootStyles.scrollContainer}}>
          <View style={styles.formContainer}>
            <Portal>
              <Modal visible={showResetDefaultAlert} onDismiss={() => setShowResetDefaultAlert(false)} contentContainerStyle={rootStyles.alertModal}>
                <Text style={rootStyles.alertModalTitle}>Reset to Default Profile</Text>
                <Text style={rootStyles.alertModalSubTitle}>Do you really want to reset to default profile?</Text>

                <View style={{ alignItems: 'center', flexDirection: 'row' }}>
                  <Button style={{ ...rootStyles.alertModalBtn, backgroundColor: refineBtnColor(props.themeColor) }} uppercase={false} mode="contained" onPress={() => setShowResetDefaultAlert(false)}>
                    No, Cancel
                  </Button>
                  <Button style={{ ...rootStyles.alertModalBtn }} uppercase={false} mode="contained" onPress={handleResetDefault}>
                    Yes, Reset
                  </Button>
                </View>
              </Modal>
            </Portal>

            <TextInput
              label="Username"
              placeholder="Type your username here ..."
              mode="outlined"
              theme={{ colors: { primary: props.themeColor } }}
              style={styles.textInput}
              value={username}
              maxLength={15}
              onChangeText={(text) => { setUsername(text) }}
              right={<TextInput.Icon
                name={
                  () => (
                    <IconF5
                      name="user-edit"
                      color={rootVariables.fontColor}
                      size={27}
                    />
                  )
                }
              />}
            />

            <TextInput
              label="Fancy Title"
              placeholder="Type your fancy title here ..."
              mode="outlined"
              theme={{ colors: { primary: props.themeColor } }}
              style={styles.textInput}
              value={fancyTitle}
              maxLength={20}
              onChangeText={(text) => { setFancyTitle(text) }}
              right={<TextInput.Icon
                name={
                  () => (
                    <IconF5
                      name="user-tag"
                      color={rootVariables.fontColor}
                      size={27}
                    />
                  )
                }
              />}
            />

            <TextInput
              label="Age"
              placeholder="Type your age here ..."
              mode="outlined"
              keyboardType="decimal-pad"
              theme={{ colors: { primary: props.themeColor } }}
              style={styles.textInput}
              value={age}
              onChangeText={(age) => { setAge(age) }}
              right={<TextInput.Icon
                name={
                  () => (
                    <IconMI
                      name="child-care"
                      color={rootVariables.fontColor}
                      size={29}
                    />
                  )
                }
              />}
            />

            <TextInput
              label="Country"
              placeholder="Type your country here ..."
              mode="outlined"
              theme={{ colors: { primary: props.themeColor } }}
              style={styles.textInput}
              value={country}
              onChangeText={(text) => { setCountry(text) }}
              right={<TextInput.Icon
                name={
                  () => (
                    <IconEntypo
                      name="location"
                      color={rootVariables.fontColor}
                      size={27}
                    />
                  )
                }
              />}
            />

            <View style={styles.radioInputHolder}>
              <TouchableWithoutFeedback onPress={() => setGender('male')}>
                <View style={styles.radioInputItem}>
                  <RadioButton
                    value={gender}
                    status={gender === 'male' ? 'checked' : 'unchecked'}
                    onPress={() => setGender('male')}
                    color={props.themeColor}
                  />
                  <Text>Male</Text>
                </View>
              </TouchableWithoutFeedback>

              <TouchableWithoutFeedback onPress={() => setGender('female')}>
                <View style={styles.radioInputItem}>
                  <RadioButton
                    value={gender}
                    status={gender === 'female' ? 'checked' : 'unchecked'}
                    onPress={() => setGender('female')}
                    color={props.themeColor}
                  />
                  <Text>Female</Text>
                </View>
              </TouchableWithoutFeedback>
            </View>

            <View style={{ alignItems: 'center', justifyContent: 'space-around', flexDirection: 'row' }}>
              <Button color={props.themeColor} style={{ width: 130, borderRadius: 30, marginBottom: 20, backgroundColor: rootVariables.bodyBG }} uppercase={false} mode="outlined" onPress={clearForm}>
                Clear
              </Button>

              <Button color={refineBtnColor(props.themeColor)} style={{ width: 130, borderRadius: 30, marginBottom: 20 }} uppercase={false} mode="contained" onPress={handleSubmit}>
                Save
              </Button>

            </View>
            <Button color={rootVariables.color.redColor} style={{ borderRadius: 30, marginBottom: 20 }} uppercase={false} mode="contained" onPress={() => setShowResetDefaultAlert(true)}>
              Reset to Default Profile
            </Button>

          </View>

          <Text>Fill only those which you want to update</Text>
        </ScrollView>
      </Provider>
    </TouchableWithoutFeedback>
  );
}


const styles = StyleSheet.create({
  formContainer: {
    marginTop: 40,
  },
  textInput: {
    width: 300,
    marginBottom: 20,
  },
  radioInputHolder: {
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
    marginBottom: 20,
  },
  radioInputItem: {
    alignItems: 'center',
    flexDirection: 'row',
  },
})


const mapStateToProps = (state: IRootState) => {
  return {
    ...state.app,
    ...state.user,
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
    user: {
      updateProfile: (profileData: IUserProfileUpdatePayload) => dispatch(userProfileActions.updateProfile(profileData)),
      resetDefault: () => dispatch(userProfileActions.resetDefault()),
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UpdateProfileScreen)
