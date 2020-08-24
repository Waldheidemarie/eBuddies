import { StyleSheet } from 'react-native'
import { Helpers, Metrics, Fonts, Colors } from 'App/Theme'

export default StyleSheet.create({
  colMain: {
    ...Helpers.fullWidth,
    width: 375,
    height: 667,
    backgroundColor: Colors.white,
    overflow: 'hidden',
  },
  eventImg: {
    width: 375,
    height: 250,
    backgroundColor: Colors.secondary,
    overflow: 'hidden',
  },
  eventTitle: {
    ...Fonts.h4,
    color: Colors.blue,
    textAlign: 'left',
    marginTop: 20,
    marginHorizontal: 20,
  },
  eventLocation: {
    ...Fonts.medium,
    color: Colors.blue,
    textAlign: 'left',
    marginHorizontal: 20,
  },
  eventDate: {
    ...Fonts.medium,
    color: Colors.blue,
    textAlign: 'left',
    marginHorizontal: 20,
  },
  eventDescription: {
    ...Fonts.h6,
    color: Colors.blue,
    textAlign: 'left',
    marginTop: 20,
    marginBottom: 20,
    marginHorizontal: 20,
  },
  moreText: {
    ...Fonts.normal,
    color: Colors.text,
    textAlign: 'left',
    marginBottom: 20,
    marginHorizontal: 20,
    fontSize: 12,
  },
  eventFooter: {
    width: 300,
    alignContent: 'center',
    justifyContent: 'center',
    height: 70,
    backgroundColor: Colors.lightBlue,
    padding: Metrics.medium,
  },
})
