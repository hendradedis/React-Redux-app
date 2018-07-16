import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, TextInput, View, Button, Image } from "react-native";
import {connect} from 'react-redux'
import { counterIncrement, counterDecrement, counterClear, counterSet, helloActions } from './actions'
import {combineReducers} from './reducers/index'

class App extends Component {
  constructor(props) {
      super(props)
      this.onChangeText = this.onChangeText.bind()
  }

  onChangeText(number) {
    const count = parseInt(number);
    this.props.counterSet(count);
  }

  render() {
    console.log("cocho",this.props)
    const { container, countViewStyle, welcome } = styles;
    const {helloText, pressedButton} = this.props.hello
    return (
      <View style={container}>
      <Image source={require('./assets/img/0_U2DmhXYumRyXH6X1.png')} style={{width: 100, height: 100}} />
      <Text style={styles.Titles}> Redux</Text>
          <TextInput          
            style={{width: 40, height: 40, borderWidth: 1, textAlign:"center"}}
            onChangeText={this.counterSet}
            value={this.props.count.toString()}
           />
        <View style={countViewStyle}> 
          <Button onPress={this.props.counterIncrement} title="+" />
          <Text style={welcome}>
            {this.props.count}
          </Text>
          <Button onPress={this.props.counterDecrement} title="-" />
        </View>
        <Button onPress={this.props.counterClear} title="Clear" />
        <Text>
          {helloText}
        </Text>
        <Text>
            Did You Press Button ? {pressedButton.toString()}
        </Text>
        <Button onPress={this.props.helloActions} title="Show Me Magic"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00cec9"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  },
  countViewStyle: {
    flexDirection: "row"
  },
  Titles: {
    fontWeight: "bold",
    fontSize: 40,
    paddingBottom:70
  },
});

function mapStateToProps(state) {
  return {
    count : state.counter,
    hello : state.hello
  }
}

export default connect(mapStateToProps, {counterIncrement, counterDecrement, counterClear, counterSet, helloActions})(App);