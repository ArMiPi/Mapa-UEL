import { StyleSheet, Text, View, Image, TextInput, SafeAreaView, FlatList } from 'react-native';
import React, { Component } from 'react'
import { ScrollView, TouchableOpacity } from 'react-native-web';
import { Entypo } from '@expo/vector-icons';

import EventImage from "../../../assets/icon.png"

export default class IndexEvents extends Component{

  render() {
    const { events } = this.props
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Eventos</Text>
          <TouchableOpacity style={styles.headerPlusButton} onPress={() => this.props.navigation.navigate("CreateEvent")}>
              <Entypo name="plus" size={24} color="#DCDCDC" />
          </TouchableOpacity>
        </View>
        <ScrollView>
          <View style={styles.content}>
            {
              !events.length && <Text style={styles.message}>Não há Eventos no Momento</Text>
            }
            {
              events.map((item, index) => (
                <View key={index} style={styles.eventsParent}>
                  <TouchableOpacity style={styles.events} onPress={() => this.props.navigation.navigate("Event", { event: item })}>
                    <Image source={EventImage} style={{width: 50, height: 50}}/>
                    <View style={{flexShrink: 1}}>
                      <Text style={styles.eventTitle}>{item.name}</Text>
                      <Text style={styles.eventSubTitle}>{item.description}</Text>
                    </View>
                  </TouchableOpacity>
                  <View style={styles.separator}>
                    <View style={{ height: 1, backgroundColor: "#757575", flex: 1 }} />
                  </View>
                </View>
              ))
            }
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
  header: {
    marginTop: 40,
    paddingHorizontal: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  headerPlusButton: {
    width: 32,
    height: 32,
    backgroundColor: "#2c2b2b",
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    flex: 1,
    alignItems: 'flex-start',
    marginTop: 30,
    width: "100%",
    paddingHorizontal: 30,
    position: 'absolute',
  },
  title: {
    color: '#F2F2F2',
    fontWeight: "700",
    fontSize: 30,
    lineHeight: 35,
    textTransform: 'capitalize',
  },
  message: {
    textAlign: "center",
    color: '#F2F2F2',
    fontWeight: "700",
    fontSize: 30,
    textTransform: 'capitalize',
    marginTop: 50,
  },
  eventsParent: {
    width: "100%",
  },
  events: {
    width: "100%",
    flexDirection: 'row',
    gap: 20,
    marginBottom: 20,
    marginTop: 20,
    paddingBottom: 20,
    paddingTop: 20,
    // backgroundColor: "purple",
    borderRadius: 30,
  },
  eventTitle: {
    color: '#F2F2F2',
    fontWeight: "700",
    fontSize: 25,
    lineHeight: 35,
    textTransform: 'capitalize',
  },
  eventSubTitle: {
    color: '#A0A0A0',
    fontWeight: "400",
    fontSize: 15,
    lineHeight: 10,
    marginTop: 10,
  },
  separator: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
});