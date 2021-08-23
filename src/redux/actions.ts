import axios from 'axios';
import { createActions } from 'redux-actions';
/**
 * TODO:
 * - Implement getCountries
 * - Use Axios or fetch to get the countries from `/api/countries.json`
 * - Store the result in the reducer
 */

export const {
    countriesReceived,
    setCountry
} = createActions({
    ['COUNTRIES_RECEIVED']: countries => countries,
    ['SET_COUNTRY'] : country => country
});

export const getCountreis =  () => dispatch => {
    const url = `/api/countries.json`;
    axios.get(url).then(data => {        
        dispatch( countriesReceived(data.data) );
        console.log({data})
    });  
}
/**
 * TODO:
 * - Implement setCountry
 * - Store the country in the reducer
 */
