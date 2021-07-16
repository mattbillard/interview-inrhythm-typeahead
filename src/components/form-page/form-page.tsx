import './form-page.css';

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Typeahead } from '../typeahead/typeahead';
import { IStoreState } from '../../redux';

export interface IFormPage {}

export const FormPage: React.FC<IFormPage> = (props) => {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState('');

  /**
   * TODO: 
   * This component currently uses setState. We would like to use Redux instead
   * - Please change the useEffect and handleClick methods to dispatch actions instead
   * - Here are two lines you might need
   *    const { country, countries } = useSelector((state: IStoreState) => state.sampleReducer);
   *    const dispatch = useDispatch();
   */

  useEffect(() => {
    (async () => {
      // TODO: move this into actions/redux
      const url = `/api/countries.json`;
      const response = await axios.get(url);  
      setCountries(response.data);  
    })();
  }, []);

  const handleClick = (choice: string) => {
    // TODO: move this into actions/redux
    setCountry(choice);
  };

  return (
    <>
      <form >
        <div className="countryLabel">
        <label>Country: </label>
        </div>
        <Typeahead options={countries} onChange={handleClick} />
        <button type="submit" className="submitBtn">Submit</button>
        <br />
        <br />
        <div className="selectedCountry">
        You chose: {country}
        </div>
      </form>
    </>
  );
};
