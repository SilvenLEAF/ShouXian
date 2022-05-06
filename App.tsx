import 'react-native-gesture-handler'; // this MUST be on extreme top of this file (make sure there is nothing else above it)

import React from 'react';
import { Provider } from 'react-redux';
import { store } from './NeiXin/store/store';
import RootDrawer from './NeiXin/navigation/RootDrawer';

import Toast from 'react-native-toast-message';

const App = () => {
  return (
    <Provider store={store}>
        <RootDrawer />
        <Toast/>
    </Provider>
  );
};

export default App;
