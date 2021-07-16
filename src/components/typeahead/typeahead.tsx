import React, { useState } from 'react';

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

  const onKeydown = (e, option) => {
    if (e.key === 'Enter') {
      onClick(option)
    }
  }

  return (
    <div className="typeahead">
      <input
        type="text"
        onChange={handleChange}
        value={searchText}
        placeholder="start typing..."
      />
      <ul>
        {filteredOptions.map((option) => {
          return (
            <li
              key={option}
              onClick={() => onClick(option)}
              onKeyDown={(e) => onKeydown(e, option)}
              tabIndex={0}
            >  
              <a>
                {option}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
