import React from 'react'
import { Text, View } from 'react-native'
import { connect } from 'react-redux'
import Style from './AllEventsScreenStyle'
import { Helpers, Metrics } from 'App/Theme'

class AllEvents extends React.Component {
  componentDidMount() {
    // this._fetchEvents()
  }

  render() {
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
          <View style={Style.colMain}>
            <View style={Style.eventHeader}>
              {/* <View style={Style.eventAvatar} /> */}
              <Text style={Style.headerText}>All Events</Text>
              <Text style={Style.headerText}>New York, NY</Text>
              <Text style={Style.headerText}>8/21/220</Text>
            </View>

            <View style={Style.eventImg} />

            <View>
              <Text style={Style.text}>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim.
                <Text style={Style.text}>Name of Event</Text>
              </Text>
              <Text style={Style.moreText}>...more</Text>
            </View>
          </View>
        </View>
      </>
    )
  }

  // _fetchEvents() {
  //   this.props.fetchEvents()
  // }
}

AllEvents.propTypes = {
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
  // fetchEvents: () => dispatch(ExampleActions.fetchEvents()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllEvents)
