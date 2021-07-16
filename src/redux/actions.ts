import { ActionTypes } from "./action-types";

interface GetCountriesAction {
    type:ActionTypes.GET_COUNTRIES
}

interface GetCountriesErrorAction {
    type: ActionTypes.GET_COUNTRIES_ERROR,
    payload: string
}

interface CountriesReceivedAction {
    type:ActionTypes.COUNTRIES_RECEIVED,
    payload: []
}


interface SetCountryAction {
    type: ActionTypes.SET_COUNTRY,
    payload: string;
}
export type Action =
    | GetCountriesAction
    | GetCountriesErrorAction
    | CountriesReceivedAction
    | SetCountryAction;
