import React, { Component } from 'react'
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import IndexEvents from '../screens/events/IndexEvents'
import Event from '../screens/events/Event'
import CreateEvent from '../screens/events/CreateEvent'
import { View } from 'react-native';

export default class EventsNav extends Component{

  state = {
    events: [{name: "Evento 1", description: "Descrição 1", location: "Rua teste, Número 111", more: "Teste de informações adicionais"}, {name: "Evento 2", description: "Descrição 2", location: "Rua teste, Número 111", more: "Teste de informações adicionais"}, {name: "Evento 3", description: "Descrição 3", location: "Rua teste, Número 111", more: "Teste de informações adicionais"}]
  }

  addEvent = (eventName, description, location, more) => {
    const newEvent = {
      name: eventName,
      description: description,
      location: location,
      more: more
    };
  
    this.setState(prevState => ({
      events: [...prevState.events, newEvent]
    }));
  }
  
  render() {
    return (
        <Stack.Navigator screenOptions={{headerShown: false, animationEnabled: true}} initialRouteName='IndexEvents'>
          <Stack.Screen name="IndexEvents" >
            {props => <IndexEvents {...props} events={this.state.events} />}
          </Stack.Screen>
          <Stack.Screen name="Event" options={({ route }) => ({ title: route.params.event })} component={Event}/>
          <Stack.Screen name="CreateEvent" >
            {props => <CreateEvent {...props} addEvent={this.addEvent} />}
          </Stack.Screen>
        </Stack.Navigator>
    );
  }
}