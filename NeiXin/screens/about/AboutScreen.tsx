import React from 'react'
import { View, Text, StyleSheet, Button, ScrollView, Linking } from 'react-native'
import { NavigationProp } from '@react-navigation/native';
import { Avatar } from 'react-native-paper';

import rootVariables from '../../root/rootVariables';
import rootStyles from '../../root/rootStyles';

// ___________________ store (redux + async)
import { connect } from 'react-redux';
import { IRootState } from '../../store/store';
import { IAppSettingState } from '../../store/reducers/appSettingsReducer';



interface propsInterface extends IAppSettingState {
  navigation: NavigationProp<any>
}

function AboutScreen(props: propsInterface) {
  const goTo = (page: string) => {
    props.navigation.navigate(page);
  }
  return (
    <ScrollView contentContainerStyle={rootStyles.container}>
      <Avatar.Image
        source={rootVariables.assets.developerImage}
        size={190}
      />
      <View style={styles.aboutSection}>
        <Text style={{ ...styles.title, color: props.themeColor }}>Hello there! I'm SilvenLEAF</Text>
        <Text style={styles.subtitle}>Software Engineer</Text>
      </View>

      <View style={styles.aboutSection}>
        <View style={styles.aboutPara}>
          <Text style={styles.aboutParaText}>
            A sweet little boy, {new Date().getFullYear() - 2002} years old, born on 31st Dec 2001.
            Insanely obsessed with Chinese, Japanese and with Tech.
            Wanna know more about me?
          </Text>
        </View>
      </View>

      <View style={{ ...styles.aboutSection, ...styles.knowMore }}>
        <Text>To know more, visit</Text>
        <Text style={rootStyles.externalLink} onPress={() => Linking.openURL('https://SilvenLEAF.github.io')}>
          SilvenLEAF.github.io
        </Text>
      </View>


      <View style={styles.aboutSection}>
        <View style={styles.aboutPara}>
          <Text style={styles.aboutParaText}>
            About this APP, created and developed by SilvenLEAF.
            Kill your HSK with your HSKill.
            Best app to revise Chinese Character recognition and Vocabulary.
            All based on HSK wordlists.
            Learn at your own pace. Practice anytime, anywhere.
            Diverse way to revise and solidify your Character recognition.
            Make your own custom collections and enjoy learning! 加油!!!
          </Text>
        </View>
      </View>


      <View style={{ ...styles.aboutSection, ...styles.copyright }}>
        <Text>&copy; {new Date().getFullYear()} All rights reserved to </Text>
        <Text style={rootStyles.externalLink} onPress={() => Linking.openURL('https://www.linkedin.com/in/silvenleaf/')}>
          SilvenLEAF (Manash Sarma)
        </Text>
      </View>


    </ScrollView>
  );
}


const styles = StyleSheet.create({
  title: {
    fontSize: 20,
  },
  subtitle: {
    color: rootVariables.color.grayColor,
    fontSize: 15,
  },
  aboutSection: {
    marginBottom: 20,
    display: 'flex',
    alignItems: 'center',
  },
  aboutPara: {
    marginTop: 20,
    textAlign: 'left',
    width: 290,
    display: 'flex',
    alignItems: 'flex-start',
  },
  aboutParaText: {
    textAlign: 'justify',
    alignItems: 'center',
  },
  knowMore: {
    justifyContent: 'center',
    flexDirection: 'row',
  },
  copyright: {
    marginTop: 30,
  }
})

const mapStateToProps = (state: IRootState) => {
  return {
    ...state.app,
  }
}

export default connect(mapStateToProps)(AboutScreen)
