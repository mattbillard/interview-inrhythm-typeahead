import axios from 'axios';

export const COUNTRIES_RECEIVED = 'COUNTRIES_RECEIVED';
export const SET_COUNTRY = 'SET_COUNTRY';

export const getCountries = () => async (dispatch) => {
  const url = `/api/countries.json`;
  const response = await axios.get(url);
  dispatch({ type: COUNTRIES_RECEIVED, data: response.data });
};

export const setCountry = (country: string) => {
  return { type: SET_COUNTRY, country };
};
