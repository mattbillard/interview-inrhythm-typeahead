import { Reducer } from 'redux';
import { COUNTRIES_RECEIVED,  SET_COUNTRY } from './actions';

export interface ICountryReducerState {
  countries: string[],
  country: string
}

export const initialState: ICountryReducerState = {
  countries: [],
  country: ''
};

export const countriesReducer: Reducer<ICountryReducerState> = (state = initialState, action) => {
  switch (action.type) {
    case COUNTRIES_RECEIVED:
      const { countries } = action;
      return {
        ...state,
        countries
      }
    case SET_COUNTRY:
      const { country } = action;
      return {
        ...state,
        country
      }
    default:
      return state;
  }
};
