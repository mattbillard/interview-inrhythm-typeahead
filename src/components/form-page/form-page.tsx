import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Typeahead } from '../typeahead/typeahead';
import { IStoreState, getCountries, setCountry } from '../../redux';

export interface IFormPage {}

export const FormPage: React.FC<IFormPage> = (props) => {
  const { country, countries } = useSelector((state: IStoreState) => state.sampleReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountries());
  }, []);

  const handleOnChange = (choice: string) => {
    dispatch(setCountry(choice));
  };

  return (
    <>
      <form>
        <label>Country: </label>
        <Typeahead options={countries} onChange={handleOnChange} />
        <button type="submit">Submit</button>
        <br />
        <br />
        You chose: {country}
      </form>
    </>
  );
};
