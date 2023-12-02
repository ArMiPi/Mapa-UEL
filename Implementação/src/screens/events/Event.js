import { StyleSheet, Text, View, Image, TextInput, SafeAreaView, FlatList } from 'react-native';
import React, { Component } from 'react'
import { ScrollView, TouchableOpacity } from 'react-native-web';
import { Entypo } from '@expo/vector-icons';

import EventImage from "../../../assets/icon.png"

export default class Event extends Component{

  render() {
    const { event } = this.props.route.params
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.headerBackButton} onPress={() => this.props.navigation.goBack()}>
              <Entypo name="chevron-left" size={24} color="#DCDCDC" />
          </TouchableOpacity>
        </View>
        <ScrollView>
          <View style={styles.content}>
              <Image source={EventImage} style={styles.image}/>
              <Text style={styles.textName}>{event.name}</Text>
              <Text style={styles.textTitle}>Descrição</Text>
              <Text style={styles.textSubTitle}>{event.description}</Text>
              <Text style={styles.textTitle}>Local</Text>
              <Text style={styles.textSubTitle}>{event.location}</Text>
              <Text style={styles.textTitle}>Informações Adicionais</Text>
              <Text style={styles.textSubTitle}>{event.more}</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1C1B1B',
  },
  title: {
    color: '#F2F2F2',
    fontWeight: "700",
    fontSize: 30,
    lineHeight: 25,
    textTransform: 'capitalize',
  },
  header: {
    marginTop: 40,
    paddingHorizontal: 30,
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
    alignItems: 'flex-start',
    marginTop: 30,
    width: "100%",
    paddingHorizontal: 30,
    position: 'absolute',
  },
  image: {
    width: 300, 
    height: 300,
    borderRadius: 30,
    alignSelf: "center"
  },
  textName: {
    color: '#F2F2F2',
    fontWeight: "700",
    fontSize: 30,
    lineHeight: 25,
    textTransform: 'capitalize',
    marginTop: 30,
    marginBottom: 25,
  },
  textTitle: {
    color: '#F2F2F2',
    fontWeight: "700",
    fontSize: 20,
    lineHeight: 25,
    textTransform: 'capitalize',
    marginTop: 20,
  },
  textSubTitle: {
    color: '#A0A0A0',
    fontWeight: "700",
    fontSize: 15,
    lineHeight: 25,
    textTransform: 'capitalize',
  }
});