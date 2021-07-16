import { Reducer } from 'redux';

/**
 * TODO:
 * - Implement countries as an array of strings
 * - Implement country as a string
 */

export interface ISampleReducerState {
  country: string
  countries: string[] | []
}

const initialState: ISampleReducerState = {
  country: "",
  countries: []
};

export const sampleReducer: Reducer<ISampleReducerState> = (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
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
     case 'SET_COUNTRY':
     console.log(state.country, action, action.payload,  "SET COUNTRY REDUCER")

     return{
       ...state,
       country: action.payload
     }

    default:
      return state;
  }
};
