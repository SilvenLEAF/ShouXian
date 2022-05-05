import React from 'react';
import { Text, View } from 'react-native';
import rootStyles from '../root/rootStyles';

function AboutScreen() {
  return (
    <View style={{ ...rootStyles.container, ...rootStyles.centered }}>
      <Text>I am SilvenLEAF, Software Engineer @ X0PA AI</Text>
    </View>
  )
};

export default AboutScreen;