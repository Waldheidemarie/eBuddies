import React from 'react'
import { connect } from 'react-redux'
import { View, Text, Button, TextInput, StyleSheet } from 'react-native'
import Style from '../AllEvents/AllEventsScreenStyle'
import styles from './SignUpScreenStyle'
import { ApplicationStyles, Helpers, Images, Metrics, Fonts } from 'App/Theme'

class SignUp extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.background}>
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
            placeholder="Create Password"
            placeholderTextColor="rgba(38,153,251,1)"
            secureTextEntry
          />
          <View style={styles.button}>
            <Button color="white" style={{ ...Fonts.normal, textAlign: 'center' }} title="CONTINUE">
              CONTINUE
            </Button>
          </View>
          <View style={styles.account}>
            <Text>Already have an account?</Text>
          </View>
          <View style={styles.login}>
            <Button color="white" style={{ ...Fonts.small }} title="LOGIN" />
          </View>
        </View>
      </View>
    )
  }
}

export default connect(null)(SignUp)
