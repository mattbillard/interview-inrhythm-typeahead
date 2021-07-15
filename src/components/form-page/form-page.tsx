import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Typeahead } from '../typeahead/typeahead';
import { getCountries, IStoreState, setCountry } from '../../redux';

import './form-page.css';

export interface IFormPage {}

export const FormPage: React.FC<IFormPage> = (props) => {
  // const [countries, setCountries] = useState([]);
  // const [country, setCountry] = useState('');
  const dispatch = useDispatch();
  const { country, countries } = useSelector((state: IStoreState) => state.sampleReducer);


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
      dispatch(getCountries());
    })();
  }, []);

  const handleClick = (choice: string) => {
    // TODO: move this into actions/redux
    dispatch(setCountry(choice));
  };

  return (
    <>
      <form>
        <label>Country: </label>
        <Typeahead options={countries} onChange={handleClick} />
        <button className="submit-btn" type="submit">Submit</button>
        <br />
        <br />
        You chose: {country}
      </form>
    </>
  );
};
