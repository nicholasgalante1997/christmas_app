import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';

import AppLoading from 'expo-app-loading'
import {useFonts} from 'expo-font'
import {enableScreens} from 'react-native-screens'

import LandingScreen from './screens/LandingScreen'

enableScreens();


export default function App() {

  let [fontsLoaded] = useFonts({
    "xmas-bold": require('./fonts/MountainsofChristmas-Bold.ttf'),
    "xmas-lite": require('./fonts/MountainsofChristmas-Regular.ttf')
  });

  if (!fontsLoaded){
    return <AppLoading />
  }

  return (
    <LandingScreen />
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
