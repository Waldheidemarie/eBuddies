import React from 'react'
import { Text, View } from 'react-native'
import { connect } from 'react-redux'
import Style from './ChatScreenStyle'

class ChatScreen extends React.Component {
  render() {
    return (
      <View>
        <Text>CHAT HERE</Text>
      </View>
    )
  }
}

export default connect(null)(ChatScreen)
