import { Reducer } from 'redux';
import { COUNTRIES_RECEIVED, SET_COUNTRY } from './actions';

export interface ISampleReducerState {
  countries: any;
  country: string;
}

const initialState: ISampleReducerState = {
  countries: [],
  country: '',
};

export const sampleReducer: Reducer<ISampleReducerState> = (state = initialState, action) => {
  switch (action.type) {
    case COUNTRIES_RECEIVED:
      return {
        ...state,
        countries: action.data,
      };

    case SET_COUNTRY:
      return {
        ...state,
        country: action.country,
      };

    default:
      return state;
  }
};
