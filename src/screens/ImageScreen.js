import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ImageDetail from '../Components/ImageDetail'
const ImageScreen = () => {
  return (
    <View>
    <ImageDetail score="6" title="forest" imageSrc={require('../../assets/forest.jpg')}/>   
    <ImageDetail score="8" title="Beach" imageSrc={require('../../assets/beach.jpg')}/>   
    <ImageDetail score="9" title="Mountain" imageSrc={require('../../assets/mountain.jpg')} />   


    </View>
  )
}

const styles = StyleSheet.create({

});

export default ImageScreen
