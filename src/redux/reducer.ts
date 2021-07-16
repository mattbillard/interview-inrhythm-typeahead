import { Reducer } from 'redux';
import {ActionTypes} from "./action-types";

/**
 * TODO:
 * - Implement countries as an array of strings
 * - Implement country as a string
 */

export interface ISampleReducerState {
  country: string | null,
  countries: string[];
}

const initialState: ISampleReducerState = {
  country: null,
  countries: []
};

export const sampleReducer: Reducer<ISampleReducerState> = (state = initialState, action) => {
  switch (action.type) {
    /**
     * TODO:
     * - Implement case COUNTRIES_RECEIVED
     * - Store the countries in the reducer
     */

    case ActionTypes.COUNTRIES_RECEIVED:
      return { ...state, countries: action.payload };

    /**
     * TODO:
     * - Implement case SET_COUNTRY
     * - Store the country in the reducer
     */

    case ActionTypes.SET_COUNTRY:
      return { ...state, country: action.payload };

    default:
      return state;
  }
};
