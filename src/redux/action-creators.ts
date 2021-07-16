import axios from 'axios';
import { Dispatch } from "redux";
import { ActionTypes } from "./action-types";
import { Action } from "./actions";

/**
 * TODO:
 * - Implement getCountries
 * - Use Axios or fetch to get the countries from `/api/countries.json`
 * - Store the result in the reducer
 */

export const getCountries = () => {
    return async (dispatch: Dispatch<Action>) => {
        dispatch( {
            type: ActionTypes.GET_COUNTRIES
        });

        try {
            const { data } = await axios.get('api/countries.json');

            dispatch<any>( {
                type: ActionTypes.COUNTRIES_RECEIVED,
                payload: data
            });

        } catch (err) {
            dispatch( {
                type: ActionTypes.GET_COUNTRIES_ERROR,
                payload: err.message
            });
        }
    }
}

/**
 * TODO:
 * - Implement setCountry
 * - Store the country in the reducer
 */

export const setCountry = (country: string) => {
    console.log('holler setCountry', country);
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionTypes.SET_COUNTRY,
            payload: country
        });
    };
}