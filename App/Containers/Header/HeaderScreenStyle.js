import { StyleSheet } from 'react-native'
import { Helpers, Metrics, Fonts, Colors } from 'App/Theme'

export default StyleSheet.create({
  headerMain: {
    ...Helpers.fullWidth,
    height: 70,
    backgroundColor: Colors.lightBlue,
    padding: Metrics.medium,
  },
  headerText: {
    ...Fonts.normal,
    color: Colors.primary,
    textAlign: 'left',
    marginTop: 3,
    marginBottom: 0,
    marginHorizontal: 20,
    fontSize: 13,
  },
})
