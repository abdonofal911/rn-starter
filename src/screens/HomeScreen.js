import React from "react";
import { Text, StyleSheet ,Button , TouchableOpacity, View} from "react-native";

const HomeScreen = ({navigation}) => {
  return (
    <View>
    <Text style={styles.text} >
    Hello
    </Text>

    <Button 
    style={styles.Button}
    onPress={()=>navigation.navigate('Components')}
    title="Go to Components" />

    <Button 
    style={styles.Button}
    onPress={()=>navigation.navigate('List')}
    title="Go to List" />
   
    
    </View>
    );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    
  },
  Button:{
    marginVertical:50
  }
});

export default HomeScreen;
