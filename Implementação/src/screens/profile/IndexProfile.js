import { StyleSheet, Text, View, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-web';

const LogoImage = require('../../../assets/logo.png');
const Union1 = require('../../../assets/union1.svg');
const Union2 = require('../../../assets/union2.svg');

export default function IndexProfile({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image source={LogoImage} style={{width: 100, height: 100}}/>
        <Text style={styles.title}>Universidade Estadual de Londrina</Text>
        <Text style={styles.subTitle}>Mapa da UEL</Text>
        <View style={styles.buttons}>
            <TouchableOpacity style={styles.createAccount} onPress={() => navigation.navigate("CreateAccount")}>
                <Text style={styles.buttonText}>Criar uma conta</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.login} onPress={() => navigation.navigate("Login")}>
                <Text style={styles.buttonText}>Fazer Login</Text>
            </TouchableOpacity>
        </View>
      </View>
      <Image source={Union1} style={{position: 'absolute', width: 200, height: 350, left: 230, bottom: 0, opacity: '50%'}}/>
      <Image source={Union2} style={{position: 'absolute', width: 200, height: 200, left: 230, top: 0, opacity: '50%'}}/>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#1C1B1B',
    },
    content: {
        alignItems: "center",
        marginTop: 150,
        width: "100%",
        paddingHorizontal: 30,
        position: 'absolute',
    },
    title: {
        color: '#F2F2F2',
        fontWeight: "700",
        fontSize: 18,
        lineHeight: 35,
        textTransform: 'capitalize',
        marginTop: 55,
        paddingHorizontal: 15,
    },
    subTitle: {
        color: '#A0A0A0',
        fontWeight: "400",
        fontSize: 14,
        lineHeight: 25,
        marginTop: 21,
    },
    buttons: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: 30,
    },
    createAccount: {
        width: 147,
        height: 73,
        backgroundColor: "#42C83C",
        borderRadius: 30,
        alignItems: "center",
        justifyContent: 'center',
    },
    login: {
        width: 147,
        height: 73,
        alignItems: "center",
        justifyContent: 'center',    
    },
    buttonText: {
        color: "#FFFFFF",
        lineHeight: 26,
        fontWeight: '700',
        fontSize: 15,
    }
  });