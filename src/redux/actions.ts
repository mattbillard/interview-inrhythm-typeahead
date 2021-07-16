import axios from 'axios';
import { actionTypes } from './reducer';

/**
 * TODO:
 * - Implement getCountries
 * - Use Axios or fetch to get the countries from `/api/countries.json`
 * - Store the result in the reducer
 */

export const getCountries = () => async (dispatch) => {
    const url = `/api/countries.json`;
    const response = await axios.get(url);
    dispatch(getCountriesSuccess(response.data));
};

const getCountriesSuccess = countries => ({
    type: actionTypes.GET_COUNTRIES_SUCCESS,
    payload: countries
});

/**
 * TODO:
 * - Implement setCountry
 * - Store the country in the reducer
 */

export const setCountry = country => ({
    type: actionTypes.SET_COUNTRY,
    payload: country
})