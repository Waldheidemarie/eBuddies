import React from 'react'
import { Text, View } from 'react-native'
import { connect } from 'react-redux'
import Style from './SingleEventScreenStyle'
import { Helpers, Metrics } from 'App/Theme'
// import FontAwesome, {
//   SolidIcons,
//   RegularIcons,
//   BrandIcons,
//   parseIconFromClassName,
// } from 'react-native-fontawesome'

class SingleEvent extends React.Component {
  componentDidMount() {
    // this._fetchSingleEvent()
  }

  render() {
    // const parsedIcon = parseIconFromClassName('fas fa-map-marker-alt')
    return (
      <>
        <View
          style={[
            Helpers.fill,
            Helpers.rowMain,
            Metrics.mediumHorizontalMargin,
            Metrics.mediumVerticalMargin,
          ]}
        >
          <View>
            {/* event image */}
            <View style={Style.eventImg} />

            {/* event information */}
            <View>
              <Text style={Style.eventTitle}>Title</Text>

              <Text style={Style.eventLocation}>
                {/* <FontAwesome style={Style.locationIcon} icon={parsedIcon} /> Location */}
                Location
              </Text>
              <Text style={Style.eventDate}>8/24/20</Text>
              <Text style={Style.eventDescription}>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.
              </Text>
            </View>

            {/* add event button */}
            <View style={Style.addEventCircle}>
              <Text style={Style.addEventPlusSign}>+</Text>
            </View>
          </View>
        </View>
      </>
    )
  }

  // _fetchSingleEvent() {
  //   this.props.fetchSingleEvent()
  // }
}

SingleEvent.propTypes = {
  // event: PropTypes.object,
  // eventIsLoading: PropTypes.bool,
  // eventErrorMessage: PropTypes.string,
  // fetchEvents: PropTypes.func,
}

const mapStateToProps = (state) => ({
  event: state.example.event,
  eventIsLoading: state.example.eventIsLoading,
  eventErrorMessage: state.example.eventErrorMessage,
})

const mapDispatchToProps = (dispatch) => ({
  // fetchSingleEvent: () => dispatch(ExampleActions.fetchSingleEvent()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleEvent)
