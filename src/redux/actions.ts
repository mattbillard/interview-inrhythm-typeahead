import axios from 'axios';

export const COUNTRIES_RECEIVED = 'COUNTRIES_RECEIVED';
export const SET_COUNTRY = 'SET_COUNTRY';
/**
 * TODO:
 * - Implement getCountries
 * - Use Axios or fetch to get the countries from `/api/countries.json`
 * - Store the result in the reducer
 */
export const getCountries = () => {
    return async (dispatch) => {
        const url = `/api/countries.json`;
        const response = await axios.get(url);  
        const countries = response.data;
        dispatch({ type: COUNTRIES_RECEIVED, countries });
    }
}

export const setCountry = (country: string) => {
    return {type: SET_COUNTRY, country};
}

/**
 * TODO:
 * - Implement setCountry
 * - Store the country in the reducer
 */
