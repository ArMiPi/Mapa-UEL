import React, { Component } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

import ProfileNav from './ProfileNav';
import Maintence from '../screens/Maintence';
import EventsNav from './EventsNav';

const Tab = createBottomTabNavigator();

export default function IndexNav(){
  return (
    <Tab.Navigator
      screenOptions={{headerShown: false, tabBarActiveTintColor: "#42C83C", tabBarInactiveTintColor: "#737373", tabBarStyle: {backgroundColor: "#343434", height: 75, paddingTop: 10},
      tabBarLabelPosition: "below-icon",
      tabBarLabelStyle: {fontSize: 15, fontWeight: "500", marginBottom: 10}}}
      initialRouteName='Eventos' >
      <Tab.Screen name="Eventos" component={EventsNav} options={{tabBarIcon: ({color}) => (<FontAwesome name="reorder" size={24} color= {color}/>)}}/>
      <Tab.Screen name="Mapa" component={Maintence} options={{tabBarIcon: ({color}) => (<Entypo name="map" size={24} color={color} />)}}/>
      <Tab.Screen name="Perfil" component={ProfileNav} options={{tabBarIcon: ({color}) => (<FontAwesome5 name="user-circle" size={25} color={color}/>)}}/>
    </Tab.Navigator>
  );
}