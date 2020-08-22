import React from 'react'
import { Text, View } from 'react-native'
import Style from './HeaderScreenStyle'

const HeaderScreen = () => {
  return (
    <>
      <View style={Style.colMain}>
        <View style={Style.headerMain}>
          <Text style={Style.headerText}>All Events</Text>
          <Text style={Style.headerText}>New York, NY</Text>
          <Text style={Style.headerText}>8/21/20</Text>
        </View>
      </View>
    </>
  )
}

export default HeaderScreen
