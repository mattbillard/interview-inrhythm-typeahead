import axios from 'axios';

/**
 * TODO:
 * - Implement getCountries
 * - Use Axios or fetch to get the countries from `/api/countries.json`
 * - Store the result in the reducer
 */

export const getCountries = () => {
    console.log('Calling getCOundoCountries()');
    return (dispatch: any, getState: any) => {
        axios.get('/api/countries.json')
            .then(response => {
                console.log("Api respose: ", response.data)
                dispatch({
                            type: 'COUNTRIES_RECEIVED',
                    countries: response.data
                })
            })
            .catch(error => {
            console.log(error);
            });
    }
}

/**
 * TODO:
 * - Implement setCountry
 * - Store the country in the reducer
 */

 export const setCountry = (country: string) => {
    return {
        type: 'SET_COUNTRY',
        country
    }
}
