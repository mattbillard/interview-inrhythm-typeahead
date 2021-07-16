import React, { useState } from 'react';

import './typeahead.css';

export interface ITypeahead {
  options: string[];
  onChange: (choice: string) => void;
}

export const Typeahead = (props) => {
  const { onChange, options } = props;
  const [searchText, setSearchText] = useState('');
  const [filteredOptions, setFilteredOptions] = useState([]);


  const [listIsVisible, toggleListIsVisible] = useState(false);

  const handleChange = (event) => {
    const text = event.target.value;
    setSearchText(text);
    const filtered = text
      ? options.filter((option) => option.toLowerCase().includes(text.toLowerCase()))
      : [];
    toggleListIsVisible(filtered.length > 0)
    setFilteredOptions(filtered);
  };

  const onClick = (choice: string) => {
    setSearchText(choice);
    setFilteredOptions([]);
    onChange(choice);
    toggleListIsVisible(false);
  };

  return (
    <div className="typeahead">
      <input
        type="text"
        onChange={handleChange}
        placeholder="start typing..."
        value={searchText}
      />
      {listIsVisible &&
        <ul>
          {filteredOptions.map((option) => {
            return (
              <li key={option}>
                <a onClick={() => onClick(option)}>{option}</a>
              </li>
            );
          })}
        </ul>}
    </div>
  );
};
