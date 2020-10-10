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
const App: () => React$Node = () => {
  return (
    <>
      <StatusBar backgroundColor={colors.bgColor}/>
    <NavigationContainer>
        <Navigation/>
      </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({

});

export default App;
