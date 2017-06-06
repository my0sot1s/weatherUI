import React, { Component } from 'react'
import { Provider } from 'react-redux'
import configureStore from './redux/store'
import AppContainer from './redux/containers/weather'
const store = configureStore()

const AppRoot = props => (
  <Provider store={store}>
    <AppContainer />
  </Provider>
)

export default AppRoot;