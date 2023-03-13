import React from "react";
import { Text, View, StyleSheet } from "react-native";

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <View style={styles.View1Style}>
       
       </View>
      <View style={styles.View2Style}>
      
      </View>
      <View style={styles.View3Style}>
      
      </View>
      </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 2.5,
    borderColor: "black",
    height: 200,
    flexDirection:'row'    ,justifyContent:"space-between"

    
  },
  View1Style: {
    height:75,width:100,
    backgroundColor:'red'
    
  },
  View2Style: {
    height:75,width:100,backgroundColor:'green',top:75


}, 
 View3Style: {
    height:75,width:100,backgroundColor:'purple'



  },
  parentView: {
flexDirection:"row"  }
});

export default BoxScreen;
