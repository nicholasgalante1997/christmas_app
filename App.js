import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import AppLoading from 'expo-app-loading'
import {useFonts} from 'expo-font'
import {enableScreens} from 'react-native-screens'

import {createStore} from 'redux'
import {Provider} from 'react-redux'
import favoritesReducer from './store/favorites'

import FullStackNavigator from './navigation/FullStackNavigator'

enableScreens();

const store = createStore(favoritesReducer);

export default function App() {

  let [fontsLoaded] = useFonts({
    "xmas-bold": require('./fonts/MountainsofChristmas-Bold.ttf'),
    "xmas-lite": require('./fonts/MountainsofChristmas-Regular.ttf')
  });

  if (!fontsLoaded){
    return <AppLoading />
  }

  return (
    <Provider store={store}>
      <FullStackNavigator />
    </Provider>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
