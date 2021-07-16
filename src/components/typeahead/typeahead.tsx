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

  const handleChange = (event) => {
    const text = event.target.value;
    setSearchText(text);
    const filtered = text
      ? options.filter((option) => option.toLowerCase().includes(text.toLowerCase()))
      : [];
    setFilteredOptions(filtered);
    onChange('');
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      event.stopPropagation();
      event.preventDefault();

      const choice = filteredOptions[0];
      makeChoice(choice);
    }
  };

  const onClick = (choice: string) => {
    makeChoice(choice);
  };

  const makeChoice = (choice: string) => {
    setSearchText(choice);
    setFilteredOptions([]);
    onChange(choice);
  };

  return (
    <div className="typeahead">
      <input type="text" onChange={handleChange} onKeyPress={handleKeyPress} value={searchText} />
      {searchText && filteredOptions.length > 0 && (
        <ul>
          {filteredOptions.map((option) => {
            return (
              <li key={option}>
                <a onClick={() => onClick(option)}>{option}</a>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};
