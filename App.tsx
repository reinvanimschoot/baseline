import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CodePush from 'react-native-code-push';

export default class App extends Component {
  componentDidMount() {
    CodePush.sync();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={[styles.welcome, { color: 'blue' }]}>Welcome to BASELINE</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
