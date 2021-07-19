import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getCountries, IStoreState, setCountry } from '../../redux';
import { Typeahead } from '../typeahead/typeahead';

import './form-page.css';

export interface IFormPage {}

export const FormPage: React.FC<IFormPage> = (props) => {
  const dispatch = useDispatch();
  const { countries, country } = useSelector((state: IStoreState) => state.countriesReducer)

  useEffect(() => {
    getCountries(dispatch)();
  }, [dispatch]);

  const onChange = (choice: string) => {
    dispatch(setCountry(choice));
  };

  return (
    <>
      <form id="form">
        <label>Country: </label>
        <Typeahead options={countries} onChange={onChange} />
        <button
          type="button"
          className="submit-button"
          onClick={() => alert("Why am I even here?")}
        >Submit</button>
        <br />
        <br />
        You chose: {country}
      </form>
    </>
  );
};
