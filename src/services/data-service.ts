import axios from 'axios';
import { COUNTRIES_API } from './constants'

export async function dataService():Promise<any> {
  const response = await axios.get(COUNTRIES_API); 
  return response.data
}