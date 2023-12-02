import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-web';
import { Entypo } from '@expo/vector-icons';
import React, { Component } from 'react'

export default class CreateEvent extends Component{
  
  state = {
    eventName: '',
    description: '',
    location: '',
    more: '',
  }

  updateEvents(eventName, description, location, more){
    if(eventName != '' && description != '' && location != '' && more != ''){
      this.props.addEvent(eventName, description, location, more)
      this.props.navigation.navigate("IndexEvents")
    }
    else  
      console.log("Campos Não Preenchidos")
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.headerBackButton} onPress={() => this.props.navigation.goBack()}>
              <Entypo name="chevron-left" size={24} color="#DCDCDC" />
          </TouchableOpacity>
        </View>
        <View style={styles.contentHeader}>
          <Text style={styles.title}>Criar Evento</Text>
        </View>
        <View style={styles.content}>
          <View style={styles.InputGroup}>
            <TextInput style={styles.Input} placeholderTextColor="#757575" placeholder="Nome do Evento" 
            onChangeText={(eventName) => {this.setState({eventName})}} />
          </View>
          <View style={styles.InputGroup}>
            <TextInput style={styles.Input} placeholderTextColor="#757575" placeholder="Descrição"
            onChangeText={(description) => {this.setState({description})}}/>
          </View>
          <View style={styles.InputGroup}>
            <TextInput style={styles.Input} placeholderTextColor="#757575" placeholder="Local"
            onChangeText={(location) => {this.setState({location})}} />
          </View>
          <View style={styles.InputGroup}>
            <TextInput style={styles.Input} placeholderTextColor="#757575" placeholder="Informações Adicionais"
            onChangeText={(more) => {this.setState({more})}}/>
          </View>
        </View>
        <View style={styles.button}>
          <TouchableOpacity style={styles.buttonCreate} onPress={() => this.updateEvents(this.state.eventName, this.state.description, this.state.location, this.state.more)}>
            <Text style={styles.buttonCreateText}>Adicionar Evento</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1C1B1B',
  },
  header: {
    marginTop: 40,
    paddingHorizontal: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  contentHeader: {
    width: "100%",
    paddingHorizontal: 15,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    paddingBottom: 38,
    gap: 22,
  },
  headerBackButton: {
    width: 32,
    height: 32,
    backgroundColor: "#2c2b2b",
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    //marginTop: 80,
    paddingHorizontal: 30,
    width: "100%",
    alignItems: "flex-start",
    justifyContent: "center",
    gap: 16,
  },
  titleHeader: {
    color: '#F2F2F2',
    fontWeight: "700",
    fontSize: 20,
    lineHeight: 35,
    textTransform: 'capitalize',
  },
  title: {
    color: "#F2F2F2",
    fontSize: 30,
    lineHeight: 40,
    fontWeight: "700",
  },
  InputGroup: {
    flexDirection: "row",
    paddingHorizontal: 27,
    width: "100%",
    height: 80,
    borderWidth: 1,
    borderColor: "#757575",
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "space-between",
  },
  Input: {
    flex: 1,
    height: "100%",
    color: "#F2F2F2",
  },
  button: {
    paddingTop: 30,
    paddingHorizontal: 30,
  },
  buttonCreate: {
    backgroundColor: "#42C83C",
    height: 80,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonCreateText: {
    color: "#FFF",
    fontSize: 20,
    fontWeight: "700",
  },
});