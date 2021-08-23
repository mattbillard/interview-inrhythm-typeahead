import { Reducer } from 'redux';

/**
 * TODO:
 * - Implement countries as an array of strings
 * - Implement country as a string
 */

export interface ISampleReducerState {
  countries: string[],
  country: string,
  isLoading: boolean,
  error: string
}

const initialState: ISampleReducerState = {
  countries : [],
  country: '',
  isLoading: false,
  error: ''
};

export const sampleReducer: Reducer<ISampleReducerState> = (state = initialState, action) => {
  switch (action.type) {
    /**
     * TODO:
     * - Implement case COUNTRIES_RECEIVED
     * - Store the countries in the reducer
     */
    case 'COUNTRIES_RECEIVED' : 
        return {
          ...state,
          countries: action.countries
        }
    case 'SET_COUNTRY' :
        return {
          ...state,
          country: action.country
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
