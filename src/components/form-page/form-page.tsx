import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Typeahead } from '../typeahead/typeahead';
import { IStoreState } from '../../redux';
import { setCountry, getCountries } from '../../redux';
import './form-page.css';

export interface IFormPage {}

export const FormPage: React.FC<IFormPage> = (props) => {
  const {countries, country} = useSelector((state: IStoreState) => state.sampleReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountries());
  }, []);

  const onChange = (choice: string) => {
    dispatch(setCountry(choice));
  };

  return (
    <>
      <form>
        <label>Country: </label>
        <Typeahead options={countries} onChange={onChange} />
        <button type="submit" className='submit-btn'>Submit</button>
        <br />
        <br />
        You chose: {country}
      </form>
    </>
  );
};
