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

  const renderList = () => {
    if (filteredOptions.length === 0) {
      return;
    }

    const renderedOptions = filteredOptions.map(option => (
      <li key={option}>
        <a onClick={() => onClick(option)}>{option}</a>
      </li>
    ));

    return <ul>{renderedOptions}</ul>;
  };


  return (
    <div className="typeahead">
      <input
        type="text"
        onChange={handleChange}
        value={searchText}
      />
      {renderList()}
    </div>
  );
};
