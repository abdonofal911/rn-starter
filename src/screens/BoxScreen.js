import React from 'react'
import { Text , View , StyleSheet } from 'react-native'

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}> This is Box 1 screens</Text>
      <Text style={styles.textStyle}> This is Box 2 screens</Text>
      <Text style={styles.textStyle}> This is Box 3 screens</Text>

      </View>
  )
}

const styles = StyleSheet.create(
    {
        viewStyle : {
            borderWidth : 2.5 , 
            borderColor : 'black',
            alignItems : 'center'
            
        },
        textStyle : {
            borderWidth : 2.5 , 
            borderColor : 'red',
        }

    }   
)

export default BoxScreen
