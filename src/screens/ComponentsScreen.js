import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentsScreen = () => {
  return (
    <View>
      <Text style={Styles.textStyle}> This is ComponentsScreen </Text>
      <Text> Hi abdo </Text>
    </View>
  );
};

const Styles = StyleSheet.create({
  textStyle: {
    fontSize: 35,
  },
});

export default ComponentsScreen;
