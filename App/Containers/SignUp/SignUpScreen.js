import React from 'react'
import { connect } from 'react-redux'
import { View, Text, Image, Button, TextInput, StyleSheet } from 'react-native'
import Style from '../AllEvents/AllEventsScreenStyle'
import styles from './SignUpScreenStyle'
import { ApplicationStyles, Helpers, Images, Metrics, Fonts } from 'App/Theme'
import * as firebase from 'firebase'
import 'firebase/auth'

class SignUp extends React.Component {
  constructor() {
    super()
    this.state = {
      name: '',
      email: '',
      password: '',
    }
  }
  onSignUp = async () => {
    if (this.state.email && this.state.password && this.state.name) {
      try {
        const response = await firebase
          .auth()
          .createUserWithEmailAndPassword(this.state.email, this.state.password)
        const response4 = await firebase
          .database()
          .ref('User/' + firebase.auth().currentUser.uid)
          .set({
            authId: firebase.auth().currentUser.uid,
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            // profile_picture: imageUrl,
          })
        console.log(firebase.auth().currentUser.uid)
      } catch (error) {
        console.log('error', error)
      }
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.background}>
          <View>
            <Image style={styles.arrow} source={require('App/Assets/Images/arrow.png')} />
          </View>
          <TextInput
            style={{
              ...Fonts.normal,
              height: 50,
              backgroundColor: 'rgb(235, 233, 233)',
              borderBottomWidth: 0.5,
              borderBottomColor: 'rgba(38,153,251,1)',
              marginHorizontal: 40,
              marginBottom: 20,
              color: 'rgba(38,153,251,1)',
              paddingHorizontal: 10,
            }}
            onChangeText={(name) => this.setState({ name })}
            value={this.state.name}
            placeholder="John Doe"
            placeholderTextColor="rgba(38,153,251,1)"
            keyboardType="name-phone-pad"
          />
          <TextInput
            style={{
              ...Fonts.normal,
              height: 50,
              backgroundColor: 'rgb(235, 233, 233)',
              borderBottomWidth: 0.5,
              borderBottomColor: 'rgba(38,153,251,1)',
              marginHorizontal: 40,
              marginBottom: 20,
              color: 'rgba(38,153,251,1)',
              paddingHorizontal: 10,
            }}
            onChangeText={(email) => this.setState({ email })}
            value={this.state.email}
            placeholder="jdoe@gmail.com"
            placeholderTextColor="rgba(38,153,251,1)"
            keyboardType="email-address"
          />
          <TextInput
            style={{
              ...Fonts.normal,
              height: 50,
              backgroundColor: 'rgb(235, 233, 233)',
              borderBottomWidth: 0.5,
              borderBottomColor: 'rgba(38,153,251,1)',
              marginHorizontal: 40,
              marginBottom: 20,
              color: 'rgba(38,153,251,1)',
              paddingHorizontal: 10,
            }}
            onChangeText={(password) => this.setState({ password })}
            value={this.state.password}
            placeholder="Create Password"
            placeholderTextColor="rgba(38,153,251,1)"
            secureTextEntry
          />
          <View style={styles.button}>
            <Button
              color="white"
              style={{ ...Fonts.normal, textAlign: 'center' }}
              title="CONTINUE"
              onPress={this.onSignUp}
            >
              CONTINUE
            </Button>
          </View>
          <View style={styles.account}>
            <Button
              color="rgba(38,153,251,1)"
              style={{ ...Fonts.small }}
              title="Already have an account?"
            />
          </View>
          <View style={styles.login}>
            <Button color="rgba(38,153,251,1)" style={{ ...Fonts.small }} title="LOGIN" />
          </View>
        </View>
      </View>
    )
  }
}

export default connect(null)(SignUp)
