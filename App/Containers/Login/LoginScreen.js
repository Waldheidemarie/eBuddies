import React from 'react'
import { View, Text, TextInput, StyleSheet, Button } from 'react-native'

import { SafeAreaView } from 'react-navigation'
class Login extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          placeholder="jdoe@gmail.com"
          placeholderTextColor="black"
          keyboardType="email-address"
        />
        <TextInput
          style={styles.textInput}
          placeholder="Enter Password"
          placeholderTextColor="black"
          secureTextEntry
        />
        <View style={{ alignItem: 'center' }}>
          <Button color="rgba(38,153,251,1)" style={styles.loginButton} title="Login">
            Login
          </Button>
          <Button color="black" style={styles.loginButton} title="Sign Up">
            Sign Up
          </Button>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    position: 'relative',
    top: 250,
  },
  textInput: {
    height: 50,
    borderWidth: 0.5,
    borderColor: 'black',
    marginHorizontal: 40,
    marginBottom: 10,
    color: 'black',
    paddingHorizontal: 10,
  },
  loginButton: {
    height: 50,
    borderWidth: 0.5,
    borderColor: 'black',
    marginHorizontal: 40,
    marginBottom: 10,
    color: 'red',
    paddingHorizontal: 10,
  },
  circleGradient: {
    backgroundColor: 'white',
    borderRadius: 5,
  },
  visit: {
    margin: 4,
    paddingHorizontal: 6,
    textAlign: 'center',
    backgroundColor: 'white',
    color: '#008f68',
    fontSize: 12,
  },
})

export default Login
