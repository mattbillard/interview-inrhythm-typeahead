import React, { useState } from 'react';

import './typeahead.css';

import classnames from 'classnames';

const COUNTRY_SEARCH_INPUT_PLACEHOLDER = "start typing...";

export interface ITypeahead {
  options: string[];
  onChange: (choice: string) => void;
}

export const Typeahead = (props) => {
  const { onChange, options } = props;
  const [searchText, setSearchText] = useState('');
  const [filteredOptions, setFilteredOptions] = useState([]);

  const handleChange = (event) => {
    const text = event.target.value;
    setSearchText(text);
    const filtered = text
      ? options.filter((option) => option.toLowerCase().includes(text.toLowerCase()))
      : [];
    setFilteredOptions(filtered);
  };

  const onClick = (choice: string) => {
    setSearchText(choice);
    setFilteredOptions([]);
    onChange(choice);
  };

  const countryListCls = filteredOptions.length ? classnames('countryList') : "";

  return (
    <div className="typeahead">
      <input
        type="text"
        onChange={handleChange}
        value={searchText}
        placeholder={COUNTRY_SEARCH_INPUT_PLACEHOLDER}
      />
      <ul className={countryListCls}>
        {filteredOptions.map((option) => {
          return (
            <li key={option}>
              <a onClick={() => onClick(option)} className="countryListItem">{option}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
