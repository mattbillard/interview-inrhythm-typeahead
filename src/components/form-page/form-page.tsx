import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Typeahead } from '../typeahead/typeahead';
import { IStoreState } from '../../redux';

export interface IFormPage {}

export const FormPage: React.FC<IFormPage> = (props) => {
  const [country, setCountry] = useState('');

  /**
   * TODO: 
   * This component currently uses setState. We would like to use Redux instead
   * - Please change the onCountryClick methods to dispatch actions instead
   * - Here are two lines you might need
   *    const { country } = useSelector((state: IStoreState) => state.sampleReducer);
   *    const dispatch = useDispatch();
   */

  const onCountryClick = (choice: string) => {
    // TODO: move this into actions/redux
    setCountry(choice);
  };

  return (
    <>
      <form>
        <label>Country: </label>
        <Typeahead onClick={onCountryClick} />
        <button type="submit">Submit</button>
        <br />
        <br />
        You chose: {country}
      </form>
    </>
  );
};
