import 'react-native-gesture-handler';
import React from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { SafeAreaProvider, initialWindowMetrics } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { store } from '@src/store/store';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Navigation from '@src/components/navigation/Navigation';

import { View, Text } from 'react-native';

const App = () => {
  return (
    <>
      <SafeAreaProvider>
        <Provider store={store}>
          <StatusBar barStyle="light-content" />
          
          <Navigation />
        </Provider>
      </SafeAreaProvider>
    </>
  );
};

export default App;
