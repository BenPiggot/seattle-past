import axios from 'axios';
import { FETCH_USER, FETCH_LOCATIONS } from './types';

export const fetchUser = () => {
  return async (dispatch) => {
    const response = await axios.get('/api/current_user');
    dispatch({
      type: FETCH_USER,
      payload: response.data
    })
  }
}

export const fetchLocations = (location) => {
  return async (dispatch) => {
    const response = await axios.get('/api/locations')
    dispatch({
      type: FETCH_LOCATIONS,
      payload: response.data
    })
  }
}
