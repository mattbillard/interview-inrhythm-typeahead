import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Typeahead } from '../typeahead/typeahead';

import { setCountry, getCountries } from '../../redux/actions';
import { IStoreState } from '../../redux';

export interface IFormPage { }

export const FormPage: React.FC<IFormPage> = (props) => {

  const dispatch = useDispatch();
  const { country, countries } = useSelector((state: IStoreState) => state.sampleReducer);

  useEffect(() => {
    getCountries(dispatch)();
  }, []);

  const onChange = (choice: string) => {
    dispatch(setCountry(choice));
  };

  return (
    <>
      <form>
        <label>Country: </label>
        <Typeahead options={countries} onChange={onChange} />
        <button style={{
          backgroundColor: '#f36b0a',
          color: '#fff',
          border: 'none',
          padding: '7px 15px',
          borderRadius: '3px'
        }} type="submit">Submit</button>
        <br />
        <br />
        You chose: {country}
      </form>
    </>
  );
};
