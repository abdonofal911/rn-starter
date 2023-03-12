import React from "react";
import { View, StyleSheet, Button, FlatList, Text } from "react-native";

const ColoCounter = (props) => {
  return (
    <View>
      <Text>{props.Color}</Text>
      <Button
        title={`Increase ${props.Color}`}
        onPress={() => props.onIncrease()}
      />
      <Button
        title={`Decrease ${props.Color}`}
        onPress={() => props.onDecrease()}
      />
    </View>
  );
};

export default ColoCounter;
