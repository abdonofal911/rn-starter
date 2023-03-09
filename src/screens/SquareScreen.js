import React, { useState } from "react";
import { View, StyleSheet, Button, FlatList, Text } from "react-native";
import { set } from "react-native-reanimated";
import ColoCounter from "../Components/ColoCounter";

const COLOR_INCREMENT = 15;

const SquareScreen = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  const setColor = (color, change) => {
    //Color === Red or Green or Blue
    //change is +15 or -15
    switch (color) {
      case'red':
      red + change > 255 || red + change < 0 ? null : setRed(red + change);
      return;
      case'blue':
      blue + change > 255 || blue + change < 0 ? null : setBlue(blue + change);
      return;
      case'green':
      green + change > 255 || green + change < 0 ? null : setGreen(green + change);
      return;
      default:
        return;
    }
  };
  return (
    <View>
      <ColoCounter
        Color="Red"
        onIncrease={() => setColor('red' , COLOR_INCREMENT)}
        onDecrease={() => setColor('red' ,-1 * COLOR_INCREMENT)}
      />
      <ColoCounter
        Color="Blue"
        onIncrease={() => setColor('blue' , COLOR_INCREMENT)}
        onDecrease={() => setColor('blue' ,-1 * COLOR_INCREMENT)}
      />
      <ColoCounter
        Color="Green"
        onIncrease={() => setColor('green' ,COLOR_INCREMENT)}
        onDecrease={() => setColor('green' ,-1 * COLOR_INCREMENT)}
      />
      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${red},${green},${blue})`,
          marginTop: 50,
          marginLeft: 125,
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({});

export default SquareScreen;
