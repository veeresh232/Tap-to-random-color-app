import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Button, Alert, TouchableOpacity, TouchableHighlight, TouchableNativeFeedback } from 'react-native';

export default class App extends React.Component {

  constructor(){
    super();
    this.state= {randomColor:null,insideColor:null}
  }

  getRandomColor = ()=>{
    return 'rgb('+Math.floor(Math.random()*256)+','
    +Math.floor(Math.random()*256)+','
    +Math.floor(Math.random()*256)+')';

  }
  buttonPressed=()=>{
    this.setState({randomColor:this.getRandomColor()});
    this.setState({insideColor:this.getRandomColor()});
  }
  render(){
  return (
    <View style={[styles.container,{backgroundColor:this.state.randomColor}]}>
      <TouchableOpacity
      onPress={this.buttonPressed}>
      <Text
      style={[styles.text,{backgroundColor:this.state.insideColor?this.state.insideColor:'black'}]}>
        Tap!
      </Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    fontSize:30,
    backgroundColor: '#BB2CD9',
    paddingVertical:12,
    paddingHorizontal:20,
    color:'#ffffff',
    borderRadius:10,
    borderColor:'#ffffff',
    borderWidth:2
  }
});
