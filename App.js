import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, TextInputBase} from 'react-native';

export default function App() {

  const [height, setHeight] = useState(0);
  const [weigth, setWeigth] = useState(0);
  const [result, setResult] = useState(0);

  const calbmi = () =>{
    
    const heightFormatter = height / 100;
    let bmi = weigth / (heightFormatter*heightFormatter);
    bmi = bmi.toFixed(2);
    setResult(bmi);

  }

  return (
    <View style={styles.container}>
     
       <Text>please add your height in cm</Text>
      <TextInput
        style={styles.inputStyle}
        value={height}
        onChangeText={text => setHeight(text)}
      />
         <Text>please add your weigth in cm</Text>
      <TextInput
        style={styles.inputStyle}
        value={weigth}
        onChangeText={text => setWeigth(text)}
      />

      <Text style={{fontSize:30, marginVertical:20}}>{result}</Text>

      <TouchableOpacity onPress={calbmi} style={{width:'100%', paddingVertical:10, borderRadius:20,alignItems:'center',backgroundColor:'#ffffff'}}>
        <Text>calculate BMI</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  inputStyle:{
   backgroundColor:'#ffffff',
   width:'100%',
   borderRadius:20,
   paddingHorizontal:10,
   paddingVertical:20,
   marginTop:6,
   fontSize:16,
   textAlign:'center'
  },
  container: {
    flex: 1,
    backgroundColor: '#0099cc',
    alignItems: 'center',
    justifyContent: 'center',
    padding:50
  },
});
