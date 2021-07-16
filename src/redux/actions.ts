import axios from 'axios';

/**
 * TODO:
 * - Implement getCountries
 * - Use Axios or fetch to get the countries from `/api/countries.json`
 * - Store the result in the reducer
 */
export const GET_COUNTRIES = 'GET_COUNTRIES';
export const getCountries = (dispatch) => async () => {
  const url = `/api/countries.json`;
  const response = await axios.get(url);

  dispatch(countriesReceived(response.data));
};



export const SET_COUNTRY = 'SET_COUNTRY';
export const setCountry = (country: string = '') => {
  return {
    type: SET_COUNTRY,
    payload: country
  };
};

export const COUNTRIES_RECEIVED = 'COUNTRIES_RECEIVED';
export const countriesReceived = (countries: string[] = []) => {
  return {
    type: COUNTRIES_RECEIVED,
    payload: countries
  };
};