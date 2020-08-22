import React from 'react'
import { Text, View, Image } from 'react-native'
import { connect } from 'react-redux'
import Style from './UserProfileScreenStyle'

class UserProfileScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={Style.imageContainer}>
          <Image
            style={Style.image}
            source={{
              uri: 'https://cdn2.iconfinder.com/data/icons/thin-line-color-1/21/38-512.png',
            }}
          />
        </View>
        <Text style={Style.name}>John Doe</Text>
        <Text style={Style.location}>San Francisco, CA</Text>
        <Text style={Style.description}>
          Hi! My name is John, I’m a creative geek from San Francisco, CA. I enjoy creating eye
          candy solutions for web and mobile apps. Contact me at john@mail.com
        </Text>
        <Text style={Style.interest}>INTERESTS</Text>
      </View>
    )
  }
}

export default connect(null)(UserProfile)
