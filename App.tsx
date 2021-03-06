import 'react-native-gesture-handler';
import React from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { store } from '@src/store/store';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const App = () => {
  return (
    <>
      <Provider store={store}>
        <NavigationContainer>
          <StatusBar barStyle="dark-content" />
          <SafeAreaProvider>
            
          </SafeAreaProvider>
        </NavigationContainer>
      </Provider>
    </>
  );
};

export default App;
