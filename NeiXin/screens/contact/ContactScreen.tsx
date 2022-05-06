import React from 'react'
import { NavigationProp } from '@react-navigation/native';
import { View, Text, StyleSheet, Linking } from 'react-native'
import { Avatar, Button } from 'react-native-paper';


import rootVariables from '../../root/rootVariables';
import rootStyles from '../../root/rootStyles';
// ___________________ store (redux + async)
import { connect } from 'react-redux';
import { IRootState } from '../../store/store';
import { IAppSettingState } from '../../store/reducers/appSettingsReducer';



interface propsInterface extends IAppSettingState {
  navigation: NavigationProp<any>,
}

function ContactScreen(props: propsInterface) {
  const goTo = (page: string) => {
    props.navigation.navigate(page);
  }
  return (
    <View style={rootStyles.container}>

      <View style={{ ...styles.contactSection, ...styles.contactSectionTop }}>
        <Text style={{ ...styles.title, color: props.themeColor }}>Contact us at helpmeleaf@gmail.com</Text>
        {/* <Text style={styles.subtitle}>CEO and Founder, SilvenMOOR</Text> */}
        <Text style={styles.subtitle}>(Response within 24hrs)</Text>
      </View>

      <View style={styles.contactSection}>
        <View style={styles.contactPara}>
          <Text style={styles.contactParaText}>
            Need any help? Have some questions? Bug reports?
            Feature requests? Or wanna give us your Feedback?
            Feel free to contact us! We would love to talk to you!!
          </Text>
        </View>
      </View>

      <View style={{ ...styles.contactSection, marginTop: 30 }}>
        <Button color={props.themeColor} icon="email" mode="contained" onPress={() => Linking.openURL('mailto:helpmeleaf@gmail.com?subject=Feedback')}>
          Open Email
        </Button>
      </View>


      <View style={styles.contactSection}>
        <View style={styles.contactPara}>
          <Text style={styles.contactParaText}>
            Your query not solved yet? Contact me personally!
            Here is my contact info: Talegram handle @SilvenLEAF

          </Text>
        </View>
      </View>



      <View style={{ ...styles.contactSection, ...styles.knowMore }}>
        <Text>Still facing issues? Visit</Text>
        <Text style={rootStyles.externalLink} onPress={() => Linking.openURL('https://SilvenLEAF.github.io')}>
          SilvenLEAF.github.io
        </Text>
      </View>

    </View>
  );
}


const styles = StyleSheet.create({
  externalLink: {
    color: 'blue',
    marginLeft: 5,
  },
  title: {
    fontSize: 20,
  },
  subtitle: {
    color: rootVariables.color.grayColor,
    fontSize: 15,

  },
  contactSection: {
    marginTop: 20,
    display: 'flex',
    alignItems: 'center',
  },
  contactSectionTop: {
    marginTop: 70,
    display: 'flex',
    alignItems: 'center',
  },
  contactPara: {
    marginTop: 20,
    textAlign: 'left',
    width: 290,
    display: 'flex',
    alignItems: 'flex-start',
  },
  contactParaText: {
    textAlign: 'justify',
    alignItems: 'center',
  },
  knowMore: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 40,
  },
})

const mapStateToProps = (state: IRootState) => {
  return {
    ...state.app,
  }
}

export default connect(mapStateToProps)(ContactScreen)
