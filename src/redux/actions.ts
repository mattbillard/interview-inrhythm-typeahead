import axios from 'axios';

export const COUNTRIES_RECEIVED = 'COUNTRIES_RECEIVED';
export const SET_COUNTRY = 'SET_COUNTRY';

export const getCountries = dispatch => async () => {
    const url = `/api/countries.json`;
    const response = await axios.get(url);
    const countries = response.data;
    dispatch(countriesReceived(countries));
}

export const countriesReceived = (countries: string[]) => ({
    type: COUNTRIES_RECEIVED,
    countries
})

export const setCountry = (country: string) => ({
    type: SET_COUNTRY,
    country
})