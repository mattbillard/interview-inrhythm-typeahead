import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Typeahead } from '../typeahead/typeahead';
import { IStoreState } from '../../redux';
import { setCountry, getCountreis } from '../../redux/actions';
export interface IFormPage { }

export const FormPage: React.FC<IFormPage> = (props) => {
  // const [countries, setCountries] = useState([]);
  // const [country, setCountry] = useState('');

  /**
   * TODO: 
   * This component currently uses setState. We would like to use Redux instead
   * - Please change the useEffect and onChange methods to dispatch actions instead
   * - Here are two lines you might need
   *    const { country, countries } = useSelector((state: IStoreState) => state.sampleReducer);
   *   
   */
  const { country, countries } = useSelector((state: IStoreState) => state.sampleReducer);
  console.log(countries);
  const dispatch = useDispatch();
  useEffect(() => {
    // (async () => {
    // TODO: move this into actions/redux
    // const url = `/api/countries.json`;
    // const response = await axios.get(url);  
    // setCountries(response.data);  
    // })();
    dispatch(getCountreis());
  }, []);

  const onChange = (choice: string) => {
    // TODO: move this into actions/redux
    // setCountry(choice);
    dispatch(setCountry(choice));
  };

  return (
    <>
      <form>
        <label>Country: </label>
        <Typeahead options={countries ? countries : []} onChange={onChange} />
        <button type="submit">Submit</button>
        <br />
        <br />
        You chose: {country}
      </form>
    </>
  );
};
