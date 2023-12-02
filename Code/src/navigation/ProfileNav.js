import React, { Component } from 'react'
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import IndexProfile from '../screens/profile/IndexProfile';
import Login from '../screens/profile/Login';
import CreateAccount from '../screens/profile/CreateAccount';
import Maintence from '../screens/Maintence';

export default class ProfileNav extends Component{

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
      <Stack.Navigator screenOptions={{headerShown: false, animationEnabled: true}} initialRouteName='IndexProfile' >
        <Stack.Screen name="IndexProfile" component={IndexProfile}/>
        <Stack.Screen name="Login">
          {props => <Login {...props} state={this.state}/>}
        </Stack.Screen>
        <Stack.Screen name="CreateAccount">
          {props => <CreateAccount {...props} addUser={this.addUser}/>}
        </Stack.Screen>
        <Stack.Screen name="Maintence" component={Maintence}/>
      </Stack.Navigator>
    );
  }
}