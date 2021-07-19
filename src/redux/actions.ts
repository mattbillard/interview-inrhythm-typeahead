import axios from 'axios';

/**
 * TODO:
 * - Implement getCountries
 * - Use Axios or fetch to get the countries from `/api/countries.json`
 * - Store the result in the reducer
 */
export const getCountries = () => async dispatch => {
  const url = `/api/countries.json`;
  const response = await axios.get(url);  
  const countries = response.data;

  dispatch({ type: 'GET_COUNTRY', countries });
};
  

/**
 * TODO:
 * - Implement setCountry
 * - Store the country in the reducer
 */
export const setCountry = (country: string) => ({ type: 'SET_COUNTRY', country });