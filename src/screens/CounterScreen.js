import React, { useState, useReducer } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + action.payload };
    case "decrement":
      return { ...state, count: state.count - action.payload };
    case "reset":
      return { ...state, count: 0 };

    default:
      return state;
  }
};

const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <View>
      <Button
        title="Increase"
        onPress={() => {
          dispatch({ type: "increment", payload: 1 });
        }}
      />
      <Button
        title="Decrease"
        onPress={() => {
          dispatch({ type: "decrement", payload: 1 });
        }}
      />
      <Button
        title="Reset"
        onPress={() => {
          dispatch({ type: "reset" });
        }}
      />

      <Text> Current Count </Text>
      <Text>{state.count}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});
export default CounterScreen;
