import { dataService } from '../services/data-service'
import { COUNTRIES_RECEIVED, COUNTRY_SELECTED } from './constants'

/**
 * TODO:
 * - Implement getCountries
 * - Use Axios or fetch to get the countries from `/api/countries.json`
 * - Store the result in the reducer
 */
export const getCountries = () => async (dispatch: any) => {
   const countries = await dataService() || []
   dispatch({ type: COUNTRIES_RECEIVED, countries })
}

/**
 * TODO:
 * - Implement setCountry
 * - Store the country in the reducer
 */
export const setCountry = (country: string):any => {
  return { type: COUNTRY_SELECTED, country }
}
