import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-web';
import { Entypo } from '@expo/vector-icons';
import React, { Component } from 'react'

const LogoImage = require('../../../assets/logo.png');

export default class CreateAccount extends Component {

  state = {
    fullName: '',
    email: '',
    password: '',
  }

  updateAccounts(fullName, email, password){
    if(fullName != '' && email != '' && password != ''){
      this.props.addUser(fullName, email, password)
      this.props.navigation.navigate("Maintence")
    }
    else  
      console.log("Campos Não Preenchidos")
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.headerBackButton} onPress={() => this.props.navigation.navigate("IndexProfile")}>
              <Entypo name="chevron-left" size={24} color="#DCDCDC" />
          </TouchableOpacity>
          <Image source={LogoImage} style={{width: 50, height: 50}}/>
          <View style={{ width: 32, height: 32 }} />
        </View>
        <View style={styles.contentHeader}>
          <Text style={styles.title}>Criar uma Conta</Text>
        </View>
        <View style={styles.content}>
          <View style={styles.InputGroup}>
            <TextInput style={styles.Input} placeholderTextColor="#757575" placeholder="Nome Completo" 
            onChangeText={(fullName) => {this.setState({fullName})}} />
          </View>
          <View style={styles.InputGroup}>
            <TextInput style={styles.Input} placeholderTextColor="#757575" placeholder="E-mail"
            onChangeText={(email) => {this.setState({email})}}/>
          </View>
          <View style={styles.InputGroup}>
            <TextInput style={styles.Input} placeholderTextColor="#757575" placeholder="Senha" secureTextEntry={true}
            onChangeText={(password) => {this.setState({password})}} />
          </View>
        </View>
        <View style={styles.button}>
          <TouchableOpacity style={styles.buttonLogin} onPress={() => this.updateAccounts(this.state.fullName, this.state.email, this.state.password)}>
            <Text style={styles.buttonLoginText}>Criar Conta</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.separator}>
          <View style={{ height: 1, backgroundColor: "#757575", flex: 1 }} />
          <Text style={styles.separatorText}>Ou</Text>
          <View style={{ height: 1, backgroundColor: "#757575", flex: 1 }} />
        </View>
        <View style={styles.createAccount}>
          <Text style={{color: "#DCDCDC"}}>Já tem uma conta?</Text>
          <TouchableOpacity onPress={() => this.props.navigation.navigate("Login")}>
              <Text style={{color: "#42C83C"}}> Faça login</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#1C1B1B",
      },
      header: {
        marginTop: 40,
        paddingHorizontal: 30,
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
      },
      headerBackButton: {
        width: 32,
        height: 32,
        backgroundColor: "#2c2b2b",
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
      },
      contentHeader: {
        width: "100%",
        paddingHorizontal: 15,
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 80,
        paddingBottom: 38,
        gap: 22,
      },
      title: {
        color: "#F2F2F2",
        fontSize: 30,
        lineHeight: 40,
        fontWeight: "700",
      },
      content: {
        paddingHorizontal: 30,
        width: "100%",
        alignItems: "flex-start",
        justifyContent: "center",
        gap: 16,
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
      recovery: {
        color: "#AEAEAE",
        fontSize: 14,
        fontWeight: "700",
        paddingHorizontal: 25,
        paddingTop: 10,
      },
      button: {
        paddingTop: 30,
        paddingHorizontal: 30,
      },
      buttonLogin: {
        backgroundColor: "#42C83C",
        height: 80,
        borderRadius: 30,
        alignItems: "center",
        justifyContent: "center",
      },
      buttonLoginText: {
        color: "#FFF",
        fontSize: 20,
        fontWeight: "700",
      },
      separator: {
        paddingHorizontal: 30,
        paddingTop: 40,
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
      },
      separatorText: {
        color: "#DCDCDC",
        fontSize: 12,
        fontWeight: "400",
      },
      createAccount: {
        flexDirection: "row",
        justifyContent: 'center',
        paddingTop: 57,
      },
  });