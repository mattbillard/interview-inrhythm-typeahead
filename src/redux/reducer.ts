import { Reducer } from 'redux';

import { SET_COUNTRY, COUNTRIES_RECEIVED } from './actions';

/**
 * TODO:
 * - Implement countries as an array of strings
 * - Implement country as a string
 */

export interface ISampleReducerState {
  country: string;
  countries: string[];
}

const initialState: ISampleReducerState = {
  country: '',
  countries: []
};

export const sampleReducer: Reducer<ISampleReducerState> = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    /**
     * TODO:
     * - Implement case COUNTRIES_RECEIVED
     * - Store the countries in the reducer
     */
    case COUNTRIES_RECEIVED: {
      const { payload } = action;
      return {
        ...state,
        countries: payload
      }
    }


    /**
     * TODO:
     * - Implement case SET_COUNTRY
     * - Store the country in the reducer
     */
    case SET_COUNTRY: {
      const { payload } = action;
      return {
        ...state,
        country: payload
      };
    }


    default:
      return state;
  }
};
