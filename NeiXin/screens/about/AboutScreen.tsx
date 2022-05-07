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
import xconfig from '../../core/xconfig';



interface propsInterface extends IAppSettingState {
  navigation: NavigationProp<any>
}

function AboutScreen(props: propsInterface) {
  const goTo = (page: string) => {
    props.navigation.navigate(page);
  }
  return (
    <View style={rootStyles.container}>
      <Avatar.Image
        source={rootVariables.assets.developerImage}
        size={190}
      />
      <View style={styles.aboutSection}>
        <Text style={{ ...styles.title, color: props.themeColor }}>{xconfig.about.title}</Text>
        <Text style={styles.subtitle}>{xconfig.about.designation}</Text>
      </View>

      <View style={styles.aboutSection}>
        <View style={styles.aboutPara}>
          <Text style={styles.aboutParaText}>
            {xconfig.about.aboutMe}
          </Text>
        </View>
      </View>

      <View style={{ ...styles.aboutSection, ...styles.knowMore }}>
        <Text>To know more, visit</Text>
        <Text style={rootStyles.externalLink} onPress={() => Linking.openURL(xconfig.contact.websiteOpenUrl)}>
          {xconfig.contact.websiteDisplayUrl}
        </Text>
      </View>


      <View style={styles.aboutSection}>
        <View style={styles.aboutPara}>
          <Text style={styles.aboutParaText}>
           {xconfig.about.aboutApp}
          </Text>
        </View>
      </View>


      <View style={{ ...styles.aboutSection, ...styles.copyright }}>
        <Text>&copy; {new Date().getFullYear()} All rights reserved to </Text>
        <Text style={rootStyles.externalLink} onPress={() => Linking.openURL(xconfig.contact.clickSilvenLEAFLink)}>
          SilvenLEAF (Manash Sarma)
        </Text>
      </View>


    </View>
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
