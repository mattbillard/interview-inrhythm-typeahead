import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Typeahead } from '../typeahead/typeahead';
import { getCountries, IStoreState, setCountry } from '../../redux';

import './form-page.css';

export interface IFormPage {}

export const FormPage: React.FC<IFormPage> = (props) => {
  const { country, countries } = useSelector((state: IStoreState) => state.sampleReducer);
  const typeaheadRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();

  useEffect(() => {
    loadCountries();
    setTimeout(() => typeaheadRef.current?.focus());
  }, []);

  const loadCountries = async () => {
    await dispatch(getCountries());
  };

  const handleClick = (choice: string) => {
    dispatch(setCountry(choice));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    alert(`You chose: ${country}`);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Country: </label>
          <Typeahead 
            ref={typeaheadRef} 
            options={countries} 
            onChange={handleClick} 
            value="" 
          />
          <button type="submit">Submit</button>
          <br />
          <br />
          You chose: {country}
        </div>
      </form>
    </>
  );
};
