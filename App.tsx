import 'react-native-gesture-handler'; // this MUST be on extreme top of this file (make sure there is nothing else above it)

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootDrawer from './NeiXin/navigation/RootDrawer';
import { Provider } from 'react-redux';
import { store } from './NeiXin/store/store';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootDrawer />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
