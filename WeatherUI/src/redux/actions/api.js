import RNFetchBlob from 'react-native-fetch-blob'
/**
 * 
 * @param {String} url 
 * @param {String} type 
 * @param {Object} options 
 * @param {Object} body 
 */
export const apiFetch = (url, type, options = {}) => {
  return new Promise((resolve, reject) => {
    RNFetchBlob
      .fetch('GET', url, {
        ...options,
        Accept: 'application/json',
      })
      .then(res => {
        const payload = { data: res.json(), meta: { state: 'success' } }
        resolve(payload)
      })
      .catch(er => {
        const payload = { meta: { state: 'failure', cause: er } }
        reject(payload)
      })
  })
}
/**
 * 
 * @param {String} url 
 * @param {String} type 
 * @param {Object} options 
 * @param {Object} body 
 */
export const api = (url, type, options = {}, body) => {
  return new Promise((resolve, reject) => {
    RNFetchBlob
      .fetch(type, url, {
        ...options,
        Accept: 'application/json',
      }, {
        ...body
      })
      .then(res => {
        const payload = { data: res.json(), meta: { state: 'success' } }
        resolve(payload)
      })
      .catch(er => {
        const payload = { meta: { state: 'failure', cause: er } }
        reject(payload)
      })
  })
}