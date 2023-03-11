import React, { useState } from 'react'
import { TextInput,Text, StyleSheet, Button, TouchableOpacity, View } from "react-native";
import { onChange } from 'react-native-reanimated';


const TextScreen = () => {

    const [ name , setName] = useState('')
  return (
    <View>
    <Text > What's you name , sir ?</Text>
    <TextInput 
    style={styles.input} 
    autoCapitalize="none"
    autoCorrect={false}
    value={name}
    onChangeText={(newValue)=> setName(newValue)}
    
    />
      <Text style={styles.text}>
      Hello There , Mr {name}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
    text: {
      fontSize: 30,
    },
    input :{
        borderColor : 'black' ,
        borderWidth : 1,
        height : 35,
         margin : 15 ,
    }
   
  });
  
export default TextScreen
