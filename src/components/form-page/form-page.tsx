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

  const handleDownArrow = (focusedInput, focusedItem) => {
    if (focusedInput) {
      const firstItem = (document.querySelector('li'));
      if (firstItem) {
        firstItem.focus();
      }
    } else if (focusedItem) {
      const nextItem = focusedItem.nextSibling;
      if (nextItem) {
        (nextItem as any).focus();
      }
    }
  }

  const handleUpArrow = (_, focusedItem) => {
    if (focusedItem) {
      const previousItem = focusedItem.previousSibling;
      const input = document.querySelector('input');
        (previousItem || input).focus();
    }
  }

  const handlers = {
    ArrowDown: handleDownArrow,
    ArrowUp: handleUpArrow
  };

  const handleKeyDown = (e) => {
    const focusedInput = document.querySelector('input:focus');
    const focusedItem = document.querySelector('li:focus');
    const handler = handlers[e.key];
    
    if (handler) {
      e.preventDefault();
      handler(focusedInput, focusedItem);
    }
  }

  const onChange = (choice: string) => {
    dispatch(setCountry(choice));
  };

  return (
    <>
      <form className="typeahead-form" onKeyDown={handleKeyDown}>
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
