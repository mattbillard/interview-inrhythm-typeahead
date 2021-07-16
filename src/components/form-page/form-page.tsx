import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Typeahead } from '../typeahead/typeahead';
import { IStoreState, setCountry, getCountries } from '../../redux';
import './form-page.scss';

export interface IFormPage {}

export const FormPage: React.FC<IFormPage> = (props) => {
  const { countries, country } = useSelector((state: IStoreState) => state);
  const dispatch = useDispatch();

  /**
   * TODO: 
   * This component currently uses setState. We would like to use Redux instead
   * - Please change the useEffect and onChange methods to dispatch actions instead
   * - Here are two lines you might need
   *    const { country, countries } = useSelector((state: IStoreState) => state.sampleReducer);
   *    const dispatch = useDispatch();
   */

  useEffect(() => {
    // TODO: move this into actions/redux
    dispatch(getCountries())
  }, []);

  const onChange = (choice: string) => {
    console.log('chocie: ', choice);
    dispatch(setCountry(choice));
  };

  return (
    <>
      <form className="typeahead-form">
        <label>Country: </label>
        <Typeahead options={countries} onChange={onChange} />
        <button type="submit">Submit</button>
        <br />
        <br />
        You chose: {country}
      </form>
    </>
  );
};
