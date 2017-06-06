import { combineReducers } from 'redux'
import * as types from '../types';

const initialState = {
  dayOfWeek: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
};

const reducer = (state = initialState, { type, data, meta }) => {

  switch (type) {
    case types.AFTER_GET_WEATHER_DATA:
      return { ...state, data, meta }
  }
  return state
}



const rootReducers = combineReducers({
  reducer,
})

export default rootReducers