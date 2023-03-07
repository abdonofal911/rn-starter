import React from 'react'
import { StyleSheet, Text, View ,Image} from 'react-native'

const ImageDetail = (props) => {
  return (<View >
    <Image source={props.imageSrc} />
    <Text>
    {props.title}
    </Text>
    <Text>
    image score : {props.score}
    </Text>
    </View>
  )
}

const styles = StyleSheet.create({
    
});

export default ImageDetail
