import { Reducer } from 'redux';

export const actionTypes = {
  GET_COUNTRIES_SUCCESS: "GET_COUNTRIES_SUCCESS",
  SET_COUNTRY: "SET_COUNTRY"
};

/**
 * TODO:
 * - Implement countries as an array of strings
 * - Implement country as a string
 */

export interface ISampleReducerState {
  countries: string[];
  country: string;
}

const initialState: ISampleReducerState = {
  countries: [],
  country: ''
};

export const app: Reducer<ISampleReducerState> = (state = initialState, action) => {
  switch (action.type) {
    /**
     * TODO:
     * - Implement case GET_COUNTRIES_SUCCESS
     * - Store the countries in the reducer
     */

    case actionTypes.GET_COUNTRIES_SUCCESS:
      return {
        ...state,
        countries: action.payload
      };

    case actionTypes.SET_COUNTRY:
      return {
        ...state,
        country: action.payload
      }


    /**
     * TODO:
     * - Implement case SET_COUNTRY
     * - Store the country in the reducer
     */


    default:
      return state;
  }
};
