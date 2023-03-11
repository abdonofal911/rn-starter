import React, { useState } from 'react'
import { TextInput,Text, StyleSheet, Button, TouchableOpacity, View } from "react-native";
import { onChange } from 'react-native-reanimated';


const TextScreen = () => {

    const [ password , setPassword] = useState('')
  return (
    <View>
    <Text > Hello, Password Please ?</Text>
    <TextInput 
    style={styles.input} 
    autoCapitalize="none"
    autoCorrect={false}
    value={password}
    onChangeText={(newValue)=> setPassword(newValue)}
    secureTextEntry={true}    
    />

    {password.length <5 ? <Text> Password must be more than 4 Characters</Text> : null}  

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
