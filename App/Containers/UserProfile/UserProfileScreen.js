import React from 'react'
import { Text, View, Image } from 'react-native'
import { connect } from 'react-redux'
import Style from './UserProfileScreenStyle'
class UserProfileScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={Style.header}>
          <Text style={Style.headerText}>PROFILE</Text>
        </View>
        <View style={Style.imageContainer}>
          <Image
            style={Style.image}
            source={{
              uri:
                'https://icons-for-free.com/iconfiles/png/512/avatar+human+male+man+men+people+person+profile+user+users-1320196163635839021.png',
            }}
          />
        </View>
        <View style={Style.profileContainer}>
          <Text style={Style.name}>John Doe</Text>
          <Text style={Style.location}>San Francisco, CA</Text>
          <Text style={Style.description}>
            Hi! My name is John, I'm a creative geek from San Francisco, CA. I enjoy creating eye
            candy solutions for web and mobile apps. Contact me at john@mail.com
          </Text>
        </View>
        <View style={Style.interestsContainer}>
          <Text style={Style.interests}>INTERESTS</Text>
          <View style={Style.interestContainer}>
            <Text style={Style.interest}>Food</Text>
            <Text style={Style.interest}>HealthFitness</Text>
          </View>
        </View>
      </View>
    )
  }
}
export default connect(null)(UserProfileScreen)
