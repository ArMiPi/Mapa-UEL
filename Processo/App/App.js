import { StyleSheet, Text, View } from 'react-native';
import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

import AutenticNav from './src/AutenticNav';

export default function App(){
  return (
    <NavigationContainer>
      <AutenticNav />
    </NavigationContainer>
  );
}


{/* <Tab.Navigator screenOptions={{headerShown: false}} initialRouteName='Profile'>
        <Tab.Screen name="Profile" component={IndexNav}/>
        <Tab.Screen name="Map" component={IndexNav}/>
        <Tab.Screen name="Events" component={IndexNav}/>
      </Tab.Navigator> */}