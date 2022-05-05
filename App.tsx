import 'react-native-gesture-handler'; // this MUST be on extreme top of this file (make sure there is nothing else above it)

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './NeiXin/screens/HomeScreen';
import RootDrawer from './NeiXin/navigation/RootDrawer';

const App = () => {
  return (
    <NavigationContainer>
      <RootDrawer/>
    </NavigationContainer>
  );
};

export default App;
