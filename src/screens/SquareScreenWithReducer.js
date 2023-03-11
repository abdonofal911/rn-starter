import React, { useReducer, useState } from "react";
import { View, StyleSheet, Button, FlatList, Text } from "react-native";
import { set } from "react-native-reanimated";
import ColoCounter from "../Components/ColoCounter";

const COLOR_INCREMENT = 15;

const reducer = (state , action) => {
  //state === {red : num , green : num , blue : num}
  // action === {type  : 'change_red' || 'change_green' ||'change_blue' , payload : 15 || -15}
  switch (action.type) {
    case 'change_red':
      return state.red + action.payload > 255 || state.red + action.payload < 0  ? state : {...state , red : state.red + action.payload};
      

    case 'change_green':
      return state.green + action.payload > 255 || state.green + action.payload < 0  ? state : {...state , green : state.green + action.payload};

    case 'change_blue':
      return state.blue + action.payload > 255 || state.blue + action.payload < 0  ? state : {...state , blue : state.blue + action.payload};

  
    default: return state ; 
  }

} 

const SquareScreenReducer = () => {


  const [state , dispatch] = useReducer(reducer,{red : 0 , green : 0 , blue : 0})
  const {red , green , blue} = state;

  return (
    <View>
      <ColoCounter
        Color="Red"
        onIncrease={() =>dispatch({type:'change_red' , payload : COLOR_INCREMENT})}
        onDecrease={() =>dispatch({type:'change_red' , payload : -1 * COLOR_INCREMENT})}
      />
      <ColoCounter
        Color="Blue"
        onIncrease={() => dispatch({type:'change_blue' , payload : COLOR_INCREMENT})}
        onDecrease={() => dispatch({type:'change_blue' , payload : -1 * COLOR_INCREMENT})}
      />
      <ColoCounter
        Color="Green"
        onIncrease={() => dispatch({type:'change_green' , payload : COLOR_INCREMENT})}
        onDecrease={() => dispatch({type:'change_green' , payload : -1 * COLOR_INCREMENT})}
      />
      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${state.red},${state.green},${state.blue})`,
          marginTop: 50,
          marginLeft: 125,
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({});

export default SquareScreenReducer;
