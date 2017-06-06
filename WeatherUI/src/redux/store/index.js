import { AsyncStorage } from 'react-native'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import rootReducer from '../reducers'

const middleware = [thunk]
if (__DEV__) {
  middleware.push(logger)
}

const configureStore = initState => {
  const enhancer = compose(
    applyMiddleware(...middleware)
  )
  const store = createStore(rootReducer, initState, enhancer)

  return store
}
export default configureStore