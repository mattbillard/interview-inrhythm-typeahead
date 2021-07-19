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
  };

  const onClick = (choice: string) => {
    setSearchText(choice);
    setFilteredOptions([]);
    onChange(choice);
  };

  return (
    <div className="typeahead">
      <input
        className="typeahead-input"
        type="text"
        placeholder="start typing..."
        onChange={handleChange}
        value={searchText}
      />
      
      {!!filteredOptions.length && (
      <ul className="typeahead-list">
        {filteredOptions.map((option) => {
          return (
            <li className="typeahead-list-item" key={option} onClick={() => onClick(option)}>
              {option}
            </li>
          );
        })}
      </ul>
      )}
    </div>
  );
};
