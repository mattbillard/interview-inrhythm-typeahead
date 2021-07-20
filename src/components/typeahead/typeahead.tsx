import React, { useState } from 'react';

import './typeahead.css';
import axios from "axios";

export interface ITypeahead {
  options: string[];
  onChange: (choice: string) => void;
}

export const Typeahead = (props) => {
  const { onClick } = props;
  const [searchText, setSearchText] = useState('');
  const [countries, setCountries] = useState([]);

  /**
   * TODO:
   * This component currently uses setState. We would like to use Redux instead
   * - Please change the handleChange methods to dispatch actions instead
   * - Here are two lines you might need
   *    const { countries } = useSelector((state: IStoreState) => state.sampleReducer);
   *    const dispatch = useDispatch();
   */

  const handleChange = (event) => {
    const text = event.target.value;
    setSearchText(text);

    (async (q: string) => {
      // TODO: move this into actions/redux
      const url = `http://localhost:3030/api/countries`;
      const response = await axios.get(url, {
        params: {
          q
        }
      });

      setCountries(response.data);
    })(text);
  };

  const handleClick = (choice: string) => {
    setSearchText(choice);
    setCountries([]);
    onClick(choice);
  };

  return (
    <div className="typeahead">
      <input
        type="text"
        onChange={handleChange}
        value={searchText}
      />
      <ul>
        {countries.map((option) => {
          return (
            <li key={option}>
              <a onClick={() => handleClick(option)}>{option}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
