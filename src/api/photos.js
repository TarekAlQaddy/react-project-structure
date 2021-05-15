import axios from 'axios'
import { methods } from './constants'

const { get } = methods
const photosApi = {
  photosSearch: 'https://images-api.nasa.gov/search'
}

export const searchPhotos = ({ url=photosApi.photosSearch, method=get, params=null, data={} }) => {
  console.log('searching..')
  return axios.request({
    method,
    url,
    params,
    data
  })
}
