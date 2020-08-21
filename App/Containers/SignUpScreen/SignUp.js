import React from 'react'
import { View, Text, Button, TextInput, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-navigation'
class SignUp extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.background}>
          <TextInput
            style={styles.textInput}
            placeholder="John Doe"
            placeholderTextColor="rgba(38,153,251,1)"
            keyboardType="name-phone-pad"
          />
          <TextInput
            style={styles.textInput}
            placeholder="jdoe@gmail.com"
            placeholderTextColor="rgba(38,153,251,1)"
            keyboardType="email-address"
          />
          <TextInput
            style={styles.textInput}
            placeholder="Create Password"
            placeholderTextColor="rgba(38,153,251,1)"
            secureTextEntry
          />
          <View style={styles.button}>
            <Button color="white" style={{ fontSize: 10 }} title="CONTINUE">
              CONTINUE
            </Button>
          </View>
          <View style={styles.account}>
            <Text>Already have an account?</Text>
          </View>
          <View style={styles.login}>
            <Text style={{ position: 'absolute', left: 180, top: 20 }}>LOGIN</Text>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgb(233, 233, 233)',
    flex: 1,
    // position: 'relative',
    // top: 250,
  },
  textInput: {
    height: 50,
    backgroundColor: 'rgb(235, 233, 233)',
    borderBottomWidth: 0.5,
    borderBottomColor: 'rgba(38,153,251,1)',
    marginHorizontal: 40,
    marginBottom: 20,
    color: 'rgba(38,153,251,1)',
    fontSize: 17,
    paddingHorizontal: 10,
  },
  background: {
    backgroundColor: 'rgb(235, 233, 233)',
    position: 'relative',
    top: 180,
  },
  button: {
    backgroundColor: 'rgba(38,153,251,1)',
    borderWidth: 0.5,
    textAlign: 'center',
    paddingTop: 10,
    fontSize: 16,
    paddingBottom: 10,
    margin: 10,
    borderColor: 'rgba(38,153,251,1)',
    position: 'absolute',
    top: 250,
    left: 24,
    width: 350,
    height: 60,
  },
  login: {
    width: 550,
    position: 'absolute',
    top: 560,
    height: 60,
    backgroundColor: 'rgba(188, 224, 253, 1)',
  },
  account: {
    fontSize: 12,
    color: 'black',
    position: 'absolute',
    top: 500,
    left: 117,
  },
})

export default SignUp
