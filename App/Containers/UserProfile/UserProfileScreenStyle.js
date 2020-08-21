import { StyleSheet } from 'react-native'
import { Helpers, Metrics, Fonts, Colors } from 'App/Theme'
export default StyleSheet.create({
  image: {
    width: 200,
    height: 200,
  },
  name: {
    color: Colors.blue,
    fontWeight: 'bold',
    ...Fonts.h1,
  },
  location: {
    color: Colors.blue,
    ...Fonts.small,
  },
  description: {
    color: Colors.blue,
    ...Fonts.normal,
  },
  interest: {
    color: Colors.blue,
    ...Fonts.h3,
  },
})
