import { StyleSheet, Text, View } from 'react-native';
import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import Index from './Index';
import Login from './Login';
import Cadastro from './Cadastro';
import Mapa from './Mapa';

export default class AutenticNav extends Component{

  state = {
    fullNames: ["teste"],
    emails: ["admin"],
    passwords: ["adminSenha"],
  }

  addUser = (fullName, email, password) => {
    const fullNames = this.state.fullNames
    const emails = this.state.emails
    const passwords = this.state.passwords
    fullNames.push(fullName)
    this.setState({ fullNames })
    emails.push(email)
    this.setState({ emails })
    passwords.push(password)
    this.setState({ passwords })
    console.log(this.state)
  }

  render() {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName='Index'>
        <Stack.Screen name="Index" component={Index}/>
        <Stack.Screen name="Login">
          {props => <Login {...props} state={this.state}/>}
        </Stack.Screen>
        <Stack.Screen name="Cadastro">
          {props => <Cadastro {...props} addUser={this.addUser}/>}
        </Stack.Screen>
        <Stack.Screen name="Mapa" component={Mapa}/>
      </Stack.Navigator>
    );
  }
}