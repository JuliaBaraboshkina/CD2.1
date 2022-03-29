import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView,Image } from 'react-native';

export default function App() {
  return (
    
    <SafeAreaView style={styles.container}>
      <Text style={{fontWeight:"bold", top: 10, color:"black", fontSize:20, front:'courier'}}>Журнал Bright {'\n'} </Text>
      <View style={styles.box}>
        <Text style={{color:'blue', fontSize: 15, top:20, left: 32}}>Новости</Text>
        <Image style={{width: 250, height: 200, top: 50, right: 32}} source={require('./image/pict.jpg')} />
        <Text style={{position:'absolute' ,top: 270,left:30,fontWeight:"bold", color:"black", fontSize:18}}>Помощь себе при стрессе</Text>
        <Text style={{position:'absolute' ,top: 320,left:15,fontWeight:"normal", color:"black", fontSize:15}}>
          1. Возвращайтесь в «здесь и сейчас».{'\n'}
          2. Нормализуйте режим сна.{'\n'}
          3. Заземлитесь. {'\n'}
          4. Медитируйте.{'\n'}
          5. Попробуйте дышать в пакет.
        </Text>
      </View>
                    
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#DDC7C2',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative'
  },
  box: {
    flex: 0,
    backgroundColor:'white',
    width: 300,
    height: 450,
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'relative'
  },

});