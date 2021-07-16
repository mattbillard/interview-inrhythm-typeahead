import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Typeahead } from '../typeahead/typeahead';
import { IStoreState, setCountry } from '../../redux';
export interface IFormPage {}

export const FormPage: React.FC<IFormPage> = (props) => {
  const { country, countries } = useSelector((state: IStoreState) => state.sampleReducer);
  const dispatch = useDispatch();
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
      // setCountries(response.data);
    })();
  }, []);

  const handleClick = (choice: string) => {
    console.log(choice,"choice")
    dispatch(setCountry(choice))

  };

  const handleSubmit = (event: React.FormEvent) =>{
    event.preventDefault()
  }


  console.log(country, "country")
  return (
    <>
      <form onSubmit={(event)=> handleSubmit(event)}>
        <label>Country: </label>
        <Typeahead options={countries} onChange={handleClick} />
        <button type="submit">Submit</button>
        <br />
        <br />
        You chose: {country}
      </form>
    </>
  );
};
