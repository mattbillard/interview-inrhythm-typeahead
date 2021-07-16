import { Reducer } from 'redux';
import * as actionTypes from './actionTypes';
/**
 * TODO:
 * - Implement countries as an array of strings
 * - Implement country as a string
 */

export interface ICounryList {
  countryList: Array<string>,
}

type CountryAction = {
  type: string
  country: ICounryList
}

const initialState: ICounryList = {
  countryList: new Array<string>(),
};

export const sampleReducer: Reducer<ICounryList> = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    /**
     * TODO:
     * - Implement case COUNTRIES_RECEIVED
     * - Store the countries in the reducer
     */


    /**
     * TODO:
     * - Implement case SET_COUNTRY
     * - Store the country in the reducer
     */
     case actionTypes.GET_COUNTRIES:
      return {
        ...state,
        countryList: payload,
      }

    default:
      return state;
  }
};

// type DispatchType = (args: CountryAction) => CountryAction


// interface ICounryList {
//   countryList: Array<string>
// }

// type ArticleState = {
//   countryList: ICounryList[]
// }

// type ArticleAction = {
//   type: string
//   article: ICounryList
// }

// type DispatchType = (args: ArticleAction) => ArticleAction