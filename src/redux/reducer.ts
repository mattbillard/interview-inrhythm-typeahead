import { Reducer } from 'redux';
import { COUNTRIES_RECEIVED, COUNTRY_SELECTED } from './constants'

/**
 * TODO:
 * - Implement countries as an array of strings
 * - Implement country as a string
 */

export interface ISampleReducerState {
  countries: Array<string>;
  country: string;
}

const initialState: ISampleReducerState = {
  countries: [],
  country: ''
};

export const sampleReducer: Reducer<ISampleReducerState> = (state = initialState, action) => {
  switch (action.type) {
    /**
     * TODO:
     * - Implement case COUNTRIES_RECEIVED
     * - Store the countries in the reducer
     */
    case COUNTRIES_RECEIVED: {
      const { countries } = action;
      return { ...state, countries }
    }

    /**
     * TODO:
     * - Implement case SET_COUNTRY
     * - Store the country in the reducer
     */
    case COUNTRY_SELECTED: {
      const { country } = action
      return { ...state, country }
    }


    default:
      return state;
  }
};
