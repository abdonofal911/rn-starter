import React from "react";
import { Text, StyleSheet, View, FlatList } from "react-native";

const ListScreen = () => {
  const Friends = [
    { name: "Abdulfattah", age: "23" },
    { name: "Kashory", age: "22" },
    { name: "Ga3ly", age: "22" },
    { name: "Muaz", age: "22" },
    { name: "Safty", age: "22" },
    { name: "Aly", age: "24" },
  ];
  return (
    <FlatList
      data={Friends}
      keyExtractor={(Friends) => Friends.name}
      renderItem={({ item }) => {
        return (
          <Text style={styles.textStyle}>
            {item.name} - Age : {item.age}
          </Text>
        );
      }}
    />
  );
};
const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 45,
    marginLeft: 50,
  },
});

export default ListScreen;
