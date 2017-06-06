/**
 * created by te.ng
 * at: 25/4
 */

import * as constants from '../types'
import { apiFetch } from './api'

// import api from '../../api/api'

// const link = api.images;

const link = `https://lbrest.herokuapp.com/weather/hanoi/forecast`
export const getWeather = () => {
  return dispatch => {
    apiFetch(link)
      .then(payload => {
        dispatch(afterFetch(payload))
      })
      .catch(err => {
        dispatch(afterFetch(err))
      })
  }
}

export const afterFetch = ({ data, meta }) => ({
  type: constants.AFTER_GET_WEATHER_DATA,
  data,
  meta
})
