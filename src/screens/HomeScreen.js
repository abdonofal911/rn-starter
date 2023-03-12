import React from "react";
import { Text, StyleSheet, Button, TouchableOpacity, View } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>Welcome at Home</Text>

      <Button
        style={styles.Button}
        onPress={() => navigation.navigate("Components")}
        title="Go to Components"
      />

      <Button
        style={styles.Button}
        onPress={() => navigation.navigate("List")}
        title="Go to List"
      />

      <Button
        style={styles.Button}
        onPress={() => navigation.navigate("Images")}
        title="Go to Image Screen"
      />

      <Button
        style={styles.Button}
        onPress={() => navigation.navigate("Counter")}
        title="Go to Counter Screen"
      />
      <Button
        style={styles.Button}
        onPress={() => navigation.navigate("Color")}
        title="Go to Color Screen"
      />
      <Button
        style={styles.Button}
        onPress={() => navigation.navigate("Square")}
        title="Go to Square Screen"
      />
      <Button
        style={styles.Button}
        onPress={() => navigation.navigate("SquareR")}
        title="Go to Square Reducer Screen"
      />
      <Button
        style={styles.Button}
        onPress={() => navigation.navigate("Text")}
        title="Go to Text Screen"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
  Button: {
    marginVertical: 50,
    padding: 20,
  },
});

export default HomeScreen;
