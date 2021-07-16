import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useActions } from "../../hooks/useActions";
import { Typeahead } from '../typeahead/typeahead';
import { IStoreState } from '../../redux';

import './form-page.css';

export interface IFormPage {}

export const FormPage: React.FC<IFormPage> = (props) => {
  // const [countries, setCountries] = useState([]);
  // const [country, setCountry] = useState('');
  const { getCountries, setCountry } = useActions();

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
      // const url = `/api/countries.json`;
      // const response = await axios.get(url);
      // setCountries(response.data);
      getCountries();
    })();
  }, []);

  const handleClick = (choice: string) => {
    // TODO: move this into actions/redux
    setCountry(choice);
  };

  const { country, countries } = useTypedSelector((state: IStoreState) => state.sampleReducer);
  return (
    <>
      <form>
        <label>Country: </label>
        <Typeahead options={countries} onChange={handleClick} />
        <button className="submit" type="submit">Submit</button>
        <br />
        <br />
        You chose: {country}
      </form>
    </>
  );
};
