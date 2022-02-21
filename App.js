import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {
   StyleSheet,
    Text, 
    View,
    Button,
    Alert,
    TouchableHighlight,
    ScrollView,
  Image} from 'react-native';

 import MeuComponente1 from './elemento';

export default function App() {


  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
     
      
      <Text style = {styles.titulo}>Banco de Imagens</Text>
      
      <ScrollView >
      <View style={styles.bloco}>

      
      
      
      <Image style ={styles.grupoImagens} source={require('./assets/balão.jpeg')}/>

      <Button
      title='clique'
      onPress={()=> Alert.alert('São balões!')}
      />
      
                  
      </View>
      

      <View style ={styles.bloco2}>

      <Image style ={styles.grupoImagens} source={require('./assets/uva.jpg')}/>

      <Button
      title='clique'
      onPress={()=> Alert.alert('São uvas!')}
      />
      </View>
      <View style ={styles.bloco3}>

      <Image style ={styles.grupoImagens} source={require('./assets/pessoas.jpg')}/>

      <Button
      title='clique'
      onPress={()=> Alert.alert('São pessoas!')}
      />
      </View>
      <View style ={styles.bloco4}>

      <Image style ={styles.grupoImagens} source={require('./assets/camisas.jpg')}/>

      <Button
      title='clique'
      onPress={()=> Alert.alert('São camisas!')}
      />
      </View>
      

        
      </ScrollView>
      
     
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
    
  },
  grupoImagens:{
    width:340,
    height:320,
    marginTop:50
  },
  titulo:{
    marginTop:50,
    fontSize:25,
    padding:10,
    backgroundColor:'#66CDAA',
    borderRadius:15
  }
  

 
  
  
 
});

