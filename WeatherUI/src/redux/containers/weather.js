import React, { Component } from 'react'
import { StatusBarIOS, Image } from 'react-native'
import { bindActionCreators } from 'redux'
import * as actions from '../actions'
import { connect } from 'react-redux'
import Weather from './mainContainer'
class WeatherReduxWrapper extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Weather
        state={this.props.state}
        actions={this.props.actions} />
    )
  }
}

export default connect(state => ({
  state: state.reducer
}),
  (dispatch) => ({
    actions: bindActionCreators(actions, dispatch)
  })
)(WeatherReduxWrapper)