import axios from 'axios';
import { FETCH_USER, ADD_LOCATION } from './types';

export const fetchUser = () => {
  return async (dispatch) => {
    const response = await axios.get('/api/current_user');
    dispatch({
      type: FETCH_USER,
      payload: response.data
    })
  }
}

export const addLocation = (location) => {
  return async (dispatch) => {
    const response = await axios.post('/api/locations', location)
    dispatch({
      type: ADD_LOCATION,
      payload: response.data
    })
  }
}
