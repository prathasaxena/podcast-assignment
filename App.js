/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StatusBar,
  StyleSheet,
} from 'react-native';

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './src/navigation/navigation';
import { colors } from './src/constants';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './src/reducers'

const App: () => React$Node = () => {
  const store = createStore(rootReducer)
  return (
    <>
      <StatusBar backgroundColor={colors.bgColor} />
      <Provider store={store}>
        <NavigationContainer>
           <Navigation/>
        </NavigationContainer>
      </Provider>
    </>
  );
};

const styles = StyleSheet.create({

});

export default App;
