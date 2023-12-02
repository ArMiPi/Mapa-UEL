import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { View } from 'react-native';

import IndexNav from './src/navigation/IndexNav';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function App(){
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{flex: 1}}>
        <NavigationContainer theme={{ colors: { background: '#1C1B1B' }}} >
          <IndexNav/>
        </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

/* 
TODO: 
- Se usuario já estiver logado o initial route do Perfil tem que ser a tela de perfil
- Testar para ver se o teclado aparece quando clica nos campos de escrita
- Mostar mensagens de erro no proprio aplicativo e não somente no console
- Teclado dismiss no video que está salvo no Watch Later
- const { library } = this.props usar desse jeito pra ficar mais facil entender
- ProfileNav adicionar state como user:[{fullName: , email: , password: ,}]
- Fazer gradiente nas pontas dos dividers de eventos e Ou
- Tela de evento criado com sucesso
*/